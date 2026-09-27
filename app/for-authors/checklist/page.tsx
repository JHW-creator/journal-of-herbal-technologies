import type { Metadata } from "next";

import {
  ContentPage,
  PageHeader,
} from "@/components/layout/PageChrome";
import { checklist } from "@/content/authors";

export const metadata: Metadata = { title: "Submission Checklist" };

export default function ChecklistPage() {
  return (
    <ContentPage>
      <PageHeader
        eyebrow="For Authors"
        title="Submission Checklist"
        lead="Before submission, authors should confirm the following."
      />

      <ol className="grid gap-3 sm:grid-cols-2">
        {checklist.map((item, i) => (
          <li
            key={item}
            className="flex gap-4 rounded-xl border border-border bg-card px-4 py-4"
          >
            <span className="font-display text-lg text-green-forest">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="pt-0.5 text-[1.02rem] leading-relaxed">{item}</span>
          </li>
        ))}
      </ol>
    </ContentPage>
  );
}
