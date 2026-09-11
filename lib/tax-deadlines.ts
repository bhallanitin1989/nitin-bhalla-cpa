export type DeadlineKind = "filing" | "estimate" | "info" | "payroll";

export type TaxDeadline = {
  /** Calendar year the date falls in. */
  year: number;
  /** 1–12 */
  month: number;
  /** Day of month */
  day: number;
  title: string;
  detail: string;
  kind: DeadlineKind;
};

export const KIND_LABEL: Record<DeadlineKind, string> = {
  filing: "Filing",
  estimate: "Estimated tax",
  info: "Information returns",
  payroll: "Payroll",
};

export const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

/** Educational federal deadlines for a planning year (calendar-year filers). */
export function deadlinesFor(year: number): TaxDeadline[] {
  const y = year;
  const next = y + 1;
  const prior = y - 1;

  // Partnership/S-corp statutory date is Mar 15; when that is a weekend/holiday
  // the timely date is typically the next business day (e.g. Mar 16, 2026).
  const entityDay = (() => {
    const d = new Date(y, 2, 15);
    const dow = d.getDay();
    if (dow === 0) return 16; // Sunday → Monday
    if (dow === 6) return 17; // Saturday → Monday
    return 15;
  })();

  const items: TaxDeadline[] = [
    {
      year: y,
      month: 1,
      day: 15,
      title: `4th-quarter ${prior} individual estimated tax`,
      detail:
        "Final Form 1040-ES installment for the prior calendar year for many individuals. Some people file and pay the prior-year return early instead of making this payment — whether that works depends on your facts.",
      kind: "estimate",
    },
    {
      year: y,
      month: 1,
      day: 31,
      title: "W-2 and many 1099 recipient copies",
      detail:
        "Employers and payers generally furnish employee W-2s and many information returns (including 1099-NEC) to recipients. E-file due dates to SSA or IRS can differ by form.",
      kind: "info",
    },
    {
      year: y,
      month: 3,
      day: entityDay,
      title: "Calendar-year partnerships and S-corporations",
      detail: `Forms 1065 and 1120-S are generally due the 15th day of the third month. For ${y}, the timely date shown accounts for weekends (statutory March 15 may shift). Extensions give time to file, not extra time to pay what is reasonably due.`,
      kind: "filing",
    },
    {
      year: y,
      month: 4,
      day: 15,
      title: `${prior} individual returns, calendar-year C-corps, Q1 estimates, IRA deadline`,
      detail: `Form 1040 / 1040-SR for ${prior}, many calendar-year Form 1120 filings, first-quarter ${y} estimated tax, and a common deadline for prior-year IRA contributions. FBAR (FinCEN Form 114) is generally due in mid-April with an automatic extension often available — confirm current FinCEN rules.`,
      kind: "filing",
    },
    {
      year: y,
      month: 6,
      day: 15,
      title: `2nd-quarter ${y} individual estimated tax`,
      detail:
        "Covers April and May activity for calendar-year individuals who pay estimates. This “quarter” is shorter than the others.",
      kind: "estimate",
    },
    {
      year: y,
      month: 9,
      day: 15,
      title: `3rd-quarter ${y} estimates and extended entity returns`,
      detail:
        "Third individual estimated-tax installment. Also a common extended due date for calendar-year partnership and S-corporation returns.",
      kind: "estimate",
    },
    {
      year: y,
      month: 10,
      day: 15,
      title: `Extended ${prior} individual returns`,
      detail:
        "Typical extended due date for calendar-year individual income tax returns. An extension to file is not an extension to pay tax you already know you owe.",
      kind: "filing",
    },
    {
      year: next,
      month: 1,
      day: 15,
      title: `4th-quarter ${y} individual estimated tax`,
      detail: `Final estimated installment for tax year ${y} for many individuals, unless you file and pay the ${y} return early under the rules that apply to you.`,
      kind: "estimate",
    },
  ];

  // Optional Form 941 quarter-end markers (due last day of month after quarter).
  const payroll: TaxDeadline[] = [
    {
      year: y,
      month: 1,
      day: 31,
      title: "Form 941 — Q4 prior year (due)",
      detail:
        "Quarterly employment tax return for October–December of the prior year is generally due January 31. Deposit schedules are separate and often earlier.",
      kind: "payroll",
    },
    {
      year: y,
      month: 4,
      day: 30,
      title: "Form 941 — Q1 (due)",
      detail:
        "Quarterly employment tax return for January–March is generally due April 30. Deposit schedules (monthly or semiweekly) are separate.",
      kind: "payroll",
    },
    {
      year: y,
      month: 7,
      day: 31,
      title: "Form 941 — Q2 (due)",
      detail:
        "Quarterly employment tax return for April–June is generally due July 31. Deposit schedules are separate and often earlier.",
      kind: "payroll",
    },
    {
      year: y,
      month: 10,
      day: 31,
      title: "Form 941 — Q3 (due)",
      detail:
        "Quarterly employment tax return for July–September is generally due October 31. Deposit schedules are separate and often earlier.",
      kind: "payroll",
    },
  ];

  return [...items, ...payroll];
}

export function formatDeadlineDate(d: TaxDeadline): string {
  return `${MONTH_NAMES[d.month - 1]} ${d.day}, ${d.year}`;
}

export function deadlineKey(d: TaxDeadline): string {
  return `${d.year}-${d.month}-${d.day}-${d.title}`;
}

export function dateKey(year: number, month: number, day: number): string {
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}
