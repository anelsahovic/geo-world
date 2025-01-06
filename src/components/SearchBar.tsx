import { FaSearch } from 'react-icons/fa';

export default function SearchBar() {
  return (
    <form className="flex items-center justify-center w-full">
      <div className="relative w-full max-w-lg">
        <input
          type="text"
          placeholder="Search Country..."
          className="w-full px-4 py-2 sm:px-6 sm:py-4 rounded-full text-black placeholder-gray-500 bg-white shadow-md focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-[var(--color-primary)] transition-all duration-300"
        />
        <button
          className="absolute flex items-center justify-center top-1/2 -translate-y-1/2 right-2 bg-[var(--color-primary)] size-8 sm:size-10 rounded-full text-white hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all duration-300"
          type="submit"
        >
          <FaSearch />
        </button>
      </div>
    </form>
  );
}
