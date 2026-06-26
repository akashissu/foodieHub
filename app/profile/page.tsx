import { Award, Clock3, Home, Mail, Phone } from 'lucide-react';
import { currentUser, getRestaurantById, orders } from '@/data/mockData';

const userOrders = orders.filter((order) => order.userId === currentUser.id);

export default function ProfilePage() {
  return (
    <div className="page-shell py-10">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="glass-panel p-6 sm:p-8">
          <img src={currentUser.avatar} alt={currentUser.name} className="h-24 w-24 rounded-3xl object-cover" />
          <h1 className="mt-5 text-3xl font-black tracking-tight text-slate-950">{currentUser.name}</h1>
          <p className="mt-1 text-sm font-medium text-rose-500">Premium customer profile</p>

          <div className="mt-8 space-y-4 text-sm text-slate-600">
            <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-rose-500" /> {currentUser.email}</div>
            <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-rose-500" /> {currentUser.phone}</div>
            <div className="flex items-center gap-3"><Home className="h-4 w-4 text-rose-500" /> {currentUser.address}</div>
          </div>

          <div className="mt-8 rounded-[1.5rem] bg-slate-950 p-5 text-white">
            <div className="flex items-center gap-3 text-orange-300"><Award className="h-5 w-5" /> Loyalty status</div>
            <p className="mt-3 text-4xl font-black tracking-tight">{currentUser.loyaltyPoints}</p>
            <p className="mt-2 text-sm text-white/70">Points available for cashback and delivery perks.</p>
          </div>
        </aside>

        <section className="glass-panel p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-500">Order history</p>
          <h2 className="mt-2 text-4xl font-black tracking-tight text-slate-950">Recent and current orders in one place</h2>
          <div className="mt-8 space-y-5">
            {userOrders.map((order) => {
              const restaurant = getRestaurantById(order.restaurantId);
              return (
                <article key={order.id} className="rounded-[1.5rem] border border-slate-200 p-5">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">{order.id}</p>
                      <h3 className="mt-2 text-2xl font-bold text-slate-950">{restaurant?.name}</h3>
                      <p className="mt-2 text-sm text-slate-500">Placed on {new Date(order.placedAt).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })}</p>
                    </div>
                    <span className={`rounded-full px-4 py-2 text-sm font-semibold ${order.status === 'Delivered' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-500'}`}>
                      {order.status}
                    </span>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-600">
                    <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-rose-500" /> {order.eta}</span>
                    <span>Total ${order.total.toFixed(2)}</span>
                    <span>{order.paymentMethod}</span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
