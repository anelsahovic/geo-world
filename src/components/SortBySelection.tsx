'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

export default function SortBySelection() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const createPageURL = (sortBy: string) => {
    // Create a new URLSearchParams object and update the per_page parameter
    let sort = '';
    let order = '';
    if (sortBy) {
      [sort, order] = sortBy.split('_');
    }
    const params = new URLSearchParams(searchParams);
    params.set('sort', sort.toString());
    params.set('order', order.toString());

    // Update the URL with the new query parameter
    router.push(`${window.location.pathname}?${params.toString()}`);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    createPageURL(e.target.value);
  };

  return (
    <form className="flex flex-col items-start">
      <label
        htmlFor="sortBy"
        className="text-sm sm:text-base md:text-lg font-medium text-gray-700 whitespace-nowrap"
      >
        Sort by:
      </label>
      <select
        id="sortBy"
        onChange={handleSortChange}
        className="block py-2 px-2 w-full text-sm sm:text-base lg:text-lg text-gray-500 bg-transparent border-0 border-b-2 border-zinc-400 appearance-none focus:outline-none focus:ring-0 focus:border-green-500"
        defaultValue={''}
      >
        <option value="">Default</option>
        <option value="name_asc">Name (A → Z)</option>
        <option value="name_dsc">Name (Z → A)</option>
        <option value="population_asc">Population (Low → High)</option>
        <option value="population_dsc">Population (High → Low)</option>
        <option value="area_asc">Area (Small → Large)</option>
        <option value="area_dsc">Area (Large → Small)</option>
      </select>
    </form>
  );
}
