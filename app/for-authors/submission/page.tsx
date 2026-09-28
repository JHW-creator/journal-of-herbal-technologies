import type { Metadata } from "next";

import {
  ContentPage,
  PageHeader,
  Section,
} from "@/components/layout/PageChrome";
import { submission } from "@/content/authors";

export const metadata: Metadata = { title: "Submission Process" };

export default function SubmissionPage() {
  return (
    <ContentPage>
      <PageHeader
        eyebrow="For Authors"
        title="Submission & Editorial Process"
        lead={submission.intro}
      />

      <ol className="flex flex-wrap gap-2">
        {submission.process.map((step, i) => (
          <li
            key={step}
            className="inline-flex items-center gap-2 rounded-full bg-green-mist px-4 py-2 text-sm font-medium text-green-deep"
          >
            <span className="font-display text-green-forest">{i + 1}</span>
            {step}
          </li>
        ))}
      </ol>

      <Section title="Editorial screening considers">
        <ul>
          {submission.screening.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <div className="prose-jht mt-10">
        <p>
          Submissions are accepted via email at our official email id:{" "}
          <a
            href="mailto:journalofherbaltechnologies@gmail.com"
            className="font-medium text-green-forest hover:underline"
          >
            journalofherbaltechnologies@gmail.com
          </a>
        </p>
        <p>
          Submissions should be made with the completed checklist, manuscript
          and figures in jpg format separately.
        </p>
      </div>
    </ContentPage>
  );
}
