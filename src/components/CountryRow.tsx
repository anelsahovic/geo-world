import { CountryFormatted } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegTrashAlt } from 'react-icons/fa';

type Props = {
  country: CountryFormatted;
  index: number;
};

export default function CountryRow({ country }: Props) {
  return (
    <div className="flex items-center justify-between p-2">
      <div className="flex items-center gap-2">
        <button className="font-bold text-xl">
          <FaRegTrashAlt />
        </button>
        <div className="flex items-center gap-2">
          <div>
            <Image
              src={
                country.flag.png.length > 0
                  ? country.flag.png
                  : 'https://preview.redd.it/flag-of-the-day-the-placeholder-flag-wikipedia-sometimes-v0-7vzha41nzcsa1.png?auto=webp&s=e9e55515a64ac99cf18e7c7d3950e46f349eb30d'
              }
              alt={country.flag.alt}
              width={50}
              height={100}
              className="object-contain  shadow border border-gray-200"
            />
          </div>
          <h2 className="font-semibold text-xl">{country.name}</h2>
        </div>
      </div>

      <div>
        <Link
          href={`/${country.name}`}
          className="bg-[var(--color-primary)] text-white p-2 rounded-lg"
        >
          Show details
        </Link>
      </div>
    </div>
  );
}
