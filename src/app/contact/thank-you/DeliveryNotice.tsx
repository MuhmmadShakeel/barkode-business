"use client";

import { useSearchParams } from "next/navigation";
import { AlertCircle } from "lucide-react";
import { CONTACT } from "@/lib/site";

/**
 * Honest failure state.
 *
 * The contact form has no delivery endpoint configured yet. Rather than
 * showing a confirmation that implies the message was sent, this says plainly
 * that it was not, and gives the visitor a channel that does work right now.
 * Once `PENDING.formEndpoint` is set, the form posts normally and this notice
 * never renders.
 */
export function DeliveryNotice() {
  const pending = useSearchParams().get("delivery") === "pending";
  if (!pending) return null;

  return (
    <div
      role="status"
      className="mx-auto mt-9 flex max-w-xl items-start gap-3.5 rounded-[var(--radius-md)] border border-signal/30 bg-signal/[0.07] px-5 py-4 text-left"
    >
      <AlertCircle aria-hidden className="mt-0.5 size-4 shrink-0 text-signal" strokeWidth={1.9} />
      <div>
        <p className="text-sm leading-relaxed text-white">
          Your details were <strong className="font-semibold">not sent</strong> — this site&rsquo;s
          form delivery is not connected yet.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ontext-2">
          Please reach us directly on{" "}
          <a
            href={CONTACT.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-signal underline decoration-signal/40 underline-offset-4 transition-colors hover:decoration-signal"
          >
            WhatsApp {CONTACT.whatsapp.display}
          </a>
          {CONTACT.email ? (
            <>
              {" "}
              or{" "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-signal underline decoration-signal/40 underline-offset-4"
              >
                {CONTACT.email}
              </a>
            </>
          ) : null}
          , and we will pick it up from there.
        </p>
      </div>
    </div>
  );
}
