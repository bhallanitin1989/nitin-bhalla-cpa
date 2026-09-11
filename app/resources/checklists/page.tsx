import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Client document checklists",
  description:
    "Educational document checklists for individual returns, new businesses, and tax-relief intake from NB Tax and Advisory, CPA.",
};

const checklists = [
  {
    id: "individual",
    title: "Individual return",
    intro:
      "A starting list for a personal (or joint) Form 1040 season. Skip anything that does not apply. Add a short note if something is still outstanding.",
    groups: [
      {
        heading: "Identity & history",
        items: [
          "Prior-year federal and state returns (complete copy)",
          "Legal names, dates of birth, and SSNs/ITINs for everyone on the return",
          "Current mailing address and county / school district if relevant",
          "Filing-status changes: marriage, divorce, dependents",
          "Direct-deposit or withdrawal bank details (optional)",
        ],
      },
      {
        heading: "Income",
        items: [
          "All W-2s",
          "1099-NEC, 1099-MISC, 1099-K, 1099-INT, 1099-DIV, 1099-B packages",
          "1099-R, SSA-1099, 1099-G, 1099-SA",
          "K-1s (these often arrive later — note if still pending)",
          "Digital-asset or crypto year-end reports if you had activity",
          "Alimony received (if the agreement's tax rules treat it as income)",
          "Anything paid in cash or apps with no form",
        ],
      },
      {
        heading: "Adjustments, credits, itemizing — only if they apply",
        items: [
          "Form 1098 mortgage interest / real-estate tax",
          "Property-tax bills, vehicle registration if your state itemizes them",
          "Charitable acknowledgments and non-cash donation lists",
          "Childcare provider name, address, TIN, and amounts",
          "1098-T / 1098-E and qualified education expenses",
          "HSA and IRA contribution receipts (including prior-year contributions made this calendar year)",
          "Estimated tax vouchers or bank records (federal and state)",
          "Form 1095 series if you received one",
        ],
      },
      {
        heading: "If you had a side activity",
        items: [
          "Year-end profit-and-loss or bookkeeping export",
          "Mileage log or home-office measurements",
          "1099s you issued, plus W-9s on file",
        ],
      },
    ],
  },
  {
    id: "new-business",
    title: "New business",
    intro:
      "For a first-year LLC, sole prop, or corporation. The goal is to understand what you formed, how you pay yourself, and where the books live.",
    groups: [
      {
        heading: "Formation & identity",
        items: [
          "Articles / certificate of formation or incorporation",
          "EIN letter (CP 575) if issued",
          "Operating agreement or bylaws (if you have them)",
          "S-election confirmation (Form 2553) if you elected",
          "State registration and any city license",
          "Beneficial-ownership (BOI) notes if you filed — keep copies; do not email sensitive IDs casually",
        ],
      },
      {
        heading: "Banking & books",
        items: [
          "Business bank and card statements for the year (or a clean export)",
          "Bookkeeping app login sharing or a year-end P&L and balance sheet",
          "Opening balances and owner contributions",
          "How you currently pay yourself (draws, payroll, or mixed)",
        ],
      },
      {
        heading: "People & payroll",
        items: [
          "List of owners / members and ownership percentages",
          "Employees vs. contractors — and W-9s collected",
          "Payroll reports and Forms 941/W-2 if payroll already ran",
          "Workers' compensation or unemployment account letters if any",
        ],
      },
      {
        heading: "Activity",
        items: [
          "Major asset purchases (date, amount, description)",
          "Loans, merchant advances, or related-party notes",
          "Sales-tax registration if you collect tax",
          "A one-paragraph description of what the business does",
        ],
      },
    ],
  },
  {
    id: "tax-relief",
    title: "Tax relief intake",
    intro:
      "For notices, balances, unfiled years, or collection activity. Complete pages of every letter matter more than a summary of what you remember.",
    groups: [
      {
        heading: "IRS / state correspondence",
        items: [
          "Every page of every notice (front and back), including envelopes if the date is unclear",
          "Levy, lien, or passport-certification letters if you received them",
          "Any prior installment agreement or offer correspondence",
          "State tax notices (they are a separate agency)",
        ],
      },
      {
        heading: "Returns & transcripts",
        items: [
          "Copies of filed returns for the years in question",
          "A list of years you believe are unfiled (federal and state)",
          "Wage & income or account transcripts if you already pulled them",
          "Proof of payments already made (cancelled checks, IRS transcripts, bank debits)",
        ],
      },
      {
        heading: "Current financial snapshot",
        items: [
          "Recent pay stubs or a profit-and-loss if self-employed",
          "Bank and brokerage balances (latest statements)",
          "Housing cost (rent or mortgage) and necessary living expenses — a simple list is enough to start",
          "Other debts (student loans, support, car notes)",
          "Household size and whether a spouse has a separate liability",
        ],
      },
      {
        heading: "Timeline",
        items: [
          "A short dated note: when the problem started, what you already tried, and any hardship facts you are comfortable sharing",
          "Contact constraints (do not call at work, preferred times)",
        ],
      },
    ],
  },
];

export default function ChecklistsPage() {
  return (
    <>
      <section className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
            Resources · Checklists
          </p>
          <h1 className="mt-2 max-w-3xl text-4xl font-semibold sm:text-5xl">
            Client document checklists.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Educational templates from {site.firmName}. They are not a complete
            list for every return, and sending documents is not the same as
            engaging the firm.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <aside
          className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-slate-700"
          role="note"
        >
          <strong className="text-navy-900">Educational templates — not advice.</strong>{" "}
          Do not upload Social Security cards, unredacted bank passwords, or
          original identification documents unless the firm specifically asks
          through a secure channel. {site.disclaimer}
        </aside>

        <nav className="mt-8 flex flex-wrap gap-3 text-sm font-semibold">
          {checklists.map((list) => (
            <a
              key={list.id}
              href={`#${list.id}`}
              className="rounded-full border border-slate-200 px-4 py-2 text-navy-900 hover:border-teal-500 hover:text-teal-700"
            >
              {list.title}
            </a>
          ))}
        </nav>

        <div className="mt-12 space-y-14">
          {checklists.map((list) => (
            <article key={list.id} id={list.id} className="scroll-mt-28">
              <h2 className="text-3xl font-semibold">{list.title}</h2>
              <p className="mt-3 max-w-3xl text-slate-600">{list.intro}</p>
              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                {list.groups.map((group) => (
                  <div
                    key={group.heading}
                    className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold">{group.heading}</h3>
                    <ul className="mt-4 space-y-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm text-slate-600"
                        >
                          <span
                            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600"
                            aria-hidden
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-navy-900 p-8 text-white sm:flex sm:items-center sm:justify-between sm:gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Ready to send a package?
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-100/80">
              Call first so we can confirm what is useful. Engagements are
              handled virtually — secure upload after we are working together.
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
