import React from 'react';
import { motion } from 'framer-motion';

import HomePart1 from '../../component/HomeComponent/HomePart1/HomePart1';
import HomePart2 from '../../component/HomeComponent/HomePart2/HomePart2';
import HomePart3 from '../../component/HomeComponent/HomePart3/HomePart3';
import HomePart4 from '../../component/HomeComponent/HomePart4/HomePart4';
import HomePart5 from '../../component/HomeComponent/HomePart5/HomePart5';
import HomePart6 from '../../component/HomeComponent/HomePart6/HomePart6';
import HomePart7 from '../../component/HomeComponent/HomePart7/HomePart7';
import HomePart8Faq from '../../component/HomeComponent/HomePart8/HomePart8Faq';
import HomePart9 from '../../component/HomeComponent/HomePart9/HomePart9';
import { useScrollAnimation } from '../../component/Hooks/useScrollAnimation';

const Home = () => {
  const { variants: leftSlideVariants, ScrollToTopButton } =
    useScrollAnimation('left');
  const { variants: topSlideVariants } = useScrollAnimation('top');

  return (
    <div>
      <motion.div
        variants={leftSlideVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
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

      {/* Scroll-to-top button (Now imported from the hook!) */}
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
