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
        'Zenix has exceeded our expectations in every way. From its seamless integration with our existing tools to its robust reporting capabilities, it has become an indispensable asset.',
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
  const settings = {
    dots: false, // Removed dots
    infinite: true,
    speed: 600, // Smooth transition
    slidesToShow: 3, // Showing 2 slides for better layout
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalReviews = reviewData.length;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalReviews - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalReviews - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-white  py-10 px-5">
      <div className="max-w-5xl mx-auto relative">
        {/* Slider */}
        <Slider {...settings}>
          {reviewData.map((review) => (
            <div key={review.id} className="px-2  gap-12 text-start">
              <div
                className="bg-[rgb(244,244,244)] p-10 rounded-lg shadow-lg text-start"
                style={{ height: '480px' }} // Increased height
              >
                {/* Image */}
                <div className="w-24 h-24  rounded-full overflow-hidden">
                  <img
                    src={review.img}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Review Text */}
                <p className="mt-4 text-gray-600 italic">
                  "{review.reviewText}"
                </p>
                {/* Name & Designation */}
                <div className='mt-15'>
                  <h3 className="mt-3 text-lg font-semibold text-gray-900">
                    {review.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{review.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Bottom Indicator */}
        <div className="mt-5 p-4 sm:px-32 flex items-center justify-between text-gray-600 text-sm">
          <span className="ml-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 text-gray-800">
            {currentIndex + 1}
          </span>
          <div className="flex-grow border-t border-gray-400 mx-4"></div>
          <span className="mr-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 text-gray-800">
            {totalReviews}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomePart7Reviews;
