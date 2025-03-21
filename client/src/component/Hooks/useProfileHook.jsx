import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../ContextFunctions/AuthContext';

const useProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true); // Renamed to avoid conflict
  const [error, setError] = useState(null);
  const { token } = useAuth(); // Get token from context
  console.log(token);

  // Fetch Profile Data
  const fetchProfile = async () => {
    if (!token) return; // Avoid API call if no token is available
    try {
      const response = await axios.get('http://localhost:4000/api/profile', {
        headers: {
          Authorization: `Bearer ${token}`, // Send the token as Bearer in Authorization header
        },
      });
      setProfile(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Error fetching profile');
    } finally {
      setLoading(false);
    }
  };

  // Update Profile Data
  const updateProfile = async (updatedProfile) => {
    if (!token) return { success: false, message: 'No token found' }; // Handle no token case
    try {
      const response = await axios.put(
        'http://localhost:4000/api/profile/update',
        updatedProfile,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send the token as Bearer in Authorization header
          },
        }
      );
      setProfile(response.data); // Update profile state with new data
      return { success: true, message: 'Profile updated successfully' };
    } catch (err) {
      return {
        success: false,
        message: err.response?.data?.message || 'Error updating profile',
      };
    }
  };

  useEffect(() => {
    if (token) {
      fetchProfile(); // Fetch profile only if token is available
    }
  }, [token]); // Run the effect when the token changes or is first available

  return { profile, loading, error, updateProfile };
};

export default useProfile;
