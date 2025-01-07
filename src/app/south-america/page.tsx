import Loading from '@/components/Loading';
import ContinentHero from '@/sections/ContinentHero';
import SouthAmericaCountries from '@/sections/SouthAmericaCountries';
import { ContinentDataType } from '@/types/types';
import { Suspense } from 'react';

const southAmericaData: ContinentDataType = {
  page: '/south-america',
  title: 'South America',
  description:
    'South America is a continent known for its rich biodiversity, vibrant cultures, and diverse landscapes, from the Amazon rainforest to the Andes mountains. It is home to numerous indigenous peoples, historic sites, and booming urban centers.',
  stats: [
    { title: 'Countries', value: '14' },
    { title: 'Population', value: '433 million' },
    { title: 'Land Area', value: '17.84 million km²' },
    {
      title: 'Languages',
      value: '400',
    },
    { title: 'Population Density', value: '24 / km²' },
    { title: 'Largest Country', value: 'Brazil' },
  ],
  imageUrl: '/wallpapers/south_america_wallpaper.jpg',
};

type Props = {
  searchParams: Promise<{ query?: string; page?: string; per_page?: string }>;
};

export default async function SouthAmericaRoute({ searchParams }: Props) {
  const params = (await searchParams) || {};
  return (
    <div className="flex flex-col items-center justify-center w-full z-0">
      <ContinentHero data={southAmericaData} query={params.query} />
      <Suspense fallback={<Loading />}>
        <SouthAmericaCountries params={params} />
      </Suspense>
    </div>
  );
}
