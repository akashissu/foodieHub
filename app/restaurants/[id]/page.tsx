import Link from 'next/link';
import { Clock3, Flame, MapPin, Star } from 'lucide-react';
import { notFound } from 'next/navigation';
import { getRestaurantById } from '@/data/mockData';

type RestaurantDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function RestaurantDetailsPage({ params }: RestaurantDetailsPageProps) {
  const { id } = await params;
  const restaurant = getRestaurantById(id);

  if (!restaurant) {
    notFound();
  }

  return (
    <div className="page-shell space-y-10 py-8 md:py-10">
      <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
        <div className="relative">
          <img src={restaurant.coverImage} alt={restaurant.name} className="h-[340px] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
            <div className="flex flex-wrap gap-2">
              {restaurant.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="mt-4 text-4xl font-black tracking-tight">{restaurant.name}</h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/80">{restaurant.description}</p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/80">
              <span className="inline-flex items-center gap-2"><Star className="h-4 w-4 text-orange-300" /> {restaurant.rating} rating</span>
              <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-orange-300" /> {restaurant.deliveryTime}</span>
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-orange-300" /> {restaurant.address}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="glass-panel p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-500">Menu</p>
                <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">Curated dishes built for repeat orders</h2>
              </div>
              <Link href="/cart" className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-500">
                Go to cart
              </Link>
            </div>

            <div className="mt-8 space-y-4">
              {restaurant.menu.map((item) => (
                <article key={item.id} className="grid gap-4 rounded-[1.5rem] border border-slate-200 p-4 md:grid-cols-[1fr_180px] md:items-center">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-bold text-slate-950">{item.name}</h3>
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${item.isVeg ? 'bg-emerald-50 text-emerald-600' : 'bg-orange-50 text-orange-600'}`}>
                        {item.isVeg ? 'Veg' : 'Non-Veg'}
                      </span>
                      {item.popular ? <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-500">Popular</span> : null}
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                    <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                      <span>${item.price}</span>
                      <span className="inline-flex items-center gap-2"><Flame className="h-4 w-4 text-rose-500" /> {item.spiceLevel}</span>
                      <span>{item.category}</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <img src={item.image} alt={item.name} className="h-40 w-full rounded-[1.25rem] object-cover" />
                    <button className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-rose-500">
                      Add to cart
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <aside className="glass-panel p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Restaurant facts</p>
            <div className="mt-5 grid gap-4 text-sm text-slate-600">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">Price for two</p>
                <p className="mt-1">${restaurant.priceForTwo}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">Cuisine focus</p>
                <p className="mt-1">{restaurant.cuisines.join(', ')}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">Customer trust</p>
                <p className="mt-1">{restaurant.reviews.toLocaleString()} verified reviews</p>
              </div>
            </div>
          </aside>

          <aside className="rounded-[1.75rem] bg-slate-950 p-6 text-white shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/60">Next step</p>
            <h3 className="mt-3 text-2xl font-black tracking-tight">Ready to place the order?</h3>
            <p className="mt-3 text-sm leading-7 text-white/70">
              Move from the restaurant menu to cart, apply a coupon, then complete the premium checkout flow with saved delivery details.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/cart" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-rose-50">
                Review cart
              </Link>
              <Link href="/checkout" className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/30">
                Checkout now
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
