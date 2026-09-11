import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Building2,
  Calculator,
  Calendar,
  ClipboardCheck,
  ExternalLink,
  FileText,
  Laptop,
  LifeBuoy,
  MonitorSmartphone,
  Phone,
  ShieldCheck,
  Star,
  UserRound,
} from "lucide-react";
import ReviewCard from "@/components/ReviewCard";
import {
  homePreviewReviews,
  overallRating,
  reviewCount,
  thumbtackUrl,
} from "@/lib/reviews";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

const whatWeDo = [
  {
    icon: FileText,
    title: "Tax preparation",
    body: "Individual and business returns prepared carefully, with clear questions and organized follow-up.",
    href: "/services/tax-preparation/",
  },
  {
    icon: Building2,
    title: "S-corp & LLC returns",
    body: "Entity filings coordinated with owner returns so important details stay aligned.",
    href: "/services/s-corp-llc/",
  },
  {
    icon: ClipboardCheck,
    title: "Payroll & compliance",
    body: "Help staying current with payroll filings and related compliance obligations.",
    href: "/services/payroll-compliance/",
  },
  {
    icon: ShieldCheck,
    title: "IRS representation",
    body: "Form 2848 power of attorney support when you need a professional voice with the IRS.",
    href: "/services/irs-representation/",
  },
  {
    icon: Calculator,
    title: "Tax planning",
    body: "Year-round conversations so income, elections, and timing decisions are made with eyes open.",
    href: "/services/tax-planning/",
  },
  {
    icon: BookOpen,
    title: "Bookkeeping support",
    body: "Keep books organized enough for clean filings and clearer business decisions.",
    href: "/services/bookkeeping/",
  },
  {
    icon: LifeBuoy,
    title: "Tax relief overview",
    body: "Unfiled returns, notices, balances due, and resolution paths — with CPA-led guidance.",
    href: "/tax-relief/",
  },
];

const whyUs = [
  {
    icon: MonitorSmartphone,
    title: "Virtual & remote-friendly",
    body: "Work with a New York–licensed CPA from anywhere — secure document sharing and phone or video conversations.",
  },
  {
    icon: ClipboardCheck,
    title: "Responsive & organized",
    body: "Clear checklists, timely follow-up, and plain-language explanations so you always know the next step.",
  },
  {
    icon: ShieldCheck,
    title: "IRS & tax relief help",
    body: "Form 2848 representation and practical support when notices, balances, or unfiled years need attention.",
  },
  {
    icon: Laptop,
    title: "Nationwide reach",
    body: "A virtual practice built for clients across the U.S. who want New York CPA standards without a commute.",
  },
];

export default function HomePage() {
  const coreServiceCount = services.length;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(20,184,166,0.35), transparent 40%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.08), transparent 35%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-500">
            Virtual CPA firm · New York licensed
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            {site.brandName}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-100/85 sm:text-xl">
            Nationwide, remote-friendly New York CPA support for individuals and
            businesses — tax preparation, planning, bookkeeping, and IRS help
            without the office visit.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-500"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call {site.phone}
            </a>
            {site.calendlyUrl ? (
              <a
                href={site.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                <Calendar className="h-4 w-4" aria-hidden />
                Book a consultation
              </a>
            ) : (
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Contact the firm
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            )}
            {site.clientPortalUrl ? (
              <a
                href={site.clientPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Client portal
                <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            ) : null}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-50 text-teal-600">
              <Star className="h-5 w-5 fill-teal-500 text-teal-500" aria-hidden />
            </div>
            <div>
              <p className="text-sm font-semibold text-navy-900">
                Thumbtack {overallRating}★
              </p>
              <p className="text-sm text-slate-600">{reviewCount} reviews</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-50 text-teal-600">
              <MonitorSmartphone className="h-5 w-5" aria-hidden />
            </div>
            <div>
              <p className="text-sm font-semibold text-navy-900">
                Virtual CPA firm
              </p>
              <p className="text-sm text-slate-600">
                Remote-friendly · NY licensed
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-50 text-teal-600">
              <FileText className="h-5 w-5" aria-hidden />
            </div>
            <div>
              <p className="text-sm font-semibold text-navy-900">
                {coreServiceCount} core services
              </p>
              <p className="text-sm text-slate-600">Plus tax relief support</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
            What we do
          </p>
          <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
            Practical CPA support for filings, planning, and IRS matters.
          </h2>
          <p className="mt-3 text-slate-600">
            Explore core services and tax relief — each path links to a clear
            overview so you can see how we help before you call.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whatWeDo.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-2xl border border-slate-100 bg-slate-50 p-6 transition hover:border-teal-500/30 hover:bg-white hover:shadow-sm"
            >
              <item.icon
                className="h-8 w-8 text-teal-600"
                aria-hidden
                strokeWidth={1.75}
              />
              <h3 className="mt-4 text-lg font-semibold text-navy-900 group-hover:text-teal-700">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.body}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-600">
                Learn more
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/services/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-navy-900"
          >
            View all services
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>

      {/* Why NB */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
              Why {site.brandName}
            </p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
              Responsive. Organized. Built for remote work with the IRS when
              needed.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
              >
                <item.icon
                  className="h-7 w-7 text-navy-800"
                  aria-hidden
                  strokeWidth={1.75}
                />
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the CPA */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="rounded-3xl border border-slate-100 bg-navy-900 p-8 text-white sm:p-10">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-600/20 text-teal-500">
              <UserRound className="h-8 w-8" aria-hidden />
            </div>
            <h2 className="mt-6 text-2xl font-semibold text-white sm:text-3xl">
              {site.principal}
            </h2>
            <p className="mt-2 text-sm font-medium text-teal-500">
              Principal · New York CPA
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-100/80">
              {site.legalName} d/b/a {site.brandName}
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
              Meet the CPA
            </p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
              One licensed CPA. Direct attention to your work.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              You work directly with {site.principal} — a New York licensed
              Certified Public Accountant. There is no inflated team roster on
              this site: engagements are handled personally, with virtual
              workflows designed for clarity and follow-through.
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              From annual returns to IRS notices, the focus stays on accuracy,
              communication, and practical next steps you can act on.
            </p>
            <Link
              href="/about/"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-navy-900"
            >
              About the firm
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* What Clients Say */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
                What clients say
              </p>
              <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
                Featured Thumbtack reviews
              </h2>
              <p className="mt-3 flex flex-wrap items-center gap-2 text-slate-600">
                <span className="inline-flex items-center gap-1 font-semibold text-navy-900">
                  <Star
                    className="h-4 w-4 fill-teal-500 text-teal-500"
                    aria-hidden
                  />
                  {overallRating} / 5
                </span>
                <span aria-hidden>·</span>
                <span>{reviewCount} Thumbtack reviews</span>
              </p>
            </div>
            <a
              href={thumbtackUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-navy-900"
            >
              See all on Thumbtack
              <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homePreviewReviews.map((review) => (
              <ReviewCard key={review.id} review={review} compact />
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/reviews/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-navy-900"
            >
              More featured reviews
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-navy-900 px-6 py-12 text-center text-white sm:px-12">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Ready to talk through your next filing or question?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-100/80">
            Call {site.firmName}, book a consultation when scheduling is
            available, or use the client portal if you already have access.
            Engagements are handled virtually / remotely.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-500"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call {site.phone}
            </a>
            {site.calendlyUrl ? (
              <a
                href={site.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <Calendar className="h-4 w-4" aria-hidden />
                Book a consultation
              </a>
            ) : (
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact page
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            )}
            {site.clientPortalUrl ? (
              <a
                href={site.clientPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Client portal
                <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
