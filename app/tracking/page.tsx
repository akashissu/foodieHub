import { Bike, CookingPot, MapPinned, PackageCheck } from 'lucide-react';
import { getRestaurantById, orders } from '@/data/mockData';

const order = orders[0];
const restaurant = getRestaurantById(order.restaurantId);

const timeline = [
  { label: 'Order placed', description: 'Payment confirmed and kitchen notified.', icon: PackageCheck, active: true },
  { label: 'Preparing', description: 'Chefs are building the order right now.', icon: CookingPot, active: true },
  { label: 'Out for delivery', description: `Rider ${order.rider} is navigating to your location.`, icon: Bike, active: true },
  { label: 'Delivered', description: 'Final doorstep handoff and review request.', icon: MapPinned, active: false }
];

export default function TrackingPage() {
  return (
    <div className="page-shell py-10">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <section className="glass-panel p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-500">Order tracking</p>
          <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-950">Track every delivery moment in real time</h1>
          <div className="mt-6 rounded-[1.5rem] bg-slate-950 p-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/60">Current order</p>
            <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-black tracking-tight">{order.id}</h2>
                <p className="mt-2 text-sm text-white/70">{restaurant?.name} • ETA {order.eta}</p>
              </div>
              <span className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white">{order.status}</span>
            </div>
          </div>

          <div className="mt-8 space-y-5">
            {timeline.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.label} className="flex gap-4 rounded-[1.5rem] border border-slate-200 p-5">
                  <div className={`mt-1 flex h-12 w-12 items-center justify-center rounded-2xl ${step.active ? 'bg-rose-50 text-rose-500' : 'bg-slate-100 text-slate-400'}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-950">{step.label}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <aside className="space-y-6">
          <div className="glass-panel p-6">
            <h2 className="text-xl font-bold text-slate-950">Rider and delivery details</h2>
            <div className="mt-5 space-y-4 text-sm text-slate-600">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">Rider</p>
                <p className="mt-1">{order.rider}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">Restaurant</p>
                <p className="mt-1">{restaurant?.name}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">Payment</p>
                <p className="mt-1">{order.paymentMethod}</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=1200&q=80"
              alt="Delivery rider"
              className="h-64 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-950">Map-ready UX</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                The tracking view is structured to plug into a live map provider and websocket updates without changing the page layout.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
