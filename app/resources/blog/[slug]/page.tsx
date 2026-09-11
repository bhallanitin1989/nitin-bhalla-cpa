import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import Markdown from "@/components/Markdown";
import {
  formatPostDate,
  getAllPosts,
  getPost,
  getPostSlugs,
} from "@/lib/blog";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const all = getAllPosts();
  const index = all.findIndex((p) => p.slug === post.slug);
  const newer = index > 0 ? all[index - 1] : undefined;
  const older = index >= 0 && index < all.length - 1 ? all[index + 1] : undefined;

  return (
    <>
      <section className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
            Resources · Blog
          </p>
          <p className="mt-3 text-sm text-slate-500">{formatPostDate(post.date)}</p>
          <h1 className="mt-2 text-4xl font-semibold sm:text-5xl">{post.title}</h1>
          <p className="mt-4 text-lg text-slate-600">{post.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <Markdown content={post.content} />

        <aside
          className="mt-12 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-slate-700"
          role="note"
        >
          <strong className="text-navy-900">Disclaimer:</strong> {site.disclaimer}{" "}
          This article is general education and is not tax, legal, or accounting
          advice for your specific facts.
        </aside>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-600"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call {site.phone}
          </a>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-100 px-5 py-3 text-sm font-semibold text-navy-900 hover:border-teal-500 hover:text-teal-600"
          >
            Discuss your situation
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <nav
          className="mt-12 flex flex-col gap-4 border-t border-slate-100 pt-8 sm:flex-row sm:justify-between"
          aria-label="Adjacent articles"
        >
          {older ? (
            <Link
              href={`/resources/blog/${older.slug}/`}
              className="text-sm font-semibold text-teal-600 hover:text-navy-900"
            >
              <span className="block text-xs font-medium uppercase tracking-wider text-slate-500">
                Older
              </span>
              {older.title}
            </Link>
          ) : (
            <span />
          )}
          {newer ? (
            <Link
              href={`/resources/blog/${newer.slug}/`}
              className="text-sm font-semibold text-teal-600 hover:text-navy-900 sm:text-right"
            >
              <span className="block text-xs font-medium uppercase tracking-wider text-slate-500">
                Newer
              </span>
              {newer.title}
            </Link>
          ) : null}
        </nav>

        <Link
          href="/resources/blog/"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-navy-900"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          All articles
        </Link>
      </article>
    </>
  );
}
