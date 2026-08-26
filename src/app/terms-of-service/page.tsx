import { LegalPage } from "@/components/sections/LegalPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "The terms governing use of the Barakode Technologies website and the basis on which engagements are agreed.",
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <LegalPage
      marker="Legal"
      title="Terms of Service"
      updated="24 August 2026"
      intro="These terms govern your use of this website. They do not replace a signed engagement agreement — the specific terms of any project are set out in the contract for that project."
      sections={[
        {
          heading: "Using this website",
          paragraphs: [
            "You may read, share, and reference the content on this site. You may not copy substantial portions of it for republication as your own, scrape it at a rate that degrades service for others, or attempt to gain unauthorised access to any part of the infrastructure behind it.",
          ],
        },
        {
          heading: "Content accuracy",
          paragraphs: [
            "We take care that what is published here is accurate. Case studies describe real engagements and only outcomes recorded in the project record; where a result is not verified, no number is published in its place.",
            "Service descriptions, process outlines, and timelines are indicative. They describe how we typically work, not a contractual commitment. The commitment lives in the engagement agreement.",
          ],
        },
        {
          heading: "Nothing here is an offer or a quote",
          paragraphs: [
            "Engagement models, indicative timelines, and any pricing language on this site are informational. No quote exists until we have discussed your project and issued one in writing.",
            "Submitting the inquiry form does not create a contract, an obligation on us to take the project, or an obligation on you to proceed.",
          ],
        },
        {
          heading: "Intellectual property",
          paragraphs: [
            "The Barakode name, mark, site design, and written content are the property of Barakode Technologies.",
            "Ownership of work produced during a client engagement is governed by that engagement's agreement. In most custom development projects, clients receive ownership on the terms set out in that contract.",
          ],
        },
        {
          heading: "Confidentiality",
          paragraphs: [
            "Project information you send us is treated as confidential. Where a signed NDA is required before a detailed discussion, tell us and we will put one in place first.",
          ],
        },
        {
          heading: "Third-party links",
          paragraphs: [
            "This site links to live client products and to external platforms. We do not control those destinations and are not responsible for their content, availability, or practices.",
          ],
        },
        {
          heading: "Limitation of liability",
          paragraphs: [
            "This website is provided as is. To the extent permitted by law, Barakode Technologies is not liable for loss arising from reliance on general information published here rather than on advice given for your specific project.",
            "Liability arising from a client engagement is governed by the agreement for that engagement.",
          ],
        },
        {
          heading: "Changes to these terms",
          paragraphs: [
            "We may update these terms. The updated date at the top of this page reflects the most recent change, and continued use of the site after that date means the revised terms apply.",
          ],
        },
      ]}
    />
  );
}
