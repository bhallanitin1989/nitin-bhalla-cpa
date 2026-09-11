import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Building2,
  Calculator,
  Calendar,
  ClipboardList,
  ExternalLink,
  FileText,
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
    title: "Tax prep",
    body: "Individual & business returns",
    href: "/services/tax-preparation/",
  },
  {
    title: "Tax relief",
    body: "Notices, balances & unfiled years",
    href: "/tax-relief/",
  },
  {
    title: "Bookkeeping",
    body: "Clean books for clearer filings",
    href: "/services/bookkeeping/",
  },
];

const howItWorks = [
  {
    step: "01",
    icon: Calendar,
    title: "Book a call",
    body: "Schedule a consultation online or call the firm. We listen first, then outline a clear next step.",
  },
  {
    step: "02",
    icon: Upload,
    title: "Share documents securely",
    body: "Upload through the client portal or share what we need — W-2s, notices, prior returns, and bank summaries.",
  },
  {
    step: "03",
    icon: ClipboardList,
    title: "We prepare, plan, or represent",
    body: "Returns, planning, or IRS Form 2848 representation — handled virtually with organized follow-through.",
  },
];

const whoWeHelp = [
  {
    icon: UserRound,
    title: "Individuals & freelancers",
    body: "W-2 and 1099 filers who want accurate returns, estimated-tax clarity, and a CPA who explains the numbers.",
    href: "/services/tax-preparation/",
    linkLabel: "Tax preparation",
  },
  {
    icon: Building2,
    title: "Small businesses & S-corps",
    body: "Entity returns, owner coordination, bookkeeping support, and year-round planning for growing practices.",
    href: "/services/s-corp-llc/",
    linkLabel: "S-corp & LLC returns",
  },
  {
    icon: LifeBuoy,
    title: "IRS notices & tax debt",
    body: "Unfiled returns, balances due, and representation when you need a professional voice with the IRS.",
    href: "/tax-relief/",
    linkLabel: "Tax relief options",
  },
];

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
    icon: Calculator,
    title: "Tax planning",
    body: "Year-round conversations so income, elections, and timing decisions are made with eyes open.",
    href: "/services/tax-planning/",
  },
  {
    icon: BookOpen,
    title: "Bookkeeping & payroll",
    body: "Organized books and payroll compliance support so filings start from cleaner numbers.",
    href: "/services/bookkeeping/",
  },
  {
    icon: ShieldCheck,
    title: "IRS representation",
    body: "Form 2848 power of attorney support when you need a professional voice with the IRS.",
    href: "/services/irs-representation/",
  },
  {
    icon: LifeBuoy,
    title: "Tax relief",
    body: "Unfiled returns, notices, balances due, and resolution paths — with CPA-led guidance.",
    href: "/tax-relief/",
  },
];

export default function HomePage() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(circle at 18% 20%, rgba(20,184,166,0.32), transparent 42%), radial-gradient(circle at 85% 8%, rgba(184,148,74,0.18), transparent 36%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-500">
              Virtual CPA firm · New York licensed
            </p>
            <h1 className="mt-3 max-w-2xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[3.25rem]">
              Clear tax &amp; IRS support from a New York CPA — virtually.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-100/85">
              Individuals, freelancers, and small businesses get careful tax
              preparation, planning, and tax relief help — without an office
              visit.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {site.calendlyUrl ? (
                <a href={site.calendlyUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
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
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/95">
                <Star className="h-3.5 w-3.5 fill-gold-500 text-gold-500" aria-hidden />
                Thumbtack {overallRating}★
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/95">
                <MonitorSmartphone className="h-3.5 w-3.5 text-teal-500" aria-hidden />
                Virtual
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/95">
                <ShieldCheck className="h-3.5 w-3.5 text-teal-500" aria-hidden />
                NY CPA
              </span>
            </div>
          </div>

          <aside className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-wider text-gold-400">
              Quick paths
            </p>
            <ul className="mt-4 space-y-3">
              {quickPaths.map((path) => (
                <li key={path.title}>
                  <Link
                    href={path.href}
                    className="group flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-navy-800/60 px-4 py-3.5 transition hover:border-teal-500/40 hover:bg-navy-800"
                  >
                    <div>
                      <p className="font-semibold text-white group-hover:text-teal-500">
                        {path.title}
                      </p>
                      <p className="mt-0.5 text-sm text-slate-100/70">{path.body}</p>
                    </div>
                    <ArrowRight
                      className="h-4 w-4 shrink-0 text-teal-500 transition group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* How it works */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
              How it works
            </p>
            <div className="gold-divider mt-3" />
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              A simple virtual path from first call to finished work.
            </h2>
            <p className="mt-3 text-slate-600">
              Built for remote clients nationwide who want New York CPA
              standards without the commute.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {howItWorks.map((item) => (
              <article
                key={item.step}
                className="relative rounded-2xl border border-slate-100 bg-slate-50 p-6"
              >
                <span className="text-xs font-bold tracking-wider text-gold-500">
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
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
              Who we help
            </p>
            <div className="gold-divider mt-3" />
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Practical CPA support for the situations we see most.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {whoWeHelp.map((item) => (
              <article
                key={item.title}
                className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
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
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
            What we do
          </p>
          <div className="gold-divider mt-3" />
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Filings, planning, and IRS matters — in one virtual practice.
          </h2>
          <p className="mt-3 text-slate-600">
            Six focused service paths. Each links to a clear overview so you
            know what to expect before you book.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whatWeDo.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-teal-500/25 hover:bg-white hover:shadow-lg"
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
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
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
              <div className="gold-divider mt-5" />
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
                You work directly with {site.principal}. Engagements are
                handled personally — virtual workflows, clear checklists, and
                practical next steps from annual returns to IRS notices.
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
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
              Client feedback
            </p>
            <div className="gold-divider mt-3" />
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              What clients say on Thumbtack
            </h2>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-gold-50 px-6 py-4 text-center shadow-sm">
            <p className="font-[family-name:var(--font-display)] text-4xl font-semibold text-navy-900">
              {overallRating}
              <span className="text-2xl text-gold-500">★</span>
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
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
                From the blog
              </p>
              <div className="gold-divider mt-3" />
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Practical tax notes for busy clients.
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
                className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-gold-500">
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
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-navy-900 px-6 py-12 text-center text-white sm:px-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold-400">
            Next step
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Ready for clearer tax support?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-100/80">
            Book a consultation or call {site.brandName}. We&apos;ll listen,
            outline options, and handle the work virtually — with the care of a
            New York CPA practice.
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
          </div>
        </div>
      </section>
    </>
  );
}
