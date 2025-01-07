import Loading from '@/components/Loading';
import AfricaCountries from '@/sections/AfricaCountries';
import ContinentHero from '@/sections/ContinentHero';
import { ContinentDataType } from '@/types/types';
import { Suspense } from 'react';

const africaData: ContinentDataType = {
  title: 'Africa',
  description:
    "Africa is the world's second-largest and second-most populous continent after Asia. Covering 20% of Earth's land area and hosting 1.4 billion people, it's a land of diversity, culture, and natural wonders.",
  stats: [
    { title: 'Countries', value: '54' },
    { title: 'Population', value: '1.4 billion' },
    { title: 'Land Area', value: '30.37 million km²' },
    { title: 'Languages', value: '1250-3000' },
    { title: 'Population Density', value: '39.8 / km²' },
    { title: 'Largest Country', value: 'Algeria' },
  ],
  imageUrl: '/wallpapers/africa_wallpaper.jpeg',
};

export default function AfricaRoute() {
  return (
    <div className="flex flex-col items-center justify-center w-full z-0">
      <ContinentHero data={africaData} />
      <Suspense fallback={<Loading />}>
        <AfricaCountries />
      </Suspense>
    </div>
  );
}