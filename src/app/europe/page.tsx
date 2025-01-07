import Loading from '@/components/Loading';
import ContinentHero from '@/sections/ContinentHero';
import EuropeCountries from '@/sections/EuropeCountries';
import { ContinentDataType } from '@/types/types';
import { Suspense } from 'react';

const europeData: ContinentDataType = {
  title: 'Europe',
  description:
    'Europe, the cradle of Western civilization, is known for its rich history, cultural diversity, and modern innovations. It is the second smallest continent but densely populated and influential globally.',
  stats: [
    { title: 'Countries', value: '53' },
    { title: 'Population', value: '748 million' },
    { title: 'Land Area', value: '10.18 million km²' },
    { title: 'Languages', value: '200+' },
    { title: 'Population Density', value: '74 / km²' },
    { title: 'Largest Country', value: 'Russia (European part)' },
  ],
  imageUrl: '/wallpapers/europe_wallpaper.jpg',
};

export default async function EuropeRoute() {
  return (
    <div className="flex flex-col items-center justify-center w-full z-0">
      <ContinentHero data={europeData} />
      <Suspense fallback={<Loading />}>
        <EuropeCountries />
      </Suspense>
    </div>
  );
}
