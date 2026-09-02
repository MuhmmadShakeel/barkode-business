import { Suspense } from "react";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Pending } from "@/components/ui/Pending";
import { Glow, SchematicGround } from "@/components/ui/Schematic";
import { Marker } from "@/components/ui/Section";
import { DeliveryNotice } from "./DeliveryNotice";

import { CONTACT } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Thank you — we have your project details",
  description: "We will review your inquiry and respond with the best next step.",
  path: "/contact/thank-you",
  noIndex: true,
});

export default function ThankYouPage() {
  return (
    <section
      data-surface="dark"
      className="relative isolate flex min-h-[calc(100vh-4.5rem)] items-center overflow-hidden bg-ink-950 pt-[calc(4.5rem+4rem)] pb-24 text-ontext"
    >
      <SchematicGround grid={42} nodes={168} mask="radial" />
      <Glow className="top-[-12rem] left-1/2 -translate-x-1/2" size={640} />

      <div className="shell relative">
        <div className="mx-auto max-w-2xl text-center">
          <span
            aria-hidden
            className="mx-auto grid size-14 place-items-center rounded-full border border-signal/35 bg-signal/10"
          >
            <CheckCircle2 className="size-6 text-signal" strokeWidth={1.7} />
          </span>

          <div className="mt-8 flex justify-center">
            <Marker tone="dark">Inquiry received</Marker>
          </div>

          <h1 className="site-hero-heading mt-5 text-white">
            Thank you for sharing your{" "}
            <span className="text-accent-bright">project details.</span>
          </h1>

          <p className="measure mx-auto mt-6 text-lead text-balance text-ontext-2">
            We will review your inquiry and respond with the best next step. You can also book a
            free project discovery call if you are ready to discuss the project.
          </p>

          <Suspense fallback={null}>
            <DeliveryNotice />
          </Suspense>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
            {CONTACT.bookingUrl ? (
              <Button href={CONTACT.bookingUrl} variant="onDark" size="lg" arrow>
                Book a Free Project Discovery Call
              </Button>
            ) : (
              <Button href={CONTACT.whatsapp.href} variant="onDark" size="lg" arrow>
                Message us on WhatsApp
              </Button>
            )}
            <Button href="/case-studies" variant="onDarkGhost" size="lg">
              View Our Work
            </Button>
          </div>

          {!CONTACT.bookingUrl && (
            <div className="mt-8 flex justify-center">
              <Pending tone="dark">[Add booking link for the free discovery-call button]</Pending>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
