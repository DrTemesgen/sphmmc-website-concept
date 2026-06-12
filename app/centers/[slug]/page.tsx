import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CENTERS, centerBySlug } from "@/data/centers";
import { PageHero, Breadcrumbs, SectionHeading } from "@/components/ui";

export function generateStaticParams() {
  return CENTERS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = centerBySlug(slug);
  return c ? { title: c.name, description: c.tagline } : { title: "Centre not found" };
}

export default async function CenterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const center = centerBySlug(slug);
  if (!center) notFound();

  return (
    <>
      <PageHero
        eyebrow={center.kind === "specialty-centre" ? "Specialty Centre" : "Affiliated Institution"}
        title={center.name}
        intro={center.tagline}
      />
      <Breadcrumbs items={[{ label: "Centres", href: "/centers" }, { label: center.name }]} />

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            {center.image && (
              <div className="overflow-hidden rounded-2xl border border-line">
                <Image
                  src={center.image.src}
                  alt={center.image.alt}
                  width={1000}
                  height={560}
                  className="h-64 w-full object-cover"
                />
              </div>
            )}
            <div>
              <SectionHeading eyebrow="Overview" title={`About the ${center.name}`} />
              <p className="leading-relaxed text-ink">{center.overview}</p>
            </div>
            {center.teams.length > 0 && (
              <div>
                <h2 className="font-display text-xl font-bold text-navy">Multidisciplinary Teams</h2>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {center.teams.map((t, i) => (
                    <li key={i} className="flex gap-2 rounded-md border border-line px-3.5 py-2.5 text-sm text-ink">
                      <span aria-hidden className="text-brand">✔</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <h2 className="font-display text-xl font-bold text-navy">Training & Research</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink">{center.trainingRole}</p>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-xl bg-brand p-5 text-white">
              <h3 className="font-display text-lg font-bold">Access this centre</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/85">
                Referrals are coordinated through the Patients Referral &amp; Flow Directorate.
                Related private consultations can be booked online.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <Link href="/patient-care/referrals" className="rounded-md bg-white px-4 py-2 text-center font-display font-bold text-brand">
                  Referral process
                </Link>
                <Link href="/private-wing/book" className="rounded-md border border-white px-4 py-2 text-center font-display font-bold text-white">
                  Book a consultation
                </Link>
              </div>
            </div>
            <div className="rounded-xl border border-line bg-paper p-5 text-sm leading-relaxed text-muted">
              <p className="font-display font-bold text-navy">Governance</p>
              <p className="mt-2">
                {center.kind === "specialty-centre"
                  ? "Reports directly to the Academic & Medical Service Vice Provost/Corporate Director, parallel to the two Vice Corporate Directors."
                  : "Operates under a written affiliation agreement, reporting to the Provost/CED while retaining its own internal governance."}
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
