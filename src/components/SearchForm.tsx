import Form from 'next/form';
import { IoSearch } from 'react-icons/io5';
import SearchFormReset from './SearchFormReset';

type Props = {
  page: string;
  query?: string | undefined;
};

export default function SearchForm({ page, query }: Props) {
  return (
    <Form
      action={page}
      className="flex items-center justify-center w-full search-form"
      scroll={false}
    >
      <div className="relative w-full ">
        <input
          type="text"
          placeholder="Search Country..."
          className="w-full px-4 py-3 sm:px-6 sm:py-4 rounded-full text-black placeholder-gray-500 bg-white shadow-md focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-[var(--color-primary)] transition-all duration-300"
          name="query"
          defaultValue={query}
        />

        <div className="absolute  top-1/2 -translate-y-1/2 right-2 flex items-center justify-between gap-2">
          {query && <SearchFormReset page={page} />}
          <button
            className="flex items-center justify-center bg-[var(--color-primary)] size-8 sm:size-10 rounded-full text-white hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all duration-300"
            type="submit"
          >
            <IoSearch />
          </button>
        </div>
      </div>
    </Form>
  );
}
