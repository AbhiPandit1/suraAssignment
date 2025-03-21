import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons
import useLoginHook from '../Hooks/useLoginHook';

const LoginComponent1 = () => {
  const { loginUser, error, success, loading } = useLoginHook();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

  console.log(formData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(formData);
  };

  return (
    <div className="flex flex-col items-center min-h-screen py-10">
      {/* Heading Section */}
      <div className="py-20 px-6 bg-[#F4F4F4] text-center w-full">
        <h1 className="text-2xl font-semibold sm:text-4xl sm:font-extrabold text-[#1C1D20] leading-tight">
          Features and Services
        </h1>
        <div className="mt-4 text-sm sm:text-base text-gray-700">
          <Link to="/" className="hover:text-green-600 transition duration-200">
            Home
          </Link>
          <span className="mx-2 text-gray-500"> &gt; </span>
          <Link
            to="/login"
            className="text-green-400 hover:text-green-600 transition duration-200"
            aria-label="Go to Login page"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Login Form */}
      <div className="mt-5 p-8 rounded-lg shadow-lg w-4/5 max-w-md border-2 border-gray-300">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Login
        </h2>

        {/* Error & Success Messages */}
        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}

        <form onSubmit={handleSubmit}>
          {/* Username/Email */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password with Eye Icon */}
          <div className="mb-4 relative">
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                required
              />
              {/* Toggle Password Visibility Button */}
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
          </div>

          {/* Remember Me + Login Button */}
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-gray-700 text-sm">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <button
              type="submit"
              className="border border-gray-600 text-gray-600 px-5 py-2 rounded-xl hover:bg-gray-600 hover:text-white transition"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Log in'}
            </button>
          </div>
        </form>

        {/* Sign In Link */}
        <div className="text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/signin" className="text-green-600 hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent1;
