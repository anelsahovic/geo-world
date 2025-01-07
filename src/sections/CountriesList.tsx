import CountryCard from '@/components/CountryCard';
import SortBySelection from '@/components/SortBySelection';
import { CountryCardType } from '@/types/types';
import React from 'react';

type Props = {
  countries: CountryCardType[];
};

export default function CountriesList({ countries }: Props) {
  return (
    <div className="py-5 px-8 w-full flex flex-col items-center justify-evenly gap-5 sm:py-10 sm:gap-10 ">
      <div className="flex items-center justify-between w-full">
        <p className=" lg:text-lg">Showing all countries</p>
        <SortBySelection />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {countries.map((country) => (
          <CountryCard country={country} key={country.name} />
        ))}
      </div>
    </div>
  );
}
