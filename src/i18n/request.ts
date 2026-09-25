import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";
import { defaultLocale, isLocale, localeCookie } from "./config";

export default getRequestConfig(async () => {
  const requested = (await cookies()).get(localeCookie)?.value;
  const locale = isLocale(requested) ? requested : defaultLocale;
  return { locale, messages: (await import(`./messages/${locale}.json`)).default };
});
