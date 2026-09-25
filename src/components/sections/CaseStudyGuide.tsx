"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function CaseStudyGuide({ label }: { label: string }) {
  return (
    <div className="case-study-guide">
      <div className="case-study-guide__unit">
        <div className="case-study-guide__bot" aria-hidden="true">
          <Image
            src="/images/home/ai-guide-bot.png"
            alt=""
            width={420}
            height={432}
            sizes="(max-width: 639px) 126px, 190px"
            priority
          />
        </div>
        <Button href="/case-studies/gman-stitching-platform" variant="secondary" size="md" arrow>
          {label}
        </Button>
      </div>
    </div>
  );
}
