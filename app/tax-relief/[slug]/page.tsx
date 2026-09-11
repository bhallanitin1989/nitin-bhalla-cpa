import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TopicDetail from "@/components/TopicDetail";
import {
  getTaxReliefItem,
  getTaxReliefSlugs
} from "@/lib/tax-relief";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getTaxReliefSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getTaxReliefItem(slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.metaDescription,
  };
}

export default async function TaxReliefSlugPage({ params }: Props) {
  const { slug } = await params;
  const item = getTaxReliefItem(slug);
  if (!item) notFound();

  return (
    <TopicDetail
      eyebrow={item.heroEyebrow}
      title={item.title}
      summary={item.summary}
      body={item.body}
      points={item.points}
      backHref="/tax-relief/"
      backLabel="Tax relief overview"
    />
  );
}
