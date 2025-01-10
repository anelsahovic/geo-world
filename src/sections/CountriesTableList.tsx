'use client';

import { PaginationComponent } from '@/components/PaginationComponent';
import PerPageSelection from '@/components/PerPageSelection';
import SearchForm from '@/components/SearchForm';
import SortBySelection from '@/components/SortBySelection';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { CountryFormatted } from '@/types/types';
import { searchCountries, sortCountries } from '@/utils/helperFunctions';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegEye, FaRegTrashAlt } from 'react-icons/fa';

type Props = {
  countries: CountryFormatted[];
  onRemove: (name: string) => void;
  params: {
    query?: string;
    page?: string;
    per_page?: string;
    sort?: string;
    order?: string;
  };
};

export default function CountriesTableList({
  countries,
  params,
  onRemove,
}: Props) {
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

  // const removeCountry = (name: string) => {
  //   if (path === '/wishlist') {
  //     removeFromWishlist(name);
  //   } else {
  //     removeFromVisited(name);
  //   }
  // };

  return (
    <div className="py-5 px-8 w-full h-full flex flex-col items-center gap-5 sm:py-10 sm:gap-10">
      {/* search,per page, sort */}
      <div className="flex flex-col gap-4 sm:flex-row items-center justify-between w-full">
        <div className="w-full max-w-lg">
          <SearchForm page="/wishlist" query={params.query} />
        </div>
        <div className="grid grid-cols-2 gap-2 p-2 w-full max-w-xs">
          <PerPageSelection />
          <SortBySelection />
        </div>
      </div>

      {/* table */}
      <div className="w-full h-full overflow-x-auto border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">#</TableHead>
              <TableHead className="hidden sm:table-cell">Flag</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="hidden sm:table-cell">Sub Region</TableHead>
              <TableHead className="hidden md:table-cell">Area</TableHead>
              <TableHead className="hidden lg:table-cell">Population</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {countries.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center">
                  <p className="font-semibold text-base sm:text-lg lg:text-2xl">
                    No countries found
                  </p>
                </TableCell>
              </TableRow>
            ) : (
              countries.map((country, index) => (
                <TableRow key={country.name}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Image
                      src={
                        country.flag.png.length > 0
                          ? country.flag.png
                          : 'https://preview.redd.it/flag-of-the-day-the-placeholder-flag-wikipedia-sometimes-v0-7vzha41nzcsa1.png?auto=webp&s=e9e55515a64ac99cf18e7c7d3950e46f349eb30d'
                      }
                      alt={country.flag.alt}
                      width={50}
                      height={100}
                      className="object-contain  shadow border border-gray-200"
                    />
                  </TableCell>
                  <TableCell>{country.name}</TableCell>
                  <TableCell className="hidden sm:table-cell">
                    {country.subRegion}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{`${country.area.toLocaleString()} km²`}</TableCell>
                  <TableCell className="hidden lg:table-cell">
                    {country.population.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => onRemove(country.name)}
                        className="flex items-center gap-1 bg-rose-500 hover:bg-rose-600 p-2 rounded-lg text-white shadow-md transition-all duration-200"
                      >
                        <FaRegTrashAlt className="text-sm md:text-base" />
                        <span className="hidden md:inline">Remove</span>
                      </button>
                      <Link
                        href={`/${country.name}`}
                        className="flex items-center gap-1 bg-[var(--color-primary)] hover:bg-opacity-90 p-2 rounded-lg text-white shadow-md transition-all duration-200"
                      >
                        <FaRegEye className="text-sm md:text-base" />
                        <span className="hidden md:inline">View</span>
                      </Link>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* pagination */}
      <PaginationComponent pageCount={pageNumbers} perPage={per_page} />
    </div>
  );
}
