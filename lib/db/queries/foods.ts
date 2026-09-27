import 'server-only';

import { asc } from 'drizzle-orm';
import type { CatalogFood } from '@/domain/food';
import { db } from '@/lib/db';
import { foods } from '@/lib/db/schema';

export async function listFoods(): Promise<CatalogFood[]> {
  const rows = await db
    .select({
      id: foods.id,
      name: foods.name,
      servingSize: foods.servingSize,
      protein: foods.protein,
      carbohydrates: foods.carbohydrates,
      fat: foods.fat,
    })
    .from(foods)
    .orderBy(asc(foods.name));

  return rows.map((food) => ({
    id: food.id,
    name: food.name,
    servingSize: food.servingSize,
    calories: food.protein * 4 + food.carbohydrates * 4 + food.fat * 9,
  }));
}
