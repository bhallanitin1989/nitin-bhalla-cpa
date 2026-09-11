import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "General frequently asked questions about working with Nitin Bhalla CPA PC. Educational information only — not tax advice.",
};

const faqs = [
  {
    q: "What services does the firm offer?",
    a: "Nitin Bhalla CPA PC focuses on individual and business tax preparation, S-corp and LLC returns, payroll and compliance support, IRS representation (Form 2848), tax planning, and bookkeeping support.",
  },
  {
    q: "Do I need to bring anything to a first conversation?",
    a: "It helps to have a brief summary of your situation and any recent tax notices, prior-year returns, or entity documents if they apply. If you are unsure, call first — we can tell you what is useful to gather.",
  },
  {
    q: "Can you talk to the IRS for me?",
    a: "With a properly signed Form 2848 power of attorney, a CPA can represent you before the IRS on matters covered by that authorization. Whether representation is appropriate depends on your facts — ask during a consultation.",
  },
  {
    q: "Do you work with freelancers and S-corps?",
    a: "Yes. The practice regularly supports individuals, freelancers and independent contractors, small businesses, LLCs, and S-corporation owners.",
  },
  {
    q: "Is everything on this website tax advice?",
    a: "No. Content on this site is general information for education only. It is not tax, legal, or accounting advice for your specific situation. Please contact the firm to discuss your circumstances.",
  },
  {
    q: "How do I get started?",
    a: "Call (646) 992-4277 or use the contact page to prepare a short note, then reach out by phone. Appointments are scheduled directly with the firm.",
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
            FAQ
          </p>
          <h1 className="mt-2 max-w-3xl text-4xl font-semibold sm:text-5xl">
            Short answers to common questions.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            These FAQs are educational only. They are not a substitute for
            advice tailored to your facts.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm open:border-teal-500/30"
            >
              <summary className="cursor-pointer list-none font-[family-name:var(--font-display)] text-lg font-semibold text-navy-900 marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {item.q}
                  <span
                    className="mt-1 text-teal-600 transition group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {item.a}
              </p>
            </details>
          ))}
        </div>

        <aside
          className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-slate-700"
          role="note"
        >
          <strong className="text-navy-900">Disclaimer:</strong>{" "}
          {site.disclaimer}
        </aside>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-600"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call {site.phone}
          </a>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-100 px-5 py-3 text-sm font-semibold text-navy-900 hover:border-teal-500 hover:text-teal-600"
          >
            Contact page
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
