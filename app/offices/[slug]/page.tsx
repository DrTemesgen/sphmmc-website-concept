import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { OFFICES, officeBySlug } from "@/data/offices";
import { PageHero, Breadcrumbs } from "@/components/ui";

export function generateStaticParams() {
  return OFFICES.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const office = officeBySlug(slug);
  return office
    ? { title: office.name, description: office.summary.slice(0, 160) }
    : { title: "Office not found" };
}

export default async function OfficePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const office = officeBySlug(slug);
  if (!office) notFound();

  return (
    <>
      <PageHero eyebrow={office.group} title={office.name} />
      <Breadcrumbs items={[{ label: "Offices", href: "/offices" }, { label: office.name }]} />

      <section className="mx-auto max-w-4xl px-4 py-14">
        <p className="text-lg leading-relaxed text-ink">{office.summary}</p>

        <h2 className="mt-10 font-display text-xl font-bold text-navy">Key Responsibilities</h2>
        <ul className="mt-4 space-y-2">
          {office.responsibilities.map((r, i) => (
            <li key={i} className="flex gap-2.5 rounded-md border border-line px-4 py-2.5 text-sm text-ink">
              <span aria-hidden className="text-brand">✔</span>
              {r}
            </li>
          ))}
        </ul>

        <p className="mt-8 rounded-lg bg-paper p-4 text-sm text-muted">
          Part of{" "}
          {office.group === "Provost Office"
            ? "the offices reporting directly to the Provost"
            : `the ${office.group} Corporate Directorate`}{" "}
          on the{" "}
          <Link href="/about/organogram" className="font-semibold text-brand hover:underline">
            2026 organisational structure
          </Link>
          .
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/offices" className="rounded-md border border-brand px-5 py-2.5 font-display font-bold text-brand transition hover:bg-brand hover:text-white">
            ← All offices
          </Link>
          <Link href="/contact" className="rounded-md border border-line px-5 py-2.5 font-display font-bold text-navy transition hover:bg-paper">
            Contact the College
          </Link>
        </div>
      </section>
    </>
  );
}
