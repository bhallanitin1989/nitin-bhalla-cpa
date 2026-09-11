import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Building,
  Home,
  Laptop,
  Phone,
} from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Who We Serve",
  description:
    "Individuals, freelancers, small businesses, and S-corps served by Nitin Bhalla CPA PC.",
};

const audiences = [
  {
    icon: Home,
    title: "Individuals",
    body: "W-2 employees, multi-state earners, and households who want a careful review of deductions, credits, and filing choices — explained without intimidation.",
    needs: [
      "Annual personal tax returns",
      "Estimated payment guidance",
      "Life-change years (marriage, home, new job)",
      "Organized document support",
    ],
  },
  {
    icon: Laptop,
    title: "Freelancers & independent contractors",
    body: "Creators, consultants, and 1099 earners who need help tracking income, self-employment tax, quarterly estimates, and clean Schedule C reporting.",
    needs: [
      "Self-employment tax clarity",
      "Quarterly estimate check-ins",
      "Expense categorization help",
      "Year-one and growth-year filings",
    ],
  },
  {
    icon: Briefcase,
    title: "Small businesses",
    body: "Owners who juggle customers, payroll, and compliance — and want a CPA who keeps tax and bookkeeping support practical and timely.",
    needs: [
      "Business return preparation",
      "Payroll & compliance support",
      "Bookkeeping cleanup for tax season",
      "Planning before year-end",
    ],
  },
  {
    icon: Building,
    title: "S-corporations & LLCs",
    body: "Entity owners who need accurate S-corp or LLC filings, coordination with owner returns, and conversations about reasonable compensation and distributions when relevant.",
    needs: [
      "Form 1120-S and LLC filings",
      "Owner return coordination",
      "Payroll alignment for S-corps",
      "Entity-level planning discussions",
    ],
  },
];

export default function WhoWeServePage() {
  return (
    <>
      <section className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
            Who we serve
          </p>
          <h1 className="mt-2 max-w-3xl text-4xl font-semibold sm:text-5xl">
            Built for people and businesses that value careful work.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            {site.firmName} works with individuals, freelancers, small
            businesses, and S-corporation owners who want a steady, professional
            partner for tax and related accounting needs.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {audiences.map((item) => (
            <article
              key={item.title}
              className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-teal-500">
                <item.icon className="h-6 w-6" aria-hidden strokeWidth={1.75} />
              </div>
              <h2 className="mt-5 text-2xl font-semibold">{item.title}</h2>
              <p className="mt-3 flex-1 leading-relaxed text-slate-600">
                {item.body}
              </p>
              <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5">
                {item.needs.map((need) => (
                  <li
                    key={need}
                    className="flex items-start gap-2 text-sm text-slate-700"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600"
                      aria-hidden
                    />
                    {need}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-teal-500/20 bg-teal-50 p-8 text-center">
          <h2 className="text-2xl font-semibold text-navy-900">
            See if we&apos;re a fit
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-600">
            Tell us briefly what you need. If we can help, we&apos;ll outline
            next steps. If another specialist is a better match, we&apos;ll say
            so.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-600"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {site.phone}
            </a>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-navy-900 shadow-sm hover:text-teal-600"
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
