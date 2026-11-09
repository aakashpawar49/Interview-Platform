
# 🧠 AI Interview Preparation App

### MERN Stack + Gemini API
- A full-stack, AI-powered Interview Preparation App built using the MERN stack — MongoDB, Express.js, React.js, Node.js — integrated with Gemini API for smart and personalized Q&A generation.

This app allows users to:
- ✅ Generate tailored interview questions and AI-powered answers
- ✅ Receive instant concept explanations
- ✅ Pin important questions
- ✅ Track sessions with clean UI/UX

## 🚀 Key Features

- 🔐 User Authentication
JWT-based secure registration and login.
- 🎯 Role-Based Interview Sessions
Questions generated based on selected job role and experience level.
- 🤖 AI-Powered Q&A Generation
Uses Gemini API to auto-generate technical questions and answers.
- 📚 Dynamic AI Explanations
Get on-demand, AI-generated explanations for tricky concepts.
- 📌 Pinning Important Questions
Easily pin key questions for quick future reference.
- 🧩 Accordion Learning UI
Expandable Q&A display for a clean and focused learning flow.

## 🧠 How It Works

- User logs in or signs up using JWT authentication.
- User selects a job role and experience level.
- The app sends a request to the Gemini API for generating tailored questions.
- AI-generated questions and answers are displayed in an accordion-style interface.
- Users can pin, unpin, and request explanations dynamically.
- Sessions are saved to MongoDB for future access.

## 🛠️ Tech Stack

| Layer                        | Tech                                   |
|------------------------------|----------------------------------------|
| Frontend                     | React.js, Tailwind CSS                 |
| Backend                      | Node.js, Express.js                    |
| Database                     | MongoDB                                |
| AI API                       | Gemini API (for Q&A + Explanations)    |

## 📊 Database Design

The application uses MongoDB with Mongoose for schema definition. Below are the key models:

### User Model
- **name**: String (required) - User's full name
- **email**: String (required, unique) - User's email address
- **password**: String (required) - Hashed password
- **profileImageUrl**: String (optional) - URL to user's profile image
- **timestamps**: Automatically added createdAt and updatedAt fields

### Session Model
- **user**: ObjectId (ref: "User") - Reference to the user who created the session
- **role**: String (required) - Job role for the interview (e.g., "Software Engineer")
- **experience**: String (required) - Experience level (e.g., "Junior", "Senior")
- **topicsToFocus**: String (required) - Key topics to focus on
- **description**: String (optional) - Additional description
- **questions**: Array of ObjectId (ref: "Question") - References to questions in this session
- **timestamps**: Automatically added createdAt and updatedAt fields

### Question Model
- **session**: ObjectId (ref: "Session") - Reference to the session this question belongs to
- **question**: String - The interview question text
- **answer**: String - The AI-generated answer
- **note**: String (optional) - Additional notes
- **isPinned**: Boolean (default: false) - Whether the question is pinned by the user
- **timestamps**: Automatically added createdAt and updatedAt fields

## 📁 Folder Structure

```
interview-platform/
├── .gitignore
├── README.md
├── SECURITY.md
├── backend/
│   ├── .env.example
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   ├── server.js
│   ├── vercel.json
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── aiController.js
│   │   ├── authController.js
│   │   ├── questionController.js
│   │   └── sessionController.js
│   ├── middlewares/
│   │   ├── authMiddleware.js
│   │   └── uploadMiddleware.js
│   ├── models/
│   │   ├── Question.js
│   │   ├── Session.js
│   │   └── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── questionRoutes.js
│   │   └── sessionRoutes.js
│   ├── uploads/            # profile images (created automatically)
│   └── utils/
│       └── prompts.js
└── frontend/
    └── interview-prep-ai/
        ├── .env.example
        ├── .gitignore
        ├── eslint.config.js
        ├── index.html
        ├── package-lock.json
        ├── package.json
        ├── README.md
        ├── vercel.json
        ├── vite.config.js
        ├── public/
        │   └── vite.svg
        └── src/
            ├── App.jsx
            ├── index.css
            ├── main.jsx
            ├── assets/
            │   └── hero-img.png
            ├── components/
            │   ├── DeleteAlertContent.jsx
            │   ├── Drawer.jsx
            │   ├── Modal.jsx
            │   ├── ProtectedRoute.jsx
            │   ├── Cards/
            │   │   ├── ProfileInfoCard.jsx
            │   │   ├── QuestionCard.jsx
            │   │   └── SummaryCard.jsx
            │   ├── Inputs/
            │   │   ├── Input.jsx
            │   │   └── ProfilePhotoSelector.jsx
            │   ├── layouts/
            │   │   ├── DashboardLayout.jsx
            │   │   ├── Footer.jsx
            │   │   └── Navbar.jsx
            │   └── Loader/
            │       ├── SkeletonLoader.jsx
            │       └── SpinnerLoader.jsx
            ├── context/
            │   └── userContext.jsx
            ├── pages/
            │   ├── LandingPage.jsx
            │   ├── Auth/
            │   │   ├── Login.jsx
            │   │   └── SignUp.jsx
            │   ├── Home/
            │   │   ├── CreateSessionForm.jsx
            │   │   └── Dashboard.jsx
            │   └── InterviewPrep/
            │       ├── InterviewPrep.jsx
            │       └── components/
            │           ├── AIResponsePreview.jsx
            │           └── RoleInfoHeader.jsx
            └── utils/
                ├── apiPaths.js
                ├── axiosInstance.js
                ├── data.js
                ├── helper.js
                └── uploadImage.js
```

## ⚛️ Major React Hooks and Functions

The application extensively uses React hooks for state management, side effects, and context. Below are the key hooks and their usage:

### useState
- **Purpose**: Manages local component state.
- **Usage in Project**:
  - `LandingPage.jsx`: Manages modal open state (`openAuthModal`), current page (`currentPage`).
  - `InterviewPrep.jsx`: Manages session data (`sessionData`), error messages (`errorMsg`), drawer state (`openLeanMoreDrawer`), explanations (`explanation`), loading states (`isLoading`, `isUpdateLoader`).
  - `Dashboard.jsx`: Manages modal states (`openCreateModal`), sessions list (`session`), delete alert state (`openDeleteAlert`).
  - `CreateSessionForm.jsx`: Manages form data (`formData`), loading state (`isLoading`), errors (`error`).
  - `SignUp.jsx` & `Login.jsx`: Manages form inputs (email, password, etc.), profile picture, errors.
  - `userContext.jsx`: Manages user data (`user`) and loading state (`loading`).
  - `ProfilePhotoSelector.jsx`: Manages preview URL (`previewUrl`).
  - `Input.jsx`: Manages password visibility (`showPassword`).
  - `QuestionCard.jsx`: Manages expansion state (`isExpanded`), content height (`height`).
  - `AIResponsePreview.jsx`: Manages copy state (`copied`).

### useEffect
- **Purpose**: Handles side effects like data fetching, subscriptions, or DOM manipulations.
- **Usage in Project**:
  - `InterviewPrep.jsx`: Fetches session details when `sessionId` changes.
  - `Dashboard.jsx`: Fetches all sessions on component mount.
  - `userContext.jsx`: Checks for authentication token and fetches user profile on mount.
  - `QuestionCard.jsx`: Calculates content height when expansion state changes.
  - `App.jsx`: Handles navigation based on user authentication and loading state.
  - `LandingPage.jsx`: Likely for initialization or side effects (imported but usage not shown in snippet).

### useContext
- **Purpose**: Consumes context values without prop drilling.
- **Usage in Project**:
  - `LandingPage.jsx`: Accesses user context for authentication state.
  - `SignUp.jsx` & `Login.jsx`: Accesses user context to update user data after authentication.
  - `App.jsx`: Accesses user context for routing logic.

### useRef
- **Purpose**: Creates mutable references that persist across renders.
- **Usage in Project**:
  - `ProfilePhotoSelector.jsx`: References file input element (`inputRef`).
  - `QuestionCard.jsx`: References content div for height calculation (`contentRef`).

### useParams
- **Purpose**: Extracts route parameters from the URL.
- **Usage in Project**:
  - `InterviewPrep.jsx`: Extracts `sessionId` from the route to fetch specific session data.

### useNavigate
- **Purpose**: Programmatically navigate between routes.
- **Usage in Project**:
  - `Dashboard.jsx`: Navigates to interview prep page when a session is selected.
  - `CreateSessionForm.jsx`: Navigates after successful session creation.
  - `SignUp.jsx` & `Login.jsx`: Navigates to dashboard after authentication.

### Custom Hooks (if any)
- The project primarily uses built-in React hooks. No custom hooks are defined in the provided codebase.

*Note: The task mentioned ".NET functions," but this project is built with the MERN stack (MongoDB, Express.js, React.js, Node.js). There are no .NET components in the codebase.*

## 🤖 Screenshots

# Dashboard
<img width="1768" height="976" alt="image" src="https://github.com/user-attachments/assets/a9915c36-faa3-4d88-bbd5-0a3a8c2af33a" />

# Explanation
<img width="857" height="601" alt="exp" src="https://github.com/user-attachments/assets/a8d9d99d-c73b-4ce4-8fc2-75046b4e4bad" />

# Pin Questions
<img width="841" height="655" alt="code" src="https://github.com/user-attachments/assets/29c7f5e1-e467-4189-95c1-4dafc3c5f6a9" />

## ⚙️ Installation & Setup

### Prerequisites
- Node.js 20.19+ or 22.12+ (required by Vite 7)
- A MongoDB database (local install or a free MongoDB Atlas cluster)
- A Google Gemini API key from https://aistudio.google.com/apikey

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/interview-prep-ai.git
cd interview-prep-ai
```

### 2️⃣ Setup the Backend
```bash
cd backend
npm install
cp .env.example .env   # then edit .env with your own values
npm run dev            # or: npm start
```

| Variable         | Required | Description                                                        |
|------------------|----------|--------------------------------------------------------------------|
| `PORT`           | No       | Port for the API server (default `8000`)                           |
| `MONGO_URI`      | Yes      | MongoDB connection string                                          |
| `JWT_SECRET`     | Yes      | Long random string used to sign login tokens                       |
| `GEMINI_API_KEY` | Yes      | Google Gemini API key                                              |
| `GEMINI_MODEL`   | No       | Gemini model name (default `gemini-3.1-flash-lite`)                |
| `CLIENT_URL`     | No       | Comma-separated allowed CORS origins (empty = allow all)           |

The server stops at startup with a clear message if a required variable is missing.

### 3️⃣ Setup the Frontend
Open a second terminal from the project root:
```bash
cd frontend/interview-prep-ai
npm install
cp .env.example .env   # points the app at http://localhost:8000
npm run dev
```

| Variable            | Required | Description                                                                  |
|---------------------|----------|------------------------------------------------------------------------------|
| `VITE_API_BASE_URL` | No       | Backend URL, no trailing slash. Defaults to `http://localhost:8000` in dev and to the same origin in production builds |

```
Frontend: http://localhost:5173
Backend:  http://localhost:8000
```

> On Windows (Command Prompt / PowerShell) use `copy .env.example .env` instead of `cp`.

### 4️⃣ Production (single server, optional)
Build the frontend, then start the backend. The backend serves the built app from `frontend/interview-prep-ai/dist` on the same port:
```bash
cd frontend/interview-prep-ai && npm run build
cd ../../backend && npm start
```
For split deployments (e.g. frontend and backend as separate Vercel projects), set `VITE_API_BASE_URL` on the frontend to the backend URL and `CLIENT_URL` on the backend to the frontend URL.

## 🚀 Future Enhancements

- 🗂️ Category-based filtering (e.g., DSA, System Design, DBMS)
- 🎤 AI Voice Interview Mode
- 📊 Performance analytics dashboard
- 🧑‍🏫 Personalized learning path suggestions
- 🌐 Multi-language support
