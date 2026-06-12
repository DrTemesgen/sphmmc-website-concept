import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICE_DIRECTORATES, directorateBySlug } from "@/data/services";
import { PageHero, Breadcrumbs } from "@/components/ui";

export function generateStaticParams() {
  return SERVICE_DIRECTORATES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const dir = directorateBySlug(slug);
  return dir ? { title: dir.name, description: dir.summary.slice(0, 160) } : { title: "Not found" };
}

export default async function DirectoratePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dir = directorateBySlug(slug);
  if (!dir) notFound();

  return (
    <>
      <PageHero eyebrow="Medical Service Directorates" title={dir.name} />
      <Breadcrumbs
        items={[
          { label: "Patient Care", href: "/patient-care" },
          { label: dir.name },
        ]}
      />
      <section className="mx-auto max-w-4xl px-4 py-14">
        <p className="text-lg leading-relaxed text-ink">{dir.summary}</p>
        <p className="mt-6 text-sm text-muted">
          Reports to the Medical Service Vice Corporate Director within the Academic &amp; Medical
          Service Corporate Directorate.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/patient-care" className="rounded-md border border-brand px-5 py-2.5 font-display font-bold text-brand transition hover:bg-brand hover:text-white">
            ← All patient care
          </Link>
          <Link href="/about/organogram" className="rounded-md border border-line px-5 py-2.5 font-display font-bold text-navy transition hover:bg-paper">
            View on the organogram
          </Link>
        </div>
      </section>
    </>
  );
}
