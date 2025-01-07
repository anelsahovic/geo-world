import CountryCard from '@/components/CountryCard';
import SortBySelection from '@/components/SortBySelection';
import { CountryCardType } from '@/types/types';
import React from 'react';

type Props = {
  countries: CountryCardType[];
  query?: string;
};

export default function CountriesList({ countries, query }: Props) {
  if (query) {
    const filteredCountries = countries.filter((country: CountryCardType) => {
      return (
        country.name.toLowerCase().includes(query.toLowerCase()) ||
        country.nativeName.toLowerCase().includes(query.toLowerCase())
      );
    });
    countries = filteredCountries;
  }

  return (
    <div className="py-5 px-8 w-full flex flex-col items-center justify-evenly gap-5 sm:py-10 sm:gap-10 ">
      <div className="flex items-center justify-between w-full">
        {query ? (
          <p className=" lg:text-lg">
            Showing results for &ldquo;{query}&ldquo;
          </p>
        ) : (
          <p className=" lg:text-lg">Showing all countries</p>
        )}

        <SortBySelection />
      </div>
      {countries.length === 0 && (
        <div className=" w-full flex justify-center items-center">
          <p className="font-semibold text-base sm:text-lg lg:text-2xl">
            No countries found
          </p>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {countries.map((country) => (
          <CountryCard country={country} key={country.name} />
        ))}
      </div>
    </div>
  );
}
