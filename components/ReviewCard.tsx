import { Star } from "lucide-react";
import type { Review } from "@/lib/reviews";

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-gold-500 text-gold-500" : "text-slate-200"
          }`}
          aria-hidden
        />
      ))}
    </div>
  );
}

export default function ReviewCard({
  review,
  compact = false,
}: {
  review: Review;
  compact?: boolean;
}) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-cream-100 bg-white p-6 shadow-sm transition hover:shadow-md">
      <StarRating rating={review.rating} />
      <blockquote
        className={`mt-4 flex-1 text-sm leading-relaxed text-slate-600 ${
          compact ? "line-clamp-6" : ""
        }`}
      >
        &ldquo;{review.quote}&rdquo;
      </blockquote>
      <footer className="mt-5 border-t border-slate-100 pt-4">
        <p className="text-sm font-semibold text-navy-900">{review.name}</p>
        <p className="mt-0.5 text-xs text-slate-500">
          {review.date}
          {review.category ? ` · ${review.category}` : ""}
        </p>
        <p className="mt-1 text-xs font-medium text-gold-500">via Thumbtack</p>
      </footer>
    </article>
  );
}
