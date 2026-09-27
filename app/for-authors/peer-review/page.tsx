import type { Metadata } from "next";

import {
  ContentPage,
  PageHeader,
} from "@/components/layout/PageChrome";
import { peerReview } from "@/content/authors";

export const metadata: Metadata = { title: "Peer Review" };

export default function PeerReviewPage() {
  return (
    <ContentPage>
      <PageHeader
        eyebrow="For Authors"
        title="Peer Review"
        lead="Double-anonymized review guided by subject expertise."
      />
      <div className="prose-jht">
        {peerReview.paragraphs.map((p) => (
          <p key={p.slice(0, 48)}>{p}</p>
        ))}
      </div>
    </ContentPage>
  );
}
