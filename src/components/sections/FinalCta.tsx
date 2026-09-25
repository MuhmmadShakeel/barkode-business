import { Button } from "@/components/ui/Button";
import { Marker } from "@/components/ui/Section";
import { CONTACT } from "@/lib/site";
import { cn } from "@/lib/utils";
import { getTranslations } from "next-intl/server";

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

          <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button href={primary.href} variant="primary" size="lg" arrow block>
              {primary.label}
            </Button>
            {secondary && (
              <Button href={secondary.href} variant="secondary" size="lg" block>
                {secondary.label}
              </Button>
            )}
          </div>

          <p className="mt-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-mono text-xs text-text-4">
            <span>{t("preferMessage")}</span>
            <a
              href={CONTACT.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-ink underline decoration-accent/35 underline-offset-4 transition-colors hover:decoration-accent"
            >
              WhatsApp {CONTACT.whatsapp.display}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
