import React from 'react';
import { Country } from '../types';
import { Color } from '../ui/colors';
import { Badge } from './Badge';

interface CountryItemProps {
  countryItem: Country;
}

export const CountryItem = ({
  countryItem: { flagImage, name, capital, region, area, population },
}: CountryItemProps) => {
  return (
    <li className="list-group-item ">
      <div className="row row-cols-6 d-flex align-items-center ">
        <img src={flagImage} alt="" />
        <span>{name}</span>
        <span>{capital}</span>
        <span>{region}</span>
        <Badge color={Color.PRIMARY} value={area} label="area" />
        <Badge color={Color.SECONDARY} value={population} label="population" />
      </div>
    </li>
  );
};
