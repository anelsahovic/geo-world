import { motion } from 'framer-motion';
import { TbCapsuleHorizontalFilled } from 'react-icons/tb';

export default function ScrollIndicator() {
  return (
    <div className="flex flex-col items-center justify-center w-full md:items-start space-y-2">
      {/* Scroll Text */}
      <span className="text-sm sm:text-base font-semibold text-gray-800 whitespace-nowrap">
        Scroll to see more
      </span>

      {/* Scroll Line with Moving Icon */}
      <div className="relative w-36 h-[1px] bg-gray-500">
        {/* Moving Icon */}
        <motion.div
          className="absolute -top-[10px] left-0 w-full"
          animate={{
            x: ['10%', '80%', '10%'],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        >
          <TbCapsuleHorizontalFilled className="text-xl text-[var(--color-primary)]" />
        </motion.div>
      </div>
    </div>
  );
}
