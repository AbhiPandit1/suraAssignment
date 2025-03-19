import React, { useState } from 'react';
import { IoMenu, IoPersonOutline } from 'react-icons/io5';
import Logo from './Logo';
import Nav from './Nav';
import PersonalButton from '../Button/PersonalButton';
import MobileHeader from './MobileHeader';
import CustomCursor from '../ContextFunctions/CustomCursor';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <PersonalButton
            text="Login"
            bgColor="#D3D3D3"
            hoverColor="#0A0A0A"
            textColor="#000"
            hoverTextColor="#fff"
            icon={IoPersonOutline} // 🔥 Added Icon
            iconColor="#000"
            hoverIconColor="#fff"
          />
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
