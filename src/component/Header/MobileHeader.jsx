import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose, IoAdd } from 'react-icons/io5';
import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import Logo from './Logo';

const mobileNavLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const dropdownLinks = [
  { name: 'Shop', href: '#shop' },
  { name: 'Cart', href: '#cart' },
  { name: 'Checkout', href: '#checkout' },
  { name: 'My Account', href: '#account' },
  { name: 'Blog', href: '#blog' },
];

const MobileHeader = ({ isOpen, setIsOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay Background */}
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
              {/* Header with Close Button */}
              <div className="  flex justify-between">
                <div></div>
                <motion.button
                  className="text-3xl text-gray-700 flex right-0"
                  onClick={() => setIsOpen(false)}
                  whileTap={{ scale: 0.9 }}
                >
                  <IoClose />
                </motion.button>
              </div>
              <div className="flex justify-center mb-8 ">
                <img
                  src="https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/10/crm-logo-dark.svg"
                  alt="Logo"
                  className="h-12 "
                />
              </div>
              <h2 className="text-xl font-semibold text-center">Main Menu</h2>

              {/* Navigation Links */}
              <nav className="flex flex-col items-start gap-5 mt-8 text-lg font-medium">
                {mobileNavLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="hover:text-green-600 transition duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              {/* Dropdown Section */}
              <div className="mt-6 w-full">
                <motion.button
                  className="flex items-center justify-between w-full text-lg font-medium"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Options</span>
                  <motion.div animate={{ rotate: dropdownOpen ? 45 : 0 }}>
                    <IoAdd size={24} />
                  </motion.div>
                </motion.button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: dropdownOpen ? 'auto' : 0,
                    opacity: dropdownOpen ? 1 : 0,
                  }}
                  className="overflow-hidden"
                >
                  <div className="mt-3 flex flex-col gap-3">
                    {dropdownLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="hover:text-green-600 transition duration-300"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>
              <div className="gap-6 mt-auto py-6">
                <h2 className="text-xl font-semibold text-center">
                  Social Media
                </h2>

                {/* Social Media Links */}
                <div className="flex justify-center gap-6 mt-auto py-6">
                  <a
                    href="#"
                    className="text-gray-700 hover:text-blue-600 text-2xl"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-pink-600 text-2xl"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-black text-2xl"
                  >
                    <FaXTwitter />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileHeader;
