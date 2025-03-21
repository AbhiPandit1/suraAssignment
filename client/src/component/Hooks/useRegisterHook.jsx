import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../ContextFunctions/AuthContext';

const useRegisterHook = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const registerUser = async (formData) => {
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      const response = await fetch(`http://localhost:4000/api/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message);

      // Store token in localStorage
      login(data.token);

      setSuccess('Login successful!');

      setSuccess('Account created successfully! Redirecting...');
      setTimeout(() => navigate('/home'), 2000); // Redirect to home page
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { registerUser, error, success, loading };
};

export default useRegisterHook;
