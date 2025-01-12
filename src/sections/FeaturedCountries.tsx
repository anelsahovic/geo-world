'use client';

import FeaturedCountryCard from '@/components/FeaturedCountryCard';
import { FeaturedCountry } from '@/types/types';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const featuredCountries: FeaturedCountry[] = [
  {
    name: 'China',
    flag: 'https://flagcdn.com/w320/cn.png',
    category: 'Most Populous Country',
    population: '1.44 billion',
    area: '9,596,961 km²',
    capital: 'Beijing',
    interestingFact:
      "China is the world's most populous country, with over 1.4 billion people. It has a rich history and is known for its ancient civilization, as well as its modern economic growth.",
  },
  {
    name: 'Russia',
    flag: 'https://flagcdn.com/w320/ru.png',
    category: 'Largest Country by Area',
    population: '145.9 million',
    area: '17,098,242 km²',
    capital: 'Moscow',
    interestingFact:
      "Russia is the largest country by land area, covering more than one-eighth of Earth's inhabited land. Its vast size includes tundra, forests, and mountain ranges, spanning 11 time zones.",
  },
  {
    name: 'Vatican City',
    flag: 'https://flagcdn.com/w320/va.png',
    category: 'Smallest Country by Area',
    population: 'Approximately 800 people',
    area: '44 hectares (0.17 square miles)',
    capital: 'Vatican City (the entire country is a city-state)',
    interestingFact:
      'Vatican City is the smallest country in the world, entirely landlocked within the city of Rome, Italy. It is the spiritual and administrative center of the Roman Catholic Church, home to the Pope.',
  },
];

export default function FeaturedCountries() {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex: number) => (prevIndex + 1) % positionIndexes.length
      );
      return updatedIndexes;
    });
  };

  const handlePrevious = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex: number) =>
          (prevIndex - 1 + positionIndexes.length) % positionIndexes.length
      );
      return updatedIndexes;
    });
  };

  const positions = ['center', 'left', 'right'];

  const cardVariants = {
    center: { x: '0%', scale: 1, zIndex: 5 },
    left: { x: '-50%', scale: 0.7, zIndex: 3 },
    right: { x: '50%', scale: 0.7, zIndex: 3 },
  };

  return (
    <div
      id="featured-countries"
      className="w-full min-h-screen flex flex-col gap-4 md:gap-2 items-center pt-10 md:pt-5 pb-16 px-4 md:px-6 relative"
    >
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-5xl md:text-6xl font-bold text-slate-800">
          Featured Countries
        </h2>
        <p className="md:text-lg">
          Explore some of the most remarkable countries in the world!
        </p>
      </div>

      {/* Buttons and Carousel Section */}
      <div className="flex flex-col items-center justify-center gap-4 md:gap-2 w-full">
        {/* Buttons */}
        <div className="flex items-center justify-center gap-4">
          <button
            className="bg-[var(--color-primary)] p-2 rounded-full text-white hover:bg-[var(--color-green-dark)] transition duration-300"
            onClick={handlePrevious}
          >
            <FaAngleLeft />
          </button>

          <button
            className="bg-[var(--color-primary)] p-2 rounded-full text-white hover:bg-[var(--color-green-dark)] transition duration-300"
            onClick={handleNext}
          >
            <FaAngleRight />
          </button>
        </div>

        {/* Carousel Section */}
        <div className="relative flex items-center justify-center w-full">
          {/* Single country for small screens */}
          <div className="block md:hidden w-full">
            <FeaturedCountryCard
              country={featuredCountries[positionIndexes[0]]}
            />
          </div>

          {/* Multi-country carousel for medium+ screens */}
          <div className="hidden md:flex items-center justify-center gap-4 w-full relative h-[400px]">
            {featuredCountries.map((country, index) => (
              <motion.div
                key={country.capital}
                initial="center"
                animate={positions[positionIndexes[index]]}
                variants={cardVariants}
                transition={{ duration: 0.5 }}
                style={{
                  width: '40%',
                  position: 'absolute',
                }}
                className="top-0"
              >
                <FeaturedCountryCard country={country} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
