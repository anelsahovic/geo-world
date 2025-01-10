import CountryCard from '@/components/CountryCard';
import { PaginationComponent } from '@/components/PaginationComponent';
import PerPageSelection from '@/components/PerPageSelection';
import SortBySelection from '@/components/SortBySelection';
import { CountryFormatted } from '@/types/types';
import { searchCountries, sortCountries } from '@/utils/helperFunctions';
import React from 'react';

type Props = {
  countries: CountryFormatted[];
  params: {
    query?: string;
    page?: string;
    per_page?: string;
    sort?: string;
    order?: string;
  };
};

export default async function CountriesList({ countries, params }: Props) {
  const query = params.query || '';
  const page = params.page || '1';
  const per_page = params.per_page || '8';
  const sort = params.sort || '';
  const order = params.order || '';

  let countriesLength = countries.length;

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);
  let pageNumbers = Math.ceil(countriesLength / Number(per_page));

  // filter countries / search
  if (query) {
    countries = searchCountries(query, countries);
    pageNumbers = Math.ceil(countries.length / Number(per_page));
    countriesLength = countries.length;
  }

  // sort countries
  if (sort && order) {
    countries = sortCountries(countries, sort, order);
  }

  // slice countries based on pagination
  countries = countries.slice(start, end);

  return (
    <div className="py-5 px-8 w-full flex flex-col items-center justify-evenly gap-5 sm:py-10 sm:gap-10 ">
      <div className="flex flex-col gap-4 sm:flex-row items-center justify-between w-full">
        {query ? (
          <p className="sm:text-lg lg:text-xl">
            Showing results for &ldquo;
            <span className="font-semibold">{query}</span>&ldquo;
          </p>
        ) : (
          <p className=" lg:text-lg">Showing all countries</p>
        )}
        <div className="grid grid-cols-2 gap-2 p-2 ">
          <PerPageSelection />
          <SortBySelection />
        </div>
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
      <div>
        {countriesLength > 0 ? (
          <p className="text-gray-500 text-sm sm:text-base lg:text-lg font-medium text-center sm:text-left mt-2 sm:mt-0">
            Showing <span className="font-bold text-gray-700">{start + 1}</span>
            -
            <span className="font-bold text-gray-700">
              {end > countriesLength ? countriesLength : end}
            </span>{' '}
            of{' '}
            <span className="font-bold text-gray-700">{countriesLength}</span>{' '}
            countries
          </p>
        ) : (
          <p className="text-gray-500 text-sm sm:text-base lg:text-lg font-medium text-center sm:text-left mt-2 sm:mt-0">
            Showing <span className="font-bold text-gray-700">0</span> countries
          </p>
        )}
      </div>
      <PaginationComponent pageCount={pageNumbers} perPage={per_page} />
    </div>
  );
}
