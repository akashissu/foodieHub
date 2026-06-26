import Link from 'next/link';
import { Bell, ShoppingBag } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/cart', label: 'Cart' },
  { href: '/tracking', label: 'Tracking' },
  { href: '/profile', label: 'Profile' },
  { href: '/admin', label: 'Admin' },
  { href: '/owner', label: 'Owner' }
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-orange-400 text-lg font-black text-white shadow-soft">
            F
          </div>
          <div>
            <p className="text-lg font-black tracking-tight text-slate-950">FoodieHub</p>
            <p className="text-xs text-slate-500">Modern food delivery for every craving</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-rose-500"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-rose-200 hover:text-rose-500 sm:inline-flex"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-500"
          >
            Get started
          </Link>
          <button className="hidden h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-rose-200 hover:text-rose-500 lg:inline-flex">
            <Bell className="h-5 w-5" />
          </button>
          <Link
            href="/cart"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-rose-50 text-rose-500 transition hover:bg-rose-100"
          >
            <ShoppingBag className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
