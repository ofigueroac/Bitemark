import type { Food } from '../domain/food';

export const foodCatalog: Food[] = [
  {
    name: 'Scrambled eggs',
    numberServings: 2,
    servingSize: '1 large egg',
    macros: { protein: 12, carbohidrates: 1, fat: 10 },
    Time: new Date('2026-09-25T08:00:00'),
    Meal: 'Breakfast',
  },
  {
    name: 'Oatmeal',
    numberServings: 1,
    servingSize: '40 g dry',
    macros: { protein: 5, carbohidrates: 27, fat: 3 },
    Time: new Date('2026-09-25T08:30:00'),
    Meal: 'Breakfast',
  },
  {
    name: 'Grilled chicken breast',
    numberServings: 1,
    servingSize: '150 g',
    macros: { protein: 46, carbohidrates: 0, fat: 5 },
    Time: new Date('2026-09-25T12:30:00'),
    Meal: 'Lunch',
  },
  {
    name: 'Apple',
    numberServings: 1,
    servingSize: '1 medium',
    macros: { protein: 0, carbohidrates: 25, fat: 0 },
    Time: new Date('2026-09-25T15:30:00'),
    Meal: 'Snack',
  },
  {
    name: 'Baked salmon with rice',
    numberServings: 1,
    servingSize: '170 g salmon and 1 cup rice',
    macros: { protein: 40, carbohidrates: 45, fat: 18 },
    Time: new Date('2026-09-25T19:00:00'),
    Meal: 'Dinner',
  },
];
