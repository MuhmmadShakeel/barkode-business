"use client";

import Link from "next/link";
import { Calculator } from "lucide-react";
import { useLocale } from "next-intl";

/** A persistent utility entry point that stays out of the navigation layout. */
export function ProjectEstimatorFloat() {
  const isArabic = useLocale() === "ar";
  const label = isArabic ? "مُقدّر التكلفة" : "Cost Estimator";
  return (
    <Link href="/project-cost-estimator" className="project-estimator-float" aria-label={isArabic ? "افتح حاسبة تكلفة المشروع" : "Open the project cost estimator"}>
      <Calculator aria-hidden className="project-estimator-float__icon size-5 shrink-0" strokeWidth={2.2} />
      <span className="project-estimator-float__label">{label}</span>
    </Link>
  );
}
