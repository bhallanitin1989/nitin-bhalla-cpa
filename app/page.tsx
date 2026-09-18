import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Building2,
  Calculator,
  Calendar,
  ClipboardList,
  ExternalLink,
  FileCheck,
  FileText,
  FileWarning,
  Globe2,
  LifeBuoy,
  MonitorSmartphone,
  Phone,
  ShieldCheck,
  Star,
  Upload,
  UserRound,
} from "lucide-react";
import ReviewCard from "@/components/ReviewCard";
import { formatPostDate, getAllPosts } from "@/lib/blog";
import {
  homePreviewReviews,
  overallRating,
  reviewCount,
  thumbtackUrl,
} from "@/lib/reviews";
import { site } from "@/lib/site";

const quickPaths = [
  {
    title: "IRS & state notices",
    body: "Collections, tax-audit notices, balances & tax relief",
    href: "/tax-relief/",
  },
  {
    title: "Foreign & international tax",
    body: "FBAR, 5471/8938, foreign income, cross-border",
    href: "/services/international-tax/",
  },
  {
    title: "Returns, accounting & audits",
    body: "Tax returns, bookkeeping, financial statement audits",
    href: "/services/",
  },
];

const alsoOffered = [
  { label: "Individual tax returns", href: "/services/tax-preparation/" },
  { label: "Business & entity returns", href: "/services/s-corp-llc/" },
  { label: "Accounting & bookkeeping", href: "/services/bookkeeping/" },
  {
    label: "Financial statement audits",
    href: "/services/financial-statement-audits/",
  },
  { label: "Tax planning", href: "/services/tax-planning/" },
  { label: "IRS representation", href: "/services/irs-representation/" },
  { label: "Payroll & compliance", href: "/services/payroll-compliance/" },
];

const howItWorks = [
  {
    step: "01",
    icon: Calendar,
    title: "Book a call",
    body: "Notices, foreign forms, annual returns, or accounting — tell us what is on your plate. We listen first, then outline a clear next step.",
  },
  {
    step: "02",
    icon: Upload,
    title: "Share documents securely",
    body: "Upload notices, prior returns, FBAR/account summaries, W-2s, or bookkeeping files through the client portal.",
  },
  {
    step: "03",
    icon: ClipboardList,
    title: "We resolve, file, or advise",
    body: "Specialty notice and foreign work, plus returns, representation, and ongoing support — with organized follow-through.",
  },
];

const whoWeHelp = [
  {
    icon: FileWarning,
    title: "Clients with IRS or state notices",
    body: "Collection letters, tax audit correspondence, balances due, levies, liens, and unfiled years — CPA-led resolution instead of guesswork.",
    href: "/tax-relief/",
    linkLabel: "Tax relief & notice help",
  },
  {
    icon: Globe2,
    title: "Clients with foreign ties",
    body: "New York–area individuals and owners who need FBAR, Forms 5471/8938, foreign income reporting, or inbound/outbound cross-border filings.",
    href: "/services/international-tax/",
    linkLabel: "International tax services",
  },
  {
    icon: Building2,
    title: "Individuals & small businesses",
    body: "Annual individual and business returns, accounting and bookkeeping support, entity filings, and year-round planning from the same CPA practice.",
    href: "/services/",
    linkLabel: "Browse all services",
  },
];

const specialtyServices = [
  {
    icon: LifeBuoy,
    title: "Tax relief & notice resolution",
    body: "IRS and state notices, unfiled returns, installment plans, penalty relief, levy/lien situations — with CPA representation when appropriate.",
    href: "/tax-relief/",
  },
  {
    icon: Globe2,
    title: "International & foreign tax",
    body: "FBAR, Forms 5471 / 8938 / 5472 / 8865, foreign income, FATCA, and cross-border reporting for local clients.",
    href: "/services/international-tax/",
  },
];

const coreServices = [
  {
    icon: FileText,
    title: "Individual & business tax prep",
    body: "Personal and business income tax returns prepared carefully, with clear questions and organized follow-up.",
    href: "/services/tax-preparation/",
  },
  {
    icon: BookOpen,
    title: "Accounting & bookkeeping",
    body: "Organized books, reconciliations, and reports so filings and decisions start from cleaner numbers.",
    href: "/services/bookkeeping/",
  },
  {
    icon: FileCheck,
    title: "Financial statement & attestation audits",
    body: "Independent CPA assurance on financial statements — not the same as IRS or state tax-audit notices.",
    href: "/services/financial-statement-audits/",
  },
  {
    icon: Building2,
    title: "S-corp & LLC returns",
    body: "Entity filings coordinated with owner returns so important details stay aligned.",
    href: "/services/s-corp-llc/",
  },
  {
    icon: ShieldCheck,
    title: "IRS representation",
    body: "A professional voice with the IRS when tax notices or tax-audit correspondence escalate and you need authorized advocacy.",
    href: "/services/irs-representation/",
  },
  {
    icon: Calculator,
    title: "Tax planning",
    body: "Year-round conversations so income, elections, and timing decisions are made with eyes open.",
    href: "/services/tax-planning/",
  },
  {
    icon: ClipboardList,
    title: "Payroll & compliance",
    body: "Payroll filing rhythms, deposits, and year-end forms so day-to-day compliance stays on track.",
    href: "/services/payroll-compliance/",
  },
];

export default function HomePage() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(ellipse 70% 55% at 12% 18%, rgba(20,150,139,0.38), transparent 55%), radial-gradient(ellipse 50% 40% at 92% 8%, rgba(193,127,58,0.22), transparent 50%), linear-gradient(180deg, transparent 60%, rgba(7,13,24,0.45))",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          aria-hidden
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-8 lg:py-28">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-copper-400">
              New York CPA · Tax notices · Foreign filings
            </p>
            <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-[1.12] text-white sm:text-5xl lg:text-[3.25rem]">
              Tax notices and foreign filings — handled with CPA precision.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-[1.7] text-slate-100/90">
              Got an IRS or state letter? Foreign accounts, Form 5471, FBAR, or
              cross-border income? {site.brandName} specializes in notice
              resolution and international reporting for New York–area clients —
              virtually, without an office visit.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
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
              ) : (
                <Link href="/contact/" className="btn-primary">
                  Contact the firm
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              )}
              <a href={site.phoneHref} className="btn-secondary-on-dark">
                <Phone className="h-4 w-4" aria-hidden />
                Call {site.phone}
              </a>
              <Link href="/services/" className="btn-secondary-on-dark">
                All services
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/95">
                <Star
                  className="h-3.5 w-3.5 fill-copper-400 text-copper-400"
                  aria-hidden
                />
                Thumbtack {overallRating}★
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/95">
                <FileWarning className="h-3.5 w-3.5 text-teal-400" aria-hidden />
                Notice specialty
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/95">
                <Globe2 className="h-3.5 w-3.5 text-copper-400" aria-hidden />
                Foreign-tax specialty
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/95">
                <ShieldCheck className="h-3.5 w-3.5 text-teal-400" aria-hidden />
                NY CPA
              </span>
            </div>
          </div>

          <aside className="rounded-3xl border border-white/12 bg-white/[0.06] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-copper-400">
              Start here
            </p>
            <ul className="mt-4 space-y-3">
              {quickPaths.map((path) => (
                <li key={path.title}>
                  <Link
                    href={path.href}
                    className="group flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-navy-800/70 px-4 py-3.5 transition hover:border-teal-400/45 hover:bg-navy-800"
                  >
                    <div>
                      <p className="font-semibold text-white group-hover:text-teal-400">
                        {path.title}
                      </p>
                      <p className="mt-0.5 text-sm text-slate-100/70">
                        {path.body}
                      </p>
                    </div>
                    <ArrowRight
                      className="h-4 w-4 shrink-0 text-teal-400 transition group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* Specialties */}
      <section className="border-b border-cream-100 bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="accent-eyebrow">Our specialties</p>
            <div className="gold-divider mx-auto mt-3" />
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Where we specialize — and why clients find us.
            </h2>
            <p className="mt-4 text-lg leading-[1.7] text-slate-600">
              Hard problems first: IRS and state tax notices, and foreign /
              international filings for local clients who need them done right.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="card-lift rounded-3xl border border-cream-200 bg-white p-8 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-teal-600">
                Specialty
              </p>
              <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                <FileWarning className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-navy-900">
                IRS &amp; state tax notices
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                Collections pressure, tax audit letters, balances due, unfiled
                years, levies, and liens. We review what the agency is asking,
                map a practical path, and represent you with the IRS when
                authorization is in place.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-slate-600">
                {[
                  "Notice & correspondence review",
                  "Unfiled-return catch-up",
                  "Installment agreements & penalty relief",
                  "CPA-led IRS representation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/tax-relief/"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 hover:text-navy-900"
              >
                Explore tax relief
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </article>
            <article className="card-lift rounded-3xl border border-cream-200 bg-white p-8 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-copper-600">
                Specialty
              </p>
              <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-copper-50 text-copper-600">
                <Globe2 className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-navy-900">
                Foreign &amp; international tax
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                Built for New York–metro and nearby clients with foreign
                accounts, entities, or income — FBAR, Forms 5471 and 8938,
                inbound/outbound reporting, and catch-up when prior years were
                missed.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-slate-600">
                {[
                  "FBAR (FinCEN 114) & Form 8938 / FATCA",
                  "Forms 5471, 5472, 8865 & related filings",
                  "Foreign income & expat basics",
                  "Penalty-path coordination when behind",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-copper-500"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/services/international-tax/"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-copper-600 hover:text-navy-900"
              >
                International tax services
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </article>
          </div>

          {/* Also offered strip */}
          <div className="mt-12 rounded-3xl border border-cream-200 bg-white px-6 py-8 shadow-sm sm:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="accent-eyebrow">More ways we help</p>
                <h3 className="mt-2 text-xl font-semibold text-navy-900 sm:text-2xl">
                  Returns, accounting, financial statement audits, and more.
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
                  Individual and business tax returns, accounting and bookkeeping,
                  financial statement and attestation audits, planning, payroll,
                  and IRS representation for tax notices.
                </p>
              </div>
              <Link
                href="/services/"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 hover:text-navy-900"
              >
                View all services
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {alsoOffered.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center rounded-full border border-cream-200 bg-cream px-3.5 py-2 text-sm font-semibold text-navy-900 transition hover:border-teal-500/40 hover:bg-teal-50 hover:text-teal-700"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href={site.phoneHref} className="btn-primary">
              <Phone className="h-4 w-4" aria-hidden />
              Call {site.phone}
            </a>
            {site.calendlyUrl ? (
              <a
                href={site.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Calendar className="h-4 w-4" aria-hidden />
                Free consultation
              </a>
            ) : null}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-b border-cream-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="accent-eyebrow">How it works</p>
            <div className="gold-divider mt-3" />
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              A simple path from first call to clear next steps.
            </h2>
            <p className="mt-3 text-slate-600">
              Virtual New York CPA standards: professionalism, responsiveness,
              and quality without the waiting-room theater.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {howItWorks.map((item) => (
              <article
                key={item.step}
                className="relative rounded-3xl border border-cream-100 bg-cream p-7 shadow-sm"
              >
                <span className="text-xs font-bold tracking-wider text-copper-500">
                  STEP {item.step}
                </span>
                <item.icon
                  className="mt-4 h-7 w-7 text-teal-600"
                  aria-hidden
                  strokeWidth={1.75}
                />
                <h3 className="mt-3 text-lg font-semibold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Who we help */}
      <section className="bg-cream-100/70">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="accent-eyebrow">Who we help</p>
            <div className="gold-divider mt-3" />
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Notices, foreign filings, and clients who need careful tax work.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {whoWeHelp.map((item) => (
              <article
                key={item.title}
                className="card-lift flex h-full flex-col rounded-3xl border border-cream-100 bg-white p-7 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                  <item.icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {item.body}
                </p>
                <Link
                  href={item.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 hover:text-navy-900"
                >
                  {item.linkLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="accent-eyebrow">What we do</p>
          <div className="gold-divider mt-3" />
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Specialties up front. Other CPA services when you need them.
          </h2>
          <p className="mt-3 text-slate-600">
            Start with notice resolution or foreign filings — or jump to returns,
            accounting, or a financial statement audit engagement.
          </p>
        </div>

        <p className="mt-10 text-xs font-bold uppercase tracking-[0.12em] text-teal-600">
          Specialties
        </p>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          {specialtyServices.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group card-lift rounded-3xl border border-teal-500/25 bg-navy-900 p-7 text-white shadow-sm hover:border-teal-400/40"
            >
              <item.icon
                className="h-8 w-8 text-teal-400"
                aria-hidden
                strokeWidth={1.75}
              />
              <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-teal-400">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-100/80">
                {item.body}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-400">
                Learn more
                <ArrowRight
                  className="h-4 w-4 transition group-hover:translate-x-0.5"
                  aria-hidden
                />
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-12 text-xs font-bold uppercase tracking-[0.12em] text-copper-600">
          Also offered
        </p>
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coreServices.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group card-lift rounded-3xl border border-cream-100 bg-white p-7 shadow-sm hover:border-teal-500/30"
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
                <ArrowRight
                  className="h-4 w-4 transition group-hover:translate-x-0.5"
                  aria-hidden
                />
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

      {/* Meet the CPA */}
      <section className="bg-cream-100/70">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div className="rounded-3xl border border-white/10 bg-navy-900 p-8 text-white sm:p-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-600/20 text-teal-400">
                <UserRound className="h-8 w-8" aria-hidden />
              </div>
              <h2 className="mt-6 text-2xl font-semibold text-white sm:text-3xl">
                {site.principal}
              </h2>
              <p className="mt-2 text-sm font-medium text-copper-400">
                Principal · New York CPA
              </p>
              <div className="gold-divider mt-5" />
              <p className="mt-4 text-sm leading-relaxed text-slate-100/80">
                {site.legalName} d/b/a {site.brandName}
              </p>
              <p className="mt-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-400">
                <MonitorSmartphone className="h-3.5 w-3.5" aria-hidden />
                Virtual firm · NY licensed
              </p>
            </div>
            <div>
              <p className="accent-eyebrow">Meet the CPA</p>
              <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
                Direct attention from a New York CPA.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                You work directly with {site.principal}. Engagements are handled
                personally — from IRS notices and FBAR/5471 work to individual
                returns, accounting support, financial statement audits, and
                practical next steps.
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
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="accent-eyebrow">Client feedback</p>
            <div className="gold-divider mt-3" />
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              What clients say on Thumbtack
            </h2>
          </div>
          <div className="rounded-3xl border border-copper-400/25 bg-copper-50 px-6 py-5 text-center shadow-sm">
            <p className="font-[family-name:var(--font-display)] text-4xl font-semibold text-navy-900">
              {overallRating}
              <span className="text-2xl text-copper-500">★</span>
            </p>
            <p className="mt-1 text-sm font-semibold text-navy-900">
              {reviewCount} Thumbtack reviews
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {homePreviewReviews.map((review) => (
            <ReviewCard key={review.id} review={review} compact />
          ))}
        </div>
        <div className="mt-8">
          <a
            href={thumbtackUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            See all reviews on Thumbtack
            <ExternalLink className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </section>

      {/* From the blog */}
      <section className="bg-cream-100/70">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="accent-eyebrow">From the blog</p>
              <div className="gold-divider mt-3" />
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Practical notes on notices, foreign forms, and filing season.
              </h2>
            </div>
            <Link
              href="/resources/blog/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-navy-900"
            >
              All posts
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/resources/blog/${post.slug}/`}
                className="group card-lift flex h-full flex-col rounded-3xl border border-cream-100 bg-white p-7 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-copper-500">
                  {formatPostDate(post.date)}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-navy-900 group-hover:text-teal-700">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {post.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-600">
                  Read article
                  <ArrowRight
                    className="h-4 w-4 transition group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-6 py-14 text-center text-white sm:px-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            aria-hidden
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 0%, rgba(20,150,139,0.35), transparent 45%), radial-gradient(circle at 90% 100%, rgba(193,127,58,0.2), transparent 40%)",
            }}
          />
          <div className="relative">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-copper-400">
              Next step
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Notice in hand? Foreign accounts to report?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-100/80">
              Book a consultation or call {site.brandName}. Bring the letter,
              the account summary, or a sketch of your foreign ownership — we
              will outline options with New York CPA care.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
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
              ) : (
                <Link href="/contact/" className="btn-primary">
                  Contact the firm
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              )}
              <a href={site.phoneHref} className="btn-secondary-on-dark">
                <Phone className="h-4 w-4" aria-hidden />
                Call {site.phone}
              </a>
              <Link href="/services/" className="btn-secondary-on-dark">
                All services
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
