export type TaxReliefItem = {
  slug: string;
  title: string;
  navLabel: string;
  summary: string;
  heroEyebrow: string;
  body: string[];
  points: string[];
  metaDescription: string;
};

export const taxReliefItems: TaxReliefItem[] = [
  {
    slug: "unfiled-returns",
    title: "Unfiled returns catch-up",
    navLabel: "Unfiled returns",
    summary:
      "Help organizing records and getting prior-year returns current so resolution options with the IRS become clearer.",
    heroEyebrow: "Unfiled returns",
    body: [
      "Missing prior-year returns often block lasting resolution with the IRS. NB Tax and Advisory, CPA helps individuals and businesses organize records, identify which years are open, and work toward getting filings current.",
      "Catch-up filing is usually the foundation for any payment plan, relief request, or other resolution path. We explain what documents are useful and build a practical filing sequence — without pressure tactics.",
      "This page is general information only. Outcomes depend on your filing history and facts. Call the firm to discuss unfiled years.",
    ],
    points: [
      "Identify missing tax years",
      "Document and record organization",
      "Prior-year return preparation",
      "Coordination with IRS notices",
      "Foundation for further resolution options",
    ],
    metaDescription:
      "Unfiled tax return catch-up support from NB Tax and Advisory, CPA — organize records and get filings current.",
  },
  {
    slug: "irs-notices",
    title: "IRS notices & correspondence",
    navLabel: "IRS notices",
    summary:
      "Calm, careful review of IRS letters and notices, with Form 2848 representation when appropriate.",
    heroEyebrow: "IRS notices",
    body: [
      "IRS letters deserve a careful response — not panic. NB Tax and Advisory, CPA reviews notices, explains what they appear to request in plain language, and helps you plan next steps.",
      "With a signed Form 2848, the firm can communicate with the IRS on authorized matters so you are not left fielding every call alone. We will not claim that every notice disappears overnight; we focus on accurate understanding and organized follow-through.",
      "Bring the notice (or a clear photo) when you call. This content is educational only and is not advice for your specific letter.",
    ],
    points: [
      "Notice and letter review",
      "Plain-language explanation of requests",
      "Form 2848 representation when appropriate",
      "Organized response planning",
      "Coordination with filings and balances due",
    ],
    metaDescription:
      "IRS notice review and CPA representation from NB Tax and Advisory, CPA — Form 2848 support when appropriate.",
  },
  {
    slug: "installment-agreements",
    title: "Installment agreements",
    navLabel: "Installment agreements",
    summary:
      "Guidance on structured payment plans when a tax balance is owed, based on your facts and IRS expectations.",
    heroEyebrow: "Installment agreements",
    body: [
      "When a balance is owed, a structured installment agreement may be an appropriate path. NB Tax and Advisory, CPA reviews your situation and helps you understand what the IRS typically expects for payment plans.",
      "We discuss filing compliance, financial information the IRS may request, and how a plan fits alongside other options. We do not guarantee approval of any specific monthly amount.",
      "Contact the firm to review whether an installment agreement may make sense for your balance and cash flow.",
    ],
    points: [
      "Balance-due payment plan guidance",
      "Filing compliance considerations",
      "Financial information awareness",
      "Coordination with penalty discussions",
      "Honest assessment — no guaranteed terms",
    ],
    metaDescription:
      "IRS installment agreement guidance from NB Tax and Advisory, CPA — practical payment-plan support.",
  },
  {
    slug: "penalty-relief",
    title: "Penalty relief",
    navLabel: "Penalty relief",
    summary:
      "Evaluation of whether penalty abatement or relief requests may be worth exploring based on your facts.",
    heroEyebrow: "Penalty relief",
    body: [
      "In some cases, penalty relief or abatement requests may be worth exploring. NB Tax and Advisory, CPA evaluates whether your facts appear to support a request and helps prepare a clear submission when pursuing relief is reasonable.",
      "Not every penalty can be removed. We explain common frameworks (such as reasonable cause concepts in general terms) without promising a result, and we coordinate relief work with accurate underlying filings.",
      "This page is general information. Call to discuss penalties shown on your account transcripts or notices.",
    ],
    points: [
      "Penalty notice review",
      "Reasonable-cause style evaluation when relevant",
      "Clear written request support",
      "Coordination with filings and balances",
      "No guaranteed abatement outcomes",
    ],
    metaDescription:
      "Penalty relief request support from NB Tax and Advisory, CPA — careful evaluation without guaranteed outcomes.",
  },
  {
    slug: "levy-lien",
    title: "Levy & lien situations",
    navLabel: "Levy & lien",
    summary:
      "Practical explanation of IRS levies and liens, and steps that may be available to address collection activity.",
    heroEyebrow: "Levy & lien",
    body: [
      "Collection activity is stressful. NB Tax and Advisory, CPA helps you understand what a levy or lien means in practical terms and what steps may be available depending on your facts and current IRS procedures.",
      "Engaging a CPA and signing Form 2848 allows representation; it does not automatically stop every levy. Timing matters — contact the firm promptly if you have received a levy or lien notice.",
      "Educational content only. Do not rely on this page instead of speaking with the firm about your notice.",
    ],
    points: [
      "Plain-language levy and lien overview",
      "Urgent notice triage",
      "Form 2848 representation when appropriate",
      "Discussion of possible next steps",
      "Coordination with filings and payment options",
    ],
    metaDescription:
      "IRS levy and lien guidance from NB Tax and Advisory, CPA — calm representation and practical next steps.",
  },
  {
    slug: "offer-in-compromise",
    title: "Offer in Compromise evaluation",
    navLabel: "Offer in Compromise",
    summary:
      "Honest evaluation of whether an Offer in Compromise may be worth considering — without overselling.",
    heroEyebrow: "Offer in Compromise",
    body: [
      "An Offer in Compromise (OIC) is not right for everyone. NB Tax and Advisory, CPA evaluates whether your financial picture and filing history suggest an OIC may be worth considering, and explains the process in plain language.",
      "We will not promise a specific settlement amount or acceptance. When facts do not support an offer, we say so and discuss other paths such as installment agreements or currently-not-collectible status.",
      "Past results on the Recent Cases page (when published) do not guarantee future outcomes. Contact the firm for an individualized review.",
    ],
    points: [
      "Eligibility-oriented evaluation",
      "Financial disclosure awareness",
      "Honest fit assessment — no sales scripts",
      "Alternative resolution paths when OIC is not a fit",
      "Coordination with accurate filings",
    ],
    metaDescription:
      "Offer in Compromise evaluation from NB Tax and Advisory, CPA — honest assessment without guaranteed settlements.",
  },
  {
    slug: "currently-not-collectible",
    title: "Currently not collectible exploration",
    navLabel: "Currently not collectible",
    summary:
      "Discussion of currently-not-collectible status when paying would create genuine hardship.",
    heroEyebrow: "Currently not collectible",
    body: [
      "If paying your tax balance would create genuine financial hardship, currently-not-collectible (CNC) status may be appropriate to discuss. NB Tax and Advisory, CPA reviews your financial picture and explains what that path generally involves.",
      "CNC is not a permanent wipeout of tax debt, and qualification depends on IRS standards and your documentation. We focus on accurate information and realistic expectations — not marketing claims.",
      "This content is educational only. Call to discuss whether hardship-based options may apply to your situation.",
    ],
    points: [
      "Hardship-oriented financial review",
      "Plain-language CNC overview",
      "Documentation awareness",
      "Coordination with filings and other options",
      "No guaranteed CNC placement",
    ],
    metaDescription:
      "Currently not collectible (CNC) exploration from NB Tax and Advisory, CPA — hardship-focused guidance.",
  },
];

export function getTaxReliefItem(slug: string): TaxReliefItem | undefined {
  return taxReliefItems.find((item) => item.slug === slug);
}

export function getTaxReliefSlugs(): string[] {
  return taxReliefItems.map((item) => item.slug);
}
