'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowRight, ChartNoAxesCombined, ShieldCheck, Sparkle, Truck } from 'lucide-react';
import { CartSummary } from '@/components/CartSummary';
import { DashboardCard } from '@/components/DashboardCard';
import { FilterBar } from '@/components/FilterBar';
import { Hero } from '@/components/Hero';
import { MotionReveal } from '@/components/MotionReveal';
import { RestaurantGrid } from '@/components/RestaurantGrid';
import { SectionTitle } from '@/components/SectionTitle';
import { cuisines, metrics, popularDishes, restaurants } from '@/data/mockData';

export default function HomePage() {
  const [search, setSearch] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('All');

  const filteredRestaurants = useMemo(() => {
    const query = search.trim().toLowerCase();

    return restaurants.filter((restaurant) => {
      const matchesCuisine = selectedCuisine === 'All' || restaurant.cuisines.includes(selectedCuisine);
      const matchesQuery =
        query.length === 0 ||
        restaurant.name.toLowerCase().includes(query) ||
        restaurant.cuisines.some((cuisine) => cuisine.toLowerCase().includes(query)) ||
        restaurant.menu.some((item) => item.name.toLowerCase().includes(query));

      return matchesCuisine && matchesQuery;
    });
  }, [search, selectedCuisine]);

  return (
    <div className="page-shell space-y-14 py-8 md:py-10">
      <MotionReveal>
        <Hero search={search} onSearch={setSearch} />
      </MotionReveal>

      <section className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
        <MotionReveal className="space-y-6">
          <SectionTitle
            eyebrow="Browse restaurants"
            title="Search, filter, and jump straight into the best kitchens"
            description="Browse premium cards with live ratings, cuisines, pricing cues, and clear CTAs. The discovery stack is tuned for mobile-first ordering and fast comparisons."
          />
          <FilterBar cuisines={cuisines} selectedCuisine={selectedCuisine} onChange={setSelectedCuisine} />
          <RestaurantGrid restaurants={filteredRestaurants} />
        </MotionReveal>

        <MotionReveal delay={0.1}>
          <CartSummary />
        </MotionReveal>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <MotionReveal>
          <DashboardCard
            label="Active users"
            value={metrics.activeUsers.toLocaleString()}
            hint="Loyal customers ordering repeatedly through discovery and rewards."
            icon={<Sparkle className="h-5 w-5" />}
          />
        </MotionReveal>
        <MotionReveal delay={0.05}>
          <DashboardCard
            label="Live orders"
            value={metrics.liveOrders.toString()}
            hint="Orders moving through kitchen, packing, dispatch, and rider delivery."
            icon={<Truck className="h-5 w-5" />}
          />
        </MotionReveal>
        <MotionReveal delay={0.1}>
          <DashboardCard
            label="Average ETA"
            value={`${metrics.avgDelivery} min`}
            hint="Predictable delivery powered by nearby restaurant clustering."
            icon={<ChartNoAxesCombined className="h-5 w-5" />}
          />
        </MotionReveal>
        <MotionReveal delay={0.15}>
          <DashboardCard
            label="Trust layer"
            value="JWT + REST"
            hint="Protected routes, role-aware dashboards, and backend-ready API contracts."
            icon={<ShieldCheck className="h-5 w-5" />}
          />
        </MotionReveal>
      </section>

      <MotionReveal>
        <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionTitle
              eyebrow="Popular menu picks"
              title="Craving-driven dishes ready for instant add-to-cart"
              description="Each card highlights a menu favorite with a clear route back to its restaurant detail page for deeper ordering flows."
            />
            <Link href="/checkout" className="inline-flex items-center gap-2 text-sm font-semibold text-rose-500 transition hover:text-rose-600">
              Head to checkout <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {popularDishes.map((dish) => (
              <article key={dish.id} className="overflow-hidden rounded-[1.5rem] bg-slate-50">
                <img src={dish.image} alt={dish.name} className="h-52 w-full object-cover" />
                <div className="space-y-3 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-950">{dish.name}</h3>
                      <p className="mt-1 text-sm text-slate-500">{dish.restaurantName}</p>
                    </div>
                    <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-slate-700">${dish.price}</span>
                  </div>
                  <p className="text-sm leading-6 text-slate-600">{dish.description}</p>
                  <Link
                    href={`/restaurants/${dish.restaurantId}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-rose-500 transition hover:text-rose-600"
                  >
                    View details <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </MotionReveal>

      <MotionReveal>
        <section className="grid gap-6 rounded-[2rem] bg-slate-950 px-6 py-8 text-white shadow-soft sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-10">
          <div className="space-y-4">
            <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/75">
              Complete product surface
            </span>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">From consumer ordering to admin and owner control rooms.</h2>
            <p className="max-w-2xl text-base leading-7 text-white/70">
              FoodieHub ships with customer journeys, role-based dashboards, order tracking, checkout flows, and an Express REST backend scaffold ready for persistence upgrades.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ['Customer', 'Login, signup, cart, checkout, tracking, profile'],
              ['Admin', 'Manage users, restaurants, and platform health'],
              ['Owner', 'Review incoming orders and menu performance'],
              ['Backend', 'JWT authentication and REST route structure']
            ].map(([title, body]) => (
              <div key={title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/65">{body}</p>
              </div>
            ))}
          </div>
        </section>
      </MotionReveal>
    </div>
  );
}
