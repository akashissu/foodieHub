import Link from 'next/link';
import { MapPin, Search, Sparkles, Timer } from 'lucide-react';

type HeroProps = {
  search: string;
  onSearch: (value: string) => void;
};

export function Hero({ search, onSearch }: HeroProps) {
  return (
    <section className="overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-slate-950 via-slate-900 to-rose-700 px-6 py-8 text-white shadow-soft sm:px-8 lg:px-12 lg:py-12">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-7">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 ring-1 ring-white/15">
            <Sparkles className="h-4 w-4 text-orange-300" />
            Premium delivery, clean UX, and restaurant-grade discovery.
          </div>
          <div className="space-y-4">
            <h1 className="max-w-2xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Your next obsession is already cooking nearby.
            </h1>
            <p className="max-w-xl text-base leading-7 text-white/75 sm:text-lg">
              Discover standout restaurants, build an order in seconds, unlock coupon savings, and track every handoff from kitchen to doorstep.
            </p>
          </div>

          <div className="flex flex-col gap-3 rounded-[1.5rem] bg-white p-3 shadow-2xl sm:flex-row sm:items-center">
            <div className="flex flex-1 items-center gap-3 rounded-[1.2rem] bg-slate-50 px-4 py-3 text-slate-600">
              <Search className="h-5 w-5 text-rose-500" />
              <input
                value={search}
                onChange={(event) => onSearch(event.target.value)}
                placeholder="Search restaurants, dishes, or cuisines"
                className="w-full border-none bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
            </div>
            <button className="inline-flex items-center justify-center rounded-[1.2rem] bg-rose-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-400">
              Explore now
            </button>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
              <p className="text-xs uppercase tracking-[0.24em] text-white/60">Delivery zone</p>
              <div className="mt-2 flex items-center gap-2 text-sm font-medium text-white">
                <MapPin className="h-4 w-4 text-orange-300" />
                Downtown + 14 nearby areas
              </div>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
              <p className="text-xs uppercase tracking-[0.24em] text-white/60">Average ETA</p>
              <div className="mt-2 flex items-center gap-2 text-sm font-medium text-white">
                <Timer className="h-4 w-4 text-orange-300" />
                27 minutes across the city
              </div>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
              <p className="text-xs uppercase tracking-[0.24em] text-white/60">Fast actions</p>
              <div className="mt-2 flex items-center gap-3 text-sm font-medium text-white">
                <Link href="/checkout" className="transition hover:text-orange-300">
                  Checkout
                </Link>
                <span className="h-1 w-1 rounded-full bg-white/40" />
                <Link href="/tracking" className="transition hover:text-orange-300">
                  Track
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="relative min-h-[320px]">
          <div className="absolute inset-0 rounded-[2rem] bg-white/10 blur-3xl" />
          <div className="relative ml-auto max-w-lg overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
              alt="Signature dishes"
              className="h-80 w-full rounded-[1.5rem] object-cover"
            />
            <div className="-mt-16 ml-5 max-w-sm rounded-[1.5rem] border border-white/50 bg-white p-5 text-slate-900 shadow-soft">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-rose-500">Tonight’s trending order</p>
                  <h3 className="mt-1 text-xl font-bold">Bombay Bloom combo</h3>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-600">$41.60</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Butter Chicken Bowl, Paneer Volcano Wrap, and a loyalty cashback boost ready for checkout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
