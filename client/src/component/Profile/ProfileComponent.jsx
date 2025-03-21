import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useProfile from '../Hooks/useProfileHook';

const ProfileComponent = () => {
  const { profile, loading, error, updateProfile } = useProfile();
  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false); // State for toggling password change form
  const [updatedProfile, setUpdatedProfile] = useState({
    username: '',
    email: '',
    password: '', // Old password for validation
    newPassword: '', // New password
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // New state to manage button loading
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (profile) {
      setUpdatedProfile({
        username: profile.username || '',
        email: profile.email || '',
        password: '', // Keep old password empty initially
        newPassword: '', // Keep new password empty initially
      });
    }
  }, [profile]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile((prev) => ({ ...prev, [name]: value }));
  };

  // Toggle edit mode and save changes
  const handleEdit = async () => {
    if (isEditing) {
      if (isChangingPassword) {
        if (!updatedProfile.password) {
          setErrorMessage('Old password is required to update.');
          return;
        }
        if (!updatedProfile.newPassword) {
          setErrorMessage('New password is required.');
          return;
        }
      }

      setIsSubmitting(true); // Set loading state when submitting
      const result = await updateProfile(updatedProfile);
      setIsSubmitting(false); // Reset loading state after submission
      if (!result.success) {
        setErrorMessage(result.message); // Show error if update fails
        return;
      }
      setSuccessMessage('Profile updated successfully!'); // Set success message
    }
    setIsEditing(!isEditing);
    setErrorMessage(''); // Clear any previous errors when toggling edit mode
  };

  const handleChangePasswordToggle = () => {
    setIsChangingPassword(!isChangingPassword); // Toggle password change form
  };

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="flex flex-col items-center min-h-screen py-10">
      {/* Heading Section */}
      <div className="py-20 px-6 bg-[#F4F4F4] text-center w-full">
        <h1 className="text-2xl font-semibold sm:text-4xl sm:font-extrabold text-[#1C1D20] leading-tight">
          Profile
        </h1>
        <div className="mt-4 text-sm sm:text-base text-gray-700">
          <Link to="/" className="hover:text-green-600 transition duration-200">
            Home
          </Link>
          <span className="mx-2 text-gray-500"> &gt; </span>
          <Link
            to="/profile"
            className="text-green-400 hover:text-green-600 transition duration-200"
            aria-label="Go to Profile page"
          >
            Profile
          </Link>
        </div>
      </div>

      {/* Profile Form */}
      <div className="mt-5 p-8 rounded-lg shadow-lg w-4/5 max-w-md border-2 border-gray-300">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Profile Information
        </h2>

        {/* Username */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={updatedProfile.username}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            disabled={!isEditing || isChangingPassword} // Disable if not editing or changing password
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={updatedProfile.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            disabled={!isEditing || isChangingPassword} // Disable if not editing or changing password
          />
        </div>

        {/* Change Password Button */}
        {!isChangingPassword && isEditing && (
          <button
            onClick={handleChangePasswordToggle}
            className="text-green-500 hover:text-green-700 mt-4"
          >
            Change Password
          </button>
        )}

        {/* Old Password (only if changing password) */}
        {isChangingPassword && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Old Password
            </label>
            <input
              type="password"
              name="password"
              value={updatedProfile.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        )}

        {/* New Password (only if changing password) */}
        {isChangingPassword && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">
              New Password
            </label>
            <input
              type="password"
              name="newPassword"
              value={updatedProfile.newPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        )}

        {errorMessage && (
          <div className="text-red-500 text-center mt-4">{errorMessage}</div>
        )}

        {successMessage && (
          <div className="text-green-500 text-center mt-4">
            {successMessage}
          </div>
        )}

        <button
          onClick={handleEdit}
          className={`w-full border border-gray-600 text-gray-600 px-5 py-2 rounded-xl hover:bg-gray-600 hover:text-white transition ${
            isSubmitting ? 'bg-gray-400 cursor-not-allowed' : ''
          }`}
          disabled={isSubmitting} // Disable the button while submitting
        >
          {isSubmitting ? 'Saving...' : isEditing ? 'Save' : 'Edit'}
        </button>
      </div>
    </div>
  );
};

export default ProfileComponent;
