import type { Metadata } from "next";
import Link from "next/link";
import { DEPARTMENTS } from "@/data/departments";
import { SCHOOLS } from "@/data/schools";
import { PageHero, Breadcrumbs, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Departments A–Z",
  description:
    "All clinical, preclinical and academic departments of St. Paul's Hospital Millennium Medical College, A to Z.",
};

export default function DepartmentsIndexPage() {
  const sorted = [...DEPARTMENTS].sort((a, b) => a.name.localeCompare(b.name));
  const typeLabel = { clinical: "Clinical", preclinical: "Preclinical", academic: "Academic" } as const;

  return (
    <>
      <PageHero
        eyebrow="Departments & Services"
        title="Departments A–Z"
        intro="Every department of the College — clinical services for patients, preclinical sciences, and academic programmes — in one place."
      />
      <Breadcrumbs items={[{ label: "Academics", href: "/academics" }, { label: "Departments" }]} />

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((d) => {
            const school = SCHOOLS.find((s) => s.slug === d.school);
            return (
              <Link
                key={d.slug}
                href={`/academics/departments/${d.slug}`}
                className="group flex h-full flex-col items-center rounded-xl border border-line bg-white p-5 text-center transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md"
              >
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <span className="rounded-full bg-paper px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-sky">
                    {typeLabel[d.type]}
                  </span>
                  <span className="text-[11px] text-muted">{school?.name}</span>
                </div>
                <h2 className="mt-3 font-display text-lg font-bold text-navy group-hover:text-brand">
                  {d.name}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {d.overview.split(". ")[0].replace(/\.$/, "")}.
                </p>
                <p className="mt-3 text-sm font-bold text-brand">View department →</p>
              </Link>
            );
          })}
        </div>

        <div className="mt-12">
          <SectionHeading
            eyebrow="Looking for care?"
            title="Not sure which department you need?"
            intro="Use the Ask St. Paul's assistant (bottom-right) to describe what you need, or browse our specialty centres and the private wing."
          />
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/centers" className="rounded-md border border-brand px-5 py-2.5 font-display font-bold text-brand transition hover:bg-brand hover:text-white">
              Specialty centres
            </Link>
            <Link href="/private-wing/doctors" className="rounded-md border border-brand px-5 py-2.5 font-display font-bold text-brand transition hover:bg-brand hover:text-white">
              Find a doctor
            </Link>
            <Link href="/patient-care" className="rounded-md border border-brand px-5 py-2.5 font-display font-bold text-brand transition hover:bg-brand hover:text-white">
              Getting care
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
