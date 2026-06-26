import Link from 'next/link';
import { CheckCircle2, ReceiptText, Truck } from 'lucide-react';
import { orders } from '@/data/mockData';

const latestOrder = orders[0];

export default function OrderSuccessPage() {
  return (
    <div className="page-shell py-12">
      <section className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-soft sm:p-10">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">Order confirmed</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950">Your food is on the move.</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Order {latestOrder.id} has been placed successfully. We’ve reserved the rider, locked your coupon savings, and pushed status updates into tracking.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-[1.5rem] bg-slate-50 p-5 text-left">
            <div className="flex items-center gap-3 text-slate-950">
              <Truck className="h-5 w-5 text-rose-500" />
              <h2 className="font-bold">Estimated arrival</h2>
            </div>
            <p className="mt-3 text-3xl font-black tracking-tight text-slate-950">{latestOrder.eta}</p>
            <p className="mt-2 text-sm text-slate-500">Live updates continue on the tracking page.</p>
          </div>
          <div className="rounded-[1.5rem] bg-slate-50 p-5 text-left">
            <div className="flex items-center gap-3 text-slate-950">
              <ReceiptText className="h-5 w-5 text-rose-500" />
              <h2 className="font-bold">Payment summary</h2>
            </div>
            <p className="mt-3 text-3xl font-black tracking-tight text-slate-950">${latestOrder.total.toFixed(2)}</p>
            <p className="mt-2 text-sm text-slate-500">Charged via {latestOrder.paymentMethod}.</p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/tracking" className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-rose-500">
            Track order
          </Link>
          <Link href="/profile" className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-rose-200 hover:text-rose-500">
            View order history
          </Link>
        </div>
      </section>
    </div>
  );
}
