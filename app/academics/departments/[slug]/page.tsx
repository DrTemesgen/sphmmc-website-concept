import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DEPARTMENTS, departmentBySlug } from "@/data/departments";
import { schoolBySlug } from "@/data/schools";
import { DOCTORS } from "@/data/doctors";
import { staffByDepartment } from "@/data/staff";
import { PageHero, Breadcrumbs, SectionHeading } from "@/components/ui";
import StaffCard from "@/components/StaffCard";

export function generateStaticParams() {
  return DEPARTMENTS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const dept = departmentBySlug(slug);
  return dept
    ? { title: dept.name, description: dept.overview.slice(0, 160) }
    : { title: "Department not found" };
}

export default async function DepartmentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dept = departmentBySlug(slug);
  if (!dept) notFound();

  const school = schoolBySlug(dept.school);
  const privateConsultants = DOCTORS.filter((d) => d.department === dept.slug);
  const staff = staffByDepartment(dept.slug);

  return (
    <>
      <PageHero eyebrow={school?.name ?? "Department"} title={dept.name} />
      <Breadcrumbs
        items={[
          { label: "Academics", href: "/academics" },
          { label: "Departments", href: "/academics/departments" },
          { label: dept.name },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            <div>
              <SectionHeading eyebrow="Overview" title={`About ${dept.name}`} />
              <p className="leading-relaxed text-ink">{dept.overview}</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy">
                {dept.type === "clinical" ? "Clinical Services" : "What We Do"}
              </h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {dept.services.map((s, i) => (
                  <li key={i} className="flex gap-2 rounded-md border border-line px-3.5 py-2.5 text-sm text-ink">
                    <span aria-hidden className="text-brand">✔</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy">Education & Training</h2>
              <ul className="mt-4 space-y-2">
                {dept.programs.map((p, i) => (
                  <li key={i} className="flex gap-2 text-sm leading-relaxed text-ink">
                    <span aria-hidden className="mt-0.5 text-sky">🎓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="font-display text-xl font-bold text-navy">Faculty &amp; Team</h2>
                <Link href="/academics/staff/submit" className="text-sm font-bold text-brand hover:underline">
                  Staff: submit your profile →
                </Link>
              </div>
              {staff.length > 0 ? (
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {staff.map((s) => (
                    <StaffCard key={s.id} staff={s} />
                  ))}
                </div>
              ) : (
                <div className="mt-4 rounded-xl border border-dashed border-line bg-paper p-6 text-center">
                  <p className="text-sm text-muted">
                    Faculty profiles for this department are being compiled. Members of staff can{" "}
                    <Link href="/academics/staff/submit" className="font-semibold text-brand hover:underline">
                      submit their profile
                    </Link>{" "}
                    for approval.
                  </p>
                </div>
              )}
            </div>
          </div>

          <aside className="space-y-4">
            {dept.type === "clinical" && (
              <div className="rounded-xl bg-brand p-5 text-white">
                <h3 className="font-display text-lg font-bold">See a specialist privately</h3>
                <p className="mt-2 text-sm text-white/85">
                  Evening and weekend consultations with senior {dept.name} specialists are
                  available at the Private Wing.
                </p>
                {privateConsultants.length > 0 ? (
                  <ul className="mt-3 space-y-1.5 text-sm">
                    {privateConsultants.map((d) => (
                      <li key={d.id}>
                        <Link href={`/private-wing/doctors/${d.slug}`} className="font-semibold underline">
                          {d.specialty} consultant →
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
                <Link
                  href="/private-wing/book"
                  className="mt-4 inline-block rounded-md bg-white px-4 py-2 font-display font-bold text-brand"
                >
                  Book an appointment
                </Link>
              </div>
            )}
            <div className="rounded-xl border border-line bg-paper p-5">
              <h3 className="font-display text-lg font-bold text-navy">How to access this service</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink">
                <li><strong>Emergency:</strong> 24/7, no referral needed.</li>
                <li><strong>Outpatient clinic:</strong> by referral, via the Patients Referral &amp; Flow Directorate.</li>
                <li><strong>Private wing:</strong> book online, no referral needed.</li>
              </ul>
              <Link href="/patient-care" className="mt-3 inline-block text-sm font-bold text-brand hover:underline">
                Getting care at St. Paul&apos;s →
              </Link>
            </div>
            {school && (
              <div className="rounded-xl border border-line p-5">
                <h3 className="font-display text-lg font-bold text-navy">Part of</h3>
                <Link href={`/academics/schools/${school.slug}`} className="mt-2 inline-block font-semibold text-brand hover:underline">
                  {school.name} →
                </Link>
              </div>
            )}
          </aside>
        </div>
      </section>
    </>
  );
}
