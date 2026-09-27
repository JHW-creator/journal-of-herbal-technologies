import type { Metadata } from "next";
import Link from "next/link";

import {
  ContentPage,
  PageHeader,
} from "@/components/layout/PageChrome";
import { authorsHub } from "@/content/authors";
import { authorsMetadata } from "@/content/seo";

export const metadata: Metadata = authorsMetadata;

export default function ForAuthorsPage() {
  return (
    <ContentPage>
      <PageHeader
        eyebrow="For Authors"
        title="Guide for Authors"
        lead={authorsHub.intro}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {authorsHub.cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group rounded-xl border border-border/80 bg-card/70 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-green-forest/40 hover:bg-green-mist/40"
          >
            <h2 className="font-display text-xl font-semibold group-hover:text-green-deep">
              {card.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {card.body}
            </p>
          </Link>
        ))}
      </div>
    </ContentPage>
  );
}
