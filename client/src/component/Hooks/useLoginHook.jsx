import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../ContextFunctions/AuthContext';

const useLoginHook = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth(); // Access the login function from the context
  const backend = import.meta.env.VITE_BACKEND_URL; // Get the backend URL from environment variables

  const loginUser = async (formData) => {
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      const response = await fetch(`${backend}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed. Please try again.');
      }

      if (!data.token) {
        throw new Error('Authentication token not received.');
      }

      // Call login function from context to store token
      login(data.token);

      setSuccess('Login successful!');
      setTimeout(() => {
        navigate('/'); // Redirect to home or dashboard immediately after login
      }, 2000);
    } catch (error) {
      setError(error.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return { loginUser, error, success, loading };
};

export default useLoginHook;
