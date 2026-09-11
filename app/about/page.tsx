import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Phone } from "lucide-react";
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
          <h1 className="mt-2 max-w-3xl text-4xl font-semibold sm:text-5xl">
            A New York CPA practice built on clarity and care.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            {site.firmName} is led by {site.principal}, a licensed Certified
            Public Accountant in New York.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 text-base leading-relaxed text-slate-600">
            <p>
              Clients come to us when they want accurate filings, thoughtful
              planning, and someone who will explain the &ldquo;why&rdquo;
              behind the numbers. Whether you are an individual preparing for
              tax season, a freelancer sorting first-year filings, or a small
              business navigating S-corp or LLC requirements, the goal is the
              same: careful work and straightforward communication.
            </p>
            <p>
              {site.principal} focuses on individual and business tax
              preparation, S-corp and LLC returns, payroll and compliance
              support, IRS representation through Form 2848, tax planning, and
              bookkeeping support. Engagements are scoped to what you actually
              need — not a one-size package.
            </p>
            <p>
              This practice does not claim awards, client lists, or testimonials
              on this website. Trust is earned in the work itself: meeting
              deadlines, returning calls, and giving you information you can
              use.
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
                    <strong className="text-navy-900">Office:</strong>{" "}
                    {site.address.full}
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
            Contact the firm
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
