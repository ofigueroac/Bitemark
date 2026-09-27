'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import type { CatalogFood } from '@/domain/food';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemTitle,
} from '@/components/ui/item';

export default function FoodLogging({ foods }: { foods: CatalogFood[] }) {
  const [foodName, setFoodName] = useState('');

  const visibleFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(foodName.trim().toLowerCase())
  );

  function handleAdd(_foodId: string) {}

  return (
    <div className="flex flex-col gap-4">
      <input
        aria-label="Food name"
        value={foodName}
        onChange={(event) => setFoodName(event.target.value)}
        placeholder="Search food"
        className="h-9 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
      />

      <ItemGroup className="gap-2">
        {visibleFoods.map((food) => (
          <Item key={food.id} variant="outline" size="sm" role="listitem">
            <ItemContent>
              <ItemTitle>{food.name}</ItemTitle>
              <ItemDescription>
                {food.calories} kcal · {food.servingSize}
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button
                type="button"
                size="sm"
                onClick={() => handleAdd(food.id)}
              >
                Add
              </Button>
            </ItemActions>
          </Item>
        ))}
      </ItemGroup>

      {visibleFoods.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          {foods.length === 0 ? 'No foods yet.' : 'No foods match that name.'}
        </p>
      ) : null}
    </div>
  );
}
