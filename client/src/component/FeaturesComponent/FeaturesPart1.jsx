import { Link } from 'react-router-dom';

const FeaturesPart1 = () => {
  return (
    <div className="py-20 px-6 bg-[#F4F4F4]">
      <div className="flex justify-center flex-col m-auto  sm:items-center">
        {/* CRM Badge */}
        <div className="px-4 py-1 w-max flex justify-start sm:justify-center text-[#00CC61] bg-[#E6F9EE] rounded-lg text-sm mb-4 sm:mb-6 shadow-sm">
          What you will get ?
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-semibold sm:text-4xl sm:font-extrabold text-[#1C1D20] leading-tight text-start sm:text-center">
          Features and Services
        </h1>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mt-2 text-start sm:text-center">
          Discover how our tech solutions can transform your business. Explore
          our <br /> features and take your business to new heights.
        </p>
        <div className="mt-4 text-sm sm:text-base text-gray-700">
          <Link to="/" className="hover:text-green-600 transition duration-200">
            Home
          </Link>
          <span className="mx-2 text-gray-500"> &gt; </span>
          <Link
            to="/features"
            className="text-green-400 hover:text-green-600 transition duration-200"
            aria-label="Go to Pricing page"
          >
            Features
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPart1;
