"use client";

import { useEffect, useRef, useState } from "react";

import { SocialIcon } from "@/components/ui/SocialIcon";
import { CONTACT } from "@/lib/site";

export function WhatsAppFloat() {
  const [assistantVisible, setAssistantVisible] = useState(false);
  const [appearance, setAppearance] = useState(0);
  const stopTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const reveal = () => {
      setAppearance((current) => current + 1);
      setAssistantVisible(true);
    };

    // Keep the invitation out of the reader's way while the page is moving.
    // A small pause makes its return feel intentional instead of flickering.
    const onScroll = () => {
      setAssistantVisible(false);
      if (stopTimer.current) window.clearTimeout(stopTimer.current);
      stopTimer.current = window.setTimeout(reveal, 450);
    };

    const initialTimer = window.setTimeout(reveal, 1200);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.clearTimeout(initialTimer);
      if (stopTimer.current) window.clearTimeout(stopTimer.current);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className={`whatsapp-assistant${assistantVisible ? " whatsapp-assistant--ready" : ""}`}>
      <div key={appearance} className="whatsapp-assistant__messages" aria-hidden="true">
        <span>Need a hand?</span>
        <span>We reply fast</span>
        <span>Let&apos;s talk</span>
      </div>
      <div key={`bot-${appearance}`} className="whatsapp-assistant__bot" aria-hidden="true">
        <img src="/images/home/ai-guide-bot.png" alt="" />
        <span className="whatsapp-assistant__hand"><img src="/images/home/ai-guide-bot.png" alt="" /></span>
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
