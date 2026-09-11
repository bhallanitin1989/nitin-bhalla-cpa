import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, Phone, Shield, Star } from "lucide-react";
import ReviewCard from "@/components/ReviewCard";
import {
  featuredReviews,
  overallRating,
  reviewCount,
  thumbtackUrl,
} from "@/lib/reviews";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reviews",
  description: `Client reviews for ${site.brandName} on Thumbtack — ${overallRating}/5 from ${reviewCount} reviews. Past results vary.`,
};

export default function ReviewsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(20,184,166,0.35), transparent 40%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.08), transparent 35%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-500">
            Client feedback
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Reviews from Thumbtack
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="flex items-center gap-0.5" aria-hidden>
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-teal-500 text-teal-500"
                  />
                ))}
              </div>
              <p className="text-lg font-semibold text-white">
                {overallRating}
                <span className="text-slate-100/70"> / 5</span>
              </p>
            </div>
            <p className="text-base text-slate-100/80">
              Based on <strong className="text-white">{reviewCount}</strong>{" "}
              Thumbtack reviews
            </p>
          </div>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-100/80">
            Featured comments below are from verified Thumbtack clients of{" "}
            {site.firmName}. Ratings and quotes are sourced from Thumbtack —
            view the full profile for every review.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={thumbtackUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-500"
            >
              See all on Thumbtack
              <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="max-w-3xl text-sm leading-relaxed text-slate-600">
          Reviews sourced from Thumbtack. Featured selection below —{" "}
          <a
            href={thumbtackUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-teal-700 hover:text-navy-900"
          >
            view all on Thumbtack
          </a>
          .
        </p>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href={thumbtackUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-navy-900"
            >
              Read all {reviewCount} reviews on Thumbtack
              <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <aside
          className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-slate-700"
          role="note"
        >
          <div className="flex gap-3">
            <Shield
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-700"
              aria-hidden
            />
            <div>
              <strong className="text-navy-900">Disclaimer:</strong> Reviews are
              opinions of individual Thumbtack clients and reflect their own
              experiences. Past results vary and do not guarantee future
              outcomes. This page is general information only and is not tax,
              legal, or accounting advice. {site.firmName} does not claim Google
              reviews on this site — ratings shown here are from Thumbtack.
            </div>
          </div>
        </aside>

        <div className="mt-10 rounded-3xl bg-navy-900 px-6 py-12 text-white sm:flex sm:items-center sm:justify-between sm:gap-8 sm:px-12">
          <div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Ready to talk through your situation?
            </h2>
            <p className="mt-3 max-w-xl text-slate-100/80">
              Call {site.phone} or send a note through the contact page.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 sm:mt-0 sm:shrink-0">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-500"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {site.phone}
            </a>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
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
