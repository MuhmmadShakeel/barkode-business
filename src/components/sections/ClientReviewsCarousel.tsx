"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import type { ClientReview } from "@/lib/client-reviews";

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
  const accentCard = review.id % 2 === 1;
  const visual = REVIEW_VISUALS[(review.id - 1) % REVIEW_VISUALS.length];

  return (
    <article aria-hidden={duplicate || undefined} className={`flex w-[min(20rem,calc(100vw-2.5rem))] shrink-0 flex-col overflow-hidden rounded-[var(--radius-xl)] border border-black/10 ${accentCard ? "bg-accent text-ink-950" : "bg-white text-text"}`}>
      <div className="relative aspect-[16/9] overflow-hidden bg-ink-900">
        <Image src={visual.src} alt={visual.alt} fill sizes="(max-width: 640px) calc(100vw - 2.5rem), 20rem" className="object-cover" />
      </div>
      <div className="flex min-h-[17rem] flex-1 flex-col p-5 sm:p-6">
        <div className="flex gap-1" aria-label={`${review.rating} out of 5 stars`}>
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
  const track = [...items, ...items];

  return <div className="client-reviews-marquee overflow-hidden" aria-label="Client reviews"><div className="client-reviews-marquee__track flex w-max gap-5 py-2" role="list">{track.map((review, index) => <ReviewCard key={`${review.id}-${index}`} review={review} duplicate={index >= items.length} />)}</div></div>;
}
