"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import { SocialIcon } from "@/components/ui/SocialIcon";
import { CONTACT } from "@/lib/site";

export function WhatsAppFloat() {
  const locale = useLocale();
  const t = useTranslations("common");
  const [assistantVisible, setAssistantVisible] = useState(false);
  const visibleRef = useRef(false);

  useEffect(() => {
    const setVisible = (visible: boolean) => {
      if (visibleRef.current === visible) return;
      visibleRef.current = visible;
      setAssistantVisible(visible);
    };
    const reveal = window.setTimeout(() => setVisible(true), 700);
    let idle: number | undefined;
    const onScroll = () => {
      window.clearTimeout(reveal);
      setVisible(false);
      window.clearTimeout(idle);
      idle = window.setTimeout(() => setVisible(true), 240);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(reveal);
      window.clearTimeout(idle);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className={`whatsapp-assistant${assistantVisible ? " whatsapp-assistant--ready" : ""}`}>
      <div className="whatsapp-assistant__messages" aria-hidden="true" dir={locale === "ar" ? "rtl" : "ltr"}>
        <span>{t("whatsappNeedHelp")}</span>
        <span>{t("whatsappQuickReply")}</span>
        <span>{t("whatsappLetsTalk")}</span>
      </div>
      <div className="whatsapp-assistant__bot" aria-hidden="true">
        <img src="/images/home/ai-guide-bot.webp" alt="" />
        <span className="whatsapp-assistant__hand"><img src="/images/home/ai-guide-bot.webp" alt="" /></span>
      </div>
      <a href={CONTACT.whatsapp.href} target="_blank" rel="noopener noreferrer" aria-label={t("whatsappMessageLabel", { phone: CONTACT.whatsapp.display })} className="whatsapp-float">
        <span className="whatsapp-float__ring whatsapp-float__ring--black" aria-hidden="true" />
        <span className="whatsapp-float__ring whatsapp-float__ring--gold" aria-hidden="true" />
        <SocialIcon name="whatsapp" className="relative z-10 size-7" />
        <span className="sr-only">{t("whatsappScreenReader")}</span>
      </a>
    </div>
  );
}
