'use client';

import Link from 'next/link';
import { FaRegTrashAlt } from 'react-icons/fa';

type Props = {
  page: string;
};

export default function SearchFormReset({ page }: Props) {
  const resetForm = () => {
    const form = document.querySelector('.search-form') as HTMLFormElement;
    if (form) {
      form.reset();
    }
  };
  return (
    <button
      className="flex items-center justify-center bg-[var(--color-primary)] size-8 sm:size-10 rounded-full text-white hover:opacity-80 transition-all duration-300"
      type="submit"
      onClick={resetForm}
    >
      <Link href={page}>
        <FaRegTrashAlt />
      </Link>
    </button>
  );
}
