import type { Metadata } from "next";
import Link from "next/link";

import { IllustArticlesEmpty } from "@/components/illustrations/EmptyStates";
import {
  ContentPage,
  PageHeader,
} from "@/components/layout/PageChrome";
import { articles } from "@/content/articles";
import { articlesMetadata } from "@/content/seo";

export const metadata: Metadata = articlesMetadata;

export default function ArticlesPage() {
  return (
    <ContentPage>
      <PageHeader title="Articles" lead={articles.intro} />

      <div className="rounded-2xl border border-border bg-card px-4 py-10 text-center sm:px-8">
        <IllustArticlesEmpty />
        <h2 className="mt-6 font-display text-2xl font-semibold">
          {articles.latestHeading}
        </h2>
        <p className="mt-3 text-muted-foreground">{articles.emptyBody}</p>
      </div>

      <div className="mt-12">
        <h2 className="font-display text-2xl font-semibold">
          {articles.subjectAreasHeading}
        </h2>
        <p className="mt-2 max-w-3xl text-muted-foreground">
          {articles.subjectAreasIntro}
        </p>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          {articles.searchNote}
        </p>
        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {articles.subjectAreas.map((area) => (
            <li
              key={area}
              className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground/85"
            >
              {area}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-4 text-sm">
          <Link href="/articles/archive" className="text-green-forest hover:underline">
            Archive
          </Link>
          <Link
            href="/articles/special-issues"
            className="text-green-forest hover:underline"
          >
            Special Issues
          </Link>
        </div>
      </div>
    </ContentPage>
  );
}
