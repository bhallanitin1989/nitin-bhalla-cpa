"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  KIND_LABEL,
  MONTH_NAMES,
  dateKey,
  deadlineKey,
  deadlinesFor,
  formatDeadlineDate,
  type TaxDeadline,
} from "@/lib/tax-deadlines";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;

function kindDotClass(kind: TaxDeadline["kind"]): string {
  switch (kind) {
    case "payroll":
      return "bg-navy-800";
    case "estimate":
      return "bg-teal-500";
    case "info":
      return "bg-gold-500";
    default:
      return "bg-teal-600";
  }
}

export default function TaxDeadlineCalendar() {
  const now = useMemo(() => new Date(), []);
  const defaultYear = now.getFullYear();
  const [year, setYear] = useState(defaultYear);
  const [month, setMonth] = useState(now.getMonth() + 1); // 1–12
  const [selected, setSelected] = useState<string | null>(
    dateKey(defaultYear, now.getMonth() + 1, now.getDate()),
  );

  const allDeadlines = useMemo(() => deadlinesFor(year), [year]);

  const byDate = useMemo(() => {
    const map = new Map<string, TaxDeadline[]>();
    for (const d of allDeadlines) {
      const key = dateKey(d.year, d.month, d.day);
      const list = map.get(key) ?? [];
      list.push(d);
      map.set(key, list);
    }
    return map;
  }, [allDeadlines]);

  const monthItems = useMemo(
    () =>
      allDeadlines
        .filter((d) => d.year === year && d.month === month)
        .sort((a, b) => a.day - b.day || a.title.localeCompare(b.title)),
    [allDeadlines, year, month],
  );

  const selectedItems = selected ? (byDate.get(selected) ?? []) : [];

  const grid = useMemo(() => {
    const firstDow = new Date(year, month - 1, 1).getDay(); // 0=Sun
    const daysInMonth = new Date(year, month, 0).getDate();
    const cells: ({ day: number; key: string } | null)[] = [];
    for (let i = 0; i < firstDow; i++) cells.push(null);
    for (let day = 1; day <= daysInMonth; day++) {
      cells.push({ day, key: dateKey(year, month, day) });
    }
    while (cells.length % 7 !== 0) cells.push(null);
    return cells;
  }, [year, month]);

  const yearOptions = [defaultYear - 1, defaultYear, defaultYear + 1];

  function goPrevMonth() {
    if (month === 1) {
      setYear((y) => y - 1);
      setMonth(12);
    } else {
      setMonth((m) => m - 1);
    }
  }

  function goNextMonth() {
    if (month === 12) {
      setYear((y) => y + 1);
      setMonth(1);
    } else {
      setMonth((m) => m + 1);
    }
  }

  const todayKey = dateKey(
    now.getFullYear(),
    now.getMonth() + 1,
    now.getDate(),
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
      <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goPrevMonth}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-100 text-navy-900 hover:border-teal-500 hover:text-teal-600"
              aria-label="Previous month"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden />
            </button>
            <h2 className="min-w-[10rem] text-center text-xl font-semibold text-navy-900">
              {MONTH_NAMES[month - 1]} {year}
            </h2>
            <button
              type="button"
              onClick={goNextMonth}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-100 text-navy-900 hover:border-teal-500 hover:text-teal-600"
              aria-label="Next month"
            >
              <ChevronRight className="h-4 w-4" aria-hidden />
            </button>
          </div>
          <label className="flex items-center gap-2 text-sm text-slate-600">
            <span className="font-medium text-navy-900">Year</span>
            <select
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
              className="rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-sm text-navy-900 outline-none focus:border-teal-600"
            >
              {yearOptions.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
              {!yearOptions.includes(year) && (
                <option value={year}>{year}</option>
              )}
            </select>
          </label>
        </div>

        <div
          className="mt-5 grid grid-cols-7 gap-1 text-center text-xs font-semibold uppercase tracking-wider text-slate-500"
          role="row"
        >
          {WEEKDAYS.map((d) => (
            <div key={d} className="py-2">
              {d}
            </div>
          ))}
        </div>

        <div
          className="grid grid-cols-7 gap-1"
          role="grid"
          aria-label={`${MONTH_NAMES[month - 1]} ${year} tax deadlines`}
        >
          {grid.map((cell, i) => {
            if (!cell) {
              return <div key={`empty-${i}`} className="min-h-[3.25rem] sm:min-h-[4rem]" />;
            }
            const items = byDate.get(cell.key) ?? [];
            const hasDeadline = items.length > 0;
            const isSelected = selected === cell.key;
            const isToday = cell.key === todayKey;
            const titles = items.map((d) => d.title).join("; ");

            return (
              <button
                key={cell.key}
                type="button"
                onClick={() => setSelected(cell.key)}
                title={hasDeadline ? titles : undefined}
                aria-pressed={isSelected}
                aria-label={
                  hasDeadline
                    ? `${MONTH_NAMES[month - 1]} ${cell.day}: ${titles}`
                    : `${MONTH_NAMES[month - 1]} ${cell.day}`
                }
                className={[
                  "relative flex min-h-[3.25rem] flex-col items-center rounded-xl border px-1 py-1.5 text-sm transition sm:min-h-[4rem]",
                  isSelected
                    ? "border-teal-600 bg-teal-50 text-navy-900"
                    : hasDeadline
                      ? "border-teal-100 bg-teal-50/40 text-navy-900 hover:border-teal-500"
                      : "border-transparent text-slate-600 hover:border-slate-100 hover:bg-slate-50",
                  isToday && !isSelected ? "ring-1 ring-navy-800/20" : "",
                ].join(" ")}
              >
                <span
                  className={[
                    "font-semibold",
                    isToday ? "text-teal-700" : "",
                  ].join(" ")}
                >
                  {cell.day}
                </span>
                {hasDeadline && (
                  <span className="mt-1 flex flex-wrap justify-center gap-0.5">
                    {items.slice(0, 3).map((d) => (
                      <span
                        key={deadlineKey(d)}
                        className={`h-1.5 w-1.5 rounded-full ${kindDotClass(d.kind)}`}
                        aria-hidden
                      />
                    ))}
                  </span>
                )}
                {hasDeadline && (
                  <span className="mt-1 hidden max-w-full truncate px-0.5 text-[10px] leading-tight text-teal-700 sm:block">
                    {items[0].title.split(/[,—]/)[0]}
                    {items.length > 1 ? ` +${items.length - 1}` : ""}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-600">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-teal-600" aria-hidden />
            Filing / estimates
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-gold-500" aria-hidden />
            Info returns
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-navy-800" aria-hidden />
            Payroll (941)
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
            Selected day
          </p>
          {selected && selectedItems.length > 0 ? (
            <>
              <h3 className="mt-1 text-lg font-semibold text-navy-900">
                {MONTH_NAMES[Number(selected.slice(5, 7)) - 1]}{" "}
                {Number(selected.slice(8, 10))}, {selected.slice(0, 4)}
              </h3>
              <ul className="mt-4 space-y-4">
                {selectedItems.map((d) => (
                  <li key={deadlineKey(d)}>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {KIND_LABEL[d.kind]}
                    </p>
                    <p className="mt-0.5 font-semibold text-navy-900">{d.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {d.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <h3 className="mt-1 text-lg font-semibold text-navy-900">
                {selected
                  ? `${MONTH_NAMES[Number(selected.slice(5, 7)) - 1]} ${Number(selected.slice(8, 10))}, ${selected.slice(0, 4)}`
                  : "Pick a day"}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {selected
                  ? "No educational deadlines marked on this day. Click a highlighted date on the calendar."
                  : "Click a highlighted day to see deadline details."}
              </p>
            </>
          )}
        </div>

        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5 sm:p-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
            Upcoming this month
          </p>
          <h3 className="mt-1 text-lg font-semibold text-navy-900">
            {MONTH_NAMES[month - 1]} {year}
          </h3>
          {monthItems.length === 0 ? (
            <p className="mt-3 text-sm text-slate-600">
              No key federal deadlines listed for this month in the educational
              calendar.
            </p>
          ) : (
            <ul className="mt-4 space-y-3">
              {monthItems.map((d) => (
                <li key={deadlineKey(d)}>
                  <button
                    type="button"
                    onClick={() => setSelected(dateKey(d.year, d.month, d.day))}
                    className="w-full rounded-xl border border-transparent bg-white px-3 py-3 text-left shadow-sm transition hover:border-teal-500/40"
                  >
                    <p className="text-xs font-semibold text-teal-700">
                      {formatDeadlineDate(d)} · {KIND_LABEL[d.kind]}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-navy-900">
                      {d.title}
                    </p>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
