import type { Metadata } from "next";

import {
  ContentPage,
  PageHeader,
  Section,
} from "@/components/layout/PageChrome";
import { about } from "@/content/about";
import { aboutMetadata } from "@/content/seo";

export const metadata: Metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <ContentPage>
      <PageHeader title="About Journal of Herbal Technologies" />

      <div className="prose-jht">
        {about.intro.map((p) => (
          <p key={p.slice(0, 40)}>{p}</p>
        ))}
      </div>

      <Section id="aim" title="Aim">
        {about.aim.map((p) => (
          <p key={p.slice(0, 40)}>{p}</p>
        ))}
      </Section>

      <Section id="scope" title="Scope" wide>
        <p className="prose-jht">{about.scopeIntro}</p>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {about.scope.map((area, i) => (
            <article
              key={area.title}
              className="rounded-xl border border-border bg-card p-5"
            >
              <p className="font-sans text-xs font-semibold tracking-[0.14em] text-green-forest uppercase">
                Area {i + 1}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold leading-snug">
                {area.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Research involving:
              </p>
              <ul className="mt-2 space-y-1 text-sm text-foreground/85">
                {area.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-green-forest" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {area.note ? (
                <p className="mt-3 text-sm text-muted-foreground italic">
                  {area.note}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </Section>

      <Section id="scientific-priority" title="Scientific Priority">
        <p>{about.scientificPriorityIntro}</p>
        <ul>
          {about.lowerPriority.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-4">{about.scientificPriorityNote}</p>
      </Section>

      <Section id="what-jht-is-not" title="What JHT Does Not Aim to Be">
        {about.notAim.map((p) => (
          <p key={p.slice(0, 40)}>{p}</p>
        ))}
      </Section>

      <Section id="journal-information" title="Journal Information" wide>
        <dl className="mt-2 divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
          {about.journalInfo.map((row) => (
            <div
              key={row.label}
              className="grid gap-1 px-4 py-3 sm:grid-cols-[14rem_1fr] sm:gap-4"
            >
              <dt className="text-sm font-medium text-muted-foreground">
                {row.label}
              </dt>
              <dd className="text-sm text-foreground">{row.value || ""}</dd>
            </div>
          ))}
        </dl>
        <div id="open-access" className="sr-only">
          Open Access
        </div>
        <div id="indexing" className="sr-only">
          Indexing &amp; Abstracting
        </div>
      </Section>

      <Section id="institutional-association" title="Institutional Association">
        {about.institutional.map((p) => (
          <p key={p.slice(0, 40)}>{p}</p>
        ))}
      </Section>
    </ContentPage>
  );
}
