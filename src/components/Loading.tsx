import React from 'react';
import { BiLoaderCircle } from 'react-icons/bi';

export default function Loading() {
  return (
    <div className="h-full w-full flex items-center justify-center gap-1 text-[var(--color-primary)]">
      <BiLoaderCircle className="size-5 animate-spin duration-1000" />
      <p className="animate-pulse duration-300 text-xl font-semibold">
        Loading...
      </p>
    </div>
  );
}
