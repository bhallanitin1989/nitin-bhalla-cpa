import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calculator,
  CalendarDays,
  ClipboardCheck,
  Phone,
} from "lucide-react";
import { getAllPosts, excerpt, formatPostDate } from "@/lib/blog";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Educational tax resources from NB Tax and Advisory, CPA — blog, federal tax calendar, illustrative calculators, and client document checklists.",
};

const cards = [
  {
    href: "/resources/blog/",
    icon: BookOpen,
    title: "Blog",
    body: "Original articles on estimated taxes, S-corps, IRS notices, planning, and representation — written for a New York CPA practice.",
  },
  {
    href: "/resources/tax-calendar/",
    icon: CalendarDays,
    title: "Federal tax calendar",
    body: "Month-grid calendar of filing, estimated-tax, information-return, and payroll dates. Educational only — weekend and holiday rules can shift a due date.",
  },
  {
    href: "/resources/calculators/",
    icon: Calculator,
    title: "Useful tax calculators",
    body: "Lightweight, on-page estimators for quarterly tax, effective rate, and self-employment tax — clearly labeled illustrative only, not tax advice.",
  },
  {
    href: "/resources/checklists/",
    icon: ClipboardCheck,
    title: "Client document checklists",
    body: "Templates for an individual return, a new business, and tax-relief intake so you can gather records before a conversation.",
  },
];

export default function ResourcesPage() {
  const latest = getAllPosts().slice(0, 3);

  return (
    <>
      <section className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
            Resources
          </p>
          <h1 className="mt-2 max-w-3xl text-4xl font-semibold sm:text-5xl">
            Practical reading, calendars, and tools — for education, not advice.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Use these pages to get oriented before you call {site.firmName}.
            Nothing here replaces a conversation about your facts.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:border-teal-500/30 hover:shadow-md sm:p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                <card.icon className="h-6 w-6" aria-hidden strokeWidth={1.75} />
              </div>
              <h2 className="mt-4 text-xl font-semibold group-hover:text-teal-600">
                {card.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {card.body}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-600">
                Open
                <ArrowRight className="h-4 w-4" aria-hidden />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
                From the blog
              </p>
              <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
                Recent articles
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
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {latest.map((post) => (
              <Link
                key={post.slug}
                href={`/resources/blog/${post.slug}/`}
                className="group rounded-2xl border border-slate-100 bg-slate-50 p-6 transition hover:border-teal-500/30 hover:bg-white hover:shadow-sm"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  {formatPostDate(post.date)}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-navy-900 group-hover:text-teal-700">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {excerpt(post.content)}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <aside
          className="mt-12 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-slate-700"
          role="note"
        >
          <strong className="text-navy-900">Disclaimer:</strong> {site.disclaimer}
        </aside>

        <div className="mt-10 flex flex-wrap gap-3">
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
