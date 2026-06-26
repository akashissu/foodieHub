import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';
import './globals.css';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: 'FoodieHub | Modern food delivery experience',
  description: 'FoodieHub is a premium Zomato-inspired food delivery app with restaurant discovery, carts, checkout, tracking, and dashboards.'
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-950 antialiased">
        <Header />
        <main>{children}</main>
        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 text-sm text-slate-500 sm:px-6 md:grid-cols-[1.3fr_0.7fr_0.7fr] lg:px-8">
            <div>
              <p className="text-lg font-black text-slate-950">FoodieHub</p>
              <p className="mt-3 max-w-md leading-7">
                A modern full-stack delivery experience with discovery, checkout, real-time order tracking, and operator dashboards.
              </p>
            </div>
            <div>
              <p className="font-semibold uppercase tracking-[0.24em] text-slate-400">Explore</p>
              <div className="mt-4 flex flex-col gap-3">
                <Link href="/">Home</Link>
                <Link href="/cart">Cart</Link>
                <Link href="/checkout">Checkout</Link>
              </div>
            </div>
            <div>
              <p className="font-semibold uppercase tracking-[0.24em] text-slate-400">Dashboards</p>
              <div className="mt-4 flex flex-col gap-3">
                <Link href="/admin">Admin</Link>
                <Link href="/owner">Restaurant owner</Link>
                <Link href="/profile">User profile</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
