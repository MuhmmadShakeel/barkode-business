"use client";

import { useLocale, useTranslations } from "next-intl";
import { Languages } from "lucide-react";
import { localeCookie, type Locale } from "@/i18n/config";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const locale = useLocale() as Locale;
  const t = useTranslations("language");
  const change = (next: Locale) => {
    if (next === locale) return;
    document.cookie = `${localeCookie}=${next}; path=/; max-age=31536000; samesite=lax`;
    window.location.reload();
  };
  return <div className="language-switcher" role="group" aria-label={t("label")}>
    {!compact && <Languages aria-hidden className="language-switcher__icon" />}
    <button type="button" onClick={() => change("en")} aria-pressed={locale === "en"} aria-label={t("switchToEnglish")}>EN</button>
    <span aria-hidden>/</span>
    <button type="button" onClick={() => change("ar")} aria-pressed={locale === "ar"} aria-label={t("switchToArabic")}>ع</button>
  </div>;
}
