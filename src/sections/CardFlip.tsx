'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { LuMapPinCheck, LuStar } from 'react-icons/lu';
import Link from 'next/link';
import FlipIndicator from '@/components/FlipIndicator';

export default function CardFlip() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped((prev) => !prev);

  return (
    <div
      id="your-places"
      className="w-full h-full flex flex-col gap-4 items-start  py-10 px-6"
    >
      <div className="flex flex-col items-start justify-start gap-1 ">
        <h2 className="text-5xl md:text-6xl font-bold text-slate-800">
          Your Places
        </h2>
        <p className="md:text-lg">
          Track the places you have visited and add places you want to visit to
          your wishlist.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center w-full">
        {/* buttons */}
        <div
          onClick={handleFlip}
          className="flex items-center justify-between rounded-t-lg w-32 h-8 sm:w-40 sm:h-10 bg-slate-300 relative z-0"
        >
          <div
            className={`z-10 ml-1 sm:ml-2 text-sm sm:text-base ${
              isFlipped
                ? 'text-slate-800 font-medium'
                : 'text-slate-100 font-semibold'
            }`}
          >
            Wishlist
          </div>
          <div
            className={`z-10 mr-3 text-sm sm:text-base ${
              isFlipped
                ? 'text-slate-100 font-semibold'
                : 'text-slate-800 font-medium'
            }`}
          >
            Visited
          </div>
          {/* slider */}
          <motion.div
            className={`absolute w-16 h-8  sm:h-10 sm:w-20 bg-[var(--color-primary)] top-0 ${
              isFlipped
                ? ' rounded-none rounded-tr-lg'
                : 'rounded-none rounded-tl-lg'
            }`}
            animate={{ x: isFlipped ? '100%' : '0%' }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          ></motion.div>
        </div>
        <div
          className="relative w-[95%] sm:w-[90%] h-[500px] sm:h-[400px] cursor-pointer"
          onClick={handleFlip}
        >
          {/* Front Side */}
          <motion.div
            className="absolute w-full h-full text-white flex items-center justify-center rounded-lg shadow-lg"
            initial={false}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            style={{ backfaceVisibility: 'hidden' }}
          >
            {!isFlipped && <FlipIndicator />}
            <div className="flex flex-col md:flex-row items-center justify-center w-full h-full rounded-lg shadow-lg overflow-hidden bg-white">
              {/* Left Section */}
              <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center bg-[var(--color-primary)] text-white p-6 rounded-t-lg md:rounded-t-none md:rounded-l-lg">
                <div className="flex flex-col items-center gap-2 sm:gap-4">
                  <div className="text-3xl sm:text-5xl">
                    <LuStar />
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-semibold tracking-wide text-center">
                    Your Wishlist Awaits!
                  </h2>

                  <p className="text-center text-sm md:text-base opacity-90">
                    Keep track of all your dream destinations in one place.
                  </p>
                </div>
              </div>

              {/* Right Section */}
              <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center text-slate-800 p-6 rounded-b-lg md:rounded-b-none md:rounded-r-lg">
                <h2 className="text-2xl sm:text-4xl font-bold mb-3 text-center">
                  Plan Your Next Adventure
                </h2>
                <p className="text-center text-sm md:text-base mb-4 leading-relaxed">
                  Save your favorite countries and places you want to visit, and
                  never lose track of your travel goals. Organize, dream, and
                  make it happen!
                </p>

                <Link
                  href="/wishlist"
                  className="px-4 py-2 mb-4 sm:px-5 sm:py-3 bg-[var(--color-primary)] text-white font-medium rounded-lg shadow-sm hover:bg-[var(--color-green-dark)] transition duration-300"
                >
                  View Your Wishlist
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Back Side */}
          <motion.div
            className="absolute w-full h-full bg-green-500 text-white flex items-center justify-center rounded-lg shadow-lg"
            initial={false}
            animate={{ rotateY: isFlipped ? 0 : 180 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            style={{ backfaceVisibility: 'hidden' }}
          >
            {isFlipped && <FlipIndicator />}
            <div className="flex flex-col md:flex-row items-center justify-center w-full h-full rounded-lg shadow-lg overflow-hidden bg-white">
              {/* Left Section */}
              <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center bg-[var(--color-primary)] text-white p-6 rounded-t-lg md:rounded-t-none md:rounded-l-lg">
                <div className="flex flex-col items-center gap-2 sm:gap-4">
                  {/* Icon or Illustration */}
                  <div className="text-3xl sm:text-5xl">
                    <LuMapPinCheck />
                  </div>
                  {/* Title */}
                  <h2 className="text-2xl sm:text-3xl font-semibold tracking-wide text-center">
                    Your Visited List
                  </h2>
                  {/* Tagline */}
                  <p className="text-center text-sm md:text-base opacity-90">
                    Celebrate the memories of your adventures around the globe.
                  </p>
                </div>
              </div>

              {/* Right Section */}
              <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center text-slate-800 p-6 rounded-b-lg md:rounded-b-none md:rounded-r-lg">
                {/* Description */}
                <h2 className="text-2xl sm:text-4xl font-bold mb-3 text-center">
                  Relive Your Journeys
                </h2>
                <p className="text-center text-sm md:text-base mb-4 leading-relaxed">
                  Keep track of all the amazing countries you&apos;ve visited
                  and relive the memories. It&apos;s your personal travel diary!
                </p>
                {/* Call to Action */}
                <Link
                  href="/visited"
                  className="px-4 py-2 mb-4 sm:px-5 sm:py-3 bg-[var(--color-primary)] text-white font-medium rounded-lg shadow-sm hover:bg-[var(--color-green-dark)] transition duration-300"
                >
                  View Visited List
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
