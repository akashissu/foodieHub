import type { ReactNode } from 'react';

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: ReactNode;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="max-w-2xl space-y-3">
      <span className="inline-flex rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-rose-600">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{title}</h2>
      <p className="text-base leading-7 text-slate-600 md:text-lg">{description}</p>
    </div>
  );
}
