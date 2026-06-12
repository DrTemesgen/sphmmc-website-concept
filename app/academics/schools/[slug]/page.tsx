import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SCHOOLS, schoolBySlug } from "@/data/schools";
import { departmentsBySchool } from "@/data/departments";
import { PageHero, Breadcrumbs, SectionHeading } from "@/components/ui";

export function generateStaticParams() {
  return SCHOOLS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const school = schoolBySlug(slug);
  return school
    ? { title: school.name, description: school.tagline }
    : { title: "School not found" };
}

export default async function SchoolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const school = schoolBySlug(slug);
  if (!school) notFound();

  const departments = departmentsBySchool(school.slug);
  const clinical = departments.filter((d) => d.type === "clinical");
  const preclinical = departments.filter((d) => d.type === "preclinical");
  const academic = departments.filter((d) => d.type === "academic");

  return (
    <>
      <PageHero eyebrow="Academics" title={school.name} intro={school.tagline} />
      <Breadcrumbs items={[{ label: "Academics", href: "/academics" }, { label: school.name }]} />

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Overview" title={`About the ${school.name}`} />
            <p className="leading-relaxed text-ink">{school.overview}</p>

            {clinical.length > 0 && (
              <>
                <h2 className="mt-10 font-display text-xl font-bold text-navy">Clinical Departments</h2>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {clinical.map((d) => (
                    <Link
                      key={d.slug}
                      href={`/academics/departments/${d.slug}`}
                      className="rounded-md border border-line px-3.5 py-2.5 text-sm font-semibold text-navy transition hover:border-brand hover:text-brand"
                    >
                      {d.name} →
                    </Link>
                  ))}
                </div>
              </>
            )}
            {preclinical.length > 0 && (
              <>
                <h2 className="mt-8 font-display text-xl font-bold text-navy">Preclinical & Basic Science Departments</h2>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {preclinical.map((d) => (
                    <Link
                      key={d.slug}
                      href={`/academics/departments/${d.slug}`}
                      className="rounded-md border border-line px-3.5 py-2.5 text-sm font-semibold text-navy transition hover:border-brand hover:text-brand"
                    >
                      {d.name} →
                    </Link>
                  ))}
                </div>
              </>
            )}
            {academic.length > 0 && (
              <>
                <h2 className="mt-8 font-display text-xl font-bold text-navy">Departments & Programmes</h2>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {academic.map((d) => (
                    <Link
                      key={d.slug}
                      href={`/academics/departments/${d.slug}`}
                      className="rounded-md border border-line px-3.5 py-2.5 text-sm font-semibold text-navy transition hover:border-brand hover:text-brand"
                    >
                      {d.name} →
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>

          <aside className="space-y-4">
            <div className="rounded-xl border border-line bg-paper p-5">
              <h3 className="font-display text-lg font-bold text-navy">Highlights</h3>
              <ul className="mt-3 space-y-2.5">
                {school.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2 text-sm leading-relaxed text-ink">
                    <span aria-hidden className="mt-0.5 text-brand">✔</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-line p-5">
              <h3 className="font-display text-lg font-bold text-navy">Quick Links</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><Link href="/academics/programs" className="font-semibold text-brand hover:underline">Programmes A–Z →</Link></li>
                <li><Link href="/academics/departments" className="font-semibold text-brand hover:underline">All departments A–Z →</Link></li>
                <li><Link href="/research" className="font-semibold text-brand hover:underline">Research at SPHMMC →</Link></li>
                <li><Link href="/news" className="font-semibold text-brand hover:underline">Admission announcements →</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
