import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { STAFF, staffBySlug } from "@/data/staff";
import { departmentBySlug } from "@/data/departments";
import { PageHero, Breadcrumbs } from "@/components/ui";
import PublicationList from "@/components/PublicationList";

export function generateStaticParams() {
  return STAFF.filter((s) => s.status === "approved").map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const staff = staffBySlug(slug);
  return staff
    ? { title: `${staff.name} — ${staff.rank}`, description: staff.bio.slice(0, 160) }
    : { title: "Profile not found" };
}

function initials(name: string) {
  const parts = name.replace(/^(Dr\.|Mr\.|Mrs\.|Ms\.|Sr\.|Prof\.)\s*/i, "").split(/\s+/);
  return parts.slice(0, 2).map((p) => p[0]?.toUpperCase() ?? "").join("");
}

export default async function StaffProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const staff = staffBySlug(slug);
  if (!staff) notFound();

  const dept = departmentBySlug(staff.department);

  return (
    <>
      <PageHero eyebrow={dept?.name ?? "Faculty"} title={staff.name} intro={`${staff.rank}${staff.role ? ` · ${staff.role}` : ""}`} />
      <Breadcrumbs
        items={[
          { label: "Academics", href: "/academics" },
          { label: "Faculty & Staff", href: "/academics/staff" },
          { label: staff.name },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-3">
          <aside className="lg:col-span-1">
            {staff.photo ? (
              <Image src={staff.photo} alt={staff.name} width={320} height={360} className="w-full rounded-2xl border border-line object-cover" />
            ) : (
              <div aria-hidden className="flex aspect-[4/5] w-full items-center justify-center rounded-2xl bg-brand/10 font-display text-6xl font-bold text-brand">
                {initials(staff.name)}
              </div>
            )}
            <div className="mt-4 rounded-xl border border-line bg-paper p-5 text-sm">
              <p className="font-display font-bold text-navy">Contact</p>
              {staff.email && (
                <p className="mt-1">
                  <a href={`mailto:${staff.email}`} className="font-semibold text-brand hover:underline">{staff.email}</a>
                </p>
              )}
              {dept && (
                <p className="mt-2">
                  Department:{" "}
                  <Link href={`/academics/departments/${dept.slug}`} className="font-semibold text-brand hover:underline">
                    {dept.name}
                  </Link>
                </p>
              )}
            </div>
            {staff.sample && (
              <p className="mt-3 rounded-lg bg-gold/10 p-3 text-xs leading-relaxed text-ink">
                This is a sample profile demonstrating the layout. Real profiles are submitted by
                staff and approved by the Department Head / School Dean.
              </p>
            )}
          </aside>

          <div className="space-y-8 lg:col-span-2">
            <div>
              <h2 className="font-display text-xl font-bold text-navy">Biography</h2>
              <p className="mt-3 leading-relaxed text-ink">{staff.bio}</p>
            </div>
            {staff.interests.length > 0 && (
              <div>
                <h2 className="font-display text-xl font-bold text-navy">Areas of Interest</h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {staff.interests.map((i) => (
                    <span key={i} className="rounded-full bg-brand/10 px-3.5 py-1.5 text-sm font-semibold text-brand">{i}</span>
                  ))}
                </div>
              </div>
            )}
            <div>
              <h2 className="font-display text-xl font-bold text-navy">Qualifications</h2>
              <ul className="mt-3 space-y-2">
                {staff.qualifications.map((q, i) => (
                  <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-ink">
                    <span aria-hidden className="mt-0.5 text-sky">🎓</span>
                    {q}
                  </li>
                ))}
              </ul>
            </div>
            {staff.publications && staff.publications.length > 0 && (
              <div>
                <h2 className="font-display text-xl font-bold text-navy">Selected Publications</h2>
                <p className="mt-1 text-sm text-muted">
                  Tick items and use “Copy selected” to copy the references with their links.
                </p>
                <div className="mt-3">
                  <PublicationList publications={staff.publications} />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
