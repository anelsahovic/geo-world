import { CountryCardType } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import { LuMapPinCheck, LuStar } from 'react-icons/lu';

type Props = {
  country: CountryCardType;
};

export default function CountryCard({ country }: Props) {
  return (
    <Link
      href="#"
      className="hover:scale-105 hover:shadow-lg transition-transform duration-500"
    >
      <div className="flex flex-col items-center bg-white rounded-xl shadow-md overflow-hidden h-[31rem]">
        {/* Top Info: Coat of Arms, Name, and Code */}
        <div className="flex items-center justify-between p-4 w-full border-b border-gray-200 h-28 ">
          <div className="size-9 flex items-center justify-center">
            <Image
              src={country.coatOfArms}
              alt=""
              width={30}
              height={30}
              className="object-contain"
            />
          </div>

          <h2 className="font-semibold text-lg text-center truncate">
            {country.nativeName}
          </h2>
          <div className="py-1 px-3 text-sm uppercase font-bold rounded-lg bg-slate-200 text-slate-800">
            {country.code}
          </div>
        </div>

        {/* Flag */}
        <div className="flex items-center justify-center mt-4  h-[200px] overflow-hidden ">
          <Image
            src={country.flag.png}
            alt={country.flag.alt}
            width={150}
            height={100}
            className="object-contain  shadow border border-gray-200"
          />
        </div>

        {/* Main Content */}
        <div className="p-4 text-center flex flex-col justify-start h-full w-full">
          {/* Country Name */}
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            {country.name}
          </h2>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm text-gray-600 border-t pt-2">
            <div className="flex flex-col items-center">
              <span className="font-semibold uppercase">Capital</span>
              <span>{country.capital || 'N/A'}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-semibold uppercase">Population</span>
              <span>{country.population.toLocaleString() || 'N/A'}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-semibold uppercase">Area</span>
              <span>{country.area.toLocaleString()} km²</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-semibold uppercase">Subregion</span>
              <span>{country.subRegion || 'N/A'}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-semibold uppercase">Currency</span>
              <span>
                {country.currency.name} ({country.currency.symbol})
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-semibold uppercase">Time Zone</span>
              <span>{country.timezone || 'N/A'}</span>
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-center md:justify-end p-2 pb-4 gap-6 md:gap-2">
          <button className="p-2 lg:p-2.5 bg-yellow-50 border-2 border-yellow-500 rounded-full text-yellow-500 hover:bg-yellow-500 hover:text-white transition duration-300">
            <LuStar className="size-5" />
          </button>
          <button className="p-2 lg:p-2.5 bg-lime-50 border-2 border-lime-500 rounded-full text-lime-500 hover:bg-lime-500 hover:text-white transition duration-300">
            <LuMapPinCheck className="size-5" />
          </button>
        </div>
      </div>
    </Link>
  );
}
