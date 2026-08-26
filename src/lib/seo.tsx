import type { Metadata } from "next";
import { CONTACT, SITE, SOCIAL } from "./site";

const OG = "/brand/og-image-1200x630.png";

export const buildMetadata = ({
  title,
  description,
  path = "/",
  image = OG,
  type = "website",
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
}): Metadata => {
  const url = `${SITE.url}${path === "/" ? "" : path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      type,
      locale: SITE.locale,
      images: [{ url: image, width: 1200, height: 630, alt: SITE.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
};

/**
 * Organization schema. Deliberately omits `foundingDate` — the supplied source
 * records it as both 2023 and 2025, and publishing an unverified founding year
 * in structured data is exactly the kind of claim the brief rules out.
 */
export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  alternateName: SITE.shortName,
  url: SITE.url,
  logo: `${SITE.url}/brand/barakode-mark-gold.svg`,
  description: SITE.description,
  slogan: SITE.positioning,
  address: { "@type": "PostalAddress", addressCountry: SITE.countryCode },
  areaServed: SITE.areaServed,
  sameAs: SOCIAL.filter((s) => s.icon !== "whatsapp").map((s) => s.href),
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: CONTACT.phoneSchema,
      availableLanguage: SITE.languages,
      areaServed: SITE.areaServed,
    },
  ],
  knowsAbout: [
    "Product Engineering",
    "MVP Development",
    "SaaS Development",
    "Web Application Development",
    "Mobile App Development",
    "AI Automation",
    "AI Integration",
    "Retrieval Augmented Generation",
    "Internal Business Systems",
    "Cloud and DevOps",
    "UI/UX Product Design",
  ],
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  description: SITE.description,
  publisher: { "@id": `${SITE.url}/#organization` },
  inLanguage: "en",
});

export const breadcrumbSchema = (trail: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: trail.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: t.name,
    item: `${SITE.url}${t.path === "/" ? "" : t.path}`,
  })),
});

export const faqSchema = (items: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const serviceSchema = ({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  serviceType: name,
  url: `${SITE.url}${path}`,
  provider: { "@id": `${SITE.url}/#organization` },
  areaServed: SITE.areaServed,
});

/** Renders a JSON-LD block. */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // Schema objects are authored here, never from user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
