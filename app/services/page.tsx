import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calculator,
  ClipboardList,
  FileSpreadsheet,
  Phone,
  Scale,
} from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Tax preparation, planning, payroll, IRS representation, and bookkeeping support from Nitin Bhalla CPA PC.",
};

const services = [
  {
    icon: FileSpreadsheet,
    title: "Individual & business tax preparation",
    body: "Careful preparation of personal and business income tax returns. We gather the right documents, review your situation, and file with attention to accuracy and clarity.",
    points: [
      "Individual Form 1040 returns",
      "Business entity returns",
      "Organized document checklists",
      "Clear explanation of key figures",
    ],
  },
  {
    icon: Calculator,
    title: "S-corp & LLC returns",
    body: "Entity filings for S corporations and LLCs, including coordination with owner returns when needed so nothing falls through the cracks.",
    points: [
      "S corporation Form 1120-S support",
      "Partnership / multi-member LLC filings",
      "Single-member LLC Schedule C coordination",
      "Owner basis and distribution awareness",
    ],
  },
  {
    icon: ClipboardList,
    title: "Payroll & compliance",
    body: "Help staying current with payroll-related filings and day-to-day compliance so your team and records stay aligned.",
    points: [
      "Payroll filing support",
      "Deposit and deadline awareness",
      "Year-end W-2 / 1099 coordination",
      "Practical compliance checklists",
    ],
  },
  {
    icon: Scale,
    title: "IRS representation (Form 2848)",
    body: "When the IRS contacts you, you do not have to navigate it alone. With a signed Form 2848 power of attorney, we can communicate with the IRS on your behalf.",
    points: [
      "Power of attorney (Form 2848)",
      "Notice and letter review",
      "Representation conversations",
      "Organized response planning",
    ],
  },
  {
    icon: BookOpen,
    title: "Tax planning",
    body: "Planning conversations throughout the year — estimated payments, entity considerations, and timing decisions — so filing season is less reactive.",
    points: [
      "Estimated tax check-ins",
      "Entity and election discussions",
      "Year-end planning points",
      "What-if scenarios in plain language",
    ],
  },
  {
    icon: Calculator,
    title: "Bookkeeping support",
    body: "Support keeping books organized enough for clean tax filings and better business decisions — without unnecessary complexity.",
    points: [
      "Book cleanup for tax season",
      "Categorization guidance",
      "Reconciliations support",
      "Reports that make sense to owners",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
            Services
          </p>
          <h1 className="mt-2 max-w-3xl text-4xl font-semibold sm:text-5xl">
            Tax, payroll, planning, and representation — handled with care.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            {site.firmName} focuses on practical, accurate work for individuals
            and businesses. Every engagement starts with listening.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="grid gap-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[auto_1fr]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                <service.icon className="h-7 w-7" aria-hidden strokeWidth={1.75} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">{service.title}</h2>
                <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">
                  {service.body}
                </p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-slate-700"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600"
                        aria-hidden
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-navy-900 p-8 text-white sm:flex sm:items-center sm:justify-between sm:gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Not sure which service fits?
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-100/80">
              Call and describe your situation. We&apos;ll point you to the
              right next step — without jargon or pressure.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 sm:mt-0 sm:shrink-0">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-500"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {site.phone}
            </a>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Contact
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
