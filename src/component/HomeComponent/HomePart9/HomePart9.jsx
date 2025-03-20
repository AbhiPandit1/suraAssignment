import React from 'react';
import PersonalButton from '../../Button/PersonalButton';

const HomePart9 = () => {
  return (
    <div className="bg-[#004050] flex flex-col sm:flex-row justify-between items-center px-6 sm:px-32 py-16">
      {/* Left Section */}
      <div className="text-left max-w-md w-full">
        <div className="px-5 py-2 w-max flex justify-start text-[#00CC61] bg-[#E6F9EE] rounded-lg text-sm sm:text-base font-semibold mb-3 sm:mb-5 shadow-sm">
          CRM Platform
        </div>
        <h1 className="text-2xl sm:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">
          Ready to boost your business?
        </h1>
        <p className="text-gray-300 text-sm sm:text-lg mb-5 sm:mb-7 leading-relaxed">
          Boost sales and stay ahead of the competition with our innovative
          solutions. Be one of the first to benefit!
        </p>
        <div className="flex   flex-row gap-3 sm:gap-5">
          <PersonalButton
            text="Contact us"
            bgColor="#00CC61"
            hoverColor="#004050"
            textColor="#fff"
            hoverTextColor="#fff"
            iconColor="#000"
            hoverIconColor="#fff"
          />
          <PersonalButton
            text="View pricing"
            bgColor="#DFF9EB"
            hoverColor="#1C1D20"
            textColor="#000"
            hoverTextColor="#fff"
            iconColor="#000"
            hoverIconColor="#fff"
          />
        </div>
      </div>

      {/* Right Section - Image with Semi-Circle */}
      <div className="relative mt-10 sm:mt-0 w-full flex justify-center sm:justify-end max-w-xs sm:max-w-sm">
        {/* Green Semi-Circle */}
        <div className="absolute bottom-0 left-1/2 sm:left-auto transform -translate-x-1/2 sm:translate-x-0 w-[280px] sm:w-[450px] h-[160px] sm:h-[240px] bg-[#00CC61] rounded-t-full"></div>
        {/* Image */}
        <img
          src="https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/10/file-2-768x512.webp"
          alt="CRM Preview"
          className="relative z-10 max-w-[300px] sm:max-w-[450px] mx-auto sm:mx-0"
        />
      </div>
    </div>
  );
};

export default HomePart9;
