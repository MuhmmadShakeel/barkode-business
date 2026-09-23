import { SocialIcon } from "@/components/ui/SocialIcon";
import { CONTACT } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={CONTACT.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Message Barakode Technologies on WhatsApp at ${CONTACT.whatsapp.display}`}
      className="whatsapp-float"
    >
      <span className="whatsapp-float__pulse" aria-hidden="true" />
      <SocialIcon name="whatsapp" className="relative z-10 size-6" />
      <span className="sr-only">Message us on WhatsApp</span>
    </a>
  );
}
