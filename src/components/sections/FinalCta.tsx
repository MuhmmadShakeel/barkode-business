import { Button } from "@/components/ui/Button";
import { Marker } from "@/components/ui/Section";
import { CONTACT } from "@/lib/site";
import { cn } from "@/lib/utils";
import { getLocale, getTranslations } from "next-intl/server";
import { MessageCircle } from "lucide-react";

/**
 * The closing conversion block. Every page ends on one, with copy specific to
 * that page's reader — never a generic repeated banner.
 */
export async function FinalCta({
  marker,
  heading,
  accent,
  body,
  primary,
  secondary,
  className,
}: {
  marker?: string;
  heading: string;
  accent?: string;
  body: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  className?: string;
}) {
  const t = await getTranslations("cta");
  const ar = (await getLocale()) === "ar";
  return (
    <section
      data-surface="light"
      className={cn("relative isolate border-t border-rule py-section text-text", className)}
    >
      <div className="shell relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Marker>{marker ?? t("nextStep")}</Marker>
          <h2 className="max-w-[20ch] text-d2 text-text">
            {heading}
            {accent && (
              <>
                {" "}
                <span className="text-accent-ink">{accent}</span>
              </>
            )}
          </h2>
          <p className="measure mt-6 text-lead text-balance text-text-2">{body}</p>

          <div className="mt-10 flex w-full max-w-2xl flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button href={primary.href} variant="primary" size="lg" arrow block className="h-auto min-h-[3.25rem] whitespace-normal px-5 py-3 text-center leading-snug sm:w-auto">
              {primary.label}
            </Button>
            {secondary && (
              <Button href={secondary.href} variant="secondary" size="lg" block className="h-auto min-h-[3.25rem] whitespace-normal px-5 py-3 text-center leading-snug sm:w-auto">
                {secondary.label}
              </Button>
            )}
          </div>

          <a
            href={CONTACT.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-[var(--radius-sm)] border border-rule-strong bg-white px-5 py-3 text-center text-sm font-medium text-text transition-[border-color,background-color,box-shadow] hover:border-accent hover:bg-accent-soft hover:shadow-e1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <MessageCircle className="size-4 shrink-0 text-accent-ink" aria-hidden />
            <span>{ar ? "تواصل عبر واتساب" : "Contact via WhatsApp"}</span>
            <span dir="ltr" className="font-semibold text-accent-ink">{CONTACT.whatsapp.display}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
