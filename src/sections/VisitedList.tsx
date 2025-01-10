'use client';

import { useEffect, useState } from 'react';
import CountriesTableList from './CountriesTableList';
import { CountryRaw, CountryFormatted } from '@/types/types';
import {
  formatCountries,
  getFromLocalStorage,
  removeFromVisited,
} from '@/utils/helperFunctions';

type Props = {
  params: {
    query?: string;
    page?: string;
    per_page?: string;
    sort?: string;
    order?: string;
  };
};

// const countries = [
//   {
//     name: 'Lesotho',
//     code: '🇱🇸',
//     nativeName: 'Lesotho',
//     currency: {
//       name: 'Lesotho loti',
//       symbol: 'L',
//     },
//     capital: 'Maseru',
//     population: 2142252,
//     timezone: 'UTC+02:00',
//     flag: {
//       png: 'https://flagcdn.com/w320/ls.png',
//       alt: 'The flag of Lesotho is composed of three horizontal bands of blue, white and green in the ratio of 3:4:3. A black mokorotlo — a Basotho hat — is centered in the white band.',
//     },
//     coatOfArms: 'https://mainfacts.com/media/images/coats_of_arms/ls.png',
//     area: 30355,
//     subRegion: 'Southern Africa',
//   },
//   {
//     name: 'Central African Republic',
//     code: '🇨🇫',
//     nativeName: 'République centrafricaine',
//     currency: {
//       name: 'Central African CFA franc',
//       symbol: 'Fr',
//     },
//     capital: 'Bangui',
//     population: 4829764,
//     timezone: 'UTC+01:00',
//     flag: {
//       png: 'https://flagcdn.com/w320/cf.png',
//       alt: 'The flag of Central African Republic is composed of four equal horizontal bands of blue, white, green and yellow intersected at the center by a vertical red band of equal size as the horizontal bands. A yellow five-pointed star is situated on the hoist side of the blue band.',
//     },
//     coatOfArms: 'https://mainfacts.com/media/images/coats_of_arms/cf.png',
//     area: 622984,
//     subRegion: 'Middle Africa',
//   },
//   {
//     name: 'Morocco',
//     code: '🇲🇦',
//     nativeName: 'المغرب',
//     currency: {
//       name: 'Moroccan dirham',
//       symbol: 'د.م.',
//     },
//     capital: 'Rabat',
//     population: 36910558,
//     timezone: 'UTC',
//     flag: {
//       png: 'https://flagcdn.com/w320/ma.png',
//       alt: 'The flag of Morocco features a green pentagram — a five-pointed linear star — centered on a red field.',
//     },
//     coatOfArms: 'https://mainfacts.com/media/images/coats_of_arms/ma.png',
//     area: 446550,
//     subRegion: 'Northern Africa',
//   },
//   {
//     name: 'Sierra Leone',
//     code: '🇸🇱',
//     nativeName: 'Sierra Leone',
//     currency: {
//       name: 'Sierra Leonean leone',
//       symbol: 'Le',
//     },
//     capital: 'Freetown',
//     population: 7976985,
//     timezone: 'UTC',
//     flag: {
//       png: 'https://flagcdn.com/w320/sl.png',
//       alt: 'The flag of Sierra Leone is composed of three equal horizontal bands of green, white and blue.',
//     },
//     coatOfArms: 'https://mainfacts.com/media/images/coats_of_arms/sl.png',
//     area: 71740,
//     subRegion: 'Western Africa',
//   },
//   {
//     name: 'Burkina Faso',
//     code: '🇧🇫',
//     nativeName: 'Burkina Faso',
//     currency: {
//       name: 'West African CFA franc',
//       symbol: 'Fr',
//     },
//     capital: 'Ouagadougou',
//     population: 20903278,
//     timezone: 'UTC',
//     flag: {
//       png: 'https://flagcdn.com/w320/bf.png',
//       alt: 'The flag of Burkina Faso features two equal horizontal bands of red and green, with a yellow five-pointed star in the center.',
//     },
//     coatOfArms: 'https://mainfacts.com/media/images/coats_of_arms/bf.png',
//     area: 272967,
//     subRegion: 'Western Africa',
//   },
//   {
//     name: 'Eritrea',
//     code: '🇪🇷',
//     nativeName: 'إرتريا‎',
//     currency: {
//       name: 'Eritrean nakfa',
//       symbol: 'Nfk',
//     },
//     capital: 'Asmara',
//     population: 5352000,
//     timezone: 'UTC+03:00',
//     flag: {
//       png: 'https://flagcdn.com/w320/er.png',
//       alt: 'The flag of Eritrea comprises three triangles — a large red isosceles triangle with its base spanning the hoist end and its apex at the midpoint on the fly end, and a green and blue right-angled triangle above and beneath the red triangle. On the hoist side of the red triangle is a golden vertical olive branch encircled by a golden olive wreath.',
//     },
//     coatOfArms: 'https://mainfacts.com/media/images/coats_of_arms/er.png',
//     area: 117600,
//     subRegion: 'Eastern Africa',
//   },
//   {
//     name: 'Tanzania',
//     code: '🇹🇿',
//     nativeName: 'Tanzania',
//     currency: {
//       name: 'Tanzanian shilling',
//       symbol: 'Sh',
//     },
//     capital: 'Dodoma',
//     population: 59734213,
//     timezone: 'UTC+03:00',
//     flag: {
//       png: 'https://flagcdn.com/w320/tz.png',
//       alt: 'The flag of Tanzania features a yellow-edged black diagonal band that extends from the lower hoist-side corner to the upper fly-side corner of the field. Above and beneath this band are a green and light blue triangle respectively.',
//     },
//     coatOfArms: 'https://mainfacts.com/media/images/coats_of_arms/tz.png',
//     area: 945087,
//     subRegion: 'Eastern Africa',
//   },
//   {
//     name: 'Algeria',
//     code: '🇩🇿',
//     nativeName: 'الجزائر',
//     currency: {
//       name: 'Algerian dinar',
//       symbol: 'د.ج',
//     },
//     capital: 'Algiers',
//     population: 44700000,
//     timezone: 'UTC+01:00',
//     flag: {
//       png: 'https://flagcdn.com/w320/dz.png',
//       alt: 'The flag of Algeria features two equal vertical bands of green and white. A five-pointed red star within a fly-side facing red crescent is centered over the two-color boundary.',
//     },
//     coatOfArms: 'https://mainfacts.com/media/images/coats_of_arms/dz.png',
//     area: 2381741,
//     subRegion: 'Northern Africa',
//   },
// ];

export default function VisitedList({ params }: Props) {
  // fetch all countries and pass it to table list
  const [countries, setCountries] = useState<CountryFormatted[] | []>([]);
  const [visited, setVisited] = useState<string[]>([]);

  useEffect(() => {
    // Get storedVisitedList from local storage on initial render
    const storedVisitedList = getFromLocalStorage('wishlist') || [];
    setVisited(storedVisitedList);
  }, []);

  useEffect(() => {
    const visited: string[] = getFromLocalStorage('visited');

    const countryData: Promise<CountryRaw>[] = visited.map(async (name) => {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${name}`
      );
      if (response.ok) {
        const data = await response.json();
        return data[0];
      }
      return '';
    });

    Promise.all(countryData).then((resolvedCountries) => {
      const formattedCountries = formatCountries(resolvedCountries);
      setCountries(formattedCountries);
    });
  }, [visited]);

  const handleRemoveFromVisited = (name: string) => {
    removeFromVisited(name);
    const updatedWishlist = getFromLocalStorage('wishlist') || [];
    setVisited(updatedWishlist);
  };

  return (
    <CountriesTableList
      onRemove={handleRemoveFromVisited}
      countries={countries}
      params={params}
    />
  );
}
