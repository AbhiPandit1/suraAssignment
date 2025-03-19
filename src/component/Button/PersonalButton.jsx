import { motion } from 'framer-motion';

const PersonalButton = ({
  text,
  bgColor,
  textColor,
  hoverColor,
  hoverTextColor,
  icon: Icon,
  iconColor,
  hoverIconColor,
}) => {
  return (
    <div className="relative inline-block rounded-lg overflow-hidden">
      <motion.button
        className="relative flex items-center justify-center gap-1 sm:gap-2 rounded-lg overflow-hidden transition-colors duration-300 p-4 
                   w-full h-[38px] sm:w-full sm:h-[45px] px-2" // Adjusted width for better spacing
        initial="rest"
        animate="rest"
        whileHover="hover"
        whileTap="hover"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        {/* Background Animation */}
        <motion.span
          className="absolute inset-0 w-full h-full"
          variants={{
            rest: { x: '-100%' },
            hover: { x: '0%' },
            leave: { x: '-100%' },
          }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
            delay: 0.001,
          }}
          style={{ backgroundColor: hoverColor }}
        />

        {/* Icon (if provided) */}
        {Icon && (
          <motion.div
            className="relative z-10 flex-shrink-0 text-sm sm:text-lg transition-colors duration-300"
            variants={{
              hover: { color: hoverIconColor },
              rest: { color: iconColor },
            }}
          >
            <Icon />
          </motion.div>
        )}

        {/* Button Text */}
        <motion.span
          className="relative z-10 text-[10px] sm:text-sm font-semibold transition-colors duration-300"
          variants={{
            hover: { color: hoverTextColor },
            rest: { color: textColor },
          }}
        >
          {text}
        </motion.span>
      </motion.button>
    </div>
  );
};

export default PersonalButton;
