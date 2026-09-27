import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemTitle,
} from '@/components/ui/item';

const loggedMeals = [
  {
    meal: 'Breakfast',
    foods: [
      { name: 'Scrambled eggs', detail: '2 servings', calories: 182 },
      { name: 'Oatmeal', detail: '1 serving', calories: 155 },
    ],
  },
  {
    meal: 'Lunch',
    foods: [
      { name: 'Grilled chicken breast', detail: '1 serving', calories: 230 },
    ],
  },
  {
    meal: 'Snack',
    foods: [{ name: 'Apple', detail: '1 medium', calories: 95 }],
  },
  {
    meal: 'Dinner',
    foods: [
      {
        name: 'Baked salmon with rice',
        detail: '1 serving',
        calories: 506,
      },
    ],
  },
];

export function MealSection({ handleLog }: { handleLog: () => void }) {
  return (
    <div className="flex flex-col gap-6">
      {loggedMeals.map((group) => (
        <section key={group.meal} className="flex flex-col gap-2">
          <h3 className="text-sm font-medium text-muted-foreground">
            {group.meal}
          </h3>
          <ItemGroup className="gap-2">
            {group.foods.map((food) => (
              <Item key={food.name} variant="outline" size="sm" role="listitem">
                <ItemContent>
                  <ItemTitle>{food.name}</ItemTitle>
                  <ItemDescription>{food.detail}</ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Badge variant="secondary">{food.calories} kcal</Badge>
                  <Button type="button" size="sm" onClick={handleLog}>
                    Log
                  </Button>
                </ItemActions>
              </Item>
            ))}
          </ItemGroup>
        </section>
      ))}
    </div>
  );
}
