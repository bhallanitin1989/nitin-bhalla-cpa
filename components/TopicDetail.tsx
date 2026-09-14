import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/lib/site";

type TopicDetailProps = {
  eyebrow: string;
  title: string;
  summary: string;
  body: string[];
  points: string[];
  backHref: string;
  backLabel: string;
};

export default function TopicDetail({
  eyebrow,
  title,
  summary,
  body,
  points,
  backHref,
  backLabel,
}: TopicDetailProps) {
  return (
    <>
      <section className="border-b border-cream-100 bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
            {eyebrow}
          </p>
          <h1 className="mt-2 max-w-3xl text-4xl font-semibold sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">{summary}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-4 text-base leading-relaxed text-slate-600">
            {body.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>

          <aside className="rounded-3xl border border-cream-100 bg-white p-7 shadow-sm">
            <h2 className="text-lg font-semibold text-navy-900">
              What this can include
            </h2>
            <ul className="mt-4 space-y-3">
              {points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm text-slate-600"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600"
                    aria-hidden
                  />
                  {point}
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="mt-12 rounded-3xl bg-navy-900 p-8 text-white sm:flex sm:items-center sm:justify-between sm:gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Ready to discuss your situation?
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-100/80">
              Call {site.firmName} at {site.phone}. We&apos;ll help you
              understand sensible next steps — without pressure or fake
              guarantees.
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

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-navy-900"
          >
            ← {backLabel}
          </Link>
          <p className="max-w-xl text-xs leading-relaxed text-slate-500">
            {site.disclaimer}
          </p>
        </div>
      </section>
    </>
  );
}
