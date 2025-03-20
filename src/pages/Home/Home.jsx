import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineArrowUp } from 'react-icons/ai';
import Header from '../../component/Header/Header';
import HomePart1 from '../../component/HomeComponent/HomePart1/HomePart1';
import HomePart2 from '../../component/HomeComponent/HomePart2/HomePart2';
import HomePart3 from '../../component/HomeComponent/HomePart3/HomePart3';
import HomePart4 from '../../component/HomeComponent/HomePart4/HomePart4';
import HomePart5 from '../../component/HomeComponent/HomePart5/HomePart5';
import HomePart6 from '../../component/HomeComponent/HomePart6/HomePart6';
import HomePart7 from '../../component/HomeComponent/HomePart7/HomePart7';
import HomePart8Faq from '../../component/HomeComponent/HomePart8/HomePart8Faq';
import HomePart9 from '../../component/HomeComponent/HomePart9/HomePart9';
import Footer from '../../component/Footer/Footer';

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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Animation variants for different sections
  const leftSlideVariants = {
    hidden: { opacity: 0, x: -80, y: -30 }, // Comes from left & slightly from top
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 1.2, ease: 'easeOut' }, // Extended duration
    },
  };

  const topSlideVariants = {
    hidden: { opacity: 0, y: -80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: 'easeOut' },
    },
  };

  return (
    <div>
      {/* Home Sections with Motion Effects */}
      <motion.div
        variants={leftSlideVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Triggers every time, when 20% is visible
      >
        <HomePart1 />
      </motion.div>

      <motion.div
        variants={topSlideVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <HomePart2 />
      </motion.div>

      <motion.div
        variants={leftSlideVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <HomePart3 />
      </motion.div>

      <motion.div
        variants={topSlideVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <HomePart4 />
      </motion.div>

      <motion.div
        variants={leftSlideVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <HomePart5 />
      </motion.div>

      <motion.div
        variants={topSlideVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <HomePart6 />
      </motion.div>

      <motion.div
        variants={leftSlideVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <HomePart7 />
      </motion.div>

      <motion.div
        variants={leftSlideVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <HomePart8Faq />
      </motion.div>
      <motion.div
        variants={leftSlideVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <HomePart9 />
      </motion.div>

      {/* Scroll-to-top button with Motion Effect */}
      <motion.div
        className="fixed bottom-8 right-8 flex items-center justify-center w-14 h-14 z-99"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: scrollPercentage > 10 ? 1 : 0,
          scale: scrollPercentage > 10 ? 1 : 0.8,
        }}
        transition={{ duration: 0.4 }}
      >
        {/* Outer Circle */}
        <div
          className="absolute w-16 h-16 bg-white rounded-full shadow-lg"
          style={{
            background: `conic-gradient(#00CC61 ${scrollPercentage}%, #ccc ${scrollPercentage}%)`,
          }}
        ></div>

        {/* Inner Circle */}
        <div
          onClick={scrollToTop}
          className="relative w-14 h-14 bg-white rounded-full shadow-lg cursor-pointer transition-all duration-300 flex items-center justify-center"
        >
          <AiOutlineArrowUp className="text-2xl text-[#00CC61]" />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
