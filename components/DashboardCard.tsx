import type { ReactNode } from 'react';

type DashboardCardProps = {
  label: string;
  value: string;
  hint: string;
  icon: ReactNode;
};

export function DashboardCard({ label, value, hint, icon }: DashboardCardProps) {
  return (
    <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">{label}</p>
          <p className="mt-4 text-3xl font-black tracking-tight text-slate-950">{value}</p>
          <p className="mt-2 text-sm leading-6 text-slate-500">{hint}</p>
        </div>
        <div className="rounded-2xl bg-rose-50 p-3 text-rose-500">{icon}</div>
      </div>
    </div>
  );
}
