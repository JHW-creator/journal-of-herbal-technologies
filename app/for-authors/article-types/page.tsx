import type { Metadata } from "next";

import {
  ContentPage,
  PageHeader,
  Section,
} from "@/components/layout/PageChrome";
import { articleTypes } from "@/content/authors";

export const metadata: Metadata = { title: "Article Types" };

export default function ArticleTypesPage() {
  return (
    <ContentPage>
      <PageHeader
        eyebrow="For Authors"
        title="Article Types"
        lead={articleTypes.intro}
      />

      <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {articleTypes.types.map((type, i) => (
          <li
            key={type}
            className="flex gap-3 rounded-lg border border-border bg-card px-4 py-3"
          >
            <span className="font-display text-lg text-green-forest">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-medium">{type}</span>
          </li>
        ))}
      </ol>
      <p className="mt-4 max-w-3xl text-sm text-muted-foreground italic">
        {articleTypes.note}
      </p>

      <Section title="Article-specific requirements" wide>
        <div className="grid gap-6 sm:grid-cols-2">
          {articleTypes.details.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-card p-5"
            >
              <h3 className="font-display text-xl font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </ContentPage>
  );
}
