import PersonalButton from '../../Button/PersonalButton';
import HomePart7Reviews from './HomePart7Reviews';

const HomePart7 = () => {
  return (
    <div className="bg-white py-16 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto">
        {/* Badge */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 py-1 w-max text-[#00CC61] bg-[#E6F9EE] rounded-full text-sm font-medium mb-6 shadow-md">
          Reviews
        </div>

        {/* Review Heading & CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full bg-white px-8 py-8 rounded-xl ">
          {/* Heading & Description */}
          <div className="sm:w-3/4 w-full">
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
              What Our Customers Say
            </h1>
            <p className="text-gray-600 text-sm sm:text-base mt-3 max-w-2xl">
              Witness firsthand the user appreciation for our uncomplicated
              ticketing system in their daily activities.
            </p>
          </div>

          {/* Button */}
          <div className="mt-5 sm:mt-0 sm:w-auto w-full flex sm:justify-end">
            <PersonalButton
              text="View all reviews"
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

      {/* Review Section */}
      <div className="mt-12">
        <HomePart7Reviews />
      </div>
    </div>
  );
};

export default HomePart7;
