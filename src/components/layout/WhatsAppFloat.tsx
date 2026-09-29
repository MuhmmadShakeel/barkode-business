"use client";

import { useEffect, useState } from "react";

import { SocialIcon } from "@/components/ui/SocialIcon";
import { CONTACT } from "@/lib/site";

export function WhatsAppFloat() {
  const [assistantVisible, setAssistantVisible] = useState(false);

  useEffect(() => {
    const reveal = window.setTimeout(() => setAssistantVisible(true), 700);
    return () => window.clearTimeout(reveal);
  }, []);

  return (
    <div className={`whatsapp-assistant${assistantVisible ? " whatsapp-assistant--ready" : ""}`}>
      <div className="whatsapp-assistant__messages" aria-hidden="true">
        <span>Need a hand?</span>
        <span>We reply fast</span>
        <span>Let&apos;s talk</span>
      </div>
      <div className="whatsapp-assistant__bot" aria-hidden="true">
        <img src="/images/home/ai-guide-bot.webp" alt="" />
        <span className="whatsapp-assistant__hand"><img src="/images/home/ai-guide-bot.webp" alt="" /></span>
      </div>
      <a href={CONTACT.whatsapp.href} target="_blank" rel="noopener noreferrer" aria-label={`Message Barakode Technologies on WhatsApp at ${CONTACT.whatsapp.display}`} className="whatsapp-float">
        <span className="whatsapp-float__ring whatsapp-float__ring--black" aria-hidden="true" />
        <span className="whatsapp-float__ring whatsapp-float__ring--gold" aria-hidden="true" />
        <SocialIcon name="whatsapp" className="relative z-10 size-7" />
        <span className="sr-only">Message us on WhatsApp</span>
      </a>
    </div>
  );
}
