import React from 'react';

// Footer Sections Data
const footerData = [
  {
    title: 'Company',
    links: ['About Us', 'Our Team', 'Our Program', 'Work With Us'],
  },
  {
    title: 'Help & Support',
    links: ['Help Center', 'Expert Team', 'Contact Us', 'Report Abuse'],
  },
  {
    title: 'Information',
    links: [
      'Testimonials',
      'Pricing Plans',
      'Referral Program',
      'Payment Gateway',
    ],
  },
  {
    title: 'Quick Links',
    links: ['Support', 'Technology', 'Newsroom', 'Data Centers'],
  },
  {
    title: 'Useful Links',
    links: ['Blog & News', 'How It Works', 'Our Features', 'Compare Other'],
  },
];

const FooterLinks = () => {
  return (
    <footer className="bg-[#004050] text-white px-6 sm:px-20 py-10 text-start">
      {/* Footer Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {footerData.map((section, index) => (
          <div key={index}>
            <h3 className="text-lg font-bold mb-3 text-white">
              {section.title}
            </h3>
            <ul className="space-y-2 text-gray-300">
              {section.links.map((link, idx) => (
                <li
                  key={idx}
                  className="cursor-pointer hover:text-white transition"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Links */}

      {/* Footer Bottom - Copyright */}
      <div className="border-t border-gray-500 mt-6 pt-6 flex flex-col sm:flex-row items-center justify-between text-center sm:text-start">
        <div className="text-center mt-8 mb-8">
          <a href="#" className="hover:text-gray-300">
            Link
          </a>{' '}
          |
          <a href="#" className="hover:text-gray-300">
            {' '}
            Privacy Policy
          </a>{' '}
          |
          <a href="#" className="hover:text-gray-300">
            {' '}
            Terms & Conditions
          </a>{' '}
          |
          <a href="#" className="hover:text-gray-300">
            {' '}
            Refund Policy
          </a>
        </div>
        <p className="text-gray-300 mt-0 sm:mt-4">
          &copy; {new Date().getFullYear()} - WP Theme by{' '}
          <span className="text-green-400">Keystone Themes</span>
        </p>
      </div>
    </footer>
  );
};

export default FooterLinks;
