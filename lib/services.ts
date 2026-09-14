export type ServiceItem = {
  slug: string;
  title: string;
  navLabel: string;
  summary: string;
  heroEyebrow: string;
  body: string[];
  points: string[];
  metaDescription: string;
};

export const services: ServiceItem[] = [
  {
    slug: "tax-preparation",
    title: "Individual & business tax preparation",
    navLabel: "Tax preparation",
    summary:
      "Careful preparation of personal and business income tax returns, with clear questions and organized follow-up.",
    heroEyebrow: "Tax preparation",
    body: [
      "Annual tax filing should feel organized, not chaotic. NB Tax and Advisory, CPA prepares individual and business income tax returns with attention to accuracy, documentation, and plain-language explanations of the figures that matter most.",
      "We start by understanding your situation and gathering the right records — W-2s, 1099s, K-1s, prior returns, and supporting schedules. From there we prepare the return, review key items with you, and file when you are ready.",
      "This page is general information only and is not tax advice for your specific facts. Contact the firm to discuss your filing needs.",
    ],
    points: [
      "Individual Form 1040 returns",
      "Business entity returns",
      "Organized document checklists",
      "Clear explanation of key figures",
      "Coordination with estimated payments when relevant",
    ],
    metaDescription:
      "Individual and business tax preparation from NB Tax and Advisory, CPA — New York CPA support for accurate annual filings.",
  },
  {
    slug: "s-corp-llc",
    title: "S-corp & LLC returns",
    navLabel: "S-corp & LLC returns",
    summary:
      "Entity filings for S corporations and LLCs, including coordination with owner returns when needed.",
    heroEyebrow: "Entity returns",
    body: [
      "S corporations and LLCs have filing requirements that often touch both the entity and the owners. NB Tax and Advisory, CPA helps prepare entity returns and keep owner-level reporting aligned so important details are less likely to fall through the cracks.",
      "Depending on your structure, that may include Form 1120-S, partnership filings, or coordination with Schedule C for single-member LLCs. We also discuss practical points such as owner basis awareness and how distributions relate to the return.",
      "Entity choice and elections are fact-specific. This content is educational only — talk with the firm before making structural decisions.",
    ],
    points: [
      "S corporation Form 1120-S support",
      "Partnership / multi-member LLC filings",
      "Single-member LLC Schedule C coordination",
      "Owner basis and distribution awareness",
      "Alignment with owner personal returns",
    ],
    metaDescription:
      "S-corp and LLC tax return support from NB Tax and Advisory, CPA — entity filings coordinated with owner returns.",
  },
  {
    slug: "payroll-compliance",
    title: "Payroll & compliance",
    navLabel: "Payroll & compliance",
    summary:
      "Help staying current with payroll-related filings and day-to-day compliance obligations.",
    heroEyebrow: "Payroll & compliance",
    body: [
      "Payroll deadlines and deposit rules can be easy to miss when you are busy running a business. NB Tax and Advisory, CPA helps owners stay current with payroll-related filings and related compliance so records and obligations stay aligned.",
      "Support may include guidance on filing rhythms, year-end W-2 and 1099 coordination, and practical checklists tailored to how your team is paid.",
      "Payroll rules vary by situation. This page is general information — contact the firm for guidance on your payroll setup.",
    ],
    points: [
      "Payroll filing support",
      "Deposit and deadline awareness",
      "Year-end W-2 / 1099 coordination",
      "Practical compliance checklists",
      "Coordination with S-corp owner compensation when relevant",
    ],
    metaDescription:
      "Payroll and compliance support from NB Tax and Advisory, CPA — filings, deposits, and year-end forms.",
  },
  {
    slug: "irs-representation",
    title: "IRS representation",
    navLabel: "IRS representation",
    summary:
      "IRS representation support when you need a professional voice with the IRS.",
    heroEyebrow: "IRS representation",
    body: [
      "When the IRS contacts you, you do not have to navigate every letter alone. With proper IRS representation authorization, NB Tax and Advisory, CPA can communicate with the IRS on matters covered by that authorization.",
      "Representation often begins with reviewing notices, understanding what the IRS is asking for, and organizing a clear response plan. We explain what IRS representation covers and what it does not — so expectations stay realistic.",
      "Representation does not guarantee a particular outcome. Contact the firm promptly if you have received an IRS notice or request.",
    ],
    points: [
      "IRS representation authorization",
      "Notice and letter review",
      "Representation conversations with the IRS",
      "Organized response planning",
      "Coordination with filings and tax relief work",
    ],
    metaDescription:
      "IRS representation from NB Tax and Advisory, CPA — notice review and CPA-led communication.",
  },
  {
    slug: "tax-planning",
    title: "Tax planning",
    navLabel: "Tax planning",
    summary:
      "Year-round planning conversations so income, elections, and timing decisions are made with eyes open.",
    heroEyebrow: "Tax planning",
    body: [
      "Tax planning is most useful before year-end — not only in April. NB Tax and Advisory, CPA offers planning conversations around estimated payments, entity considerations, and timing decisions so filing season is less reactive.",
      "We keep discussions practical and educational: what options may exist, what information is needed, and what trade-offs to weigh. Planning is not a promise of a specific tax result.",
      "This content is general information only. Schedule a conversation to review planning points that may apply to your situation.",
    ],
    points: [
      "Estimated tax check-ins",
      "Entity and election discussions",
      "Year-end planning points",
      "What-if scenarios in plain language",
      "Coordination with bookkeeping and filings",
    ],
    metaDescription:
      "Tax planning support from NB Tax and Advisory, CPA — estimated payments, entity considerations, and year-end check-ins.",
  },
  {
    slug: "bookkeeping",
    title: "Bookkeeping support",
    navLabel: "Bookkeeping support",
    summary:
      "Support keeping books organized enough for clean tax filings and clearer business decisions.",
    heroEyebrow: "Bookkeeping",
    body: [
      "Clean books make tax season smoother and help owners see how the business is performing. NB Tax and Advisory, CPA provides bookkeeping support focused on categorization, reconciliations, and reports that make sense — without unnecessary complexity.",
      "Engagements are scoped to what you need: cleanup before filing, ongoing categorization guidance, or help getting records ready for a return.",
      "Bookkeeping support is educational and operational assistance — not a substitute for management decisions. Contact the firm to discuss scope.",
    ],
    points: [
      "Book cleanup for tax season",
      "Categorization guidance",
      "Reconciliations support",
      "Owner-friendly reports",
      "Coordination with tax preparation",
    ],
    metaDescription:
      "Bookkeeping support from NB Tax and Advisory, CPA — cleanup, categorization, and reports that support clean filings.",
  },
  {
    slug: "international-tax",
    title: "International tax services",
    navLabel: "International tax services",
    summary:
      "Outbound and inbound international information reporting — Forms 5471, 5472, 8865, 1040-NR, FBAR, and FATCA — plus high-level expat support and penalty-relief coordination.",
    heroEyebrow: "International tax",
    body: [
      "Cross-border ownership and foreign accounts create information-reporting duties that are easy to miss and costly when overlooked. NB Tax and Advisory, CPA helps U.S. persons with foreign interests and foreign owners of U.S. entities understand which forms may apply and prepare filings with care.",
      "Support may include outbound forms such as 5471, 8865, and 8858; inbound forms such as 5472 and 1040-NR; FBAR (FinCEN 114) and Form 8938 (FATCA); and high-level guidance for Americans abroad on exclusions and foreign tax credits. When prior years were missed, we can also coordinate educational discussion of penalty-relief pathways with IRS representation or tax relief work when appropriate.",
      "International tax rules change. This page is general information only — not tax advice — and does not guarantee outcomes. Confirm current IRS and FinCEN requirements for your facts, and contact the firm to discuss your situation.",
    ],
    points: [
      "Outbound reporting for U.S. persons with foreign entities",
      "Inbound reporting for foreign-owned U.S. entities",
      "Key forms: 5471, 5472, 8865, 8858, 1040-NR, 3520 (as applicable)",
      "FBAR (FinCEN 114) and Form 8938 (FATCA) support",
      "Expat basics: FEIE and foreign tax credit awareness",
      "Penalty-relief coordination when filings were missed",
    ],
    metaDescription:
      "International tax services from NB Tax and Advisory, CPA — Forms 5471, 5472, 8865, FBAR, FATCA, expat support, and penalty-relief coordination.",
  },
];

export function getService(slug: string): ServiceItem | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
