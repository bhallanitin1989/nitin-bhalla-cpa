import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Calendar, Phone } from "lucide-react";
import { thumbtackUrl } from "@/lib/reviews";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Nitin Bhalla, CPA — principal of NB Tax and Advisory, CPA (Nitin Bhalla CPA PC), a New York licensed CPA firm.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
            About the firm
          </p>
          <div className="gold-divider mt-3" />
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold sm:text-5xl">
            A New York CPA practice built on clarity and care.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            {site.brandName} is led by {site.principal}, a licensed Certified
            Public Accountant in New York — serving clients virtually nationwide.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5 text-base leading-relaxed text-slate-600">
            <p>
              Clients come when they want accurate filings, thoughtful planning,
              and someone who explains the &ldquo;why&rdquo; behind the numbers —
              whether that is an individual return, a first-year 1099 filing, or
              an S-corp that needs careful coordination.
            </p>
            <p>
              {site.principal} focuses on tax preparation, entity returns,
              payroll and compliance, IRS representation, tax
              planning, and bookkeeping support. Engagements are scoped to what
              you need — not a one-size package.
            </p>
            <p>
              Trust is earned in the work: meeting deadlines, returning calls,
              and giving you information you can use. Featured client comments
              on this site come from{" "}
              <a
                href={thumbtackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-teal-700 hover:text-navy-900"
              >
                Thumbtack
              </a>
              .
            </p>
          </div>

          <aside className="h-fit rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <BadgeCheck
                className="mt-0.5 h-6 w-6 text-teal-600"
                aria-hidden
              />
              <div>
                <h2 className="text-lg font-semibold text-navy-900">
                  Credentials
                </h2>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li>
                    <strong className="text-navy-900">Principal:</strong>{" "}
                    {site.principal}
                  </li>
                  <li>
                    <strong className="text-navy-900">License:</strong> New York
                    Certified Public Accountant
                  </li>
                  <li>
                    <strong className="text-navy-900">Brand:</strong>{" "}
                    {site.brandName}
                  </li>
                  <li>
                    <strong className="text-navy-900">Legal entity:</strong>{" "}
                    {site.legalName}
                  </li>
                  <li>
                    <strong className="text-navy-900">Practice:</strong> Virtual
                    CPA firm · New York licensed
                  </li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-xs leading-relaxed text-slate-500">
              Only verified New York CPA licensure is listed here. No other
              credentials, memberships, or awards are claimed on this site.
            </p>
          </aside>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
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
          ) : null}
          <a href={site.phoneHref} className="btn-secondary">
            <Phone className="h-4 w-4" aria-hidden />
            Call {site.phone}
          </a>
          <Link href="/contact/" className="btn-secondary">
            Contact page
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
