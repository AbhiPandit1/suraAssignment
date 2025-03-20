import HomePart6PriceCard from './HomePart6PriceCard';

const HomePart6 = () => {
  return (
    <div className="bg-[#F4F4F4] flex flex-col sm:flex-row items-center sm:items-start justify-center py-10 px-6 gap-6">
      {/* Left Section */}
      <div className="flex flex-col justify-center h-full sm:h-[80vh] text-start sm:text-left max-w-md">
        <div className="px-4 py-1 w-max mx-0 sm:mx-0 flex justify-start text-[#00CC61] bg-[#E6F9EE] rounded-lg text-sm mb-4 sm:mb-6 shadow-sm">
          Pricing plans
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Find the Right Package
        </h1>
        <p className="text-gray-600 mt-2 text-base sm:text-lg">
          Enjoy a range of features designed to enhance your project management
          experience, all at a price that fits your budget.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full sm:w-auto">
        <HomePart6PriceCard />
      </div>
    </div>
  );
};

export default HomePart6;
