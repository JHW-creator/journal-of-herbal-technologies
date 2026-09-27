import type { Metadata } from "next";

import { IllustArchiveEmpty } from "@/components/illustrations/EmptyStates";
import {
  ContentPage,
  PageHeader,
} from "@/components/layout/PageChrome";
import { articles } from "@/content/articles";

export const metadata: Metadata = { title: "Archive" };

export default function ArchivePage() {
  return (
    <ContentPage>
      <PageHeader title={articles.archive.title} />
      <div className="rounded-2xl border border-border bg-card px-4 py-10 text-center sm:px-8">
        <IllustArchiveEmpty />
        <p className="mx-auto mt-6 max-w-md text-muted-foreground">
          {articles.archive.body}
        </p>
      </div>
    </ContentPage>
  );
}
