import type { Metadata } from "next";

import { siteTagline, siteUrl } from "@/content/site";

export const homeMetadata: Metadata = {
  title: { absolute: "Journal of Herbal Technologies" },
  description: siteTagline,
  alternates: { canonical: siteUrl },
};

export const aboutMetadata: Metadata = {
  title: "About the Journal",
  description:
    "About Journal of Herbal Technologies: aim, scope, scientific priority, journal information, and institutional association with Oriental College of Pharmacy.",
  alternates: { canonical: `${siteUrl}/about` },
};

export const contactMetadata: Metadata = {
  title: "Contact",
  description:
    "Contact the Journal of Herbal Technologies editorial office and general enquiries.",
  alternates: { canonical: `${siteUrl}/contact` },
};

export const articlesMetadata: Metadata = {
  title: "Articles",
  description:
    "Published research and scholarly content appearing in the Journal of Herbal Technologies.",
  alternates: { canonical: `${siteUrl}/articles` },
};

export const authorsMetadata: Metadata = {
  title: "For Authors",
  description:
    "Guide for Authors for the Journal of Herbal Technologies: article types, submission, peer review, preparation, ethics, and checklist.",
  alternates: { canonical: `${siteUrl}/for-authors` },
};
