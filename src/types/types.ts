export type ContinentDataType = {
  title: string;
  description: string;
  stats: {
    title: string;
    value: string;
  }[];
  imageUrl: string;
};

export type CountryCardType = {
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
