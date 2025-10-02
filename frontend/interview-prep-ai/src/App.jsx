import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Home/Dashboard";
import InterviewPrep from "./pages/InterviewPrep/InterviewPrep";
import UserProvider from './context/userContext';
import ProtectedRoute from './components/ProtectedRoute';
import { UserContext } from './context/userContext';

const AppContent = () => {
  const { user, loading } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log("AppContent useEffect: loading =", loading, "user =", user, "pathname =", location.pathname);
    if (!loading && user && location.pathname === "/") {
      console.log("Redirecting to /dashboard");
      navigate("/dashboard");
    }
  }, [user, loading, navigate, location]);

  return (
    <Routes>
      {/* Default Route */}
      <Route path="/" element={<LandingPage />} />

      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/interview-prep/:sessionId" element={<ProtectedRoute><InterviewPrep /></ProtectedRoute>} />
    </Routes>
  );
};

const App = () => {
  return (
    <UserProvider>
      <div>
        <Router>
          <AppContent />
        </Router>

        <Toaster
          toastOptions={{
            className: "",
            style: {
              fontSize: "13px",
            },
          }}
        />
      </div>
    </UserProvider>
  )
}

export default App
