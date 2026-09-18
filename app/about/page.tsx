import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Phone } from "lucide-react";
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
            A New York CPA focused on clarity — with clear specialties.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            {site.brandName} is led by {site.principal}, a licensed Certified
            Public Accountant in New York. The firm specializes in tax notices
            and foreign filings, and also helps with returns, accounting,
            financial statement audits, and year-round tax support.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-5 text-base leading-relaxed text-slate-600">
          <p>
            Many clients find the firm for specialty work: IRS or state tax
            notices, tax audit correspondence, and foreign/international
            reporting such as FBAR and Forms 5471/8938. Others come for accurate
            annual filings, thoughtful planning, and someone who explains the
            &ldquo;why&rdquo; behind the numbers.
          </p>
          <p>
            Beyond those specialties, {site.principal} provides individual and
            business tax preparation, S-corp and LLC returns, accounting and
            bookkeeping support, financial statement and attestation audits,
            payroll and compliance, IRS representation for tax notices, and tax
            planning. Engagements are scoped to what you need — not a one-size
            package.
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
