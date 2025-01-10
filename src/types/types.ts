export type ContinentDataType = {
  page: string;
  title: string;
  description: string;
  stats: {
    title: string;
    value: string;
  }[];
  imageUrl: string;
};

export type CountryRaw = {
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

export type CountryFormatted = {
  name: string;
  code: string;
  nativeName: string;
  currency: {
    name: string;
    symbol: string;
  };
  capital: string;
  population: number;
  timezone: string;
  flag: {
    png: string;
    alt: string;
  };
  coatOfArms: string;
  area: number;
  subRegion: string;
};

export type CountryFormattedDetailed = {
  name: {
    common: string;
    nativeName: Record<string, { common: string; official: string }>;
  };
  independent: boolean;
  status: string;
  currencies: Record<string, { name: string; symbol: string }>;
  capital: string[];
  region: string;
  subregion: string;
  languages: Record<string, string>;
  latlng: [number, number];
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  area: number;
  population: number;
  timezones: string[];
  continents: string[];
  flags: { png: string; svg: string };
  coatOfArms: { png: string; svg: string };
  startOfWeek: string;
  tld: string[];
  car: {
    signs: string[];
    side: string;
  };
};
