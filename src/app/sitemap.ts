import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { SERVICE_PAGES } from "@/lib/service-pages";
import { CLIENT_CASES, RESEARCH_STUDIES } from "@/lib/case-studies";
import { ARTICLES } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const url = (p: string) => `${SITE.url}${p === "/" ? "" : p}`;

  const core: MetadataRoute.Sitemap = [
    { url: url("/"), priority: 1, changeFrequency: "monthly" },
    { url: url("/services"), priority: 0.9, changeFrequency: "monthly" },
    { url: url("/ai-automation"), priority: 0.9, changeFrequency: "monthly" },
    { url: url("/case-studies"), priority: 0.9, changeFrequency: "monthly" },
    { url: url("/process"), priority: 0.7, changeFrequency: "yearly" },
    { url: url("/engagement-models"), priority: 0.8, changeFrequency: "yearly" },
    { url: url("/about"), priority: 0.7, changeFrequency: "yearly" },
    { url: url("/contact"), priority: 0.9, changeFrequency: "yearly" },
    { url: url("/faq"), priority: 0.6, changeFrequency: "monthly" },
    { url: url("/technologies"), priority: 0.6, changeFrequency: "yearly" },
    { url: url("/insights"), priority: 0.6, changeFrequency: "weekly" },
    { url: url("/privacy-policy"), priority: 0.2, changeFrequency: "yearly" },
    { url: url("/terms-of-service"), priority: 0.2, changeFrequency: "yearly" },
  ];

  const services: MetadataRoute.Sitemap = SERVICE_PAGES.map((p) => ({
    url: url(`/services/${p.slug}`),
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const clientCases: MetadataRoute.Sitemap = CLIENT_CASES.map((c) => ({
    url: url(`/case-studies/${c.slug}`),
    priority: 0.7,
    changeFrequency: "yearly" as const,
  }));

  const studies: MetadataRoute.Sitemap = RESEARCH_STUDIES.map((s) => ({
    url: url(`/case-studies/${s.slug}`),
    priority: 0.4,
    changeFrequency: "yearly" as const,
  }));

  const articles: MetadataRoute.Sitemap = ARTICLES.map((a) => ({
    url: url(`/insights/${a.slug}`),
    lastModified: new Date(a.date),
    priority: 0.5,
    changeFrequency: "yearly" as const,
  }));

  return [...core, ...services, ...clientCases, ...studies, ...articles].map((e) => ({
    lastModified: now,
    ...e,
  }));
}
