"use client";

import { Button } from "@/components/ui/Button";

export function CaseStudyGuide({ label }: { label: string }) {
  return (
    <div className="case-study-guide">
      <div className="case-study-guide__unit">
        <Button href="/case-studies/gman-stitching-platform" variant="secondary" size="md" arrow>
          {label}
        </Button>
      </div>
    </div>
  );
}
