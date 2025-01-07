import { formatCountries } from '@/utils/helperFunctions';
import CountriesList from './CountriesList';

export default async function AfricaCountries() {
  const data = await fetch(
    'https://restcountries.com/v3.1/region/africa?fields=name,capital,population,area,subregion,currencies,timezones,flags,coatOfArms,flag'
  );
  const countries = await data.json();
  console.log(countries.length);
  const formattedCountries = formatCountries(countries);
  return <CountriesList countries={formattedCountries} />;
}
