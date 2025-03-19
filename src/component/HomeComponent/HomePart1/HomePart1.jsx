import React from 'react';
import { FaLock } from 'react-icons/fa';
import PersonalButton from '../../Button/PersonalButton';

const HomePart1 = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center md:items-stretch justify-around pt-6 px-12 md:pt-16 min-h-[80vh] bg-cover bg-center gap-8 md:gap-4"
      style={{
        backgroundColor: '#004050',
        backgroundImage:
          'url(https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/10/SaaS-Helps-BG.webp)',
        backgroundSize: 'contain',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'overlay',
      }}
    >
      {/* Left Side Image (on Desktop) | Bottom Image (on Mobile) */}
      <div className="md:w-1/2 flex justify-center md:justify-end order-2 md:order-1 items-end">
        <img
          src="https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/10/Main-Dashboard-1-e1728723144728-1024x717.png"
          alt="Main Dashboard"
          className="w-64 md:w-300 h-full md:max-h-[450px] max-h-[500px] rounded-xl shadow-xl self-end"
        />
      </div>

      {/* Right Side Content (on Desktop) | Top Content (on Mobile) */}
      <div className="text-white max-w-lg text-center md:text-left flex-1 order-1 md:order-2 flex items-center">
        <div className="max-w-lg text-center md:text-left flex flex-col items-center md:items-start">
          <h1 className="text-3xl sm:text-[2.5rem] font-extrabold leading-snug text-white mb-3">
            Streamline your <br />
            operations with Zenix's <br />
            innovative CRM
            <br />
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 opacity-90 leading-relaxed md:leading-[1.6] tracking-normal">
            Take control of your customer experience with a{' '}
            <span className="text-[#DFF9EB] font-semibold">
              fully-featured, cloud-based
            </span>{' '}
            CRM solution.
            <br className="hidden md:block" />
            Empower your business with{' '}
            <span className="text-[#00CC61] font-semibold">
              scalable and intelligent tools
            </span>{' '}
            that adapt to your needs.
          </p>
          {/* Buttons */}
          <div className="flex flex-row justify-center sm:justify-start sm:items-center gap-4 mt-8">
            <PersonalButton
              text="Request a Demo"
              bgColor="#00CC61"
              hoverColor="#004050"
              textColor="#fff"
              hoverTextColor="#fff"
              iconColor="#000"
              hoverIconColor="#fff"
            />

            <PersonalButton
              text="Explore more"
              bgColor="#DFF9EB"
              hoverColor="#1C1D20"
              textColor="#000"
              hoverTextColor="#fff"
              iconColor="#000"
              hoverIconColor="#fff"
            />
          </div>

          {/* 30-Day Money-Back Guarantee */}
          <div className="flex items-center justify-center md:justify-start gap-2 mt-6 text-sm text-gray-200">
            <FaLock size={20} className="text-green-400" />
            <span>30-day money-back guarantee</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePart1;
