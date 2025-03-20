import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineArrowUp } from "react-icons/ai";

export const useScrollAnimation = (direction = "left", distance = 80) => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const scrollPercent = (scrollPosition / scrollHeight) * 100;
      setScrollPercentage(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants for sections
  const variants = {
    hidden: {
      opacity: 0,
      ...(direction === "left" && { x: -distance, y: -30 }),
      ...(direction === "top" && { y: -distance }),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  // Scroll-to-top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // JSX for scroll-to-top button (always visible, reduced size)
  const ScrollToTopButton = () => (
    <motion.div
      className="fixed bottom-8 right-8 flex items-center justify-center w-12 h-12 z-50"
      initial={{ opacity: 0.8, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Outer Circle */}
      <div
        className="absolute w-14 h-14 bg-white rounded-full shadow-md"
        style={{
          background: `conic-gradient(#00CC61 ${scrollPercentage}%, #ccc ${scrollPercentage}%)`,
        }}
      ></div>

      {/* Inner Circle */}
      <div
        onClick={scrollToTop}
        className="relative w-12 h-12 bg-white rounded-full shadow-lg cursor-pointer transition-all duration-300 flex items-center justify-center"
      >
        <AiOutlineArrowUp className="text-xl text-[#00CC61]" />
      </div>
    </motion.div>
  );

  return { scrollPercentage, variants, scrollToTop, ScrollToTopButton };
};
