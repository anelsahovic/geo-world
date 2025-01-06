import ContinentHero from '@/sections/ContinentHero';
import { continentDataType } from '@/types/types';

const asiaData: continentDataType = {
  title: 'Asia',
  description:
    "Asia is the world's largest and most populous continent. Covering about 44.58 million km² and home to over 4.7 billion people, it accounts for 60% of the global population and is a cradle of ancient civilizations and modern innovations.",
  stats: [
    { title: 'Countries', value: '49' },
    { title: 'Population', value: '4.7 billion' },
    { title: 'Land Area', value: '44.58 million km²' },
    { title: 'Languages', value: '2300+' },
    { title: 'Population Density', value: '106 / km²' },
    { title: 'Largest Country', value: 'Russia' },
  ],
  imageUrl: '/wallpapers/asia_wallpaper.jpeg',
};

export default function AsiaRoute() {
  return (
    <div className="flex flex-col items-center justify-center w-full z-0">
      <ContinentHero data={asiaData} />
    </div>
  );
}
