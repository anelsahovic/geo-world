import SearchForm from '@/components/SearchForm';
import { ContinentDataType } from '@/types/types';
import Image from 'next/image';
import React from 'react';

type Props = {
  data: ContinentDataType;
  query?: string;
};

export default function ContinentHero({ query, data }: Props) {
  const { page, title, description, stats, imageUrl } = data;
  return (
    <div className="relative w-full h-screen overflow-hidden py-10">
      {/* Background Image */}
      <Image
        src={imageUrl}
        alt={title + ' wallpaper'}
        width={1000}
        height={1000}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay for dimming */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

      {/* Content on top of the image */}
      <div className="relative flex flex-col items-center justify-center h-full text-center p-6 gap-10 ">
        <div className="flex flex-col items-center justify-center gap-4 ">
          <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-lg">
            {title}
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-white max-w-3xl drop-shadow-md leading-relaxed">
            {description}
          </p>
        </div>

        {/* Stats Section */}
        <div className="flex flex-col items-center justify-center  p-6 bg-white/10 rounded-lg backdrop-blur-md shadow-lg">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
            Quick Stats
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-white text-sm sm:text-base">
            {stats.map(({ title, value }) => (
              <div key={title} className="flex flex-col items-center ">
                <span className="font-semibold text-base sm:text-lg">
                  {title}
                </span>
                <span className="text-[var(--color-background)]">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Search Input */}
        <div className="w-full max-w-lg">
          <SearchForm page={page.toLowerCase()} query={query} />
        </div>
      </div>
    </div>
  );
}
