import React from 'react';
import { motion } from 'framer-motion';
import FeaturesPart1 from '../../component/FeaturesComponent/FeaturesPart1';
import FeaturesPart2 from '../../component/FeaturesComponent/FeaturesPart2';
import HomePart5 from '../../component/HomeComponent/HomePart5/HomePart5';
import HomePart7 from '../../component/HomeComponent/HomePart7/HomePart7';
import HomePart8Faq from '../../component/HomeComponent/HomePart8/HomePart8Faq';
import { useScrollAnimation } from '../../component/Hooks/useScrollAnimation';

const Features = () => {
  const { ScrollToTopButton, variants } = useScrollAnimation();

  return (
    <div>
      <motion.div variants={variants} initial="hidden" animate="visible">
        <FeaturesPart1 />
      </motion.div>

      <motion.div variants={variants} initial="hidden" animate="visible">
        <FeaturesPart2 />
      </motion.div>

      <motion.div variants={variants} initial="hidden" animate="visible">
        <HomePart5 />
      </motion.div>

      <motion.div variants={variants} initial="hidden" animate="visible">
        <HomePart7 />
      </motion.div>

      <motion.div variants={variants} initial="hidden" animate="visible">
        <HomePart8Faq faqBaground="#004050" />
      </motion.div>

      {/* Scroll-to-Top Button (Always Visible) */}
      <ScrollToTopButton />
    </div>
  );
};

export default Features;
