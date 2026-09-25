"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import type { ClientReview } from "@/lib/client-reviews";
import { useLocale } from "next-intl";

const reviewsAr = [
  "مطور Flutter ممتاز. أضاف مؤشر التحميل بدقة، وأصبح زر تسجيل الدخول معطلًا أثناء طلب API. سُلّم العمل في موعده، وكان التواصل مهنيًا، وبقي مسار تسجيل الدخول يعمل كما كان. أوصي به لتطوير تطبيقات Flutter وتحسين الواجهات.",
  "تجربة رائعة. سُلّم تطبيق جوال عالي الجودة باستخدام Flutter بأداء سلس على Android وiOS. التصميم وتجربة المستخدم ممتازان، والميزات الذكية قوية، والتواصل مهني. أوصي به لمشاريع تطبيقات الجوال وFlutter وReact Native والذكاء الاصطناعي.",
  "كانت تجربتي مع هذا المطور سلسة من البداية إلى النهاية. فهم كل المطلوب وتولى العملية كاملة باحتراف وموثوقية. أنا سعيد بالنتيجة وسأعمل معه مرة أخرى بالتأكيد.",
  "مطور Flutter ممتاز. أصلح مشكلة تجاوز عناصر الواجهة بسرعة واحتراف. أصبح التخطيط متجاوبًا على أحجام الشاشات المختلفة. تواصل جيد وتسليم سريع وخبرة واضحة في Flutter وإصلاح واجهات الجوال. أوصي به بشدة.",
  "كانت تجربة العمل مع صفدر رائعة. فهم فكرة تطبيق حجز المواعيد بوضوح، وقدم توجيهًا مفيدًا لمسار التطبيق والشاشات والميزات الأولية وخيارات مثل Flutter وReact Native. كان التسليم واضحًا ومهنيًا ومفيدًا لتخطيط الخطوة التالية.",
  "تجربة رائعة مع صفدر. فهم بسرعة التحديث المطلوب في React Native ونفذ ميزة استعادة كلمة المرور باستخدام Firebase Authentication بصورة صحيحة. كان التسليم سريعًا وسلسًا ومهنيًا. أوصي به.",
  "تجربة رائعة مع مقدم الخدمة. فهم فكرة تطبيق الجوال وقدم توجيهًا مفيدًا للميزات ومسار الشاشات وهيكل المنتج الأولي وطريقة التطوير. كان التسليم واضحًا ومهنيًا ومفيدًا للخطوة التالية في مشروعي.",
  "مطور Flutter ممتاز. حدث شعار التطبيق وشاشة البداية كما طلبت تمامًا. تسليم سريع وتواصل جيد ومهارة مهنية في تطوير تطبيقات الجوال. أوصي به لتحديثات Flutter وتغييرات الواجهات وصيانة التطبيقات.",
  "مطور Flutter متميز. أصلح مشكلة إشعارات Firebase بسرعة واحتراف. لديه خبرة قوية في تطوير تطبيقات الجوال وFlutter وFirebase Cloud Messaging وإصلاح الأخطاء. تواصل جيد وتسليم سريع وعمل عالي الجودة.",
  "تجربة رائعة. صُممت شاشة تسجيل الدخول Job Splash بشكل جميل وسُلّمت في موعدها. كان التواصل مهنيًا، مع مهارات ممتازة في تصميم الواجهات وتجربة المستخدم وتطوير تطبيقات الجوال.",
  "خدمة ممتازة لتطوير تطبيقات الجوال. دُمجت الإشعارات الفورية في تطبيق Flutter بسلاسة على Android وiOS. كان التواصل مهنيًا والتسليم في الموعد وجودة العمل عالية. أوصي به لتطوير تطبيقات الجوال وتحديثات Flutter والميزات متعددة المنصات.",
];
const countriesAr: Record<string, string> = { Italy: "إيطاليا", Canada: "كندا", "United Kingdom": "المملكة المتحدة", "United States": "الولايات المتحدة", Germany: "ألمانيا", Poland: "بولندا", Sweden: "السويد", Mexico: "المكسيك" };

const REVIEW_VISUALS = [
  { src: "/images/services/web-mobile.webp", alt: "Mobile application development visual" },
  { src: "/images/services/product-design.webp", alt: "Product interface design visual" },
  { src: "/images/services/ai-automation.webp", alt: "AI-enabled product workflow visual" },
  { src: "/images/services/mvp-saas.webp", alt: "MVP product development visual" },
  { src: "/images/process/product-strategy.webp", alt: "Product strategy workshop visual" },
  { src: "/images/process/development.webp", alt: "Software engineering visual" },
  { src: "/images/process/qa-delivery.webp", alt: "Quality assurance delivery visual" },
] as const;

function ReviewCard({ review, duplicate }: { review: ClientReview; duplicate: boolean }) {
  const ar = useLocale() === "ar";
  const accentCard = review.id % 2 === 1;
  const visual = REVIEW_VISUALS[(review.id - 1) % REVIEW_VISUALS.length];

  return (
    <article aria-hidden={duplicate || undefined} className={`flex w-[min(20rem,calc(100vw-2.5rem))] shrink-0 flex-col overflow-hidden rounded-[var(--radius-xl)] border border-black/10 ${accentCard ? "bg-accent text-ink-950" : "bg-white text-text"}`}>
      <div className="relative aspect-[16/9] overflow-hidden bg-ink-900">
        <Image src={visual.src} alt={ar ? "صورة توضيحية لمشروع رقمي" : visual.alt} fill sizes="(max-width: 640px) calc(100vw - 2.5rem), 20rem" className="object-cover" />
      </div>
      <div className="flex min-h-[17rem] flex-1 flex-col p-5 sm:p-6">
        <div className="flex gap-1" aria-label={ar ? `${review.rating} من 5 نجوم` : `${review.rating} out of 5 stars`}>
          {Array.from({ length: review.rating }, (_, index) => <Star key={index} aria-hidden className="size-4 fill-current" />)}
        </div>
        <p className="mt-4 line-clamp-6 text-sm leading-relaxed" title={review.review}>{review.review}</p>
        <div className="mt-auto border-t border-current/15 pt-4">
          <h3 className="font-display text-lg font-semibold tracking-[-.03em]">{review.name}</h3>
          <p className="mt-1 text-sm opacity-75">{review.country}</p>
        </div>
      </div>
    </article>
  );
}

export function ClientReviewsCarousel({ items }: { items: ClientReview[] }) {
  const ar = useLocale() === "ar";
  const localized = ar ? items.map((item) => ({ ...item, country: countriesAr[item.country] ?? item.country, review: reviewsAr[item.id - 1] ?? item.review })) : items;
  const track = [...localized, ...localized];

  return <div className="client-reviews-marquee overflow-hidden" aria-label={ar ? "آراء العملاء" : "Client reviews"}><div className="client-reviews-marquee__track flex w-max gap-5 py-2" role="list">{track.map((review, index) => <ReviewCard key={`${review.id}-${index}`} review={review} duplicate={index >= items.length} />)}</div></div>;
}
