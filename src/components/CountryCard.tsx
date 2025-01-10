import { CountryFormatted } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import AddToWishlistButton from './AddToWishlistButton';
import AddToVisitedButton from './AddToVisitedButton';

type Props = {
  country: CountryFormatted;
};

export default function CountryCard({ country }: Props) {
  return (
    <div className="bg-[#f5f7f2] rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-500">
      <Link href={`/${country.name}`} className="block">
        <div className="flex flex-col items-center overflow-hidden h-[28rem]">
          {/* Top Info: Coat of Arms, Name, and Code */}
          <div className="flex items-center justify-between p-4 w-full border-b border-gray-200 h-28 ">
            <div className="size-9 flex items-center justify-center">
              <Image
                src={
                  country.coatOfArms.length > 0
                    ? country.coatOfArms
                    : 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Coat_of_arms_placeholder_with_question_mark_and_no_border.png'
                }
                alt=""
                width={30}
                height={30}
                className="object-contain"
              />
            </div>

            <h2 className="font-semibold text-lg text-center truncate text-[var(--color-green-dark)]">
              {country.nativeName}
            </h2>
            <div className="py-1 px-3 text-sm uppercase font-bold rounded-lg bg-slate-200 text-slate-800">
              {country.code}
            </div>
          </div>

          {/* Flag */}
          <div className="flex items-center justify-center mt-4  h-[200px] overflow-hidden ">
            <Image
              src={
                country.flag.png.length > 0
                  ? country.flag.png
                  : 'https://preview.redd.it/flag-of-the-day-the-placeholder-flag-wikipedia-sometimes-v0-7vzha41nzcsa1.png?auto=webp&s=e9e55515a64ac99cf18e7c7d3950e46f349eb30d'
              }
              alt={country.flag.alt}
              width={150}
              height={100}
              className="object-contain shadow border border-gray-200"
            />
          </div>

          {/* Main Content */}
          <div className="p-4 text-center flex flex-col justify-start h-full w-full">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              {country.name}
            </h2>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm text-gray-600 border-t pt-2">
              <div className="flex flex-col items-center">
                <span className="font-semibold uppercase text-[var(--color-green-dark)]">
                  Capital
                </span>
                <span>{country.capital || 'N/A'}</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-semibold uppercase text-[var(--color-green-dark)]">
                  Population
                </span>
                <span>{country.population.toLocaleString() || 'N/A'}</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-semibold uppercase text-[var(--color-green-dark)]">
                  Area
                </span>
                <span>{country.area.toLocaleString()} km²</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-semibold uppercase text-[var(--color-green-dark)]">
                  Subregion
                </span>
                <span>{country.subRegion || 'N/A'}</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-semibold uppercase text-[var(--color-green-dark)]">
                  Currency
                </span>
                <span>
                  {country.currency.name} ({country.currency.symbol})
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-semibold uppercase text-[var(--color-green-dark)]">
                  Time Zone
                </span>
                <span>{country.timezone || 'N/A'}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* Action Buttons */}
      <div className="w-full flex items-center justify-center md:justify-end p-4 gap-6 md:gap-2">
        <AddToWishlistButton name={country.name} />
        <AddToVisitedButton name={country.name} />
      </div>
    </div>
  );
}
