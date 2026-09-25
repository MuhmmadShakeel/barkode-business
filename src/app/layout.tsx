import type { Metadata, Viewport } from "next";
import { Inter, Noto_Kufi_Arabic } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "@/styles/globals.css";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { RevealObserver } from "@/components/layout/RevealObserver";
import { JsonLd, organizationSchema, websiteSchema } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { getTranslations } from "next-intl/server";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoKufiArabic = Noto_Kufi_Arabic({ subsets: ["arabic"], variable: "--font-arabic", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.positioning}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  keywords: [
    "product engineering",
    "AI automation",
    "AI integration",
    "MVP development",
    "SaaS development",
    "custom web app development",
    "mobile app development",
    "internal business systems",
    "RAG chatbot",
    "cloud and DevOps",
    "UI/UX product design",
    "Barakode Technologies",
  ],
  icons: {
    icon: [
      { url: "/brand/barakode-icon-64.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/brand/barakode-icon-64.svg",
  },
  manifest: "/manifest.webmanifest",
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FCFBF8" },
    { media: "(prefers-color-scheme: dark)", color: "#0C0C0C" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const messages = await getMessages();
  const common = await getTranslations("common");
  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${inter.variable} ${notoKufiArabic.variable}`}
      suppressHydrationWarning
    >
      {/* Browser extensions can attach attributes to the document shell before
          React hydrates. Keep that external mutation from producing a noisy
          warning, while component markup remains fully checked. */}
      <body suppressHydrationWarning>
        <NextIntlClientProvider locale={locale} messages={{ language: messages.language, common: messages.common, header: messages.header }}>
        <a href="#main" className="skip-link">
          {common("skip")}
        </a>
        <SmoothScroll />
        <RevealObserver />
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
