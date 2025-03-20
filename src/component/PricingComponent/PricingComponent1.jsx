import React from 'react';
import HomePart6 from '../HomeComponent/HomePart6/HomePart6';
import HomePart3 from '../HomeComponent/HomePart3/HomePart3';
import PricingComponentgetValue from './PricingComponentgetValue';
import HomePart8Faq from '../HomeComponent/HomePart8/HomePart8Faq';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../Hooks/useScrollAnimation';

const PricingComponent1 = () => {
  const { ScrollToTopButton, variants } = useScrollAnimation();

  return (
    <div>
      <motion.div variants={variants} initial="hidden" animate="visible">
        <HomePart6 pricingComponent={true} />
      </motion.div>

      <motion.div variants={variants} initial="hidden" animate="visible">
        <HomePart3 />
      </motion.div>

      <motion.div variants={variants} initial="hidden" animate="visible">
        <PricingComponentgetValue />
      </motion.div>

      <motion.div variants={variants} initial="hidden" animate="visible">
        <HomePart8Faq />
      </motion.div>

      {/* Scroll-to-Top Button (Always Visible) */}
      <ScrollToTopButton />
    </div>
  );
};

export default PricingComponent1;
