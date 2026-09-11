import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { excerpt, formatPostDate, getAllPosts } from "@/lib/blog";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Educational tax articles from NB Tax and Advisory, CPA — estimated taxes, S-corps, IRS notices, planning, and representation.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
            Resources · Blog
          </p>
          <h1 className="mt-2 max-w-3xl text-4xl font-semibold sm:text-5xl">
            Clear writing on tax, filings, and IRS matters.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Original articles for individuals, freelancers, and small-business
            owners. Educational only — not tax advice for your situation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                {formatPostDate(post.date)}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-navy-900">
                <Link
                  href={`/resources/blog/${post.slug}/`}
                  className="hover:text-teal-700"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {post.description || excerpt(post.content)}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/resources/blog/${post.slug}/`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-navy-900"
              >
                Read article
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-12 text-xs leading-relaxed text-slate-500">
          {site.disclaimer}
        </p>
      </section>
    </>
  );
}
