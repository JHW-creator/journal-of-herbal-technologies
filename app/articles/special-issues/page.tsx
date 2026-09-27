import type { Metadata } from "next";

import { IllustSpecialIssues } from "@/components/illustrations/EmptyStates";
import {
  ContentPage,
  PageHeader,
} from "@/components/layout/PageChrome";
import { articles } from "@/content/articles";

export const metadata: Metadata = { title: "Special Issues" };

export default function SpecialIssuesPage() {
  return (
    <ContentPage>
      <PageHeader title={articles.specialIssues.title} />
      <div className="rounded-2xl border border-border bg-card px-4 py-10 text-center sm:px-8">
        <IllustSpecialIssues />
        <p className="mx-auto mt-6 max-w-lg text-muted-foreground">
          {articles.specialIssues.body}
        </p>
      </div>
    </ContentPage>
  );
}
