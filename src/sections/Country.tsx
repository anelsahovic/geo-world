import { CountryFormattedDetailed } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import { MapProvider } from './MapProvider';
import { MapComponent } from '../components/MapComponent';
import AddToWishlistButton from '@/components/AddToWishlistButton';
import AddToVisitedButton from '@/components/AddToVisitedButton';

interface CountryProps {
  countryName: string;
}

export default async function Country({ countryName }: CountryProps) {
  const fetchCountryData = async (countryName: string) => {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch data for country: ${countryName}`);
    }

    const data = await response.json();
    return data[0]; // Return the first match
  };

  const country: CountryFormattedDetailed = await fetchCountryData(countryName);
  const {
    name,
    independent,
    status,
    currencies,
    capital,
    region,
    subregion,
    languages,
    latlng,
    maps,
    area,
    population,
    timezones,
    continents,
    flags,
    coatOfArms,
    startOfWeek,
    tld,
    car,
  } = country;

  const nativeName = Object.values(name.nativeName || {})
    .map((name) => name.common)
    .join(', ');

  const currencyList = Object.values(currencies || {})
    .map((currency) => `${currency.name} (${currency.symbol})`)
    .join(', ');
  const languageList = Object.values(languages || {}).join(', ');

  return (
    <div className="min-h-screen p-6 ">
      {/* Header Section */}
      <header className="flex flex-col sm:flex-row items-center justify-between mb-6 bg-[#f3f6f1] shadow-lg rounded-lg border p-6 hover:shadow-xl transition-all">
        <Image
          src={
            coatOfArms.png
              ? coatOfArms.png
              : 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Coat_of_arms_placeholder_with_question_mark_and_no_border.png'
          }
          alt={`${name.common}`}
          width={70}
          height={70}
          className="hidden sm:block sm:w-[40px] md:w-[50px] lg:w-[60px]"
        />
        <div className="flex flex-col items-center justify-center gap-2 w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-[var(--color-green-dark)] text-center">
            {name.common}
          </h1>

          <Image
            src={
              flags.png
                ? flags.png
                : 'https://preview.redd.it/flag-of-the-day-the-placeholder-flag-wikipedia-sometimes-v0-7vzha41nzcsa1.png?auto=webp&s=e9e55515a64ac99cf18e7c7d3950e46f349eb30d'
            }
            alt={`${name.common} flag`}
            width={120}
            height={80}
            className="inline-block shadow-lg rounded-lg"
          />
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold uppercase text-[var(--color-green-dark)] text-center">
            {nativeName || 'N/A'}
          </h2>
        </div>
        <div className=" flex items-center justify-center md:justify-end p-4 gap-6 md:gap-2">
          <AddToWishlistButton name={name.common} />
          <AddToVisitedButton name={name.common} />
        </div>
      </header>

      {/* Main Content */}
      <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Google Maps Placeholder */}
        <section className="col-span-1 md:col-span-2 bg-[#f0f4f1] shadow-lg p-6 rounded-md">
          <h2 className="text-2xl font-semibold mb-6 text-[var(--color-green-dark)]">
            Map
          </h2>
          <div className="w-full h-64 bg-[#d1e7d8] rounded-md flex items-center justify-center shadow-md">
            <MapProvider>
              <MapComponent lat={latlng[0]} lng={latlng[1]} />
            </MapProvider>
          </div>
        </section>

        {/* Geography */}
        <section className="bg-[#f5f7f2] shadow-lg p-6 rounded-md">
          <h2 className="text-2xl font-semibold mb-6 text-[var(--color-green-dark)]">
            Geography
          </h2>
          <p className="text-[#4a6e55]">
            <strong>Area:</strong> {area.toLocaleString()} km²
          </p>
          <p className="text-[#4a6e55]">
            <strong>Population:</strong> {population.toLocaleString()}
          </p>
          <p className="text-[#4a6e55]">
            <strong>Coordinates:</strong> {latlng.join(', ')}
          </p>
          <p className="text-[#4a6e55]">
            <strong>Timezones:</strong> {timezones.join(', ')}
          </p>
          <p className="text-[#4a6e55]">
            <strong>Continents:</strong> {continents.join(', ')}
          </p>
          <div className="flex flex-col justify-center items-start gap-2 mt-10">
            <Link
              href={maps.googleMaps}
              className="text-[#3a80a7] hover:underline"
            >
              Open in Google Maps
            </Link>
            <Link
              href={maps.openStreetMaps}
              className="text-[#3a80a7] hover:underline"
            >
              Open in Open Street Maps
            </Link>
          </div>
        </section>

        {/* General Info */}
        <section className="bg-[#f5f7f2] border border-[#e2e8d6] shadow-lg p-6 rounded-xl hover:shadow-md transition duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--color-green-dark)]">
            General Info
          </h2>
          <div className="grid grid-cols-2 gap-4 text-[#3d3d3d]">
            <div className="p-3 bg-[#e9f3e4] rounded-lg shadow-inner">
              <p className="font-medium text-[#4d774e]">Independent:</p>
              <p>{independent ? 'Yes' : 'No'}</p>
            </div>
            <div className="p-3 bg-[#e9f3e4] rounded-lg shadow-inner">
              <p className="font-medium text-[#4d774e]">Status:</p>
              <p className="capitalize">{status.replace('-', ' ')}</p>
            </div>
            <div className="p-3 bg-[#e9f3e4] rounded-lg shadow-inner">
              <p className="font-medium text-[#4d774e]">Region:</p>
              <p>{region}</p>
            </div>
            <div className="p-3 bg-[#e9f3e4] rounded-lg shadow-inner">
              <p className="font-medium text-[#4d774e]">Subregion:</p>
              <p>{subregion}</p>
            </div>
            <div className="p-3 bg-[#e9f3e4] rounded-lg shadow-inner">
              <p className="font-medium text-[#4d774e]">Capital City:</p>
              <p>{capital.join(', ') || 'N/A'}</p>
            </div>
            <div className="p-3 bg-[#e9f3e4] rounded-lg shadow-inner">
              <p className="font-medium text-[#4d774e]">Domains:</p>
              {tld.map((domain: string) => (
                <p key={domain}>{domain || 'N/A'}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Economy and Culture */}
        <section className="bg-[#f5f7f2] border border-[#e2e8d6] shadow-sm p-6 rounded-xl hover:shadow-md transition duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--color-green-dark)]">
            Economy & Culture
          </h2>
          <div className="grid grid-cols-2 gap-4 text-[#3d3d3d]">
            <div className="p-3 bg-[#e9f3e4] rounded-lg shadow-inner">
              <p className="font-medium text-[#4d774e]">Currencies:</p>
              <p>{currencyList || 'N/A'}</p>
            </div>
            <div className="p-3 bg-[#e9f3e4] rounded-lg shadow-inner">
              <p className="font-medium text-[#4d774e]">Languages:</p>
              <p>{languageList || 'N/A'}</p>
            </div>
            <div className="p-3 bg-[#e9f3e4] rounded-lg shadow-inner ">
              <p className="font-medium text-[#4d774e]">Start of the Week:</p>
              <p className="capitalize">{startOfWeek || 'N/A'}</p>
            </div>
            <div className="p-3 bg-[#e9f3e4] rounded-lg shadow-inner ">
              <p className="font-medium text-[#4d774e]">Driving on:</p>
              <p className="capitalize">{car.side || 'N/A'} side</p>
            </div>
          </div>
        </section>

        {/* Flags */}
        <section className="bg-[#f5f7f2] border border-[#e2e8d6] shadow-sm p-6 rounded-xl hover:shadow-md transition duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold mb-6 text-[var(--color-green-dark)]">
            Flags
          </h2>
          <div className="flex justify-center p-4 bg-[#e9f3e4] rounded-lg shadow-inner">
            <Image
              src={flags.png}
              alt={`${name.common} flag`}
              width={160}
              height={100}
              className="w-40 h-auto shadow-lg rounded"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
