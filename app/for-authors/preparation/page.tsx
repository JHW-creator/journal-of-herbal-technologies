import type { Metadata } from "next";

import {
  ContentPage,
  PageHeader,
  Section,
} from "@/components/layout/PageChrome";
import { preparation } from "@/content/authors";

export const metadata: Metadata = { title: "Manuscript Preparation" };

export default function PreparationPage() {
  return (
    <ContentPage>
      <PageHeader
        eyebrow="For Authors"
        title="Manuscript Preparation"
        lead="Clear structure, proportionate characterization, and transparent reporting."
      />

      <div className="prose-jht">
        {preparation.intro.map((p) => (
          <p key={p.slice(0, 40)}>{p}</p>
        ))}
      </div>

      <Section title="References">
        <p>{preparation.references.intro}</p>
        <ul>
          {preparation.references.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-3">{preparation.references.note}</p>
      </Section>

      <Section title="Word limits">
        {preparation.wordLimits.map((p) => (
          <p key={p.slice(0, 40)}>{p}</p>
        ))}
      </Section>

      <Section title="Reporting guidance" wide>
        <div className="grid gap-5 sm:grid-cols-2">
          {preparation.reporting.map((item) => (
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

      <Section title="General formatting requirements">
        <ul>
          {preparation.formatting.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>
    </ContentPage>
  );
}
