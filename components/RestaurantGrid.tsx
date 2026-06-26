import type { Restaurant } from '@/data/mockData';
import { RestaurantCard } from './RestaurantCard';

type RestaurantGridProps = {
  restaurants: Restaurant[];
};

export function RestaurantGrid({ restaurants }: RestaurantGridProps) {
  if (restaurants.length === 0) {
    return (
      <div className="rounded-[1.75rem] border border-dashed border-slate-300 bg-white p-10 text-center shadow-soft">
        <h3 className="text-xl font-bold text-slate-950">No restaurants match this filter</h3>
        <p className="mt-3 text-sm leading-6 text-slate-500">
          Try a broader cuisine filter or search by another craving. The demo catalog is ready for more restaurants from the admin dashboard.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}
