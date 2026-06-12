import type { Metadata } from "next";
import Link from "next/link";
import { CENTERS } from "@/data/centers";
import { PageHero, Breadcrumbs, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Specialty Centres",
  description:
    "SPHMMC specialty centres — the Renal Transplant Centre, Infertility Centre, Cardiac Catheterisation Laboratory, and affiliated Aabet Hospital.",
};

export default function CentersPage() {
  const centres = CENTERS.filter((c) => c.kind === "specialty-centre");
  const affiliates = CENTERS.filter((c) => c.kind === "affiliated-hospital");

  return (
    <>
      <PageHero
        eyebrow="Patient Care"
        title="Specialty Centres"
        intro="National referral programmes with dedicated multidisciplinary teams, registries and fellowship training in transplant medicine, fertility care and cardiac intervention."
      />
      <Breadcrumbs items={[{ label: "Centres" }]} />

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-6 lg:grid-cols-3">
          {centres.map((c) => (
            <Link
              key={c.slug}
              href={`/centers/${c.slug}`}
              className="group flex h-full flex-col items-center rounded-xl border border-line p-6 text-center transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md"
            >
              <h2 className="font-display text-2xl font-bold text-navy group-hover:text-brand">{c.name}</h2>
              <p className="mt-2 text-sm font-semibold text-sky">{c.tagline}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{c.overview.split(". ").slice(0, 2).join(". ").replace(/\.$/, "")}.</p>
              <p className="mt-4 font-bold text-brand">Visit the centre →</p>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <SectionHeading eyebrow="Our Network" title="Affiliated Health Institutions" />
          {affiliates.map((c) => (
            <Link
              key={c.slug}
              href={`/centers/${c.slug}`}
              className="group block rounded-xl border border-gold/50 bg-gold/5 p-6 text-center transition hover:shadow-md"
            >
              <h2 className="font-display text-2xl font-bold text-navy group-hover:text-brand">{c.name}</h2>
              <p className="mt-2 text-sm font-semibold text-sky">{c.tagline}</p>
              <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-muted">{c.overview}</p>
              <p className="mt-4 font-bold text-brand">Learn more →</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
