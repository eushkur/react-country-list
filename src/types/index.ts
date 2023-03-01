export interface CountryApi {
  flags: {
    png: string;
    svg: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]:
        | {
            official: string;
            common: string;
          }
        | undefined;
    };
  };
  capital: string[];
  region: string;
  area: number;
  population: number;
}

export interface Country {
  flagImage: string;
  name: string;
  capital: string;
  region: string;
  area: number;
  population: number;
}

export type BadgeLabel = 'area' | 'population';
