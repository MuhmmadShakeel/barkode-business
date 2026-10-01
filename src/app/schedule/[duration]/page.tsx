import Link from "next/link";
import { redirect, notFound } from "next/navigation";
import { CalendarDays, Mail } from "lucide-react";
import { getLocale } from "next-intl/server";

import { CONTACT } from "@/lib/site";
import { SCHEDULING } from "@/lib/scheduling";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ duration: string }> };

export async function generateMetadata({ params }: Props) {
  const { duration } = await params;
  return buildMetadata({
    title: `${duration} minute meeting`,
    description: "Choose an available meeting time with Barakode Technologies.",
    path: `/schedule/${duration}`,
    noIndex: true,
  });
}

export default async function MeetingBookingPage({ params }: Props) {
  const { duration } = await params;
  if (duration !== "30" && duration !== "60") notFound();

  const bookingUrl = duration === "30" ? SCHEDULING.discovery : SCHEDULING.consultation;
  if (bookingUrl) redirect(bookingUrl);

  const ar = (await getLocale()) === "ar";
  return (
    <section className="min-h-screen bg-paper px-5 py-28 text-text sm:py-36">
      <div className="mx-auto max-w-xl rounded-[var(--radius-lg)] border border-black/10 bg-white p-8 shadow-e1 sm:p-12">
        <CalendarDays className="size-9 text-accent-ink" aria-hidden />
        <h1 className="mt-7 font-display text-3xl font-semibold text-ink-950 sm:text-4xl">
          {ar ? `اجتماع لمدة ${duration} دقيقة` : `${duration} minute meeting`}
        </h1>
        <p className="mt-4 leading-relaxed text-text-2">
          {ar ? "تقويم الحجز غير متصل بعد. أرسل لنا طلب موعد وسننسق معك مباشرة." : "The booking calendar is not connected yet. Email us to arrange a time directly."}
        </p>
        <a className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-[var(--radius-sm)] bg-accent px-5 font-semibold text-ink-950 hover:bg-accent-bright" href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(`${duration}-minute meeting request`)}`}>
          <Mail size={17} aria-hidden />{ar ? "اطلب موعدًا بالبريد" : "Request a meeting by email"}
        </a>
        <Link className="mt-6 block text-sm font-medium text-accent-ink underline underline-offset-4" href="/schedule">
          {ar ? "العودة إلى خيارات الاجتماع" : "Back to meeting options"}
        </Link>
      </div>
    </section>
  );
}
