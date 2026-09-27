import { siteEmail, siteName, siteTagline, siteUrl } from "@/content/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: siteName,
        url: siteUrl,
        description: siteTagline,
        publisher: {
          "@type": "Organization",
          name: siteName,
          email: siteEmail,
          url: siteUrl,
        },
      },
      {
        "@type": "Periodical",
        name: siteName,
        alternateName: "JHT",
        description: siteTagline,
        url: siteUrl,
        inLanguage: "en",
        publisher: {
          "@type": "Organization",
          name: siteName,
          email: siteEmail,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
