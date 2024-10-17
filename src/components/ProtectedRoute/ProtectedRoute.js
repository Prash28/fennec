import React from 'react';
import { Navigate } from 'react-router-dom';

// Mock authentication function (replace with real authentication check)
const isAuthenticated = () => {
  return !!localStorage.getItem('userToken'); // Example: check if token exists
};

function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    // Redirect to login page if not authenticated
    return <Navigate to="/login" replace />;
  }
  
  // Render the protected component if authenticated
  return children;
}

export default ProtectedRoute;