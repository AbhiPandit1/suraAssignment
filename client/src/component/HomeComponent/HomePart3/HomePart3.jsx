import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const HomePart3 = () => {
  const slides = [
    'https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/07/new-Lunaxy-helpdesk.png',
    'https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/07/new-Harvest-helpdesk.png',
    'https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/07/new-Gourmet-helpdesk.png',
    'https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/07/new-Urban-helpdesk.png',
    'https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/07/new-Runwaaay-helpdesk.png',
    'https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/07/new-Quantum-helpdesk.png',
  ];

  return (
    <div className="bg-[#004050] text-white py-10 px-5 sm:px-0">
      <p className="text-center text-lg font-semibold mb-6">
        Trusted by 100,000+ teams globally at innovative companies
      </p>

      <div className="max-w-4xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={5} // Default for larger screens (desktop)
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 3 }, // 3 images on mobile
            1024: { slidesPerView: 5 }, // 5 images on desktop
          }}
          className="w-full"
        >
          {slides.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomePart3;
