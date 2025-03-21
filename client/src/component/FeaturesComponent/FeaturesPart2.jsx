const FeaturesPart2 = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-6 px-10 sm:px-22 py-12">
      {/* Left Content */}
      <div className="max-w-lg text-center sm:text-left">
        <div className="px-4 py-1 w-max text-[#00CC61] bg-[#E6F9EE] rounded-lg text-sm mb-4 sm:mb-6 shadow-sm">
          What you will get?
        </div>
        {/* Heading */}
        <h1 className="text-2xl font-semibold sm:text-4xl sm:font-extrabold text-[#1C1D20] leading-tight text-start">
          Features and Services
        </h1>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mt-2 text-start">
          Discover how our tech solutions can transform your business. Explore
          our features and take your business to new heights.
        </p>
      </div>

      {/* Image */}
      <div className="w-full sm:w-1/3">
        <img
          src="https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/10/Main-Dashboard-1-e1728723144728-2048x1435.png"
          alt="Dashboard Preview"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default FeaturesPart2;
