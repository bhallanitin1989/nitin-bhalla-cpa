import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, Phone } from "lucide-react";
import TaxDeadlineCalendar from "@/components/TaxDeadlineCalendar";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Federal tax calendar",
  description:
    "Educational month-by-month federal tax calendar with key filing, estimated-tax, and payroll dates. Not tax advice — confirm on IRS.gov.",
};

const payrollNotes = [
  {
    title: "Form 941 (quarterly employment tax)",
    body: "Generally due the last day of the month after each quarter: April 30, July 31, October 31, and January 31. Deposit schedules (monthly or semiweekly) are separate and often earlier. Markers appear on the calendar above.",
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

export default function TaxCalendarPage() {
  const year = new Date().getFullYear();

  return (
    <>
      <section className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
            Resources · Tax calendar
          </p>
          <h1 className="mt-2 max-w-3xl text-4xl font-semibold sm:text-5xl">
            Federal tax calendar for {year}.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Browse key federal deadlines on a month grid — filing dates,
            estimated-tax installments, information returns, and optional Form
            941 markers. When a due date falls on a weekend or legal holiday,
            the IRS generally treats the next business day as timely. Always
            confirm on IRS.gov before you rely on a date.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <aside
          className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-slate-700"
          role="note"
        >
          <strong className="text-navy-900">
            Educational only — not tax advice.
          </strong>{" "}
          Deadlines depend on your entity type, fiscal year, extension status,
          and current IRS / FinCEN rules. Weekend and holiday shifts are not
          applied automatically for every date on this calendar. Confirm on{" "}
          <a
            href="https://www.irs.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-teal-700 underline-offset-2 hover:underline"
          >
            IRS.gov
          </a>
          . This page is general information from {site.firmName}, not a filing
          calendar for your account.
        </aside>

        <div className="mt-10">
          <TaxDeadlineCalendar />
        </div>

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
