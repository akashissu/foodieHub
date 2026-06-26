import Link from 'next/link';
import { Mail, MapPin, Phone, UserRound } from 'lucide-react';

export default function SignupPage() {
  return (
    <div className="page-shell py-10">
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
          <div className="space-y-2">
            <h1 className="text-4xl font-black tracking-tight text-slate-950">Create your FoodieHub account</h1>
            <p className="text-sm text-slate-500">Build a profile, save addresses, and unlock loyalty-based offers.</p>
          </div>

          <form className="mt-8 grid gap-5 sm:grid-cols-2">
            <label className="space-y-2 sm:col-span-1">
              <span className="text-sm font-semibold text-slate-700">Full name</span>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3">
                <UserRound className="h-5 w-5 text-rose-500" />
                <input className="w-full border-none outline-none" placeholder="Maya Chen" />
              </div>
            </label>
            <label className="space-y-2 sm:col-span-1">
              <span className="text-sm font-semibold text-slate-700">Email address</span>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3">
                <Mail className="h-5 w-5 text-rose-500" />
                <input className="w-full border-none outline-none" type="email" placeholder="maya@foodiehub.app" />
              </div>
            </label>
            <label className="space-y-2 sm:col-span-1">
              <span className="text-sm font-semibold text-slate-700">Phone</span>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3">
                <Phone className="h-5 w-5 text-rose-500" />
                <input className="w-full border-none outline-none" placeholder="+1 555 0182" />
              </div>
            </label>
            <label className="space-y-2 sm:col-span-1">
              <span className="text-sm font-semibold text-slate-700">Delivery address</span>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3">
                <MapPin className="h-5 w-5 text-rose-500" />
                <input className="w-full border-none outline-none" placeholder="220 Harbor Residences" />
              </div>
            </label>
            <label className="space-y-2 sm:col-span-2">
              <span className="text-sm font-semibold text-slate-700">Password</span>
              <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-rose-200" type="password" placeholder="Create a strong password" />
            </label>
            <button className="sm:col-span-2 inline-flex items-center justify-center rounded-2xl bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-rose-500">
              Create account
            </button>
          </form>

          <p className="mt-6 text-sm text-slate-500">
            Already signed up?{' '}
            <Link href="/login" className="font-semibold text-rose-500">
              Log in here
            </Link>
          </p>
        </section>

        <section className="rounded-[2rem] bg-gradient-to-br from-rose-500 to-orange-400 p-8 text-white shadow-soft">
          <h2 className="text-3xl font-black tracking-tight">Why customers stick with FoodieHub</h2>
          <div className="mt-8 space-y-5 text-sm leading-7 text-white/85">
            <p>• Smart search and cuisine filters tuned for fast decision-making.</p>
            <p>• Coupon discovery and checkout summaries that feel transparent, not sneaky.</p>
            <p>• Real-time tracking, order history, and loyalty points in one clean profile.</p>
            <p>• A mobile-first interface with premium visuals and friction-free navigation.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
