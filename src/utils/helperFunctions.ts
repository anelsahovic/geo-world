import { CountryRaw, CountryFormatted } from '@/types/types';

export function formatCountries(countries: CountryRaw[]): CountryFormatted[] {
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
      coatOfArms:
        country.coatOfArms?.png ||
        'https://upload.wikimedia.org/wikipedia/commons/e/e5/Coat_of_arms_placeholder_with_question_mark_and_no_border.png',
      area: country.area,
      subRegion: country.subregion || 'N/A',
    };
  });
}

export function sortCountries(
  countries: CountryFormatted[],
  sort: string,
  order: string
): CountryFormatted[] {
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

export function searchCountries(
  query: string,
  countries: CountryFormatted[]
): CountryFormatted[] {
  return countries.filter((country: CountryFormatted) => {
    return (
      country.name.toLowerCase().includes(query.toLowerCase()) ||
      country.nativeName.toLowerCase().includes(query.toLowerCase())
    );
  });
}

export function saveToLocalStorage(key: string, value: string | string[]) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getFromLocalStorage(key: string) {
  return JSON.parse(localStorage.getItem(key) || '[]');
}

export function addToWishlist(name: string) {
  const wishlist: string[] = getFromLocalStorage('wishlist');
  wishlist.push(name);
  saveToLocalStorage('wishlist', wishlist);
}

export function removeFromWishlist(name: string) {
  const wishlist: string[] = getFromLocalStorage('wishlist');
  const filteredWishlist = wishlist.filter((item) => item !== name);
  saveToLocalStorage('wishlist', filteredWishlist);
}

export function addToVisited(name: string) {
  const visited: string[] = getFromLocalStorage('visited');
  visited.push(name);
  saveToLocalStorage('visited', visited);
}

export function removeFromVisited(name: string) {
  const visited: string[] = getFromLocalStorage('visited');
  const filteredVisitedList = visited.filter((item) => item !== name);
  saveToLocalStorage('visited', filteredVisitedList);
}
