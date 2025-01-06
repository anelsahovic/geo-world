import ContinentHero from '@/sections/ContinentHero';
import { continentDataType } from '@/types/types';

const australiaData: continentDataType = {
  title: 'Australia',
  description:
    'Australia, the smallest continent and largest island, is known for its unique wildlife, vast outback, and vibrant cities. It spans Oceania, including Australia and surrounding islands in the Pacific Ocean.',
  stats: [
    { title: 'Countries', value: '14' },
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
    </div>
  );
}
