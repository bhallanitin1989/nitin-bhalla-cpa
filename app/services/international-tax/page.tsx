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
  title: "International & Foreign Tax (NY Metro)",
  description:
    "Local New York–area CPA help for FBAR, Forms 5471/8938, foreign income, and cross-border reporting — outbound and inbound international tax from NB Tax and Advisory, CPA.",
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
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-copper-400">
            FBAR · 5471 / 8938 · Foreign income · NY metro clients
          </p>
          <div className="gold-divider mt-3" />
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Local CPA help for foreign accounts, entities, and cross-border income.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-100/80">
            A specialty of {site.firmName}: New York–area individuals and owners
            with foreign ties — FBAR, Forms 5471 and 8938, foreign income,
            inbound U.S. activity, and catch-up when prior years were missed.
            International reporting prepared with CPA care — virtually, without
            an office visit.
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
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal-600">
            Who this helps
          </p>
          <div className="gold-divider mt-3" />
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Built for local clients with foreign ties — outbound and inbound.
          </h2>
          <p className="mt-3 text-slate-600">
            Whether you live in the New York metro with accounts abroad, or you
            are a foreign owner with U.S. activity, the paperwork differs — the
            need for timely, complete filing does not.
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

      {/* International tax penalties */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
            International tax penalties
          </p>
          <div className="gold-divider mt-3" />
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Among the harshest penalties in the tax code — and they stack.
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600">
            <p>
              International information-return penalties are widely regarded as
              among the most severe in U.S. tax practice. They often apply{" "}
              <strong className="font-semibold text-navy-900">
                per form, per year
              </strong>
              , can continue after IRS notice, and may accumulate across
              entities and tax years. In many cases, the statute of limitations
              on assessment may not begin until the required international
              returns are filed.
            </p>
            <p>
              Equally important: many of these returns are driven by{" "}
              <strong className="font-semibold text-navy-900">
                ownership or account balances — not by taxable income
              </strong>
              . A foreign company or account with zero profit can still create a
              filing duty. Missing that filing can leave exposure open for years
              you thought were quiet.
            </p>
          </div>
        </div>

        {/* Summary table */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
          <div className="border-b border-slate-100 bg-slate-50 px-5 py-4 sm:px-6">
            <h3 className="text-lg font-semibold text-navy-900">
              Illustrative penalty summary
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Approximate figures commonly cited in educational materials.
              Amounts — especially FBAR — are subject to inflation adjustment
              and legislative change. Confirm current IRS and FinCEN guidance
              before relying on any number.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-100 bg-navy-900 text-white">
                  <th className="px-5 py-3 font-semibold sm:px-6" scope="col">
                    Form
                  </th>
                  <th className="px-5 py-3 font-semibold sm:px-6" scope="col">
                    Initial penalty
                  </th>
                  <th className="px-5 py-3 font-semibold sm:px-6" scope="col">
                    Continuation penalty
                  </th>
                  <th className="px-5 py-3 font-semibold sm:px-6" scope="col">
                    Maximum
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="bg-white">
                  <td className="px-5 py-3.5 font-medium text-navy-900 sm:px-6">
                    Form 5471
                  </td>
                  <td className="px-5 py-3.5 sm:px-6">$10,000</td>
                  <td className="px-5 py-3.5 sm:px-6">
                    $10,000 per 30 days after notice
                  </td>
                  <td className="px-5 py-3.5 sm:px-6">
                    Often cited ~$60,000
                  </td>
                </tr>
                <tr className="bg-slate-50/70">
                  <td className="px-5 py-3.5 font-medium text-navy-900 sm:px-6">
                    Form 5472
                  </td>
                  <td className="px-5 py-3.5 sm:px-6">$25,000</td>
                  <td className="px-5 py-3.5 sm:px-6">
                    $25,000 per 30 days (after notice period)
                  </td>
                  <td className="px-5 py-3.5 sm:px-6">
                    No cap commonly cited
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-5 py-3.5 font-medium text-navy-900 sm:px-6">
                    Form 8865
                  </td>
                  <td className="px-5 py-3.5 sm:px-6">$10,000</td>
                  <td className="px-5 py-3.5 sm:px-6">
                    $10,000 per 30 days after notice
                  </td>
                  <td className="px-5 py-3.5 sm:px-6">
                    Often cited ~$60,000
                  </td>
                </tr>
                <tr className="bg-slate-50/70">
                  <td className="px-5 py-3.5 font-medium text-navy-900 sm:px-6">
                    Form 8938
                  </td>
                  <td className="px-5 py-3.5 sm:px-6">$10,000</td>
                  <td className="px-5 py-3.5 sm:px-6">
                    Continuation up to commonly cited ~$50,000 additional
                  </td>
                  <td className="px-5 py-3.5 sm:px-6">
                    Educational max often discussed near ~$60,000 total —
                    confirm current rules
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-5 py-3.5 font-medium text-navy-900 sm:px-6">
                    FBAR (non-willful)
                  </td>
                  <td className="px-5 py-3.5 sm:px-6" colSpan={2}>
                    Illustrative range often cited around ~$16,000+ per
                    violation (inflation-adjusted; confirm FinCEN)
                  </td>
                  <td className="px-5 py-3.5 sm:px-6">Varies by facts</td>
                </tr>
                <tr className="bg-slate-50/70">
                  <td className="px-5 py-3.5 font-medium text-navy-900 sm:px-6">
                    FBAR (willful)
                  </td>
                  <td className="px-5 py-3.5 sm:px-6" colSpan={2}>
                    Greater of an inflation-adjusted fixed amount (commonly
                    discussed in the ~$100,000+ range) or 50% of the account
                    balance — illustrative only; confirm FinCEN
                  </td>
                  <td className="px-5 py-3.5 sm:px-6">
                    Greater of fixed amount or 50% of balance
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="border-t border-slate-100 px-5 py-3 text-xs leading-relaxed text-slate-500 sm:px-6">
            Figures above are educational approximations for discussion — not a
            fee schedule, not a guarantee of what the IRS or FinCEN will assess,
            and not legal advice. FBAR civil penalties are adjusted for inflation;
            always verify the current FinCEN and IRS published amounts for the
            year at issue.
          </p>
        </div>

        {/* Relief + SOL */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-lg font-semibold text-navy-900">
              Penalty relief options people commonly ask about
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Coming into compliance before the IRS initiates contact is often
              discussed as a constructive step. Paths that appear in educational
              guidance include the following — eligibility and results are never
              guaranteed:
            </p>
            <ul className="mt-5 space-y-3.5 text-sm text-slate-700">
              {[
                {
                  title: "Reasonable cause",
                  body: "Penalties may be considered for abatement when the failure was due to reasonable cause and not willful neglect — fact-specific and not assured.",
                },
                {
                  title: "Streamlined Filing Compliance Procedures",
                  body: "A voluntary path discussed for certain non-willful taxpayers who missed foreign-account or international reporting — terms differ for foreign vs. domestic residents.",
                },
                {
                  title: "Delinquent Information Return Submission Procedures",
                  body: "A path sometimes used to file late international information returns when the IRS has not contacted you and there is no unreported income — confirm current IRS criteria.",
                },
                {
                  title: "First-time penalty abatement",
                  body: "May apply in limited situations for taxpayers with a clean compliance history — not available for every international penalty type.",
                },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600"
                    aria-hidden
                  />
                  <span>
                    <strong className="font-semibold text-navy-900">
                      {item.title}:
                    </strong>{" "}
                    {item.body}
                  </span>
                </li>
              ))}
            </ul>
          </article>

          <aside className="flex flex-col gap-6">
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                <ShieldAlert className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-navy-900">
                Unlimited statute of limitations (educational)
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Under the concept reflected in{" "}
                <strong className="font-semibold text-navy-900">
                  IRC § 6501(c)(8)
                </strong>
                , the period for assessing tax attributable to certain
                international information returns may not begin until those
                returns are filed. If required forms were never submitted, the
                IRS may be able to assess related tax and penalties for an
                indefinite period. This is one of the most serious practical
                consequences of prolonged non-filing — and a core reason timely
                compliance matters even in low- or zero-income years.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-base font-semibold text-navy-900">
                Keep in mind
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                {[
                  "Forms can stack across entities, accounts, and years",
                  "FBAR (FinCEN) and Form 8938 (IRS) are separate regimes",
                  "Ownership — not income — often drives the duty to file",
                  "Numbers on this page are illustrative and change — confirm current rules",
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
            </div>
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
              Foreign accounts or Form 5471 on your list?
            </h2>
            <p className="mt-3 max-w-xl text-slate-100/80">
              Book a consultation or call {site.firmName} at {site.phone}. Bring
              ownership charts, prior returns, or foreign account summaries —
              we will map which filings may apply for your New York–area situation.
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
