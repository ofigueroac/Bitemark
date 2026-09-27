'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Item, ItemContent, ItemDescription } from '@/components/ui/item';
import { MealSection } from '@/features/dashboard/components/mealSection';

const calorieGoal = 2000;
const caloriesEaten = 1168;
const caloriesLeft = calorieGoal - caloriesEaten;

export function Dashboard() {
  const router = useRouter();

  function handleLogFood() {
    router.push('/log');
  }

  return (
    <div className="mx-auto flex w-full max-w-md flex-1 flex-col gap-8 px-4 py-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-lg font-semibold tracking-tight">Today</h1>
        <p className="text-sm text-muted-foreground">
          Calories you can still use
        </p>
      </header>

      <Item variant="outline" className="flex-col items-stretch gap-4 p-5">
        <ItemContent className="gap-4">
          <div className="flex items-end justify-between gap-3">
            <div className="flex flex-col gap-1">
              <ItemDescription>Calories left</ItemDescription>
              <p className="text-4xl font-semibold tracking-tight tabular-nums">
                {caloriesLeft.toLocaleString()}
              </p>
            </div>
            <ItemDescription>kcal</ItemDescription>
          </div>
          <Progress value={caloriesEaten} max={calorieGoal} className="gap-2">
            <span className="text-xs text-muted-foreground">
              {caloriesEaten.toLocaleString()} eaten
            </span>
            <span className="ml-auto text-xs text-muted-foreground">
              {calorieGoal.toLocaleString()} goal
            </span>
          </Progress>
        </ItemContent>
      </Item>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold tracking-tight">Logged food</h2>
        <MealSection handleLog={handleLogFood} />
      </section>
    </div>
  );
}
