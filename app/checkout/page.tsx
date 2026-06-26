import Link from 'next/link';
import { CreditCard, MapPinHouse, ShieldCheck } from 'lucide-react';
import { cart, currentUser, getMenuItemById } from '@/data/mockData';

const subtotal = cart.reduce((sum, cartItem) => {
  const menuEntry = getMenuItemById(cartItem.itemId);
  return sum + (menuEntry?.item.price ?? 0) * cartItem.quantity;
}, 0);
const total = subtotal + 3.5 + 2.1 - subtotal * 0.2;

export default function CheckoutPage() {
  return (
    <div className="page-shell py-10">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="glass-panel p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-500">Checkout</p>
          <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-950">Complete the order in one polished flow</h1>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.5rem] border border-slate-200 p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-rose-50 p-3 text-rose-500"><MapPinHouse className="h-5 w-5" /></div>
                <div>
                  <h2 className="text-lg font-bold text-slate-950">Delivery details</h2>
                  <p className="text-sm text-slate-500">Saved for {currentUser.name}</p>
                </div>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-600">
                <input defaultValue={currentUser.name} className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none" />
                <input defaultValue={currentUser.phone} className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none" />
                <textarea defaultValue={currentUser.address} className="min-h-28 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none" />
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-rose-50 p-3 text-rose-500"><CreditCard className="h-5 w-5" /></div>
                <div>
                  <h2 className="text-lg font-bold text-slate-950">Payment</h2>
                  <p className="text-sm text-slate-500">Secure card, wallet, or COD</p>
                </div>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-600">
                <input defaultValue="4242 4242 4242 4242" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <input defaultValue="09/28" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none" />
                  <input defaultValue="394" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none" />
                </div>
                <div className="rounded-2xl bg-emerald-50 p-4 text-emerald-600">
                  <div className="flex items-center gap-2 font-semibold">
                    <ShieldCheck className="h-4 w-4" />
                    Payment intent is ready for JWT-authenticated checkout APIs.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="glass-panel p-6">
            <h2 className="text-xl font-bold text-slate-950">Order snapshot</h2>
            <div className="mt-5 space-y-4">
              {cart.map((cartItem) => {
                const menuEntry = getMenuItemById(cartItem.itemId);
                if (!menuEntry) return null;

                return (
                  <div key={cartItem.itemId} className="flex items-center justify-between gap-4 rounded-2xl bg-slate-50 p-4 text-sm">
                    <div>
                      <p className="font-semibold text-slate-900">{menuEntry.item.name}</p>
                      <p className="text-slate-500">{menuEntry.restaurant.name}</p>
                    </div>
                    <div className="text-right text-slate-600">
                      <p>x{cartItem.quantity}</p>
                      <p>${(menuEntry.item.price * cartItem.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 space-y-3 border-t border-slate-100 pt-5 text-sm text-slate-600">
              <div className="flex items-center justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
              <div className="flex items-center justify-between"><span>Discount</span><span>-${(subtotal * 0.2).toFixed(2)}</span></div>
              <div className="flex items-center justify-between"><span>Fees</span><span>$5.60</span></div>
            </div>
            <div className="mt-5 flex items-center justify-between text-lg font-bold text-slate-950">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <Link href="/order-success" className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-rose-500 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-rose-400">
              Place order
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
