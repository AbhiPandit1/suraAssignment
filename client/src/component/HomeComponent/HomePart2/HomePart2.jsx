import PersonalButton from '../../Button/PersonalButton';

const HomePart2 = () => {
  return (
    <div className="p-6 sm:p-12 bg-[#F9FAFB]">
      {/* CRM Badge */}
      <div className="flex justify-center flex-col m-auto  sm:items-center">
        {/* CRM Badge */}
        <div className="px-4 py-1 w-max flex justify-start sm:justify-center text-[#00CC61] bg-[#E6F9EE] rounded-lg text-sm mb-4 sm:mb-6 shadow-sm">
          CRM Platform
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-semibold sm:text-4xl sm:font-extrabold text-[#1C1D20] leading-tight text-start sm:text-center">
          Leading CRM platform that <br />
          empowers your business
        </h1>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mt-2 text-start sm:text-center">
          Eliminate repetitive customer service tasks with easy-to-configure
          <br /> automation, boosting efficiency.
        </p>
      </div>

      {/* Content Section */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-10 mt-10">
        {/* Image (Above Text on Mobile) */}
        <div className="w-full sm:w-1/2 flex justify-center sm:justify-start order-1 sm:order-1">
          <img
            src="https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/10/Medium_Traffic-1024x908.png"
            alt="CRM Platform"
            className="rounded-lg max-w-full h-auto w-[95%] sm:w-[75%] "
          />
        </div>

        {/* Text (Below Image on Mobile) */}
        <div className="w-full sm:w-1/2 flex flex-col gap-6 text-center sm:text-left order-2 sm:order-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1D20]">
            Reach out for a personalized consultation
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Eliminate repetitive customer service tasks with easy-to-configure
            automation, boosting efficiency.
          </p>

          {/* Button */}
          <div className="flex justify-center sm:justify-start">
            <PersonalButton
              text="View Pricing"
              bgColor="#00CC61"
              hoverColor="#00994D"
              textColor="#fff"
              hoverTextColor="#fff"
              iconColor="#fff"
              hoverIconColor="#fff"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-10 mt-10">
        {' '}
        <div className="w-full sm:w-1/2 flex justify-center sm:justify-start order-1 sm:order-2">
          <img
            src="https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/10/Medium_Team-768x694.png"
            alt="CRM Platform"
            className="rounded-lg max-w-full h-auto w-[95%] sm:w-[75%] "
          />
        </div>
        {/* Text (Below Image on Mobile) */}
        <div className="w-full sm:w-1/2 flex flex-col gap-6 text-center sm:text-left order-2 sm:order-1">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1D20]">
            Share tools quickly and confidently in minutes
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            This powerfull tool eliminates the need to leave Salesforce to get
            things done as I can create a custom proposal with dynamic pricing
            tables. You can also customize your own dynamic versions.
          </p>

          {/* Button */}
          <div className="flex justify-center sm:justify-start">
            <PersonalButton
              text="View Pricing"
              bgColor="#00CC61"
              hoverColor="#00994D"
              textColor="#fff"
              hoverTextColor="#fff"
              iconColor="#fff"
              hoverIconColor="#fff"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePart2;
