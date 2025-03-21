import React from 'react';
import { Link } from 'react-router-dom';

const SignUpComponent = () => {
  return (
    <div className="flex flex-col items-center min-h-screen py-10">
      {/* Heading Section */}
      <div className="py-20 px-6 bg-[#F4F4F4] text-center w-full">
        <h1 className="text-2xl font-semibold sm:text-4xl sm:font-extrabold text-[#1C1D20] leading-tight">
          Create an Account
        </h1>
        <div className="mt-4 text-sm sm:text-base text-gray-700">
          <Link to="/" className="hover:text-green-600 transition duration-200">
            Home
          </Link>
          <span className="mx-2 text-gray-500"> &gt; </span>
          <Link
            to="/signin"
            className="text-green-400 hover:text-green-600 transition duration-200"
            aria-label="Go to Sign Up page"
          >
            Sign In
          </Link>
        </div>
      </div>

      {/* Sign Up Form */}
      <div className="mt-5 p-8 rounded-lg shadow-lg w-4/5 max-w-md border-2 border-gray-300">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Sign Up
        </h2>

        {/* Username */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Username <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Sign Up Button */}
        <button className="w-full border border-gray-600 text-gray-600 px-5 py-2 rounded-xl hover:bg-gray-600 hover:text-white transition">
          Sign Up
        </button>

        {/* Already have an account? */}
        <div className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-green-600 hover:underline">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpComponent;
