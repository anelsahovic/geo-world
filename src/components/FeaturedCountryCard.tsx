import { FeaturedCountry } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  country: FeaturedCountry;
};

export default function FeaturedCountryCard({ country }: Props) {
  return (
    <div className="flex flex-col items-start justify-between bg-slate-800 text-white rounded-lg shadow-lg p-6 w-full h-[550px] transition-transform ">
      {/* Flag */}
      <div className="w-[200px] h-[200px] flex items-center justify-center mb-4 overflow-hidden rounded-lg mx-auto">
        <Image
          src={country.flag}
          alt={`${country.name} Flag`}
          className="w-full h-full object-cover"
          width={200}
          height={200}
        />
      </div>

      {/* Category Badge */}
      <div className="bg-[var(--color-primary)] text-white text-xs font-semibold uppercase px-3 py-1 rounded-full">
        {country.category}
      </div>

      {/* Country Name */}
      <h3 className="text-2xl font-bold mt-4">{country.name}</h3>

      {/* Details */}
      <ul className="text-sm mt-2 space-y-1">
        <li>
          <strong>Population:</strong> {country.population}
        </li>
        <li>
          <strong>Area:</strong> {country.area}
        </li>
        <li>
          <strong>Capital:</strong> {country.capital}
        </li>
      </ul>

      {/* Interesting Fact */}
      <p className="mt-4 text-sm leading-relaxed">{country.interestingFact}</p>

      {/* Link */}
      <Link
        href={`/${country.name.toLowerCase().replace(/\s+/g, '-')}`}
        className="mt-2 inline-block bg-[var(--color-primary)] text-white text-sm font-medium px-4 py-2 rounded-lg transition hover:bg-[var(--color-green-dark)]"
      >
        Explore {country.name}
      </Link>
    </div>
  );
}
