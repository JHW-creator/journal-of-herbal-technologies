import type { Metadata } from "next";
import Link from "next/link";

import {
  ContentPage,
  PageHeader,
} from "@/components/layout/PageChrome";
import { contact } from "@/content/contact";
import { contactMetadata } from "@/content/seo";

export const metadata: Metadata = contactMetadata;

function Email({ address }: { address: string }) {
  return (
    <a
      href={`mailto:${address}`}
      className="font-medium text-green-forest hover:underline"
    >
      {address}
    </a>
  );
}

export default function ContactPage() {
  return (
    <ContentPage>
      <PageHeader title="Contact the Journal" />

      <div className="grid gap-6 lg:grid-cols-3">
        <article className="rounded-2xl border border-border bg-card p-6">
          <h2 className="font-display text-2xl font-semibold">
            {contact.editorialOffice.title}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            For questions concerning:
          </p>
          <ul className="mt-3 space-y-1.5 text-sm">
            {contact.editorialOffice.for.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-green-forest" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm">
            Email: <Email address={contact.editorialOffice.email} />
          </p>
        </article>

        <article className="rounded-2xl border border-border bg-card p-6">
          <h2 className="font-display text-2xl font-semibold">
            {contact.general.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {contact.general.body}
          </p>
          <p className="mt-6 text-sm">
            Email: <Email address={contact.general.email} />
          </p>
        </article>

        <article className="rounded-2xl border border-border bg-card p-6">
          <h2 className="font-display text-2xl font-semibold">
            {contact.institutional.title}
          </h2>
          <p className="mt-3 font-display text-lg">
            {contact.institutional.name}
          </p>
          <p className="mt-6 text-sm">
            <Link
              href="/about#institutional-association"
              className="text-green-forest hover:underline"
            >
              Institutional Association
            </Link>
          </p>
        </article>
      </div>
    </ContentPage>
  );
}
