import Link from 'next/link';
import { LockKeyhole, Mail } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="page-shell py-10">
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <section className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-soft">
          <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/75">
            Welcome back
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-tight">Sign in and pick up where the cravings left off.</h1>
          <p className="mt-4 text-sm leading-7 text-white/70">
            Demo accounts are wired for customer, admin, and restaurant owner journeys so reviewers can move through the full product surface.
          </p>
          <div className="mt-8 space-y-3 text-sm text-white/75">
            <p>Customer: maya@foodiehub.app / demo1234</p>
            <p>Admin: admin@foodiehub.app / admin1234</p>
            <p>Owner: owner@foodiehub.app / owner1234</p>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
          <div className="space-y-2">
            <h2 className="text-3xl font-black tracking-tight text-slate-950">Login</h2>
            <p className="text-sm text-slate-500">Secure JWT-ready auth entry point for FoodieHub.</p>
          </div>

          <form className="mt-8 space-y-5">
            <label className="block space-y-2">
              <span className="text-sm font-semibold text-slate-700">Email address</span>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3">
                <Mail className="h-5 w-5 text-rose-500" />
                <input className="w-full border-none outline-none" type="email" placeholder="maya@foodiehub.app" />
              </div>
            </label>
            <label className="block space-y-2">
              <span className="text-sm font-semibold text-slate-700">Password</span>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3">
                <LockKeyhole className="h-5 w-5 text-rose-500" />
                <input className="w-full border-none outline-none" type="password" placeholder="••••••••" />
              </div>
            </label>
            <button className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-rose-500">
              Continue securely
            </button>
          </form>

          <p className="mt-6 text-sm text-slate-500">
            New to FoodieHub?{' '}
            <Link href="/signup" className="font-semibold text-rose-500">
              Create an account
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
}
