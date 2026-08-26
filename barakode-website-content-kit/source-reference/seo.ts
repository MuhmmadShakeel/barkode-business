/**
 * SEO / AEO / GEO helpers.
 *
 * AEO  (Answer Engine Optimization) targets answer engines like ChatGPT,
 *      Perplexity, Claude — they reward structured data, clear Q&A, and
 *      semantic markup over keyword density.
 * GEO  (Generative Engine Optimization) targets Google's AI Overviews and
 *      similar — same signals plus crawler-policy that lets the bot read
 *      the page.
 *
 * Change SITE_URL once you have a real production domain.
 */

import { SOCIAL_LINKS } from "@/lib/data";

export const SITE_URL = "https://barakode.com";
export const SITE_NAME = "Barakode Technologies";
export const SITE_TAGLINE = "Software Development Agency";
export const SITE_DESCRIPTION =
  "Barakode Technologies is a full-cycle software development agency engineering web, mobile, AI, and cloud products for startups and enterprises worldwide.";

/** Public social/profile URLs — used for the Organization `sameAs` graph,
 *  the single strongest signal answer engines use to resolve the brand entity. */
export const SOCIAL_PROFILE_URLS = SOCIAL_LINKS.map((s) => s.href);

/** Absolute URL builder. */
export const absUrl = (path: string = "/") =>
  new URL(path.startsWith("/") ? path : `/${path}`, SITE_URL).toString();

/* --------------------------------------------------------------------------
 * Static schemas (Organization, WebSite, ContactPoint)
 * ------------------------------------------------------------------------ */

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}#organization`,
  name: SITE_NAME,
  alternateName: "Barakode",
  legalName: SITE_NAME,
  slogan: "Engineering Solutions. Delivering Results.",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: absUrl("/images/logo/logo-3d.png"),
    width: 600,
    height: 600,
  },
  image: absUrl("/images/logo/logo-3d.png"),
  description: SITE_DESCRIPTION,
  foundingDate: "2023",
  address: {
    "@type": "PostalAddress",
    addressCountry: "PK",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: absUrl("/contact"),
    telephone: "+92-332-2060667",
    availableLanguage: ["English", "Arabic"],
    areaServed: "Worldwide",
  },
  areaServed: { "@type": "Place", name: "Worldwide" },
  knowsAbout: [
    "Web Development",
    "Mobile App Development",
    "Cloud Computing",
    "DevOps",
    "Artificial Intelligence",
    "Machine Learning",
    "UI/UX Design",
    "Enterprise Software",
    "Staff Augmentation",
  ],
  sameAs: SOCIAL_PROFILE_URLS,
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  publisher: { "@id": `${SITE_URL}#organization` },
  inLanguage: "en",
};

/* --------------------------------------------------------------------------
 * Schema generators
 * ------------------------------------------------------------------------ */

export function breadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absUrl(it.path),
    })),
  };
}

export function faqPageSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

export function serviceListSchema(
  services: { title: string; blurb: string; price?: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((s, i) => ({
      "@type": "Service",
      position: i + 1,
      name: s.title,
      description: s.blurb,
      provider: { "@id": `${SITE_URL}#organization` },
      ...(s.price && {
        offers: {
          "@type": "Offer",
          price: s.price.replace(/[^\d]/g, ""),
          priceCurrency: "USD",
        },
      }),
    })),
  };
}

export function offerCatalogSchema(
  plans: { title: string; tagline: string; price: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Software Development Pricing Plans",
    itemListElement: plans.map((p) => ({
      "@type": "Offer",
      name: p.title,
      description: p.tagline,
      price: p.price,
      priceCurrency: "USD",
      url: absUrl("/contact"),
      seller: { "@id": `${SITE_URL}#organization` },
    })),
  };
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: absUrl("/contact"),
    name: "Contact Barakode Technologies",
    description:
      "Start your software project with Barakode. We respond within 24 hours with a clear plan, honest timeline, and competitive quote.",
    mainEntity: { "@id": `${SITE_URL}#organization` },
  };
}

export function aboutPageSchema(team: { name: string; role: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: absUrl("/about"),
    name: "About Barakode Technologies",
    mainEntity: {
      "@id": `${SITE_URL}#organization`,
      employee: team.map((m) => ({
        "@type": "Person",
        name: m.name,
        jobTitle: m.role,
      })),
    },
  };
}

export function articleSchema(post: {
  slug: string;
  title: string;
  category: string;
  year: string;
  cover: string;
  excerpt?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    ...(post.excerpt && { description: post.excerpt }),
    datePublished: `${post.year}-01-01`,
    dateModified: `${post.year}-01-01`,
    articleSection: post.category,
    image: absUrl(post.cover),
    inLanguage: "en",
    author: {
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: SITE_NAME,
    },
    publisher: { "@id": `${SITE_URL}#organization` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absUrl(`/blogs/${post.slug}`),
    },
  };
}

export function projectSchema(project: {
  slug: string;
  title: string;
  category: string;
  year: string;
  image: string;
  summary?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    ...(project.summary && { description: project.summary }),
    url: absUrl(`/projects/${project.slug}`),
    image: absUrl(project.image),
    dateCreated: project.year.split(" ")[0],
    creator: { "@id": `${SITE_URL}#organization` },
    keywords: project.category,
    inLanguage: "en",
  };
}
