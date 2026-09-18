import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calculator,
  ClipboardList,
  FileCheck,
  FileSpreadsheet,
  Globe2,
  Phone,
  Scale,
  Shield,
} from "lucide-react";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "New York CPA specializing in IRS & state notice resolution and international tax — plus individual & business returns, accounting, financial statement audits, planning, and representation.",
};

const icons = {
  "tax-preparation": FileSpreadsheet,
  "s-corp-llc": Calculator,
  "international-tax": Globe2,
  "payroll-compliance": ClipboardList,
  "irs-representation": Scale,
  "tax-planning": BookOpen,
  bookkeeping: Calculator,
  "financial-statement-audits": FileCheck,
} as const;

export default function ServicesPage() {
  const specialtySlugs = new Set(["international-tax"]);
  const coreServices = services.filter((s) => !specialtySlugs.has(s.slug));
  const international = services.find((s) => s.slug === "international-tax");

  return (
    <>
      <section className="relative overflow-hidden border-b border-cream-100 bg-navy-900 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-45"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(circle at 18% 20%, rgba(20,150,139,0.35), transparent 42%), radial-gradient(circle at 88% 0%, rgba(193,127,58,0.18), transparent 36%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-copper-400">
            Services
          </p>
          <div className="gold-divider mt-3" />
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold text-white sm:text-5xl">
            Tax notices and foreign filings — plus the CPA work around them.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-100/85">
            {site.firmName} specializes in IRS/state notice resolution and
            foreign/international tax. Also offered: individual and business
            returns, accounting and bookkeeping, financial statement and
            attestation audits, planning, payroll, and CPA representation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-teal-600">
          Specialties
        </p>
        <div className="mt-4 mb-12 grid gap-4 sm:grid-cols-2">
          <Link
            href="/tax-relief/"
            className="group card-lift flex flex-col rounded-2xl border border-teal-500/20 bg-navy-900 p-6 text-white shadow-sm sm:p-7"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-teal-400">
              <Shield className="h-5 w-5" aria-hidden strokeWidth={1.75} />
            </div>
            <h2 className="mt-4 text-xl font-semibold text-white group-hover:text-teal-400">
              Tax relief &amp; notice resolution
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-100/80">
              IRS and state notices, collections, tax-audit correspondence,
              unfiled years, installment agreements, penalty relief, levy &amp;
              lien situations — CPA-led when representation is needed.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-400">
              Explore tax relief
              <ArrowRight className="h-4 w-4" aria-hidden />
            </span>
          </Link>
          {international ? (
            <Link
              href="/services/international-tax/"
              className="group card-lift flex flex-col rounded-2xl border border-copper-400/25 bg-white p-6 shadow-sm sm:p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-copper-50 text-copper-600">
                <Globe2 className="h-5 w-5" aria-hidden strokeWidth={1.75} />
              </div>
              <h2 className="mt-4 text-xl font-semibold text-navy-900 group-hover:text-copper-600">
                International &amp; foreign tax
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {international.summary}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-copper-600">
                International tax services
                <ArrowRight className="h-4 w-4" aria-hidden />
              </span>
            </Link>
          ) : null}
        </div>

        <p className="text-xs font-bold uppercase tracking-[0.12em] text-copper-600">
          Also offered
        </p>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          Tax returns, accounting, financial statement audits, planning, and
          more — when you need them.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {coreServices.map((service) => {
            const Icon = icons[service.slug as keyof typeof icons] ?? Calculator;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}/`}
                className="group card-lift flex flex-col rounded-2xl border border-cream-100 bg-white p-6 shadow-sm transition hover:border-teal-500/30 sm:p-8"
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
        </div>

        <div className="mt-12 rounded-2xl bg-navy-900 p-8 text-white sm:flex sm:items-center sm:justify-between sm:gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Not sure where to start?
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-100/80">
              Mention a notice, a foreign filing, or a return/accounting need —
              we&apos;ll point you to the right next step without jargon or pressure.
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
