import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import TaxCalculators from "@/components/TaxCalculators";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tax calculators",
  description:
    "Illustrative, client-side tax calculators from NB Tax and Advisory, CPA — estimated tax sketch, effective rate, and self-employment tax rough guide.",
};

export default function CalculatorsPage() {
  return (
    <>
      <section className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
            Resources · Calculators
          </p>
          <h1 className="mt-2 max-w-3xl text-4xl font-semibold sm:text-5xl">
            Useful tax calculators — kept simple on purpose.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Three lightweight tools run in your browser. They are teaching aids
            for conversations with {site.firmName}, not filing software and not
            tax advice.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <aside
          className="mb-10 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-slate-700"
          role="note"
        >
          <strong className="text-navy-900">
            Illustrative only / not tax advice.
          </strong>{" "}
          Results ignore most credits, state tax, self-employment tax (except in
          the SE tool), Additional Medicare Tax, and safe-harbor estimated-tax
          rules. {site.disclaimer}
        </aside>

        <TaxCalculators />

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
            Talk through your numbers
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
