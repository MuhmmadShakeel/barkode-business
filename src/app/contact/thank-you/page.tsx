import { Suspense } from "react";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Glow, SchematicGround } from "@/components/ui/Schematic";
import { Marker } from "@/components/ui/Section";
import { DeliveryNotice } from "./DeliveryNotice";

import { buildMetadata } from "@/lib/seo";
import { getLocale } from "next-intl/server";

export async function generateMetadata() { const ar = (await getLocale()) === "ar"; return buildMetadata({ title: ar ? "شكرًا لمشاركة تفاصيل مشروعك" : "Thank you — we have your project details", description: ar ? "سنراجع استفسارك ونرد بخطوة عملية مناسبة." : "We will review your inquiry and respond with the best next step.", path: "/contact/thank-you", noIndex: true }); }

export default async function ThankYouPage() {
  const ar = (await getLocale()) === "ar";
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
            <Marker tone="dark">{ar ? "استلمنا استفسارك" : "Inquiry received"}</Marker>
          </div>

          <h1 className="site-hero-heading mt-5 text-white">
            {ar ? "شكرًا لمشاركة " : "Thank you for sharing your "}
            <span className="text-accent-bright">{ar ? "تفاصيل مشروعك." : "project details."}</span>
          </h1>

          <p className="measure mx-auto mt-6 text-lead text-balance text-ontext-2">
            {ar ? "سنراجع استفسارك ونرد بخطوة مناسبة. وإذا كنت مستعدًا لمناقشة المشروع، يمكنك طلب مكالمة تعريفية مجانية. نستعين بالذكاء الاصطناعي في دراسة الخيارات، ويشرف فريقنا على التوصية التي نقدمها لك." : "We will review your inquiry and respond with the best next step. You can also book a free project discovery call if you are ready to discuss the project."}
          </p>

          <Suspense fallback={null}>
            <DeliveryNotice />
          </Suspense>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button href="/schedule" variant="onDark" size="lg" arrow>
              {ar ? "اختر موعدًا" : "Choose a Meeting Time"}
            </Button>
            <Button href="/case-studies" variant="onDarkGhost" size="lg">
              {ar ? "شاهد أعمالنا" : "View Our Work"}
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
