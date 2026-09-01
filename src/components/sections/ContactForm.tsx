"use client";

import { useState, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AlertCircle, Loader2, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PENDING } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * The qualifying inquiry form. Every field the brief specifies is here, in the
 * order it specifies, with the dropdown options it specifies.
 *
 * Validation is client-side and inline: each error names the problem and the
 * recovery, is announced to assistive tech, and moves focus to the first field
 * that needs attention. Nothing is validated on blur before the visitor has
 * had a chance to finish typing.
 *
 * With no form endpoint configured (`PENDING.formEndpoint`), submission is
 * intercepted and the visitor is routed to the thank-you page with a clear
 * note — rather than silently dropping their message.
 */

const PROJECT_TYPES = [
  "MVP / SaaS product",
  "Custom web app",
  "Mobile app",
  "AI automation",
  "AI chatbot / RAG assistant",
  "Internal dashboard / business system",
  "Product redesign",
  "Cloud / DevOps / maintenance",
  "Dedicated development team",
  "Not sure yet",
];

const BUDGETS = [
  "Under $2,000",
  "$2,000 to $5,000",
  "$5,000 to $10,000",
  "$10,000 to $25,000",
  "$25,000+",
  "Need help estimating",
];

const TIMELINES = [
  "As soon as possible",
  "Within 2 to 4 weeks",
  "Within 1 to 3 months",
  "3+ months",
  "Just exploring",
];

const CONTACT_METHODS = ["Email", "Phone", "WhatsApp", "Google Meet / Zoom", "LinkedIn"];

const SOURCES = [
  "Search engine",
  "LinkedIn",
  "Referral",
  "Social media",
  "An existing client",
  "Other",
];

/** Maps ?service= and ?intent= query params onto the project-type dropdown. */
const PREFILL: Record<string, string> = {
  "mvp-saas": "MVP / SaaS product",
  "web-mobile": "Custom web app",
  "internal-systems": "Internal dashboard / business system",
  "cloud-devops": "Cloud / DevOps / maintenance",
  "ui-ux": "Product redesign",
  "ai-automation": "AI automation",
};

type Errors = Partial<Record<string, string>>;

export function ContactForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const presetType =
    PREFILL[params.get("service") ?? ""] ?? PREFILL[params.get("intent") ?? ""] ?? "";
  const presetModel = params.get("model");

  const validate = (data: FormData): Errors => {
    const next: Errors = {};
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const country = String(data.get("country") ?? "").trim();
    const description = String(data.get("description") ?? "").trim();
    const website = String(data.get("website") ?? "").trim();

    if (!name) next.name = "Add your name so we know who we are replying to.";
    if (!email) next.email = "Add a work email — that is where our reply goes.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
      next.email = "That email looks incomplete. Check for a missing @ or domain.";
    if (!country) next.country = "Add your country so we can plan around your time zone.";
    if (!description) next.description = "Tell us what you want to build — a few lines is enough.";
    else if (description.length < 20)
      next.description = "A little more detail helps: what is the product or workflow?";
    if (website && !/^https?:\/\/|^[\w-]+\.[\w.-]+/.test(website))
      next.website = "Use a full address, like example.com or https://example.com.";
    return next;
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const found = validate(data);
    setErrors(found);

    if (Object.keys(found).length > 0) {
      const first = form.querySelector<HTMLElement>(`[name="${Object.keys(found)[0]}"]`);
      first?.focus();
      first?.scrollIntoView({ block: "center", behavior: "smooth" });
      return;
    }

    setSubmitting(true);

    if (!PENDING.formEndpoint) {
      // No endpoint configured yet — do not pretend the message was sent.
      router.push("/contact/thank-you?delivery=pending");
      return;
    }

    form.submit();
  };

  return (
    <form
      onSubmit={onSubmit}
      action={PENDING.formEndpoint ?? undefined}
      method="post"
      encType="multipart/form-data"
      noValidate
      className="rounded-[var(--radius-lg)] border border-black/10 bg-white p-6 text-black shadow-e2 sm:p-8"
    >
      <p className="font-mono text-marker font-medium tracking-[0.16em] text-accent-ink uppercase">
        Project inquiry
      </p>

      {presetModel && (
        <input type="hidden" name="engagement_model" value={presetModel} />
      )}

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Field
          label="Full name"
          name="name"
          required
          autoComplete="name"
          placeholder="Your full name"
          error={errors.name}
        />
        <Field
          label="Work email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          error={errors.email}
        />
        <Field
          label="Company name"
          name="company"
          autoComplete="organization"
          placeholder="Company or project name"
        />
        <Field
          label="Website"
          name="website"
          optional
          autoComplete="url"
          placeholder="example.com"
          error={errors.website}
        />
        <Field
          label="Country"
          name="country"
          required
          autoComplete="country-name"
          placeholder="Where you are based"
          error={errors.country}
        />
        <SelectField
          label="Project type"
          name="project_type"
          defaultValue={presetType}
          options={PROJECT_TYPES}
        />
        <SelectField label="Budget range" name="budget" options={BUDGETS} />
        <SelectField label="Timeline" name="timeline" options={TIMELINES} />
      </div>

      <div className="mt-5">
        <Field
          as="textarea"
          label="Project description"
          name="description"
          required
          rows={6}
          placeholder="What are you trying to build, automate, or improve? Who uses it, and what does it need to do?"
          error={errors.description}
          hint="The more context you give, the more specific our reply can be."
        />
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <SelectField
          label="Preferred contact method"
          name="contact_method"
          options={CONTACT_METHODS}
        />
        <Field
          label="LinkedIn profile"
          name="linkedin"
          optional
          placeholder="linkedin.com/in/…"
        />
        <Field
          label="Existing product link"
          name="product_link"
          optional
          placeholder="If you already have something running"
        />
        <SelectField label="How did you hear about us?" name="source" options={SOURCES} />
      </div>

      {/* ── File upload ────────────────────────────────────────────────────── */}
      <div className="mt-5">
        <label
          htmlFor="brief"
          className="block font-mono text-marker font-medium tracking-[0.16em] text-black/65 uppercase"
        >
          Project brief{" "}
          <span className="font-sans tracking-normal normal-case">(optional)</span>
        </label>
        <div className="mt-2.5">
          <label
            htmlFor="brief"
            className="flex cursor-pointer items-center gap-3 rounded-[var(--radius-sm)] border border-dashed border-black/20 bg-white px-4 py-3.5 text-sm text-black/70 transition-[border-color,color,box-shadow] duration-200 hover:border-accent/60 hover:text-black hover:shadow-e1"
          >
            <Paperclip aria-hidden className="size-4 shrink-0" strokeWidth={1.7} />
            <span className="truncate">
              {fileName ?? "Attach a brief, spec, or wireframe — PDF, DOC, or image"}
            </span>
          </label>
          <input
            id="brief"
            name="brief"
            type="file"
            accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.webp"
            className="sr-only"
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
          />
        </div>
      </div>

      {/* ── Honeypot: bots fill it, people never see it ────────────────────── */}
      <div aria-hidden className="absolute h-0 w-0 overflow-hidden">
        <label htmlFor="fax">Fax</label>
        <input id="fax" name="fax" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-8 border-t border-rule pt-7">
        <Button type="submit" size="lg" block arrow={!submitting} disabled={submitting}>
          {submitting ? (
            <>
              <Loader2 aria-hidden className="size-4 animate-spin" />
              Sending…
            </>
          ) : (
            "Send Project Details"
          )}
        </Button>

        <p className="mt-4 text-xs leading-relaxed text-black/60">
          We review every inquiry carefully and respond with practical next steps. If your project is
          not the right fit, we will still try to point you in the right direction. We can sign an
          NDA where required.
        </p>
      </div>
    </form>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   FIELD PRIMITIVES
   ══════════════════════════════════════════════════════════════════════════ */

const controlClass =
  "w-full rounded-[var(--radius-sm)] border bg-white px-3.5 py-2.5 text-[1rem] text-black " +
  "placeholder:text-black/40 transition-[border-color,box-shadow] duration-200 " +
  "focus:outline-none focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/22";

function Field({
  label,
  name,
  type = "text",
  required = false,
  optional = false,
  placeholder,
  error,
  hint,
  rows,
  autoComplete,
  as = "input",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  optional?: boolean;
  placeholder?: string;
  error?: string;
  hint?: string;
  rows?: number;
  autoComplete?: string;
  as?: "input" | "textarea";
}) {
  const errId = `${name}-error`;
  const hintId = `${name}-hint`;
  const described = [error && errId, hint && hintId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={as === "textarea" ? "sm:col-span-2" : undefined}>
      <label
        htmlFor={name}
        className="block font-mono text-marker font-medium tracking-[0.16em] text-black/65 uppercase"
      >
        {label}
        {required && (
          <span aria-hidden className="ml-1 text-danger">
            *
          </span>
        )}
        {optional && (
          <span className="ml-1.5 font-sans tracking-normal normal-case">(optional)</span>
        )}
        {required && <span className="sr-only"> (required)</span>}
      </label>

      {as === "textarea" ? (
        <textarea
          id={name}
          name={name}
          rows={rows ?? 5}
          placeholder={placeholder}
          aria-invalid={error ? true : undefined}
          aria-describedby={described}
          className={cn(controlClass, "mt-2.5 resize-y", error ? "border-danger" : "border-rule-strong")}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={error ? true : undefined}
          aria-describedby={described}
          className={cn(controlClass, "mt-2.5", error ? "border-danger" : "border-rule-strong")}
        />
      )}

      {hint && !error && (
        <p id={hintId} className="mt-2 text-xs text-black/60">
          {hint}
        </p>
      )}
      {error && (
        <p id={errId} role="alert" className="mt-2 flex items-start gap-1.5 text-xs text-danger">
          <AlertCircle aria-hidden className="mt-px size-3.5 shrink-0" strokeWidth={2} />
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  defaultValue = "",
}: {
  label: string;
  name: string;
  options: string[];
  defaultValue?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-mono text-marker font-medium tracking-[0.16em] text-black/65 uppercase"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue={defaultValue}
        className={cn(controlClass, "mt-2.5 appearance-none border-rule-strong pr-9")}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1.5 6 6.5 11 1.5' stroke='%2356637A' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 0.875rem center",
        }}
      >
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
