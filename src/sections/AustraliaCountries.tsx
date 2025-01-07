import { formatCountries } from '@/utils/helperFunctions';
import CountriesList from './CountriesList';

type Props = {
  query?: string;
};

export default async function AustraliaCountries({ query }: Props) {
  const data = await fetch(
    'https://restcountries.com/v3.1/region/oceania?fields=name,capital,population,area,subregion,currencies,timezones,flags,coatOfArms,flag'
  );
  const countries = await data.json();

  const formattedCountries = formatCountries(countries);
  return <CountriesList countries={formattedCountries} query={query} />;
}
