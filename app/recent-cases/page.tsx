import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  FileText,
  FolderOpen,
  Phone,
  Shield,
} from "lucide-react";
import { cases, groupCasesByYear, type CaseDoc } from "@/lib/cases";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Recent Cases",
  description:
    "Redacted IRS resolution letters from NB Tax and Advisory, CPA — published with client permission when available. Past results do not guarantee future outcomes.",
};

function OutcomeBadge({ outcome }: { outcome: CaseDoc["outcome"] }) {
  return (
    <span className="inline-flex items-center rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-semibold text-teal-700 ring-1 ring-inset ring-teal-600/20">
      {outcome}
    </span>
  );
}

function CaseCard({ doc }: { doc: CaseDoc }) {
  return (
    <article className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center gap-2">
        <OutcomeBadge outcome={doc.outcome} />
        {doc.dateLabel ? (
          <span className="text-xs font-medium text-slate-500">
            {doc.dateLabel}
          </span>
        ) : null}
      </div>
      <h3 className="mt-3 text-lg font-semibold text-navy-900">{doc.title}</h3>
      {doc.summary ? (
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
          {doc.summary}
        </p>
      ) : (
        <div className="flex-1" />
      )}
      <a
        href={doc.file}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition hover:text-teal-600"
      >
        <FileText className="h-4 w-4" aria-hidden />
        View document
        <span className="sr-only"> (PDF opens in a new tab)</span>
      </a>
    </article>
  );
}

export default function RecentCasesPage() {
  const byYear = groupCasesByYear(cases);
  const hasCases = cases.length > 0;

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
            Tax relief outcomes
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Recent Cases
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-100/80">
            When clients allow, we publish redacted IRS closure and resolution
            letters so you can see the kinds of outcomes that are possible —
            always with privacy first, and without promising the same result for
            your situation.
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
              href="/tax-relief/"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Tax relief overview
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4 text-base leading-relaxed text-slate-600">
          <p>
            Tax resolution is fact-specific. The documents on this page (when
            published) are redacted copies of IRS correspondence reflecting work
            performed for clients of {site.firmName}. They are shared for general
            education — not as a preview of what will happen in your case.
          </p>
          <p>
            Collection rules also matter in plain language: the IRS generally
            has a limited time to collect assessed tax (often described as about
            ten years from assessment, subject to exceptions and extensions).
            That timeframe can influence which options make sense — including
            payment plans or currently-not-collectible status — but it is not a
            shortcut and does not replace a careful review of your facts.
          </p>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          {hasCases ? (
            <div className="space-y-14">
              {byYear.map(({ year, items }) => (
                <div key={year}>
                  <h2 className="text-2xl font-semibold text-navy-900 sm:text-3xl">
                    {year}
                  </h2>
                  <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((doc) => (
                      <CaseCard key={doc.id} doc={doc} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-xl rounded-3xl border border-dashed border-slate-200 bg-white px-8 py-14 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                <FolderOpen className="h-7 w-7" aria-hidden strokeWidth={1.75} />
              </div>
              <h2 className="mt-5 text-2xl font-semibold text-navy-900">
                Documents coming soon
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                Case documents will appear here as they are published. Call to
                discuss your situation — we can walk through options that may
                apply under current IRS rules.
              </p>
              <a
                href={site.phoneHref}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-500"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Call {site.phone}
              </a>
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <aside
          className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-slate-700"
          role="note"
        >
          <div className="flex gap-3">
            <Shield
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-700"
              aria-hidden
            />
            <div>
              <strong className="text-navy-900">Privacy &amp; disclaimer:</strong>{" "}
              Published documents are redacted to remove identifying information
              (names, SSNs, EINs, addresses, account numbers, and similar
              details). Past results do not guarantee future results. This page
              is general information only and is not tax, legal, or accounting
              advice. Outcomes depend on your specific facts and applicable IRS
              rules. {site.firmName} does not guarantee any specific settlement,
              discharge, or collection outcome.
            </div>
          </div>
        </aside>

        <div className="mt-10 rounded-3xl bg-navy-900 px-6 py-12 text-white sm:flex sm:items-center sm:justify-between sm:gap-8 sm:px-12">
          <div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Want to explore tax relief options?
            </h2>
            <p className="mt-3 max-w-xl text-slate-100/80">
              Learn how CPA-led resolution support works, or call{" "}
              {site.phone} to talk through your notices and filings.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 sm:mt-0 sm:shrink-0">
            <Link
              href="/tax-relief/"
              className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-500"
            >
              Tax relief
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
