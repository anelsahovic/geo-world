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

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    createPageURL(e.target.value);
  };

  return (
    <form className="flex flex-col items-start  sm:gap-2">
      <label
        htmlFor="sortBy"
        className="text-sm sm:text-base md:text-lg font-medium text-gray-700 whitespace-nowrap"
      >
        Per page:
      </label>
      <select
        id="sortBy"
        onChange={handleSortChange}
        className="p-2 bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm sm:text-base rounded-lg focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] block w-full"
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
