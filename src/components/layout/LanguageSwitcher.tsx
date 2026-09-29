"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Languages } from "lucide-react";
import { localeCookie, type Locale } from "@/i18n/config";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const locale = useLocale() as Locale;
  const t = useTranslations("language");
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const change = (next: Locale) => {
    if (next === locale || isPending) return;
    document.cookie = `${localeCookie}=${next}; path=/; max-age=31536000; samesite=lax`;
    startTransition(() => router.refresh());
  };
  return <div className="language-switcher" role="group" aria-label={t("label")}>
    {!compact && <Languages aria-hidden className="language-switcher__icon" />}
    <button type="button" onClick={() => change("en")} disabled={isPending} aria-pressed={locale === "en"} aria-label={t("switchToEnglish")}>EN</button>
    <span aria-hidden>/</span>
    <button type="button" onClick={() => change("ar")} disabled={isPending} aria-pressed={locale === "ar"} aria-label={t("switchToArabic")}>ع</button>
  </div>;
}
