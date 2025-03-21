import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose, IoAdd } from 'react-icons/io5';
import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const mobileNavLinks = [
  { name: 'Home', path: '/' },
  { name: 'Features', path: '/features' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'Profile', path: '/profile' },
  { name: 'Contact', path: '/contact' },
];

const dropdownLinks = [
  { name: 'Shop', path: '/shop' },
  { name: 'Cart', path: '/cart' },
  { name: 'Checkout', path: '/checkout' },
  { name: 'My Account', path: '/account' },
  { name: 'Blog', path: '/blog' },
];

const MobileHeader = ({ isOpen, setIsOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />

          {/* Mobile Menu */}
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col px-6 py-10"
            initial={{ x: '100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            {/* Close Button */}
            <div className="flex justify-between items-center">
              <div></div>
              <motion.button
                className="text-3xl text-gray-700"
                onClick={() => setIsOpen(false)}
                whileTap={{ scale: 0.9 }}
                aria-label="Close menu"
              >
                <IoClose />
              </motion.button>
            </div>

            {/* Logo */}
            <div className="flex justify-center mb-8">
              <img
                src="https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/10/crm-logo-dark.svg"
                alt="Logo"
                className="h-12"
              />
            </div>
            <h2 className="text-xl font-semibold text-center">Main Menu</h2>

            {/* Navigation Links */}
            <nav className="flex flex-col items-start gap-5 mt-6 text-lg font-medium">
              {mobileNavLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="hover:text-green-600 transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Dropdown Section */}
            <div className="mt-6 w-full">
              <motion.button
                className="flex items-center justify-between w-full text-lg font-medium"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                whileTap={{ scale: 0.95 }}
                aria-expanded={dropdownOpen}
                aria-label="Toggle dropdown"
              >
                <span>Options</span>
                <motion.div animate={{ rotate: dropdownOpen ? 45 : 0 }}>
                  <IoAdd size={24} />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden mt-3 flex flex-col gap-3"
                  >
                    {dropdownLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.path}
                        className="hover:text-green-600 transition duration-300"
                        onClick={() => {
                          setDropdownOpen(false);
                          setIsOpen(false);
                        }}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Social Media Links */}
            <div className="mt-auto py-6">
              <h2 className="text-xl font-semibold text-center">Follow Us</h2>
              <div className="flex justify-center gap-6 mt-4">
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 text-2xl"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-pink-600 text-2xl"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-black text-2xl"
                  aria-label="Twitter"
                >
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileHeader;
