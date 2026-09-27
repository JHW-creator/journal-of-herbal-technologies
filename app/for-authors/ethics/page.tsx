import type { Metadata } from "next";

import {
  ContentPage,
  PageHeader,
  Section,
} from "@/components/layout/PageChrome";
import { ethics } from "@/content/authors";

export const metadata: Metadata = {
  title: "Publication Ethics & Research Integrity",
};

export default function EthicsPage() {
  return (
    <ContentPage>
      <PageHeader
        eyebrow="For Authors"
        title="Publication Ethics & Research Integrity"
        lead="Authors, editors and reviewers uphold high standards of integrity."
      />

      <Section title="Declarations">
        <p>Manuscripts should include appropriate declarations, including where applicable:</p>
        <ul>
          {ethics.declarations.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-3">
          Authors are responsible for ensuring that declarations accurately reflect the work.
        </p>
      </Section>

      <Section id="ai-policy" title="Artificial Intelligence and AI-Assisted Tools">
        {ethics.ai.map((p) => (
          <p key={p.slice(0, 40)}>{p}</p>
        ))}
      </Section>

      <Section title="Originality and Duplicate Publication">
        {ethics.originality.map((p) => (
          <p key={p.slice(0, 40)}>{p}</p>
        ))}
      </Section>

      <Section id="research-integrity" title="Publication Ethics and Research Integrity">
        <p>The journal addresses, as applicable:</p>
        <ul>
          {ethics.integrity.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-3">{ethics.integrityNote}</p>
      </Section>

      <Section id="data-availability" title="Data Availability">
        <p>
          A Data Availability Statement is required where applicable. Authors should indicate where
          supporting data can be accessed, whether data are publicly available, any restrictions on
          access, and the reason for restricted access where applicable.
        </p>
      </Section>

      <Section id="corrections" title="Corrections & Retractions">
        <p>{ethics.corrections}</p>
      </Section>
    </ContentPage>
  );
}
