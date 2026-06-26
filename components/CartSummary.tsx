import { TicketPercent, Wallet } from 'lucide-react';
import { cart, coupons, getMenuItemById } from '@/data/mockData';

const subtotal = cart.reduce((sum, cartItem) => {
  const menuEntry = getMenuItemById(cartItem.itemId);
  return sum + (menuEntry?.item.price ?? 0) * cartItem.quantity;
}, 0);
const deliveryFee = 3.5;
const serviceFee = 2.1;
const promoDiscount = Math.round(subtotal * 0.2 * 100) / 100;
const total = subtotal + deliveryFee + serviceFee - promoDiscount;

export function CartSummary() {
  return (
    <aside className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft">
      <div className="flex items-center gap-3">
        <div className="rounded-2xl bg-rose-50 p-3 text-rose-500">
          <Wallet className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-950">Live cart summary</h3>
          <p className="text-sm text-slate-500">Coupon suggestions and cost breakdown</p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {cart.map((cartItem) => {
          const menuEntry = getMenuItemById(cartItem.itemId);
          if (!menuEntry) return null;

          return (
            <div key={cartItem.itemId} className="rounded-2xl bg-slate-50 p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold text-slate-900">{menuEntry.item.name}</p>
                  <p className="mt-1 text-sm text-slate-500">{menuEntry.restaurant.name}</p>
                  {cartItem.specialRequest ? <p className="mt-2 text-xs text-slate-400">Note: {cartItem.specialRequest}</p> : null}
                </div>
                <div className="text-right">
                  <p className="font-semibold text-slate-900">x{cartItem.quantity}</p>
                  <p className="mt-1 text-sm text-slate-500">${menuEntry.item.price * cartItem.quantity}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 rounded-2xl border border-dashed border-rose-200 bg-rose-50 p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-rose-500">
          <TicketPercent className="h-4 w-4" />
          Best coupon right now
        </div>
        <p className="mt-2 text-lg font-bold text-slate-950">{coupons[0].code}</p>
        <p className="mt-1 text-sm text-slate-600">{coupons[0].description}</p>
      </div>

      <div className="mt-6 space-y-3 border-t border-slate-100 pt-6 text-sm text-slate-600">
        <div className="flex items-center justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Delivery fee</span>
          <span>${deliveryFee.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Service fee</span>
          <span>${serviceFee.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between text-emerald-600">
          <span>WELCOME20 applied</span>
          <span>-${promoDiscount.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between border-t border-slate-100 pt-3 text-base font-bold text-slate-950">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </aside>
  );
}
