import { useEffect } from 'react';
import { useCursor } from './CursorContext';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const { cursorPosition, setCursorPosition } = useCursor();

  // Track mouse movement
  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', moveCursor);
    return () => document.removeEventListener('mousemove', moveCursor);
  }, [setCursorPosition]);

  return (
    <>
      {/* Outer Transparent Circle with Smooth Lag */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 sm:w-10 sm:h-10 rounded-full bg-transparent border border-green-400 
                   pointer-events-none z-50"
        animate={{ x: cursorPosition.x - 20, y: cursorPosition.y - 20 }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      />

      {/* Inner Animated Dot with Slightly More Lag */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 sm:w-2 sm:h-2 bg-gray-950 rounded-full pointer-events-none"
        animate={{ x: cursorPosition.x - 6, y: cursorPosition.y - 6 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
    </>
  );
};

export default CustomCursor;
