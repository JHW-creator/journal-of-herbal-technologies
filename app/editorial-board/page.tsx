import type { Metadata } from "next";

import { IllustBoardEmpty } from "@/components/illustrations/EmptyStates";
import {
  ContentPage,
  PageHeader,
  Section,
} from "@/components/layout/PageChrome";
import { editorial } from "@/content/editorial";

export const metadata: Metadata = { title: "Editorial Board" };

export default function EditorialBoardPage() {
  return (
    <ContentPage>
      <PageHeader title="Editorial Board" lead={editorial.intro} />

      <IllustBoardEmpty className="mb-10 max-w-lg" />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {editorial.roles.map((role) => (
          <article
            key={role.title}
            className="rounded-xl border border-border bg-card p-6"
          >
            <h2 className="font-display text-xl font-semibold sm:text-2xl">
              {role.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {role.body}
            </p>
          </article>
        ))}
      </div>

      <Section title="Founding Publisher">
        <ul className="font-display text-xl">
          {editorial.foundingPublishers.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
        <p className="mt-4">{editorial.foundingNote}</p>
      </Section>

      <Section title="Editorial Independence">
        {editorial.independence.map((p) => (
          <p key={p.slice(0, 40)}>{p}</p>
        ))}
      </Section>
    </ContentPage>
  );
}
