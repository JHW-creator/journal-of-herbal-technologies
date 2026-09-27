import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { home } from "@/content/home";
import { homeMetadata } from "@/content/seo";
import { siteName, siteTagline } from "@/content/site";

export const metadata: Metadata = homeMetadata;

export default function HomePage() {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-balance sm:text-6xl sm:leading-[1.05]">
            {siteName}
          </h1>
          <p className="mt-5 max-w-2xl font-display text-xl text-foreground/75 italic sm:text-2xl">
            {siteTagline}
          </p>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-foreground/90 sm:text-lg">
            {home.intro}
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {home.platform}
          </p>
          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <Button asChild size="lg" variant="default" className="w-full sm:w-auto">
              <Link href="/about">Explore JHT</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <Link href="/for-authors">Submit Manuscript</Link>
            </Button>
            <Button asChild size="lg" variant="soft" className="w-full sm:w-auto">
              <Link href="/articles">Explore Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight">
              About the Journal
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {home.aboutTeaser}
            </p>
          </div>
          <Button asChild variant="forest" size="lg" className="w-full shrink-0 sm:w-auto">
            <Link href="/about">Read About JHT</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
