import { formatCountries } from '@/utils/helperFunctions';
import CountriesList from './CountriesList';

type Props = {
  params: {
    query?: string;
    page?: string;
    per_page?: string;
  };
};

export default async function AustraliaCountries({ params }: Props) {
  const data = await fetch(
    'https://restcountries.com/v3.1/region/oceania?fields=name,capital,population,area,subregion,currencies,timezones,flags,coatOfArms,flag'
  );
  const countries = await data.json();

  const formattedCountries = formatCountries(countries);
  return <CountriesList countries={formattedCountries} params={params} />;
}
