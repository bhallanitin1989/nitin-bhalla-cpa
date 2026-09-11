import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Calculator,
  ClipboardCheck,
  FileText,
  Handshake,
  LifeBuoy,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";
import { site } from "@/lib/site";

const snapshot = [
  {
    icon: FileText,
    title: "Tax preparation",
    body: "Individual and business returns prepared carefully, with clear questions and organized follow-up.",
  },
  {
    icon: Calculator,
    title: "Tax planning",
    body: "Year-round conversations so decisions about income, elections, and timing are made with eyes open.",
  },
  {
    icon: ClipboardCheck,
    title: "Payroll & compliance",
    body: "Help staying current with payroll filings and related compliance obligations.",
  },
  {
    icon: ShieldCheck,
    title: "IRS representation",
    body: "Form 2848 power of attorney support when you need a professional voice with the IRS.",
  },
  {
    icon: LifeBuoy,
    title: "Tax relief",
    body: "Support for unfiled returns, notices, balances due, and resolution paths — with CPA-led guidance.",
    href: "/tax-relief/",
  },
];

const whyUs = [
  {
    icon: Handshake,
    title: "Trust-first conversations",
    body: "Plain-language explanations, realistic timelines, and no pressure tactics.",
  },
  {
    icon: Users,
    title: "People and businesses",
    body: "Support for individuals, freelancers, LLCs, and S-corporations under one roof.",
  },
  {
    icon: Building2,
    title: "New York–licensed CPA",
    body: "Work with Nitin Bhalla, CPA — a New York licensed Certified Public Accountant.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(20,184,166,0.35), transparent 40%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.08), transparent 35%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-500">
              New York CPA firm
            </p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Clear, careful tax and accounting support you can trust.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-100/80">
              {site.tagline} From annual returns to IRS matters, we focus on
              accuracy, communication, and practical next steps.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-500"
              >
                Schedule a conversation
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <Phone className="h-4 w-4" aria-hidden />
                {site.phone}
              </a>
            </div>
          </div>
          <aside className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
            <h2 className="text-lg font-semibold text-white">
              How we can help
            </h2>
            <ul className="mt-4 space-y-3">
              {site.focus.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-slate-100/85"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-slate-500">
              {site.disclaimer}
            </p>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
            Services snapshot
          </p>
          <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
            Practical help for the moments that matter most.
          </h2>
          <p className="mt-3 text-slate-600">
            Whether you need a clean annual filing or guidance through a more
            complex issue, we keep the process organized and human.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {snapshot.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-6 transition hover:border-teal-500/30 hover:bg-white hover:shadow-sm"
            >
              <item.icon
                className="h-8 w-8 text-teal-600"
                aria-hidden
                strokeWidth={1.75}
              />
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.body}
              </p>
              {"href" in item && item.href ? (
                <Link
                  href={item.href}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-600 hover:text-navy-900"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              ) : null}
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/services/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-navy-900"
          >
            View all services
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
              Why work with us
            </p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
              Professional standards. Warm communication.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {whyUs.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
              >
                <item.icon
                  className="h-7 w-7 text-navy-800"
                  aria-hidden
                  strokeWidth={1.75}
                />
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-navy-900 px-6 py-12 text-center text-white sm:px-12">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Ready to talk through your next filing or question?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-100/80">
            Call {site.firmName} or send a short note through the contact page.
            We&apos;ll help you understand options and what to prepare.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-500"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call {site.phone}
            </a>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact page
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
