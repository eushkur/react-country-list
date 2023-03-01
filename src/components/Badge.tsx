import React from 'react';
import { Color } from '../ui/colors';

interface BadgeProps {
  color: Color;
  label: 'area' | 'population';
  value: number;
}

export const Badge = ({ color, value, label }: BadgeProps) => {
  return (
    <div className="col-2">
      <span
        className={`badge d-block py-2 text-bg-${color}`}
      >{`${label}: ${value}`}</span>
    </div>
  );
};
