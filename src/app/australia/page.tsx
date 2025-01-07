import Loading from '@/components/Loading';
import AustraliaCountries from '@/sections/AustraliaCountries';
import ContinentHero from '@/sections/ContinentHero';
import { ContinentDataType } from '@/types/types';
import { Suspense } from 'react';

const australiaData: ContinentDataType = {
  title: 'Australia',
  description:
    'Australia, the smallest continent and largest island, is known for its unique wildlife, vast outback, and vibrant cities. It spans Oceania, including Australia and surrounding islands in the Pacific Ocean.',
  stats: [
    { title: 'Countries', value: '27' },
    { title: 'Population', value: '43 million' },
    { title: 'Land Area', value: '8.56 million km²' },
    { title: 'Languages', value: '250+' },
    { title: 'Population Density', value: '5 / km²' },
    { title: 'Largest Country', value: 'Australia' },
  ],
  imageUrl: '/wallpapers/australia_wallpaper.jpg',
};

export default function AustraliaRoute() {
  return (
    <div className="flex flex-col items-center justify-center w-full z-0">
      <ContinentHero data={australiaData} />
      <Suspense fallback={<Loading />}>
        <AustraliaCountries />
      </Suspense>
    </div>
  );
}