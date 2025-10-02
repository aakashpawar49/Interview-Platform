import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(UserContext);

  console.log("ProtectedRoute: loading =", loading, "user =", user);

  if (loading) {
    // Optionally, show a loading spinner or placeholder
    return <div>Loading...</div>;
  }

  if (!user) {
    console.log("ProtectedRoute: No user, redirecting to /");
    return <Navigate to="/" replace />;
  }

  console.log("ProtectedRoute: User authenticated, rendering children");
  return children;
};

export default ProtectedRoute;
