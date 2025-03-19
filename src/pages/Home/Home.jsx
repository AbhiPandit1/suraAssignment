import React, { useState, useEffect } from 'react';
import Header from '../../component/Header/Header';
import HomePart1 from '../../component/HomeComponent/HomePart1/HomePart1';
import HomePart2 from '../../component/HomeComponent/HomePart2/HomePart2';
import HomePart3 from '../../component/HomeComponent/HomePart3/HomePart3';
import HomePart4 from '../../component/HomeComponent/HomePart4/HomePart4';
import HomePart5 from '../../component/HomeComponent/HomePart5/HomePart5';
import { AiOutlineArrowUp } from 'react-icons/ai'; // Right arrow icon

const Home = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const scrollPercent = (scrollPosition / scrollHeight) * 100;
      setScrollPercentage(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <Header />
      <HomePart1 />
      <HomePart2 />
      <HomePart3 />
      <HomePart4 />
      <HomePart5 />

      {/* Scroll-to-top button */}
      <div className="fixed bottom-8 right-8 flex items-center justify-center w-14 h-14">
        {/* Outer Circle (Larger, Static) */}
        <div
          className="absolute w-16 h-16 bg-white rounded-full shadow-lg"
          style={{
            background: `conic-gradient(#00CC61 ${scrollPercentage}%, #ccc ${scrollPercentage}%)`, // Dynamic color fill
          }}
        ></div>

        {/* Inner Circle (Smaller, Dynamic Border) */}
        <div
          onClick={scrollToTop}
          className="relative w-15 h-15 bg-white rounded-full shadow-lg cursor-pointer transition-all duration-300"
        >
          <AiOutlineArrowUp className="absolute text-2xl text-[#00CC61] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
    </div>
  );
};

export default Home;
