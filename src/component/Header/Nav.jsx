import { useState, useRef } from 'react';
import { SlArrowDown } from 'react-icons/sl';

const navLinks = [
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

const Nav = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  let timeoutId = null;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setDropdownOpen(false);
    }, 300); // 300ms delay before closing
  };

  return (
    <nav className="flex items-center gap-6 text-sm font-medium">
      {navLinks.map((link) => (
        <a key={link.name} href={link.href} className="hover:text-green-600">
          {link.name}
        </a>
      ))}

      {/* Others dropdown */}
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className="flex items-center gap-2 hover:text-green-600">
          <span>Others</span>
          <span
            className="transition-transform duration-300 flex items-center"
            style={{
              transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          >
            <SlArrowDown size={15} className="font-bold" />
          </span>
        </button>

        {dropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute left-0 mt-2 w-40 bg-green-600 text-white rounded-md shadow-lg"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {dropdownLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-2 hover:text-gray-950"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
