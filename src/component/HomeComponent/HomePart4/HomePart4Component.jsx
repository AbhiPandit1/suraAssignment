import PersonalButton from '../../Button/PersonalButton';

const HomePart4Component = () => {
  return (
    <div className="w-full bg-[#F4F4F4] mt-10 m-auto rounded-lg">
      {/* Video Popup Section */}
      <div className="wdb--video-popup w-[95%] h-[40vh] m-auto rounded-lg relative overflow-hidden">
        <a className="wdb-popup-btn ripple" role="button">
          {/* Main Video Thumbnail */}
          <img
            decoding="async"
            className="spinner_image h-full w-[100%] object-cover rounded-lg my-4"
            src="https://res.cloudinary.com/dzy51cqxa/image/upload/v1726031997/programme_photos/xzsjwqf2uhytbmnki8ne.jpg"
            alt="Video Thumbnail"
          />

          {/* Circular Moving Element with Ripple Animation */}
          <img
            className="absolute top-1/2 left-1/2 w-[50px] h-[50px] rounded-full bg-black shadow-lg button-ripple-animation hover:shadow-2xl transition-shadow duration-300 transform -translate-x-1/2 -translate-y-1/2 z-20"
            src="https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/10/facv.png"
            alt="Circular Icon"
          />
        </a>
      </div>

      <div className="w-full bg-gray-100 py-12 px-4">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
          {/* Vision Section */}
          <div className="flex flex-col items-center lg:items-start space-y-6 lg:space-y-8 text-center lg:text-left">
            <h1 className="text-3xl font-semibold text-gray-800">Our Vision</h1>
            <p className="text-lg text-gray-600 text-start hidden sm:block">
              We are committed to continuously innovating <br />
              in the development of CRM solutions that <br />
              deliver added value to businesses worldwide.
            </p>
            <p className="text-lg text-gray-600 text-start sm:hidden">
              We are committed to continuously innovating in the development of
              CRM solutions that deliver added value to businesses worldwide.
            </p>
            <div className="space-x-4 flex justify-center lg:justify-start">
              <PersonalButton
                text="View Pricing"
                bgColor="#00CC61"
                hoverColor="#00994D"
                textColor="#fff"
                hoverTextColor="#fff"
                iconColor="#fff"
                hoverIconColor="#fff"
              />
              <PersonalButton
                text="Get Started"
                bgColor="#DFF9EB"
                hoverColor="#57546580"
                textColor="#575465"
                hoverTextColor="#fff"
                iconColor="#fff"
                hoverIconColor="#fff"
              />
            </div>
          </div>

          {/* Mission Section */}
          <div className="flex flex-col items-center lg:items-start space-y-6 lg:space-y-8 text-center lg:text-left">
            <h1 className="text-3xl font-semibold text-gray-800 text-start w-full">
              Our Mission
            </h1>

            {/* Mission Items with Green Circle Tick */}
            <ul className="space-y-2 text-lg text-gray-600 list-none">
              <li className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-400 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>Enhance Relationships</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-400 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>Drive Business Success</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-400 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>Innovate Continuously</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-400 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>Ensure Reliability</span>
              </li>
            </ul>
          </div>

          {/* Additional Mission Section */}
          <div className="flex flex-col items-center mt-0 sm:mt-10 lg:items-start space-y-6 lg:space-y-8 text-center lg:text-left">
            {/* Additional Mission Items with Green Circle Tick */}
            <ul className="space-y-2 text-lg text-gray-600 list-none">
              <li className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-400 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>Focus on Integrity</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-400 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>Deliver Excellent Service</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-400 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>Inspire Positive Change</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-400 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>Create Meaningful </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePart4Component;
