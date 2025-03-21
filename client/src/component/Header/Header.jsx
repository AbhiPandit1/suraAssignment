import React, { useState } from 'react';
import { IoMenu, IoPersonOutline, IoLogOutOutline } from 'react-icons/io5';
import Logo from './Logo';
import Nav from './Nav';
import PersonalButton from '../Button/PersonalButton';
import MobileHeader from './MobileHeader';
import CustomCursor from '../ContextFunctions/CustomCursor';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../ContextFunctions/AuthContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { token, loading, logout } = useAuth(); // Access token and logout function from context
  const navigate = useNavigate();

  // Handle logout
  const handleLogout = () => {
    logout(); // Use logout function from context
    navigate('/login'); // Redirect to login page
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading state if context is still loading
  }

  return (
    <header className="flex items-center justify-between h-20 px-6 md:px-20 bg-white relative">
      {/* Custom Cursor - Global Cursor */}
      <CustomCursor />

      <div className="flex items-center gap-12">
        <Logo />
        <nav className="hidden md:block">
          <Nav />
        </nav>
      </div>

      {/* Right Section - Buttons & Burger Menu */}
      <div className="flex items-center gap-4">
        {/* Buttons - Visible on All Screens */}
        <div className="flex gap-2">
          {token ? (
            <button
              onClick={handleLogout}
              className="hover:text-red-600 transition duration-200"
            >
              <PersonalButton
                text="Sign Out"
                bgColor="#D3D3D3"
                hoverColor="#0A0A0A"
                textColor="#000"
                hoverTextColor="#fff"
                icon={IoLogOutOutline} // 🔥 Logout Icon
                iconColor="#000"
                hoverIconColor="#fff"
              />
            </button>
          ) : (
            <Link
              to="/login"
              className="hover:text-green-600 transition duration-200"
            >
              <PersonalButton
                text="Login"
                bgColor="#D3D3D3"
                hoverColor="#0A0A0A"
                textColor="#000"
                hoverTextColor="#fff"
                icon={IoPersonOutline} // 🔥 Login Icon
                iconColor="#000"
                hoverIconColor="#fff"
              />
            </Link>
          )}
          <PersonalButton
            text="Get Started"
            bgColor="#16a34a"
            hoverColor="#0A0A0A"
            textColor="#fff"
          />
        </div>

        <button className="md:hidden text-3xl" onClick={() => setIsOpen(true)}>
          <IoMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && <MobileHeader isOpen={isOpen} setIsOpen={setIsOpen} />}
    </header>
  );
};

export default Header;
