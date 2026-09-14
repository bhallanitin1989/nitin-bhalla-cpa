import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Calendar,
  ClipboardCheck,
  FileText,
  Globe2,
  Phone,
  Plane,
  Scale,
  ShieldAlert,
  Users,
} from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "International tax services",
  description:
    "Outbound and inbound international tax reporting from NB Tax and Advisory, CPA — Forms 5471, 5472, 8865, 1040-NR, FBAR, FATCA, expat support, and penalty-relief coordination.",
};

const whoHelps = [
  {
    icon: Globe2,
    title: "Outbound — U.S. persons with foreign interests",
    body: "U.S. citizens, residents, and domestic entities that own or control foreign corporations, partnerships, disregarded entities, or trusts — or who hold foreign financial accounts above reporting thresholds.",
    points: [
      "Foreign corporation ownership (Form 5471)",
      "Foreign partnership interests (Form 8865)",
      "Foreign disregarded entities (Form 8858)",
      "Foreign trusts (Form 3520 / 3520-A, when applicable)",
      "Foreign accounts & assets (FBAR and Form 8938)",
    ],
  },
  {
    icon: Building2,
    title: "Inbound — foreign owners of U.S. activity",
    body: "Foreign individuals and entities with U.S. companies, rental or business income, or real-property interests that trigger U.S. reporting or withholding rules.",
    points: [
      "Foreign-owned U.S. corporations / LLCs (Form 5472)",
      "Nonresident alien returns (Form 1040-NR)",
      "FIRPTA awareness for U.S. real property dispositions",
      "Treaty and withholding documentation questions",
      "E-commerce or U.S. presence with foreign ownership",
    ],
  },
];

const formCards = [
  {
    code: "5471",
    title: "Form 5471",
    body: "Information return for certain U.S. persons who are officers, directors, or shareholders of foreign corporations. Filing is driven by ownership and category thresholds — not by whether the foreign company made a profit.",
  },
  {
    code: "5472",
    title: "Form 5472",
    body: "Required for certain 25%+ foreign-owned U.S. corporations and foreign-owned disregarded entities with reportable transactions with related foreign parties. Even small capital contributions or intercompany transfers can matter.",
  },
  {
    code: "8865",
    title: "Form 8865",
    body: "Reports interests in, contributions to, or certain changes involving foreign partnerships. Categories of filers differ in how much detail and which schedules are required.",
  },
  {
    code: "1040-NR",
    title: "Form 1040-NR",
    body: "U.S. income tax return for nonresident aliens with U.S.-source income — for example wages earned in the U.S., rental income, or certain business activity. Treaty positions may apply depending on your country.",
  },
  {
    code: "FBAR & 8938",
    title: "FBAR & Form 8938",
    body: "FBAR (FinCEN 114) reports foreign financial accounts when aggregate balances exceed the FinCEN threshold at any time during the year. Form 8938 (FATCA) reports specified foreign financial assets to the IRS on different thresholds — many people need both.",
  },
];

const otherForms = [
  {
    title: "Form 8858",
    body: "Foreign disregarded entities owned by U.S. persons — often filed alongside other international returns.",
  },
  {
    title: "Form 3520",
    body: "Certain foreign trust transactions and large gifts from foreign persons — brief awareness when trusts or gifts are involved.",
  },
  {
    title: "FIRPTA (high level)",
    body: "Foreign persons disposing of U.S. real property interests may face withholding and reporting — coordinate early when a sale is planned.",
  },
];

const howWeHelp = [
  {
    step: "1",
    icon: ClipboardCheck,
    title: "Assessment",
    body: "We review your ownership structure, accounts, and prior filings to identify which information returns and income forms may apply — and flag years that may still need attention.",
  },
  {
    step: "2",
    icon: FileText,
    title: "Preparation",
    body: "We gather the details needed for each form, prepare schedules carefully, and coordinate with your foreign advisors or bookkeepers when numbers live abroad.",
  },
  {
    step: "3",
    icon: Scale,
    title: "Coordination when you are behind",
    body: "If prior international forms were missed, we discuss educational options such as streamlined procedures, delinquent information-return paths, or reasonable-cause requests — and coordinate with IRS representation or tax relief support when needed. Eligibility and results are never guaranteed.",
  },
];

const expatPoints = [
  {
    icon: Plane,
    title: "Foreign earned income exclusion (FEIE)",
    body: "Qualifying individuals living and working abroad may exclude a limited amount of foreign earned income when physical-presence or bona fide residence tests are met — Form 2555 territory.",
  },
  {
    icon: Scale,
    title: "Foreign tax credit (FTC)",
    body: "Taxes paid to a foreign country may generate a U.S. credit (Form 1116) that helps reduce double taxation. FEIE and FTC interact — choosing an approach depends on your facts.",
  },
];

export default function InternationalTaxPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(20,184,166,0.35), transparent 40%), radial-gradient(circle at 80% 0%, rgba(184,148,74,0.18), transparent 35%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-500">
            International tax services
          </p>
          <div className="gold-divider mt-3" />
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Cross-border reporting, explained clearly — and filed with care.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-100/80">
            Whether you are a U.S. person with foreign companies or accounts, or
            a foreign owner with U.S. activity, {site.firmName} helps sort which
            forms may apply and prepare the international information returns
            that keep you on the right side of IRS and FinCEN rules.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {site.calendlyUrl ? (
              <a
                href={site.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Calendar className="h-4 w-4" aria-hidden />
                Book a consultation
              </a>
            ) : (
              <Link href="/contact/" className="btn-primary">
                Contact the firm
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            )}
            <a href={site.phoneHref} className="btn-secondary-on-dark">
              <Phone className="h-4 w-4" aria-hidden />
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Who this helps */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
            Who this helps
          </p>
          <div className="gold-divider mt-3" />
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Outbound and inbound — different forms, same need for accuracy.
          </h2>
          <p className="mt-3 text-slate-600">
            International tax obligations usually fall into two directions. The
            paperwork differs; the importance of timely, complete filing does
            not.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {whoHelps.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                <item.icon className="h-6 w-6" aria-hidden strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-navy-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.body}
              </p>
              <ul className="mt-5 space-y-2.5">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm text-slate-600"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600"
                      aria-hidden
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Key forms */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
              Key forms overview
            </p>
            <div className="gold-divider mt-3" />
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              The information returns we see most often.
            </h2>
            <p className="mt-3 text-slate-600">
              One structure can trigger more than one form. Thresholds and
              categories are fact-specific — this overview is educational, not a
              filing determination.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {formCards.map((card) => (
              <article
                key={card.code}
                className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-gold-500">
                  Form {card.code}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-navy-900">
                  {card.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {otherForms.map((item) => (
              <aside
                key={item.title}
                className="rounded-2xl border border-dashed border-slate-200 bg-white/70 p-5"
              >
                <h3 className="text-base font-semibold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  {item.body}
                </p>
              </aside>
            ))}
          </div>
        </div>
      </section>

      {/* Penalties */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
              Penalties &amp; why filing matters
            </p>
            <div className="gold-divider mt-3" />
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Ownership — not income — often drives the duty to file.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                Many international information returns are required because of{" "}
                <strong className="font-semibold text-navy-900">
                  ownership or account balances
                </strong>
                , not because the foreign entity or account generated taxable
                profit. A year with zero income can still require a complete
                filing.
              </p>
              <p>
                Penalties for late or missing international forms can be severe
                and may apply{" "}
                <strong className="font-semibold text-navy-900">
                  per form, per year
                </strong>
                . In some cases, continuation penalties can grow after IRS
                notice, and assessment periods may stay open until required
                information returns are filed. Exact amounts and rules change —
                always confirm current IRS and FinCEN guidance.
              </p>
              <p>
                If you believe prior years were missed, coming forward before the
                IRS initiates contact is often discussed as a constructive step.
                Options people commonly learn about include{" "}
                <em>streamlined filing procedures</em>,{" "}
                <em>delinquent information-return procedures</em>, and{" "}
                <em>reasonable cause</em> requests. These are educational
                concepts only — eligibility, timing, and outcomes are never
                guaranteed.
              </p>
            </div>
          </div>
          <aside className="rounded-2xl border border-amber-200 bg-amber-50 p-6 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-100 text-amber-700">
              <ShieldAlert className="h-5 w-5" aria-hidden />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-navy-900">
              Educational note — not a quote of current penalties
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              {[
                "International forms often stack across entities and years",
                "FBAR and FATCA are separate regimes with different agencies",
                "Tax law in this area changes — confirm current rules",
                "No page can determine your filing set without your facts",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* Expat basics */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
              Expat basics
            </p>
            <div className="gold-divider mt-3" />
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Americans abroad still file — with tools to limit double tax.
            </h2>
            <p className="mt-3 text-slate-600">
              U.S. citizens and green-card holders generally report worldwide
              income. High-level provisions that often come up in conversations:
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {expatPoints.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
              >
                <item.icon
                  className="h-7 w-7 text-teal-600"
                  aria-hidden
                  strokeWidth={1.75}
                />
                <h3 className="mt-4 text-lg font-semibold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm text-slate-500">
            Housing exclusions, totalization agreements, and state residency
            after a move abroad can also matter. We discuss these at a practical
            level during engagement — not as one-size-fits-all advice on this
            page.
          </p>
        </div>
      </section>

      {/* How we help */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
            How we help
          </p>
          <div className="gold-divider mt-3" />
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Assessment, preparation, and coordination when relief is needed.
          </h2>
        </div>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {howWeHelp.map((item) => (
            <li
              key={item.step}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-navy-900 text-sm font-semibold text-white">
                {item.step}
              </span>
              <item.icon
                className="mt-4 h-6 w-6 text-teal-600"
                aria-hidden
                strokeWidth={1.75}
              />
              <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
        <div className="mt-8 flex flex-wrap gap-4 text-sm">
          <Link
            href="/services/irs-representation/"
            className="inline-flex items-center gap-1.5 font-semibold text-teal-600 hover:text-navy-900"
          >
            <Users className="h-4 w-4" aria-hidden />
            IRS representation
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link
            href="/tax-relief/"
            className="inline-flex items-center gap-1.5 font-semibold text-teal-600 hover:text-navy-900"
          >
            <Scale className="h-4 w-4" aria-hidden />
            Tax relief &amp; resolution
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>

      {/* CTA + disclaimer */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-navy-900 px-6 py-12 text-white sm:px-12 sm:flex sm:items-center sm:justify-between sm:gap-8">
          <div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Ready to sort your international filings?
            </h2>
            <p className="mt-3 max-w-xl text-slate-100/80">
              Book a consultation or call {site.firmName} at {site.phone}. Bring
              what you have — ownership charts, prior returns, or foreign account
              summaries — and we will help you understand sensible next steps.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 sm:mt-0 sm:shrink-0">
            {site.calendlyUrl ? (
              <a
                href={site.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-500"
              >
                <Calendar className="h-4 w-4" aria-hidden />
                Book a consultation
              </a>
            ) : null}
            <a
              href={site.phoneHref}
              className={
                site.calendlyUrl
                  ? "inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  : "inline-flex items-center gap-2 rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-500"
              }
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call {site.phone}
            </a>
            <Link
              href="/services/"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              All services
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
          accounting advice. International reporting thresholds, form
          categories, penalty amounts, and relief procedures change. Confirm
          current IRS and FinCEN rules for your facts. {site.firmName} (
          {site.legalName} d/b/a) does not guarantee any specific filing
          outcome, penalty abatement, or relief result. Please contact the firm
          to discuss your situation.
        </aside>
      </section>
    </>
  );
}
