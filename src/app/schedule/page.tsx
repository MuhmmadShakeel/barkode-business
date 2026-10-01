import { CalendarDays, Check, Clock3, Mail, Video } from "lucide-react";
import { getLocale } from "next-intl/server";

import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const ar = (await getLocale()) === "ar";
  return buildMetadata({
    title: ar ? "احجز اجتماعًا مع باراكود" : "Schedule a Meeting with Barakode",
    description: ar ? "اختر مكالمة لمدة 30 أو 60 دقيقة وحدد وقتًا يناسب منطقتك الزمنية." : "Choose a 30 or 60 minute meeting and select a time that works in your time zone.",
    path: "/schedule",
  });
}

export default async function SchedulePage() {
  const ar = (await getLocale()) === "ar";
  const meetings = [
    {
      duration: "30",
      title: ar ? "مكالمة تعريفية" : "Discovery call",
      description: ar ? "محادثة مركزة حول فكرتك وأهدافك والخطوة التالية." : "A focused introduction to your idea, goals, and the next practical step.",
      points: ar ? ["نطاق المشروع وأهدافه", "الأسئلة الأولى والخطوة التالية"] : ["Your project and priorities", "Initial questions and next steps"],
    },
    {
      duration: "60",
      title: ar ? "استشارة مشروع" : "Project consultation",
      description: ar ? "وقت أطول لمراجعة المتطلبات والتحديات والخيارات التقنية." : "More room to review requirements, challenges, and technical options.",
      points: ar ? ["مناقشة أعمق للمتطلبات", "توجيه بشأن النطاق والتنفيذ"] : ["A deeper requirements discussion", "Direction on scope and delivery"],
    },
  ];

  return (
    <main className="min-h-screen bg-paper text-text">
      <div className="shell py-16 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[.14em] text-accent-ink">{ar ? "حدد موعدًا" : "Let's talk"}</p>
          <h1 className="mt-5 font-display text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[1.06] tracking-tight text-ink-950">
            {ar ? "اختر الوقت المناسب للحديث." : "Make time for a useful conversation."}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-2">
            {ar ? "اختر مدة الاجتماع، ثم حدد الموعد المناسب لك عبر Cal.com. ستظهر الأوقات المتاحة بحسب منطقتك الزمنية." : "Choose the time you need, then pick an available slot on Cal.com. Available times are shown in your time zone."}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {meetings.map((meeting) => (
            <article key={meeting.duration} className="flex flex-col rounded-[var(--radius-lg)] border border-black/10 bg-white p-7 shadow-e1 sm:p-9">
              <div className="flex items-start justify-between gap-4">
                <div className="flex size-12 items-center justify-center rounded-xl bg-accent-soft text-accent-ink"><CalendarDays size={23} strokeWidth={1.7} aria-hidden /></div>
                <span className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1.5 text-sm font-medium text-text-2"><Clock3 size={15} aria-hidden />{meeting.duration} {ar ? "دقيقة" : "minutes"}</span>
              </div>
              <h2 className="mt-7 font-display text-3xl font-semibold text-ink-950">{meeting.title}</h2>
              <p className="mt-3 leading-relaxed text-text-2">{meeting.description}</p>
              <ul className="mt-7 space-y-3">
                {meeting.points.map((point) => <li key={point} className="flex items-start gap-3 text-sm text-text-2"><Check className="mt-0.5 size-4 shrink-0 text-accent-ink" aria-hidden />{point}</li>)}
              </ul>
              <div className="mt-auto pt-9">
                <Button href={`/schedule/${meeting.duration}`} target="_blank" size="lg" block arrow aria-label={ar ? `تابع حجز اجتماع لمدة ${meeting.duration} دقيقة في علامة تبويب جديدة` : `Continue to the ${meeting.duration} minute scheduler in a new tab`}>
                  {ar ? "اختر موعدًا" : "Choose a time"}
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-5 rounded-[var(--radius-lg)] border border-black/10 bg-white p-7 sm:grid-cols-2 sm:p-9">
          <div className="flex gap-4"><Mail className="mt-1 size-5 shrink-0 text-accent-ink" aria-hidden /><div><h3 className="font-semibold text-ink-950">{ar ? "تأكيد عبر البريد" : "Email confirmation"}</h3><p className="mt-1 text-sm leading-relaxed text-text-2">{ar ? "بعد إتمام الحجز عبر Cal.com، ستصلك تفاصيل الاجتماع إلى بريدك الإلكتروني." : "After you complete a Cal.com booking, its confirmation includes your meeting details."}</p></div></div>
          <div className="flex gap-4"><Video className="mt-1 size-5 shrink-0 text-accent-ink" aria-hidden /><div><h3 className="font-semibold text-ink-950">{ar ? "دعوة التقويم" : "Calendar invitation"}</h3><p className="mt-1 text-sm leading-relaxed text-text-2">{ar ? "استخدم خيارات إضافة الاجتماع إلى تقويمك في صفحة تأكيد Cal.com أو رسالته." : "Use Cal.com's confirmation page or email to add the meeting to your calendar."}</p></div></div>
        </div>
        <p className="mt-5 text-sm text-text-3">{ar ? "لنسخة PDF من تفاصيل الاجتماع، افتح رسالة التأكيد واختر طباعة ثم حفظ كملف PDF." : "For a PDF copy, open your booking confirmation and use Print, then Save as PDF."}</p>
      </div>
    </main>
  );
}
