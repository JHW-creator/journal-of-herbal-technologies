export const siteName = "Journal of Herbal Technologies";
export const siteShortName = "JHT";
export const siteTagline =
  "Advancing Science, Technology and Innovation in Herbal Research";
export const siteDomain = "journalofherbaltechnologies.com";
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? `https://${siteDomain}`;
export const siteEmail = "journalofherbaltechnologies@gmail.com";

export const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About the Journal" },
  { href: "/editorial-board", label: "Editorial Board" },
  { href: "/for-authors", label: "For Authors", hasDropdown: true },
  { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact" },
] as const;

export const authorsDropdown = [
  { href: "/for-authors", label: "Guide for Authors" },
  { href: "/for-authors/article-types", label: "Article Types" },
  { href: "/for-authors/submission", label: "Submission Process" },
  { href: "/for-authors/peer-review", label: "Peer Review" },
  { href: "/for-authors/preparation", label: "Manuscript Preparation" },
  { href: "/for-authors/ethics", label: "Publication Ethics" },
  { href: "/for-authors/checklist", label: "Submission Checklist" },
] as const;

export const footerExplore = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About the Journal" },
  { href: "/editorial-board", label: "Editorial Board" },
  { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerAuthors = [
  { href: "/for-authors", label: "Guide for Authors" },
  { href: "/for-authors/article-types", label: "Article Types" },
  { href: "/for-authors/submission", label: "Submission" },
  { href: "/for-authors/ethics", label: "Publication Ethics" },
  { href: "/for-authors/checklist", label: "Checklist" },
] as const;
