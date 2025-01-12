import { motion } from 'framer-motion';
import { LuFlipHorizontal } from 'react-icons/lu';

export default function FlipIndicator() {
  return (
    <div className="absolute flex  bottom-2 right-2 items-center justify-center gap-2">
      {/* Tap to flip text and pulsating effect */}
      <motion.div
        className="flex items-center justify-center space-x-2"
        animate={{
          scale: [1, 0.9, 1],
          opacity: [1, 0.7, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      >
        <span className="text-sm font-semibold text-gray-800 whitespace-nowrap">
          Tap to Flip
        </span>
      </motion.div>

      {/* Flipping icon with rotation animation */}
      <motion.div
        className="flex items-center justify-center"
        animate={{
          rotateY: [0, 180, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        }}
      >
        <LuFlipHorizontal className="text-xl text-[var(--color-primary)]" />
      </motion.div>
    </div>
  );
}
