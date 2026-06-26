import { BadgeDollarSign, Store, Users, UtensilsCrossed } from 'lucide-react';
import { DashboardCard } from '@/components/DashboardCard';
import { metrics, orders, restaurants, users } from '@/data/mockData';

export default function AdminPage() {
  return (
    <div className="page-shell space-y-8 py-10">
      <section className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-500">Admin dashboard</p>
        <h1 className="text-4xl font-black tracking-tight text-slate-950">Platform command center for FoodieHub</h1>
        <p className="max-w-3xl text-base leading-7 text-slate-600">
          Review performance, restaurants, users, and live order activity in a premium operator-friendly layout.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <DashboardCard label="Restaurants" value={metrics.totalRestaurants.toString()} hint="Live storefronts currently available in the marketplace." icon={<Store className="h-5 w-5" />} />
        <DashboardCard label="Users" value={metrics.activeUsers.toLocaleString()} hint="Active customers using saved addresses and loyalty perks." icon={<Users className="h-5 w-5" />} />
        <DashboardCard label="Revenue" value={`$${metrics.monthlyRevenue.toLocaleString()}`} hint="Projected gross platform sales for the current month." icon={<BadgeDollarSign className="h-5 w-5" />} />
        <DashboardCard label="Orders" value={orders.length.toString()} hint="Tracked sample orders across customer and restaurant views." icon={<UtensilsCrossed className="h-5 w-5" />} />
      </section>

      <section className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="table-card">
          <div className="border-b border-slate-200 px-6 py-5">
            <h2 className="text-xl font-bold text-slate-950">Restaurant management</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-500">
                <tr>
                  <th className="px-6 py-4 font-semibold">Restaurant</th>
                  <th className="px-6 py-4 font-semibold">Cuisine</th>
                  <th className="px-6 py-4 font-semibold">Rating</th>
                  <th className="px-6 py-4 font-semibold">Delivery</th>
                </tr>
              </thead>
              <tbody>
                {restaurants.map((restaurant) => (
                  <tr key={restaurant.id} className="border-t border-slate-100">
                    <td className="px-6 py-4 font-semibold text-slate-950">{restaurant.name}</td>
                    <td className="px-6 py-4 text-slate-600">{restaurant.cuisines.join(', ')}</td>
                    <td className="px-6 py-4 text-slate-600">{restaurant.rating}</td>
                    <td className="px-6 py-4 text-slate-600">{restaurant.deliveryTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="table-card">
          <div className="border-b border-slate-200 px-6 py-5">
            <h2 className="text-xl font-bold text-slate-950">User management</h2>
          </div>
          <div className="divide-y divide-slate-100">
            {users.map((user) => (
              <div key={user.id} className="flex items-center gap-4 px-6 py-5">
                <img src={user.avatar} alt={user.name} className="h-14 w-14 rounded-2xl object-cover" />
                <div className="flex-1">
                  <p className="font-semibold text-slate-950">{user.name}</p>
                  <p className="text-sm text-slate-500">{user.email}</p>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {user.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
