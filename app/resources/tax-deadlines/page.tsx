import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, Phone } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Key federal tax deadlines",
  description:
    "Educational overview of key federal tax deadlines, with 2026 dates where they apply. Not tax advice — confirm on IRS.gov.",
};

type Deadline = {
  when: string;
  title: string;
  detail: string;
};

function calendarYear(): number {
  return new Date().getFullYear();
}

function deadlinesFor(year: number): { introYear: number; items: Deadline[] } {
  // Show the year the visitor is in. Content is authored with 2026 as the
  // current planning year and stays year-aware in labels.
  const y = year;
  const next = y + 1;
  const prior = y - 1;

  return {
    introYear: y,
    items: [
      {
        when: `January 15, ${y}`,
        title: `4th-quarter ${prior} individual estimated tax`,
        detail:
          "Final Form 1040-ES installment for the prior calendar year for many individuals. Some people file and pay the prior-year return early instead of making this payment — whether that works depends on your facts.",
      },
      {
        when: `January 31, ${y}`,
        title: "W-2 and many 1099 recipient copies",
        detail:
          "Employers and payers generally furnish employee W-2s and many information returns (including 1099-NEC) to recipients. E-file due dates to SSA or IRS can differ by form.",
      },
      {
        when: `March 16, ${y}`,
        title: "Calendar-year partnerships and S-corporations",
        detail: `Forms 1065 and 1120-S are generally due the 15th day of the third month. For ${y}, March 15 falls on a Sunday, so the timely date is typically the next business day. Extensions give time to file, not extra time to pay what is reasonably due.`,
      },
      {
        when: `April 15, ${y}`,
        title: `${prior} individual returns, calendar-year C-corps, Q1 estimates, IRA deadline`,
        detail: `Form 1040 / 1040-SR for ${prior}, many calendar-year Form 1120 filings, first-quarter ${y} estimated tax, and a common deadline for prior-year IRA contributions. FBAR (FinCEN Form 114) is generally due in mid-April with an automatic extension often available — confirm current FinCEN rules.`,
      },
      {
        when: `June 15, ${y}`,
        title: `2nd-quarter ${y} individual estimated tax`,
        detail:
          "Covers April and May activity for calendar-year individuals who pay estimates. This “quarter” is shorter than the others.",
      },
      {
        when: `September 15, ${y}`,
        title: `3rd-quarter ${y} estimates and extended entity returns`,
        detail:
          "Third individual estimated-tax installment. Also a common extended due date for calendar-year partnership and S-corporation returns.",
      },
      {
        when: `October 15, ${y}`,
        title: `Extended ${prior} individual returns`,
        detail:
          "Typical extended due date for calendar-year individual income tax returns. An extension to file is not an extension to pay tax you already know you owe.",
      },
      {
        when: `January 15, ${next}`,
        title: `4th-quarter ${y} individual estimated tax`,
        detail: `Final estimated installment for tax year ${y} for many individuals, unless you file and pay the ${y} return early under the rules that apply to you.`,
      },
    ],
  };
}

const payrollNotes = [
  {
    title: "Form 941 (quarterly employment tax)",
    body: "Generally due the last day of the month after each quarter: April 30, July 31, October 31, and January 31. Deposit schedules (monthly or semiweekly) are separate and often earlier.",
  },
  {
    title: "Form 944 (annual employment tax)",
    body: "Some small employers file annually instead of quarterly. Eligibility is IRS-directed — do not switch forms on your own.",
  },
  {
    title: "State dates",
    body: "State estimated tax, withholding, franchise, and LLC fees follow different calendars. New York and other states are not shown here.",
  },
];

export default function TaxDeadlinesPage() {
  const year = calendarYear();
  const { introYear, items } = deadlinesFor(year);

  return (
    <>
      <section className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
            Resources · Deadlines
          </p>
          <h1 className="mt-2 max-w-3xl text-4xl font-semibold sm:text-5xl">
            Key federal tax deadlines for {introYear}.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            An educational calendar for calendar-year individuals and common
            small-business filings. When a due date falls on a weekend or legal
            holiday, the IRS generally treats the next business day as timely.
            Always confirm on IRS.gov before you rely on a date.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <aside
          className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-slate-700"
          role="note"
        >
          <strong className="text-navy-900">Illustrative only — not tax advice.</strong>{" "}
          Deadlines depend on your entity type, fiscal year, extension status,
          and current IRS / FinCEN rules. This page is general information from{" "}
          {site.firmName}, not a filing calendar for your account.
        </aside>

        <ol className="mt-10 space-y-4">
          {items.map((item, i) => (
            <li
              key={item.when}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm font-semibold text-navy-900">{item.when}</p>
              </div>
              <h2 className="mt-2 text-xl font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.detail}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-14">
          <h2 className="text-2xl font-semibold">Payroll and other rhythms</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {payrollNotes.map((note) => (
              <article
                key={note.title}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-6"
              >
                <h3 className="text-lg font-semibold">{note.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {note.body}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4 text-sm">
          <a
            href="https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-teal-700 hover:text-navy-900"
          >
            IRS estimated taxes
            <ExternalLink className="h-4 w-4" aria-hidden />
          </a>
          <a
            href="https://www.irs.gov/filing/individuals/when-to-file"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-teal-700 hover:text-navy-900"
          >
            IRS when to file
            <ExternalLink className="h-4 w-4" aria-hidden />
          </a>
          <Link
            href="/resources/blog/quarterly-deadlines-overview/"
            className="inline-flex items-center gap-2 font-semibold text-teal-700 hover:text-navy-900"
          >
            Quarterly deadlines article
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <p className="mt-10 text-xs leading-relaxed text-slate-500">
          {site.disclaimer}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
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
            Contact
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
