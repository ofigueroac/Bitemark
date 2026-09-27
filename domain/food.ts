import type { Macros } from './nutrition';

export type CatalogFood = {
  id: string;
  name: string;
  servingSize: string;
  calories: number;
};

export type Food = {
  name: string;
  numberServings: number;
  servingSize: string;
  macros: Macros;
  Time: Date;
  Meal: string;
};
