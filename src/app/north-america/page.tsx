import Loading from '@/components/Loading';
import ContinentHero from '@/sections/ContinentHero';
import NorthAmericaCountries from '@/sections/NorthAmericaCountries';
import { ContinentDataType } from '@/types/types';
import { Suspense } from 'react';

const northAmericaData: ContinentDataType = {
  title: 'North America',
  description:
    'North America is a continent known for its vast landscapes, diverse cultures, and economic influence. It includes countries like the United States, Canada, and Mexico, and plays a significant role in global politics, trade, and culture.',
  stats: [
    { title: 'Countries', value: '41' },
    { title: 'Population', value: '592 million' },
    { title: 'Land Area', value: '24.71 million km²' },
    {
      title: 'Languages',
      value: '1,000',
    },
    { title: 'Population Density', value: '24 / km²' },
    { title: 'Largest Country', value: 'Canada' },
  ],
  imageUrl: '/wallpapers/north_america_wallpaper.jpg',
};

export default function NorthAmericaRoute() {
  return (
    <div className="flex flex-col items-center justify-center w-full z-0">
      <ContinentHero data={northAmericaData} />
      <Suspense fallback={<Loading />}>
        <NorthAmericaCountries />
      </Suspense>
    </div>
  );
}