import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TopicDetail from "@/components/TopicDetail";
import { getService, getServiceSlugs } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.metaDescription,
  };
}

export default async function ServiceSlugPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <TopicDetail
      eyebrow={service.heroEyebrow}
      title={service.title}
      summary={service.summary}
      body={service.body}
      points={service.points}
      backHref="/services/"
      backLabel="All services"
    />
  );
}
