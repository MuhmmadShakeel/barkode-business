import { ProjectCostEstimator } from "@/components/sections/ProjectCostEstimator";
import { JsonLd, breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { getLocale } from "next-intl/server";

export async function generateMetadata() {
  const isArabic = (await getLocale()) === "ar";
  return buildMetadata({
    title: isArabic ? "مُقدّر التكلفة" : "Cost Estimator",
    description: isArabic ? "أنشئ تقديرًا عمليًا أوليًا لمنتجك الرقمي أو سير العمل أو النظام الداخلي." : "Build a practical first estimate for your software product, workflow, or internal system.",
    path: "/project-cost-estimator",
  });
}

export default async function ProjectCostEstimatorPage() {
  const isArabic = (await getLocale()) === "ar";
  return <><ProjectCostEstimator /><JsonLd data={breadcrumbSchema([{ name: isArabic ? "الرئيسية" : "Home", path: "/" }, { name: isArabic ? "مُقدّر التكلفة" : "Cost Estimator", path: "/project-cost-estimator" }])} /></>;
}
