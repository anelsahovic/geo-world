'use client';

import ContinentCarouselCard from '@/components/ContinentCarouselCard';
import ScrollIndicator from '@/components/ScrollIndicator';

const continents = [
  {
    title: 'AFRICA',
    image: '/wallpapers/africa_wallpaper.jpeg',
    href: '/africa',
  },
  {
    title: 'EUROPE',
    image: '/wallpapers/europe_wallpaper.jpg',
    href: '/europe',
  },
  {
    title: 'ASIA',
    image: '/wallpapers/asia_wallpaper.jpeg',
    href: '/asia',
  },
  {
    title: 'AUSTRALIA',
    image: '/wallpapers/australia_wallpaper.jpg',
    href: '/australia',
  },
  {
    title: 'NORTH AMERICA',
    image: '/wallpapers/north_america_wallpaper.jpg',
    href: '/north-america',
  },
  {
    title: 'SOUTH AMERICA',
    image: '/wallpapers/south_america_wallpaper.jpg',
    href: '/south-america',
  },
];

export default function ExploreContinents() {
  return (
    <div
      id="explore-continents"
      className="w-full h-full flex flex-col md:flex-row gap-4 items-start  py-10 px-6"
    >
      <div className="flex flex-col items-start justify-start gap-2 md:w-1/3">
        <h2 className="text-5xl md:text-6xl font-bold text-slate-800">
          Explore Continents
        </h2>
        <p className="md:text-lg">
          Discover the diversity of our planet! Learn about unique cultures,
          landscapes, and history across the globe.
        </p>
        <ScrollIndicator />
      </div>

      <div className="overflow-x-auto w-full md:w-2/3 flex gap-6 scroll-smooth scrollbar-hide ">
        {continents.map((continent, index) => (
          <ContinentCarouselCard key={index} data={continent} />
        ))}
      </div>
    </div>
  );
}
