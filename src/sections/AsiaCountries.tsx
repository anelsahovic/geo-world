import { formatCountries } from '@/utils/helperFunctions';
import CountriesList from './CountriesList';

export default async function AsiaCountries() {
  const data = await fetch(
    'https://restcountries.com/v3.1/region/asia?fields=name,capital,population,area,subregion,currencies,timezones,flags,coatOfArms,flag'
  );
  const countries = await data.json();

  const formattedCountries = formatCountries(countries);
  return <CountriesList countries={formattedCountries} />;
}
