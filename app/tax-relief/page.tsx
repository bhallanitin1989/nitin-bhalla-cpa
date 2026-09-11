import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardList,
  CircleDollarSign,
  FileText,
  FileWarning,
  Handshake,
  Landmark,
  PauseCircle,
  Phone,
  Scale,
  Shield,
} from "lucide-react";
import { taxReliefItems } from "@/lib/tax-relief";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tax Relief",
  description:
    "CPA-led tax relief and IRS resolution support from NB Tax and Advisory, CPA — unfiled returns, notices, installment agreements, penalty relief, and more.",
};

const icons = {
  "unfiled-returns": FileText,
  "irs-notices": FileWarning,
  "installment-agreements": CircleDollarSign,
  "penalty-relief": Scale,
  "levy-lien": Landmark,
  "offer-in-compromise": Handshake,
  "currently-not-collectible": PauseCircle,
} as const;

const steps = [
  {
    step: "1",
    title: "Call and share your situation",
    body: "Tell us what notices you have received, which years are involved, and what you are most concerned about. There is no need to have every document ready on day one.",
  },
  {
    step: "2",
    title: "Gather facts and documents",
    body: "Together we identify the returns, notices, income information, and financial details needed to understand your position with the IRS.",
  },
  {
    step: "3",
    title: "Build a representation plan",
    body: "When appropriate, we arrange IRS representation authorization so the firm can speak with the IRS on your behalf, and we outline a clear plan for filings and responses.",
  },
  {
    step: "4",
    title: "Pursue a resolution path",
    body: "Based on your facts and current IRS rules, we work toward a practical path — whether that means catching up filings, arranging payments, requesting relief, or another option that fits.",
  },
];

const whyCpa = [
  {
    icon: BadgeCheck,
    title: "Licensed CPA oversight",
    body: "Tax relief work is led by Nitin Bhalla, CPA — a New York licensed Certified Public Accountant — not a call-center sales script.",
  },
  {
    icon: Shield,
    title: "IRS representation",
    body: "With a properly signed power of attorney, we can deal with the IRS on authorized matters so you are not left fielding every call alone.",
  },
  {
    icon: ClipboardList,
    title: "Accurate filings alongside relief",
    body: "Resolution often depends on getting returns right. Filing and relief work stay coordinated under one professional relationship.",
  },
];

export default function TaxReliefPage() {
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
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-500">
            Tax relief &amp; IRS resolution
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Facing IRS pressure? Start with a calm, professional conversation.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-100/80">
            Unfiled returns, balances due, and collection notices can feel
            overwhelming. {site.firmName} helps individuals and businesses
            understand their options and work toward a practical path forward —
            with CPA-led IRS representation when appropriate.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-500"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call {site.phone}
            </a>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact the firm
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
              A steadier way forward
            </p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
              CPA-led tax relief support, explained in plain language.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                If you are behind on filings, carrying a tax balance, or
                receiving IRS letters, you are not alone — and you do not have
                to sort it out without guidance. Our approach is practical and
                respectful: we listen first, review the facts, and outline what
                options may apply under current IRS rules.
              </p>
              <p>
                We will not promise a specific settlement amount or outcome. Tax
                debt resolution depends on your financial picture, filing
                history, and what the IRS allows in your circumstances. What we
                can offer is careful representation, clear communication, and
                steady follow-through.
              </p>
            </div>
          </div>
          <aside className="rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-navy-900">
              What to expect from us
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {[
                "Honest assessment of your situation",
                "No aggressive sales pressure",
                "IRS representation when appropriate",
                "Coordination of filings and resolution work",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
              What we help with
            </p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
              Common tax relief needs we address.
            </h2>
            <p className="mt-3 text-slate-600">
              Every case is different. These are areas where CPA-led support
              often makes the process more manageable — select a topic to learn
              more.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {taxReliefItems.map((item) => {
              const Icon =
                icons[item.slug as keyof typeof icons] ?? FileText;
              return (
                <Link
                  key={item.slug}
                  href={`/tax-relief/${item.slug}/`}
                  className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:border-teal-500/30 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                    <Icon
                      className="h-6 w-6"
                      aria-hidden
                      strokeWidth={1.75}
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold group-hover:text-teal-600">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-600">
                    Learn more
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
            How it works
          </p>
          <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
            A clear process from first call to resolution path.
          </h2>
        </div>
        <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <li
              key={item.step}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-navy-900 text-sm font-semibold text-white">
                {item.step}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
              Why a CPA
            </p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
              Trust, representation, and accurate filings together.
            </h2>
            <p className="mt-3 text-slate-600">
              Tax relief is more effective when the person helping you can also
              get the underlying returns right and speak with the IRS under
              proper authorization.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {whyCpa.map((item) => (
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

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-navy-900 px-6 py-12 text-white sm:px-12 sm:flex sm:items-center sm:justify-between sm:gap-8">
          <div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Ready to talk about your tax situation?
            </h2>
            <p className="mt-3 max-w-xl text-slate-100/80">
              Call {site.firmName} at {site.phone}. Bring what you have — notices,
              prior returns, or simply a description of where things stand — and
              we will help you understand sensible next steps.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 sm:mt-0 sm:shrink-0">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-500"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call {site.phone}
            </a>
            <Link
              href="/recent-cases/"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Recent Cases
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact page
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>

        <aside
          className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-slate-700"
          role="note"
        >
          <strong className="text-navy-900">Important disclaimer:</strong> This
          page provides general information only and is not tax, legal, or
          accounting advice. Outcomes depend on your specific facts and
          applicable IRS rules. {site.firmName} ({site.legalName} d/b/a) does
          not guarantee any specific settlement result, levy outcome, fee
          comparison, or refund of fees. Please contact the firm to discuss your
          situation.
        </aside>
      </section>
    </>
  );
}
