import { CountryCardType } from '@/types/types';

export type Country = {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        common: string;
        official: string;
      };
    };
  };
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  capital: string[];
  subregion: string;
  area: number;
  flag: string;
  population: number;
  timezones: string[];
  coatOfArms: {
    png: string;
    svg: string;
  };
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  continents?: string[];
};

export function formatCountries(countries: Country[]): CountryCardType[] {
  return countries.map((country) => {
    // Extract the first currency
    const currencyKey = Object.keys(country.currencies || {})[0];
    const currency = country.currencies?.[currencyKey] || {
      name: 'N/A',
      symbol: 'N/A',
    };

    // Extract the first nativeName
    const nativeNameKey = Object.keys(country.name.nativeName || {})[0];
    const nativeName =
      country.name.nativeName?.[nativeNameKey]?.common || 'N/A';

    return {
      name: country.name.common,
      code: (country.flag as string) || 'N/A',
      nativeName,
      currency: {
        name: currency.name,
        symbol: currency.symbol,
      },
      capital: country.capital?.[0] || 'N/A',
      population: country.population,
      timezone: country.timezones?.[0] || 'N/A',
      flag: {
        png: country.flags?.png,
        alt: country.flags?.alt || 'No description available',
      },
      coatOfArms: country.coatOfArms?.png || 'https://placehold.co/30',
      area: country.area,
      subRegion: country.subregion || 'N/A',
    };
  });
}

export function sortCountries(
  countries: CountryCardType[],
  sort: string,
  order: string
): CountryCardType[] {
  return countries.sort((a, b) => {
    if (sort === 'name') {
      return order === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    }
    if (sort === 'population') {
      return order === 'asc'
        ? a.population - b.population
        : b.population - a.population;
    }
    if (sort === 'area') {
      return order === 'asc' ? a.area - b.area : b.area - a.area;
    }
    return 0;
  });
}
