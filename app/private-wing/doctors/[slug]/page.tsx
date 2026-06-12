import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DOCTORS, doctorBySlug } from "@/data/doctors";
import { departmentBySlug } from "@/data/departments";
import { PageHero, Breadcrumbs } from "@/components/ui";

const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export function generateStaticParams() {
  return DOCTORS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doctor = doctorBySlug(slug);
  return doctor
    ? { title: `${doctor.name} — ${doctor.specialty}`, description: doctor.bio.slice(0, 160) }
    : { title: "Doctor not found" };
}

export default async function DoctorProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doctor = doctorBySlug(slug);
  if (!doctor) notFound();

  const department = departmentBySlug(doctor.department);

  return (
    <>
      <PageHero eyebrow={doctor.specialty} title={doctor.name} intro={doctor.title} />
      <Breadcrumbs
        items={[
          { label: "Private Wing", href: "/private-wing" },
          { label: "Find a Doctor", href: "/private-wing/doctors" },
          { label: doctor.name },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <div>
              <h2 className="font-display text-xl font-bold text-navy">About</h2>
              <p className="mt-3 leading-relaxed text-ink">{doctor.bio}</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy">Areas of Focus</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {doctor.subspecialties.map((s) => (
                  <span key={s} className="rounded-full bg-brand/10 px-3.5 py-1.5 text-sm font-semibold text-brand">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy">Education & Training</h2>
              <ul className="mt-3 space-y-2">
                {doctor.education.map((e, i) => (
                  <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-ink">
                    <span aria-hidden className="mt-0.5 text-sky">🎓</span>
                    {e}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy">Credentials & Languages</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink">
                <strong>Credentials:</strong> {doctor.credentials}
                <br />
                <strong>Languages:</strong> {doctor.languages.join(", ")}
                {department && (
                  <>
                    <br />
                    <strong>Department:</strong>{" "}
                    <Link href={`/academics/departments/${department.slug}`} className="font-semibold text-brand hover:underline">
                      {department.name}
                    </Link>
                  </>
                )}
              </p>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-xl bg-brand p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-wide text-white/75">Consultation fee</p>
              <p className="font-display text-4xl font-bold">{doctor.fee} <span className="text-lg">ETB</span></p>
              <h3 className="mt-5 font-display text-base font-bold">Private clinic hours</h3>
              <ul className="mt-2 space-y-1.5 text-sm text-white/90">
                {doctor.sessions.map((s, i) => (
                  <li key={i}>
                    <strong>{DAY_NAMES[s.day]}</strong> {s.start}–{s.end}
                    <span className="block text-xs text-white/70">{s.location}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`/private-wing/book?doctor=${doctor.slug}`}
                className="mt-5 block rounded-md bg-gold px-4 py-3 text-center font-display text-base font-bold text-navy-deep transition hover:brightness-105"
              >
                Book this consultant
              </Link>
            </div>
            <p className="rounded-lg bg-paper p-4 text-xs leading-relaxed text-muted">
              Sample profile — to be replaced with the verified roster before launch. Fees and
              schedules are confirmed at booking.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
