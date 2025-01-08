'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

export default function PerPageSelection() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const createPageURL = (perPage: number | string) => {
    // Create a new URLSearchParams object and update the per_page parameter
    const params = new URLSearchParams(searchParams);
    params.set('per_page', perPage.toString());

    // Update the URL with the new query parameter
    router.push(`${window.location.pathname}?${params.toString()}`);
  };

  const handlePerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    createPageURL(e.target.value);
  };

  return (
    <form className="flex flex-col items-start  ">
      <label
        htmlFor="perPage"
        className="text-sm sm:text-base md:text-lg font-medium text-gray-700 whitespace-nowrap"
      >
        Per page:
      </label>
      <select
        id="perPage"
        onChange={handlePerPageChange}
        className="block py-2 px-2 w-full text-sm sm:text-base lg:text-lg text-gray-500 bg-transparent border-0 border-b-2 border-zinc-400 appearance-none focus:outline-none focus:ring-0 focus:border-green-500"
        defaultValue={8}
      >
        <option value="4">4</option>
        <option value="8">8</option>
        <option value="16">16</option>
        <option value="32">32</option>
      </select>
    </form>
  );
}
