import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { authState } = useAuth();
  const { isAuthenticated, role } = authState;

  // 1. Check if the user is authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // 2. Check if the user's role is allowed
  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/not-authorized" />;
  }

  // 3. Render children if authenticated and authorized
  return children;
};

export default ProtectedRoute;
