'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Minus, Plus, TicketPercent } from 'lucide-react';
import { cart as initialCart, coupons, getMenuItemById } from '@/data/mockData';

export default function CartPage() {
  const [items, setItems] = useState(initialCart);
  const [couponCode, setCouponCode] = useState('WELCOME20');

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, cartItem) => {
      const menuEntry = getMenuItemById(cartItem.itemId);
      return sum + (menuEntry?.item.price ?? 0) * cartItem.quantity;
    }, 0);

    const coupon = coupons.find((entry) => entry.code === couponCode.toUpperCase());
    const discount = coupon
      ? coupon.discountType === 'percentage'
        ? subtotal * (coupon.value / 100)
        : coupon.value
      : 0;
    const deliveryFee = 3.5;
    const serviceFee = 2.1;
    const total = Math.max(subtotal + deliveryFee + serviceFee - discount, 0);

    return {
      subtotal,
      discount,
      deliveryFee,
      serviceFee,
      total,
      coupon
    };
  }, [couponCode, items]);

  const updateQuantity = (itemId: string, delta: number) => {
    setItems((current) =>
      current
        .map((item) => (item.itemId === itemId ? { ...item, quantity: Math.max(item.quantity + delta, 0) } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="page-shell py-10">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <section className="glass-panel p-6 sm:p-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-500">Cart</p>
              <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-950">Review your order before checkout</h1>
            </div>
            <Link href="/checkout" className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-500">
              Continue
            </Link>
          </div>

          <div className="mt-8 space-y-4">
            {items.map((cartItem) => {
              const menuEntry = getMenuItemById(cartItem.itemId);
              if (!menuEntry) return null;

              return (
                <article key={cartItem.itemId} className="grid gap-4 rounded-[1.5rem] border border-slate-200 p-4 md:grid-cols-[140px_1fr_auto] md:items-center">
                  <img src={menuEntry.item.image} alt={menuEntry.item.name} className="h-32 w-full rounded-[1.25rem] object-cover" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">{menuEntry.restaurant.name}</p>
                    <h2 className="mt-2 text-xl font-bold text-slate-950">{menuEntry.item.name}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{menuEntry.item.description}</p>
                    {cartItem.specialRequest ? <p className="mt-2 text-xs text-slate-400">Special request: {cartItem.specialRequest}</p> : null}
                  </div>
                  <div className="flex flex-col items-end gap-3">
                    <p className="text-lg font-bold text-slate-950">${(menuEntry.item.price * cartItem.quantity).toFixed(2)}</p>
                    <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 px-3 py-2">
                      <button type="button" onClick={() => updateQuantity(cartItem.itemId, -1)} className="text-slate-500 transition hover:text-rose-500">
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-4 text-center text-sm font-semibold text-slate-900">{cartItem.quantity}</span>
                      <button type="button" onClick={() => updateQuantity(cartItem.itemId, 1)} className="text-slate-500 transition hover:text-rose-500">
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <aside className="space-y-6">
          <div className="glass-panel p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-rose-50 p-3 text-rose-500">
                <TicketPercent className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-950">Apply coupon</h2>
                <p className="text-sm text-slate-500">Instant savings on premium orders</p>
              </div>
            </div>
            <div className="mt-5 flex gap-3">
              <input
                value={couponCode}
                onChange={(event) => setCouponCode(event.target.value)}
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-rose-200"
                placeholder="Enter coupon code"
              />
              <button className="rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-rose-500">
                Apply
              </button>
            </div>
            <div className="mt-4 space-y-2 text-sm text-slate-500">
              {coupons.map((coupon) => (
                <p key={coupon.code}>
                  <span className="font-semibold text-slate-900">{coupon.code}</span> — {coupon.description}
                </p>
              ))}
            </div>
          </div>

          <div className="glass-panel p-6">
            <h2 className="text-xl font-bold text-slate-950">Order summary</h2>
            <div className="mt-5 space-y-3 text-sm text-slate-600">
              <div className="flex items-center justify-between"><span>Subtotal</span><span>${totals.subtotal.toFixed(2)}</span></div>
              <div className="flex items-center justify-between"><span>Delivery fee</span><span>${totals.deliveryFee.toFixed(2)}</span></div>
              <div className="flex items-center justify-between"><span>Service fee</span><span>${totals.serviceFee.toFixed(2)}</span></div>
              <div className="flex items-center justify-between text-emerald-600"><span>Discount</span><span>-${totals.discount.toFixed(2)}</span></div>
            </div>
            <div className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
              {totals.coupon ? `Coupon ${totals.coupon.code} is active.` : 'No valid coupon applied yet.'}
            </div>
            <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5 text-lg font-bold text-slate-950">
              <span>Total payable</span>
              <span>${totals.total.toFixed(2)}</span>
            </div>
            <Link href="/checkout" className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-rose-500 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-rose-400">
              Proceed to checkout
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
