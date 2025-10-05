
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


## 🤖 Screenshots

# Dashboard
<img width="1768" height="976" alt="image" src="https://github.com/user-attachments/assets/a9915c36-faa3-4d88-bbd5-0a3a8c2af33a" />


# Explanation
<img width="857" height="601" alt="exp" src="https://github.com/user-attachments/assets/a8d9d99d-c73b-4ce4-8fc2-75046b4e4bad" />


# Pin Questions
<img width="841" height="655" alt="code" src="https://github.com/user-attachments/assets/29c7f5e1-e467-4189-95c1-4dafc3c5f6a9" />




## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/interview-prep-ai.git
cd interview-prep-ai

```

## 2️⃣ Setup the Backend
```
cd backend
npm install
npm start
```

## 3️⃣ Setup the Frontend
```
cd ../frontend/interview-prep-ai
npm install
npm start
```
```
Frontend: http://localhost:5173
Backend: http://localhost:8000
```

## 🚀 Future Enhancements

- 🗂️ Category-based filtering (e.g., DSA, System Design, DBMS)
- 🎤 AI Voice Interview Mode
- 📊 Performance analytics dashboard
- 🧑‍🏫 Personalized learning path suggestions
- 🌐 Multi-language support
