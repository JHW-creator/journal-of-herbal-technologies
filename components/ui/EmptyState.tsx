import type { ReactNode } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type EmptyStateProps = {
  title: string;
  description: string;
  illustration: ReactNode;
  actionHref?: string;
  actionLabel?: string;
  className?: string;
};

export function EmptyState({
  title,
  description,
  illustration,
  actionHref,
  actionLabel,
  className,
}: EmptyStateProps) {
  return (
    <div className={cn("mx-auto max-w-xl px-4 py-16 text-center sm:py-20", className)}>
      <div className="mb-8">{illustration}</div>
      <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h1>
      <p className="mx-auto mt-4 max-w-md font-sans text-base leading-relaxed text-muted-foreground sm:text-lg">
        {description}
      </p>
      {actionHref && actionLabel ? (
        <div className="mt-8">
          <Button asChild variant="soft" size="lg">
            <Link href={actionHref}>{actionLabel}</Link>
          </Button>
        </div>
      ) : null}
    </div>
  );
}
