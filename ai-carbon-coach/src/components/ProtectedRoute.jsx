import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    // If no token, redirect to the landing/login page
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
