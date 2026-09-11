import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calculator,
  ClipboardList,
  FileSpreadsheet,
  Phone,
  Scale,
  Shield,
} from "lucide-react";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Tax preparation, planning, payroll, IRS representation, tax relief, and bookkeeping support from NB Tax and Advisory, CPA.",
};

const icons = {
  "tax-preparation": FileSpreadsheet,
  "s-corp-llc": Calculator,
  "payroll-compliance": ClipboardList,
  "irs-representation": Scale,
  "tax-planning": BookOpen,
  bookkeeping: Calculator,
} as const;

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
            Services
          </p>
          <h1 className="mt-2 max-w-3xl text-4xl font-semibold sm:text-5xl">
            Tax, payroll, planning, and representation — handled with care.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            {site.firmName} focuses on practical, accurate work for individuals
            and businesses. Every engagement starts with listening.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = icons[service.slug as keyof typeof icons] ?? Calculator;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}/`}
                className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:border-teal-500/30 hover:shadow-md sm:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                  <Icon className="h-6 w-6" aria-hidden strokeWidth={1.75} />
                </div>
                <h2 className="mt-4 text-xl font-semibold group-hover:text-teal-600">
                  {service.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {service.summary}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-600">
                  Learn more
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </Link>
            );
          })}

          <Link
            href="/tax-relief/"
            className="group flex flex-col rounded-2xl border border-slate-100 bg-navy-900 p-6 text-white shadow-sm transition hover:bg-navy-800 sm:col-span-2 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:gap-8"
          >
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-teal-500">
                <Shield className="h-6 w-6" aria-hidden strokeWidth={1.75} />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Tax relief &amp; resolution support
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-100/80">
                  Unfiled returns, notices, installment agreements, penalty
                  relief, levy &amp; lien situations, Offer in Compromise
                  evaluation, and currently-not-collectible exploration — with
                  CPA-led IRS representation when appropriate.
                </p>
              </div>
            </div>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-500 lg:mt-0 lg:shrink-0">
              Explore tax relief
              <ArrowRight className="h-4 w-4" aria-hidden />
            </span>
          </Link>
        </div>

        <div className="mt-12 rounded-2xl bg-navy-900 p-8 text-white sm:flex sm:items-center sm:justify-between sm:gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Not sure which service fits?
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-100/80">
              Call and describe your situation. We&apos;ll point you to the
              right next step — without jargon or pressure.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 sm:mt-0 sm:shrink-0">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-500"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {site.phone}
            </a>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Contact
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
