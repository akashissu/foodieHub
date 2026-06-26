import { ClipboardList, DollarSign, FlameKindling, HandPlatter } from 'lucide-react';
import { DashboardCard } from '@/components/DashboardCard';
import { orders, restaurants } from '@/data/mockData';

const ownerRestaurant = restaurants.find((restaurant) => restaurant.ownerId === 'owner-2') ?? restaurants[0];
const ownerOrders = orders.filter((order) => order.restaurantId === ownerRestaurant.id);

export default function OwnerDashboardPage() {
  return (
    <div className="page-shell space-y-8 py-10">
      <section className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-500">Restaurant owner dashboard</p>
        <h1 className="text-4xl font-black tracking-tight text-slate-950">Operate {ownerRestaurant.name} with clarity</h1>
        <p className="max-w-3xl text-base leading-7 text-slate-600">
          Owners can review order flow, spotlight menu hits, and track revenue performance from a focused dashboard surface.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <DashboardCard label="Incoming orders" value={ownerOrders.length.toString()} hint="Orders requiring kitchen or dispatch action." icon={<ClipboardList className="h-5 w-5" />} />
        <DashboardCard label="Menu items" value={ownerRestaurant.menu.length.toString()} hint="Dishes actively merchandised in the storefront." icon={<HandPlatter className="h-5 w-5" />} />
        <DashboardCard label="Top dish" value={ownerRestaurant.menu[0].name} hint="Current best-performing hero item for conversions." icon={<FlameKindling className="h-5 w-5" />} />
        <DashboardCard label="Daily sales" value="$3,420" hint="Sample daily gross sales across deliveries and add-ons." icon={<DollarSign className="h-5 w-5" />} />
      </section>

      <section className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="table-card">
          <div className="border-b border-slate-200 px-6 py-5">
            <h2 className="text-xl font-bold text-slate-950">Live owner order queue</h2>
          </div>
          <div className="divide-y divide-slate-100">
            {ownerOrders.map((order) => (
              <div key={order.id} className="px-6 py-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">{order.id}</p>
                    <p className="mt-2 text-lg font-bold text-slate-950">Status: {order.status}</p>
                  </div>
                  <span className="rounded-full bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-500">ETA {order.eta}</span>
                </div>
                <p className="mt-3 text-sm text-slate-600">Payment via {order.paymentMethod}. Rider assigned: {order.rider}.</p>
              </div>
            ))}
          </div>
        </div>

        <div className="table-card">
          <div className="border-b border-slate-200 px-6 py-5">
            <h2 className="text-xl font-bold text-slate-950">Menu performance snapshot</h2>
          </div>
          <div className="grid gap-4 p-6 md:grid-cols-2">
            {ownerRestaurant.menu.map((item) => (
              <article key={item.id} className="rounded-[1.5rem] bg-slate-50 p-4">
                <img src={item.image} alt={item.name} className="h-40 w-full rounded-[1.25rem] object-cover" />
                <h3 className="mt-4 text-lg font-bold text-slate-950">{item.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
                  <span>${item.price}</span>
                  <span>{item.category}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
