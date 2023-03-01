import { Country, CountryApi } from '../types';

export const transformCountries = (countries: CountryApi[]): Country[] => {
  return countries.map(
    ({
      flags: { svg },
      name: { common },
      capital: [capitalName],
      region,
      area,
      population,
    }) => {
      return {
        flagImage: svg,
        name: common,
        capital: capitalName,
        region: region,
        area: area,
        population: population,
      };
    }
  );
};
