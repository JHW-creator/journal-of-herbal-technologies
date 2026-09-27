import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  lead,
  className,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  className?: string;
}) {
  return (
    <header className={cn("mb-10 max-w-3xl", className)}>
      {eyebrow ? (
        <p className="mb-3 font-sans text-xs font-semibold tracking-[0.16em] text-green-forest uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        {title}
      </h1>
      {lead ? (
        <p className="mt-4 font-display text-xl leading-snug text-foreground/70 italic sm:text-2xl">
          {lead}
        </p>
      ) : null}
    </header>
  );
}

/** Text sections stay readable width. Pass wide for grids, tables, card layouts. */
export function Section({
  id,
  title,
  children,
  wide = false,
}: {
  id?: string;
  title: string;
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <section id={id} className="scroll-mt-28 py-6">
      <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      <div className={cn("mt-4", wide ? "w-full" : "prose-jht")}>{children}</div>
    </section>
  );
}

export function ContentPage({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">{children}</div>
  );
}
