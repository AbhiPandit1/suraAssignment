import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const HomePart7Reviews = () => {
  const reviewData = [
    {
      id: '1',
      img: 'https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/10/6.png',
      reviewText:
        'Zenix has exceeded our expectations in every way. From its seamless integration with our existing tools to its robust reporting capabilities.',
      name: 'Maya',
      designation: 'Designer',
    },
    {
      id: '2',
      img: 'https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/10/1.png',
      reviewText:
        'I wanted to take a moment to express my gratitude for the exceptional service they provided. Their support and dedication were truly impressive.',
      name: 'John Doe',
      designation: 'Designer',
    },
    {
      id: '3',
      img: 'https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/10/2.png',
      reviewText:
        "Zenix's user-friendly interface and powerful automation features have revolutionized our workflow. Highly recommended!",
      name: 'Emily Smith',
      designation: 'Project Manager',
    },
    {
      id: '4',
      img: 'https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/10/3.png',
      reviewText:
        "The analytics and insights provided by Zenix have helped us make more informed business decisions. It's a game-changer!",
      name: 'David Johnson',
      designation: 'Marketing Head',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalReviews = reviewData.length;

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white py-10 px-5">
      <div className="max-w-5xl mx-auto relative">
        <Slider {...settings}>
          {reviewData.map((review) => (
            <div key={review.id} className="p-6">
              <div className="bg-gray-100 py-12 px-6 rounded-xl shadow-lg text-start flex flex-col items-center sm:items-start">
                {/* Image */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-4">
                  <img
                    src={review.img}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Review Text */}
                <p className="text-gray-600 italic text-sm sm:text-base text-center sm:text-left">
                  "{review.reviewText}"
                </p>
                {/* Name & Designation */}
                <div className="mt-4 text-center sm:text-left">
                  <h3 className="text-lg font-semibold text-gray-900 whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[150px] sm:max-w-none">
                    {review.name}
                  </h3>
                  <p className="text-sm text-gray-500">{review.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Bottom Indicator */}
        <div className="mt-5 flex items-center justify-center gap-4 w-[60%] mx-auto">
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 text-gray-800 text-sm">
            {currentIndex + 1}
          </span>
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 text-gray-800 text-sm">
            {totalReviews}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomePart7Reviews;
