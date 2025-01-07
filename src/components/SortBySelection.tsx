export default function SortBySelection() {
  return (
    <form className="flex flex-col sm:flex-row items-start sm:items-center sm:gap-2">
      <label
        htmlFor="sortBy"
        className="text-sm sm:text-base md:text-lg font-medium text-gray-700 whitespace-nowrap"
      >
        Sort by:
      </label>
      <select
        id="sortBy"
        // value={sortOption}
        // onChange={handleSortChange}
        className="p-2 bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm sm:text-base rounded-lg focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] block w-full"
      >
        <option value="default">Default</option>
        <option value="name">Name</option>
        <option value="population">Population</option>
        <option value="area">Area</option>
      </select>
    </form>
  );
}
