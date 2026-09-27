import { relations } from 'drizzle-orm';
import {
  date,
  integer,
  pgTable,
  text,
  unique,
  uuid,
} from 'drizzle-orm/pg-core';

export const foods = pgTable('foods', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull().unique(),
  servingSize: text('serving_size').notNull(),
  protein: integer('protein').notNull(),
  carbohydrates: integer('carbohydrates').notNull(),
  fat: integer('fat').notNull(),
});

export const days = pgTable('days', {
  id: uuid('id').primaryKey().defaultRandom(),
  date: date('date', { mode: 'string' }).notNull().unique(),
});

export const meals = pgTable(
  'meals',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    dayId: uuid('day_id')
      .notNull()
      .references(() => days.id, { onDelete: 'cascade' }),
    name: text('name').notNull(),
  },
  (table) => [unique().on(table.dayId, table.name)]
);

export const mealFoods = pgTable('meal_foods', {
  id: uuid('id').primaryKey().defaultRandom(),
  mealId: uuid('meal_id')
    .notNull()
    .references(() => meals.id, { onDelete: 'cascade' }),
  foodId: uuid('food_id')
    .notNull()
    .references(() => foods.id, { onDelete: 'restrict' }),
  servings: integer('servings').notNull(),
});

export const daysRelations = relations(days, ({ many }) => ({
  meals: many(meals),
}));

export const mealsRelations = relations(meals, ({ one, many }) => ({
  day: one(days, {
    fields: [meals.dayId],
    references: [days.id],
  }),
  mealFoods: many(mealFoods),
}));

export const mealFoodsRelations = relations(mealFoods, ({ one }) => ({
  meal: one(meals, {
    fields: [mealFoods.mealId],
    references: [meals.id],
  }),
  food: one(foods, {
    fields: [mealFoods.foodId],
    references: [foods.id],
  }),
}));

export const foodsRelations = relations(foods, ({ many }) => ({
  mealFoods: many(mealFoods),
}));
