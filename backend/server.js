const path = require("path");
const fs = require("fs");

// Load backend/.env regardless of the directory the server is started from
require("dotenv").config({ path: path.join(__dirname, ".env") });

// Fail fast with a clear message when required configuration is missing
const REQUIRED_ENV = ["MONGO_URI", "JWT_SECRET", "GEMINI_API_KEY"];
const missingEnv = REQUIRED_ENV.filter((key) => !process.env[key]);
if (missingEnv.length > 0) {
  console.error(
    `Missing required environment variables: ${missingEnv.join(", ")}.\n` +
      "Copy backend/.env.example to backend/.env and fill in the values."
  );
  process.exit(1);
}

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const sessionRoutes = require("./routes/sessionRoutes");
const questionRoutes = require("./routes/questionRoutes");
const { protect } = require("./middlewares/authMiddleware");
const { generateInterviewQuestions, generateConceptExplanation } = require("./controllers/aiController");

const app = express();

// Respect X-Forwarded-* headers from hosting proxies (correct https upload URLs)
app.set("trust proxy", 1);

// Middleware to handle CORS (CLIENT_URL is an optional comma-separated allow-list)
const allowedOrigins = (process.env.CLIENT_URL || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins.length > 0 ? allowedOrigins : "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/sessions", sessionRoutes);
app.use("/api/questions", questionRoutes);

app.post("/api/ai/generate-questions", protect, generateInterviewQuestions);
app.post("/api/ai/generate-explanation", protect, generateConceptExplanation);

// Serve uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Serve the built frontend (frontend/interview-prep-ai/dist) when it exists
const frontendDist = path.join(__dirname, "../frontend/interview-prep-ai/dist");
const frontendIndex = path.join(frontendDist, "index.html");
const hasFrontendBuild = fs.existsSync(frontendIndex);

if (hasFrontendBuild) {
  app.use(express.static(frontendDist));
}

// Catch-all: unknown API routes get 404, everything else gets the SPA
app.get("*", (req, res) => {
  if (req.path.startsWith("/api")) {
    return res.status(404).json({ message: "API route not found" });
  }
  if (!hasFrontendBuild) {
    return res
      .status(200)
      .send("Interview Prep AI API is running. Start the frontend with `npm run dev` in frontend/interview-prep-ai.");
  }
  res.sendFile(frontendIndex);
});

// Start Server (Vercel invokes the exported app instead of listening)
const PORT = process.env.PORT || 8000;
if (!process.env.VERCEL) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
