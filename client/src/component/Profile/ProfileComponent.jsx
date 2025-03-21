import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProfileComponent = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    password: '********',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

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

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={!isEditing}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={!isEditing}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={profile.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={!isEditing}
          />
        </div>

        <button
          onClick={handleEdit}
          className="w-full border border-gray-600 text-gray-600 px-5 py-2 rounded-xl hover:bg-gray-600 hover:text-white transition"
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>
    </div>
  );
};

export default ProfileComponent;
