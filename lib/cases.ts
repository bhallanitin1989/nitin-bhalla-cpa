export type CaseOutcome =
  | "Offer in Compromise"
  | "Currently Not Collectible"
  | "Installment Agreement"
  | "Penalty Relief"
  | "Innocent Spouse"
  | "Other";

export type CaseDoc = {
  id: string;
  year: number;
  title: string; // e.g. "Offer in Compromise accepted"
  outcome: CaseOutcome;
  summary?: string; // short public-safe blurb, no SSNs/names
  file: string; // path under public, e.g. "/cases/2025/oic-example.pdf"
  dateLabel?: string; // optional "Mar 2025"
};

/** Start empty — add entries only when a redacted PDF is ready to publish. */
export const cases: CaseDoc[] = [];

export type CasesByYear = {
  year: number;
  items: CaseDoc[];
};

/** Group cases by year, newest year first; within a year keep array order. */
export function groupCasesByYear(docs: CaseDoc[] = cases): CasesByYear[] {
  const map = new Map<number, CaseDoc[]>();
  for (const doc of docs) {
    const list = map.get(doc.year);
    if (list) {
      list.push(doc);
    } else {
      map.set(doc.year, [doc]);
    }
  }
  return [...map.entries()]
    .sort(([a], [b]) => b - a)
    .map(([year, items]) => ({ year, items }));
}
