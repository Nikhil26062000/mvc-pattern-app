// contexts/AuthContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Initialize auth state from localStorage if available
  const [authState, setAuthState] = useState(() => {
    const storedState = localStorage.getItem('authState');
    return storedState ? JSON.parse(storedState) : { isAuthenticated: false, role: null };
  });

  // Function to log in (update this with real login logic)
  const login = (role) => {
    const newState = { isAuthenticated: true, role };
    setAuthState(newState);
    localStorage.setItem('authState', JSON.stringify(newState)); // Persist state to localStorage
  };

  // Function to log out
  const logout = () => {
    const newState = { isAuthenticated: false, role: null };
    setAuthState(newState);
    localStorage.removeItem('authState'); // Clear state from localStorage
  };

  useEffect(() => {
    // Listen for changes in auth state
    const storedState = localStorage.getItem('authState');
    if (storedState) {
      setAuthState(JSON.parse(storedState));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
