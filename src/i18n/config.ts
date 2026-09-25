export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const localeCookie = "NEXT_LOCALE";
export const isLocale = (value?: string): value is Locale => locales.includes(value as Locale);
