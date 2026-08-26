import { LegalPage } from "@/components/sections/LegalPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Barakode Technologies collects, uses, and protects information supplied through this website and during client engagements.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      marker="Legal"
      title="Privacy Policy"
      updated="24 August 2026"
      intro="This policy explains what information Barakode Technologies collects through this website, why we collect it, how it is used, and the choices you have. It is written to be read, not to be survived."
      sections={[
        {
          heading: "Information we collect",
          paragraphs: [
            "We collect only what you choose to send us. When you submit the project inquiry form, that is your name, work email, company, country, project type, budget range, timeline, project description, preferred contact method, and any optional links or files you attach.",
            "We do not require an account to browse this site, and we do not ask for payment details anywhere on it.",
          ],
        },
        {
          heading: "How we use it",
          paragraphs: [
            "Inquiry information is used to assess whether we are the right fit for your project, to reply with a practical next step, and to prepare a proposal if you ask for one.",
          ],
          list: [
            "Responding to your inquiry",
            "Scoping and quoting a proposed engagement",
            "Ongoing communication during an active project",
            "Keeping records of agreements and deliverables",
          ],
        },
        {
          heading: "What we do not do",
          paragraphs: [
            "We do not sell your information. We do not share it with advertisers or data brokers. We do not send marketing email to people who contacted us about a project unless they explicitly asked to hear from us.",
            "Project details you share with us are treated as confidential by default, whether or not an NDA is in place. Where you need one signed before a detailed discussion, say so and we will handle it first.",
          ],
        },
        {
          heading: "Third parties",
          paragraphs: [
            "This site is hosted by a third-party hosting provider, which processes standard server request data such as IP address and user agent for the purpose of serving the site and protecting it from abuse.",
            "Where you contact us through WhatsApp or a social platform, that platform's own privacy policy governs the message on their side. We have no control over their data handling.",
          ],
        },
        {
          heading: "Data retention",
          paragraphs: [
            "Inquiry records are kept for as long as they are useful to an active or prospective engagement, and for the period required by our contractual and accounting obligations afterwards.",
            "You may ask us to delete an inquiry record at any time and we will do so, except where we are required to retain it.",
          ],
        },
        {
          heading: "Your rights",
          paragraphs: [
            "You can ask us what information we hold about you, ask for it to be corrected, ask for a copy, or ask for it to be deleted. Send the request through the contact form and we will respond.",
          ],
        },
        {
          heading: "Cookies",
          paragraphs: [
            "This site does not set advertising or cross-site tracking cookies. Any storage used is limited to what the site needs in order to function correctly in your browser.",
          ],
        },
        {
          heading: "Changes to this policy",
          paragraphs: [
            "If this policy changes materially, the updated date at the top of this page changes with it. Continued use of the site after an update means the revised policy applies.",
          ],
        },
      ]}
    />
  );
}
