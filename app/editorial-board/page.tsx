import type { Metadata } from "next";
import Image from "next/image";

import {
  ContentPage,
  PageHeader,
  Section,
} from "@/components/layout/PageChrome";
import { editorial, type BoardPerson } from "@/content/editorial";

export const metadata: Metadata = { title: "Editorial Board" };

function PersonCard({ person }: { person: BoardPerson }) {
  return (
    <article className="flex flex-col items-center rounded-xl border border-border bg-card px-5 py-6 text-center">
      <Image
        src={person.image}
        alt={person.imageAlt}
        width={160}
        height={160}
        className="size-36 rounded-full object-cover sm:size-40"
      />
      <p className="mt-5 text-xs font-semibold tracking-[0.12em] text-green-forest uppercase">
        {person.role}
      </p>
      <h3 className="mt-2 text-xl font-semibold text-foreground">{person.name}</h3>
      <div className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
        {person.details.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </article>
  );
}

export default function EditorialBoardPage() {
  return (
    <ContentPage>
      <PageHeader title="Editorial Board" lead={editorial.intro} />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {editorial.leadership.map((person) => (
          <PersonCard key={person.name} person={person} />
        ))}
      </div>

      <Section title="Editorial Board Members" wide>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {editorial.members.map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
        </div>
      </Section>

      <Section title="Managing and Technical Editor" wide>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {editorial.managing.map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
        </div>
      </Section>

      <Section title="Editorial Independence">
        {editorial.independence.map((p) => (
          <p key={p.slice(0, 40)}>{p}</p>
        ))}
      </Section>
    </ContentPage>
  );
}
