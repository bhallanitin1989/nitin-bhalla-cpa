"use client";

import { useMemo, useState } from "react";
import { ExternalLink } from "lucide-react";

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const moneyExact = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
});

const pct = new Intl.NumberFormat("en-US", {
  style: "percent",
  maximumFractionDigits: 1,
});

type Filing = "single" | "mfj";

/** Illustrative 2026 ordinary brackets on taxable income (IRS inflation adjustments). */
const BRACKETS: Record<Filing, { upTo: number; rate: number }[]> = {
  single: [
    { upTo: 12400, rate: 0.1 },
    { upTo: 50400, rate: 0.12 },
    { upTo: 105700, rate: 0.22 },
    { upTo: 201775, rate: 0.24 },
    { upTo: 256225, rate: 0.32 },
    { upTo: 640600, rate: 0.35 },
    { upTo: Infinity, rate: 0.37 },
  ],
  mfj: [
    { upTo: 24800, rate: 0.1 },
    { upTo: 100800, rate: 0.12 },
    { upTo: 211400, rate: 0.22 },
    { upTo: 403550, rate: 0.24 },
    { upTo: 512450, rate: 0.32 },
    { upTo: 768700, rate: 0.35 },
    { upTo: Infinity, rate: 0.37 },
  ],
};

function ordinaryTax(taxable: number, filing: Filing): number {
  if (taxable <= 0) return 0;
  let tax = 0;
  let prior = 0;
  for (const row of BRACKETS[filing]) {
    const slice = Math.min(taxable, row.upTo) - prior;
    if (slice > 0) tax += slice * row.rate;
    prior = row.upTo;
    if (taxable <= row.upTo) break;
  }
  return tax;
}

function parseAmount(value: string): number {
  const n = Number(value.replace(/[^0-9.-]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

const fieldClass =
  "mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-navy-900 outline-none focus:border-teal-600";
const labelClass = "block text-sm font-medium text-navy-900";

function Banner() {
  return (
    <p className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs leading-relaxed text-slate-700">
      <strong className="text-navy-900">Illustrative only — not tax advice.</strong>{" "}
      These tools omit credits, AMT, NIIT, state tax, Additional Medicare Tax,
      and most deductions. Do not use the result to file or to pay the IRS.
    </p>
  );
}

function EstimatedTaxCalc() {
  const [income, setIncome] = useState("120000");
  const [filing, setFiling] = useState<Filing>("single");
  const [withheld, setWithheld] = useState("0");
  const [alreadyPaid, setAlreadyPaid] = useState("0");

  const result = useMemo(() => {
    const taxable = Math.max(0, parseAmount(income));
    const tax = ordinaryTax(taxable, filing);
    const covered = Math.max(0, parseAmount(withheld) + parseAmount(alreadyPaid));
    const remainder = Math.max(0, tax - covered);
    return {
      tax,
      remainder,
      quarterly: remainder / 4,
    };
  }, [income, filing, withheld, alreadyPaid]);

  return (
    <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold">Estimated tax payment — rough guide</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        Enter <em>taxable income</em> you already estimated (after deductions you
        believe apply). The tool applies simplified 2026 ordinary federal
        brackets only, then subtracts withholding and estimates already paid,
        and divides what is left by four.
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          Estimated taxable income
          <input
            className={fieldClass}
            inputMode="decimal"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
          />
        </label>
        <label className={labelClass}>
          Filing status (illustrative)
          <select
            className={fieldClass}
            value={filing}
            onChange={(e) => setFiling(e.target.value as Filing)}
          >
            <option value="single">Single</option>
            <option value="mfj">Married filing jointly</option>
          </select>
        </label>
        <label className={labelClass}>
          Expected federal withholding
          <input
            className={fieldClass}
            inputMode="decimal"
            value={withheld}
            onChange={(e) => setWithheld(e.target.value)}
          />
        </label>
        <label className={labelClass}>
          Estimates already paid this year
          <input
            className={fieldClass}
            inputMode="decimal"
            value={alreadyPaid}
            onChange={(e) => setAlreadyPaid(e.target.value)}
          />
        </label>
      </div>
      <dl className="mt-6 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl bg-slate-50 p-4">
          <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">
            Rough federal income tax
          </dt>
          <dd className="mt-1 text-lg font-semibold text-navy-900">
            {money.format(result.tax)}
          </dd>
        </div>
        <div className="rounded-xl bg-slate-50 p-4">
          <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">
            Still uncovered
          </dt>
          <dd className="mt-1 text-lg font-semibold text-navy-900">
            {money.format(result.remainder)}
          </dd>
        </div>
        <div className="rounded-xl bg-teal-50 p-4">
          <dt className="text-xs font-medium uppercase tracking-wider text-teal-700">
            ÷ 4 quarterly sketch
          </dt>
          <dd className="mt-1 text-lg font-semibold text-navy-900">
            {money.format(result.quarterly)}
          </dd>
        </div>
      </dl>
      <Banner />
    </article>
  );
}

function EffectiveRateCalc() {
  const [income, setIncome] = useState("120000");
  const [tax, setTax] = useState("18000");

  const result = useMemo(() => {
    const i = parseAmount(income);
    const t = parseAmount(tax);
    return {
      rate: i > 0 ? t / i : 0,
      leftover: i - t,
    };
  }, [income, tax]);

  return (
    <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold">Effective tax rate — illustrative</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        Effective rate is simply tax divided by income. Use total income and
        total tax from a prior return, or a sketch of this year, to see the
        average rate — not your top (marginal) bracket.
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          Total income
          <input
            className={fieldClass}
            inputMode="decimal"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
          />
        </label>
        <label className={labelClass}>
          Total tax (federal, or federal + state)
          <input
            className={fieldClass}
            inputMode="decimal"
            value={tax}
            onChange={(e) => setTax(e.target.value)}
          />
        </label>
      </div>
      <dl className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-teal-50 p-4">
          <dt className="text-xs font-medium uppercase tracking-wider text-teal-700">
            Effective rate
          </dt>
          <dd className="mt-1 text-lg font-semibold text-navy-900">
            {pct.format(result.rate)}
          </dd>
        </div>
        <div className="rounded-xl bg-slate-50 p-4">
          <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">
            Income after that tax
          </dt>
          <dd className="mt-1 text-lg font-semibold text-navy-900">
            {money.format(result.leftover)}
          </dd>
        </div>
      </dl>
      <Banner />
    </article>
  );
}

const SS_WAGE_BASE_2026 = 184500;

function SelfEmploymentCalc() {
  const [net, setNet] = useState("90000");

  const result = useMemo(() => {
    const profit = Math.max(0, parseAmount(net));
    const seBase = profit * 0.9235;
    const ssWages = Math.min(seBase, SS_WAGE_BASE_2026);
    const social = ssWages * 0.124;
    const medicare = seBase * 0.029;
    const total = social + medicare;
    return { seBase, social, medicare, total };
  }, [net]);

  return (
    <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold">Self-employment tax — rough</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        Uses the usual 92.35% of net earnings, then 12.4% Social Security (capped
        at the 2026 wage base of {money.format(SS_WAGE_BASE_2026)}) plus 2.9%
        Medicare. It does <em>not</em> add the 0.9% Additional Medicare Tax or
        income tax.
      </p>
      <div className="mt-5">
        <label className={labelClass}>
          Net self-employment profit (after ordinary expenses)
          <input
            className={fieldClass}
            inputMode="decimal"
            value={net}
            onChange={(e) => setNet(e.target.value)}
          />
        </label>
      </div>
      <dl className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-slate-50 p-4">
          <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">
            SE base (92.35%)
          </dt>
          <dd className="mt-1 text-lg font-semibold text-navy-900">
            {moneyExact.format(result.seBase)}
          </dd>
        </div>
        <div className="rounded-xl bg-slate-50 p-4">
          <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">
            Social Security portion
          </dt>
          <dd className="mt-1 text-lg font-semibold text-navy-900">
            {moneyExact.format(result.social)}
          </dd>
        </div>
        <div className="rounded-xl bg-slate-50 p-4">
          <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">
            Medicare portion
          </dt>
          <dd className="mt-1 text-lg font-semibold text-navy-900">
            {moneyExact.format(result.medicare)}
          </dd>
        </div>
        <div className="rounded-xl bg-teal-50 p-4">
          <dt className="text-xs font-medium uppercase tracking-wider text-teal-700">
            Rough SE tax
          </dt>
          <dd className="mt-1 text-lg font-semibold text-navy-900">
            {moneyExact.format(result.total)}
          </dd>
        </div>
      </dl>
      <Banner />
    </article>
  );
}

export default function TaxCalculators() {
  return (
    <div className="space-y-8">
      <EstimatedTaxCalc />
      <EffectiveRateCalc />
      <SelfEmploymentCalc />
      <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
        <h3 className="text-lg font-semibold">Official IRS / SSA tools</h3>
        <p className="mt-2 text-sm text-slate-600">
          For withholding or benefit estimates, use the agency calculators — they
          are more complete than the sketches above.
        </p>
        <ul className="mt-4 space-y-2 text-sm">
          <li>
            <a
              href="https://www.irs.gov/individuals/tax-withholding-estimator"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-teal-700 hover:text-navy-900"
            >
              IRS Tax Withholding Estimator
              <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
          </li>
          <li>
            <a
              href="https://www.irs.gov/payments/estimated-taxes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-teal-700 hover:text-navy-900"
            >
              IRS estimated taxes
              <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
          </li>
          <li>
            <a
              href="https://www.ssa.gov/OACT/COLA/cbb.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-teal-700 hover:text-navy-900"
            >
              SSA contribution and benefit base
              <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
