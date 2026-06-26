import Link from 'next/link';
import { Clock3, Star } from 'lucide-react';
import type { Restaurant } from '@/data/mockData';

type RestaurantCardProps = {
  restaurant: Restaurant;
};

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative">
        <img src={restaurant.image} alt={restaurant.name} className="h-60 w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-x-4 top-4 flex items-start justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {restaurant.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur">
                {tag}
              </span>
            ))}
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white">
            <Star className="h-3.5 w-3.5 fill-current" />
            {restaurant.rating}
          </span>
        </div>
      </div>

      <div className="space-y-5 p-6">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-slate-950">{restaurant.name}</h3>
              <p className="mt-1 text-sm text-slate-500">{restaurant.cuisines.join(' • ')}</p>
            </div>
            <div className="rounded-full bg-rose-50 px-3 py-1 text-sm font-semibold text-rose-500">
              ${restaurant.priceForTwo} for two
            </div>
          </div>
          <p className="text-sm leading-6 text-slate-600">{restaurant.description}</p>
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-slate-100 pt-4 text-sm text-slate-500">
          <div className="inline-flex items-center gap-2">
            <Clock3 className="h-4 w-4 text-rose-500" />
            {restaurant.deliveryTime}
          </div>
          <p>{restaurant.reviews.toLocaleString()} reviews</p>
        </div>

        <Link
          href={`/restaurants/${restaurant.id}`}
          className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-rose-500"
        >
          View restaurant
        </Link>
      </div>
    </article>
  );
}
