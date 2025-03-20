import React from 'react';
import { FiPhone, FiMail } from 'react-icons/fi';

const FooterPart1 = () => {
  return (
    <div className="bg-[#004050] border-y border-white flex flex-col sm:flex-row justify-start sm:justify-between items-start px-6 sm:px-20 py-10 text-white text-start">
      {/* Left Section */}
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
        {/* Logo */}
        <div className="w-[150px] h-auto flex items-center">
          <img
            src="https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/10/crm-logo-light.svg"
            alt="Logo"
            className="h-8 sm:h-12 md:h-16 w-auto"
          />
        </div>
        {/* Text */}
        <h1 className="text-lg sm:text-xl font-semibold mt-0 sm:mt-5">
          CRM platform built for <span className="text-[#00CC61]">success</span>
        </h1>
      </div>

      {/* Right Section - Contact Info */}
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8 mt-6 sm:mt-0 mt-0 sm:mt-5">
        <div className="flex items-center gap-2">
          <FiPhone className="text-[#00CC61] text-lg" />
          <label className="font-medium">Phone:</label>
          <span className="text-gray-300">+91 3497 - 347</span>
        </div>
        <div className="flex items-center gap-2">
          <FiMail className="text-[#00CC61] text-lg" />
          <label className="font-medium">Email:</label>
          <span className="text-gray-300">mail@example.com</span>
        </div>
      </div>
    </div>
  );
};

export default FooterPart1;
