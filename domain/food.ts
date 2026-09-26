import type { Macros } from './nutrition';

export type Food = {
  name: string;
  numberServings: number;
  servingSize: string;
  macros: Macros;
  Time: Date;
  Meal: string;
};
