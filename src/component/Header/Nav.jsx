import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SlArrowDown } from 'react-icons/sl';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/features' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const dropdownLinks = [
  { name: 'Shop', href: '/shop' },
  { name: 'Cart', href: '/cart' },
  { name: 'Checkout', href: '/checkout' },
  { name: 'My Account', href: '/account' },
  { name: 'Blog', href: '/blog' },
];

const Nav = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  let timeoutId = null;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setDropdownOpen(false);
    }, 300);
  };

  useEffect(() => {
    return () => clearTimeout(timeoutId); // Cleanup timeout on unmount
  }, []);

  return (
    <nav className="flex items-center gap-6 text-sm font-medium">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          to={link.href}
          className="hover:text-green-600 transition duration-300"
        >
          {link.name}
        </Link>
      ))}

      {/* Others dropdown */}
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className="flex items-center gap-2 hover:text-green-600">
          <span>Others</span>
          <SlArrowDown
            size={15}
            className={`transition-transform duration-300 ${
              dropdownOpen ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </button>

        {dropdownOpen && (
          <div className="absolute left-0 mt-2 w-40 bg-green-600 text-white rounded-md shadow-lg">
            {dropdownLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block px-4 py-2 hover:bg-white hover:text-green-600 transition duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
