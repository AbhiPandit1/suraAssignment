import React, { createContext, useState, useEffect, useContext } from 'react';

// Create AuthContext
const AuthContext = createContext();

// AuthProvider component to wrap the app and provide context to components
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null); // Token state
  const [loading, setLoading] = useState(true); // Loading state to track initialization

  // Load token from localStorage on initial load
  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      setToken(savedToken); // Set token from localStorage if available
    }
    setLoading(false); // Set loading to false after checking localStorage
  }, []);

  // Function to login and store token
  const login = (token) => {
    localStorage.setItem('token', token); // Store token in localStorage
    setToken(token); // Update the token in state
  };

  // Function to logout
  const logout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    setToken(null); // Set token to null in state
  };

  return (
    <AuthContext.Provider value={{ token, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
