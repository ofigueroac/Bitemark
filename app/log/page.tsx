import FoodLogging from '@/features/foodLogging/components/foodLoggin';
import { listFoods } from '@/lib/db/queries/foods';

export const dynamic = 'force-dynamic';

export default async function LogPage() {
  const foods = await listFoods();

  return (
    <div className="mx-auto flex w-full max-w-md flex-1 flex-col gap-4 px-4 py-8">
      <h1 className="text-lg font-semibold tracking-tight">Log food</h1>
      <FoodLogging foods={foods} />
    </div>
  );
}
