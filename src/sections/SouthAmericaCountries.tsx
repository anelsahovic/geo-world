import { Country, formatCountries } from '@/utils/helperFunctions';
import CountriesList from './CountriesList';

type Props = {
  query?: string;
};

export default async function SouthAmericaCountries({ query }: Props) {
  const data = await fetch(
    'https://restcountries.com/v3.1/region/americas?fields=name,capital,population,area,subregion,currencies,timezones,flags,coatOfArms,flag,continents'
  );
  const countries = await data.json();

  const filteredCountries = countries.filter((country: Country) =>
    country.continents?.includes('South America')
  );

  const formattedCountries = formatCountries(filteredCountries);
  return <CountriesList countries={formattedCountries} query={query} />;
}
