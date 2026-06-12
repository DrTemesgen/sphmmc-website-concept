import type { Metadata } from "next";
import Link from "next/link";
import { OFFICES, OFFICE_GROUPS } from "@/data/offices";
import { SCHOOLS } from "@/data/schools";
import { SERVICE_DIRECTORATES } from "@/data/services";
import { CENTERS } from "@/data/centers";
import { PageHero, Breadcrumbs } from "@/components/ui";

export const metadata: Metadata = {
  title: "Offices & Directorates",
  description:
    "Directory of every office, executive and directorate on the SPHMMC 2026 organisational structure — with the mandate of each unit.",
};

// Some units in a directorate are presented elsewhere on the site (schools,
// clinical directorates, specialty centres). These notes point there so the
// directory reads consistently with the organogram.
const GROUP_NOTES: Partial<Record<(typeof OFFICE_GROUPS)[number], React.ReactNode>> = {
  "Academic & Medical Service": (
    <>
      One corporate directorate, led by the Academic &amp; Medical Service Vice
      Provost/Corporate Director, working through two vice corporate directors — one
      academic, one medical service — with three specialty centres reporting directly
      to the Vice Provost.
    </>
  ),
  "Research & Community Service": (
    <>
      See also{" "}
      <Link href="/research" className="font-semibold text-brand hover:underline">Research at SPHMMC</Link> and the{" "}
      <Link href="/initiatives" className="font-semibold text-brand hover:underline">Millennium Health Innovation Hub</Link>.
    </>
  ),
};

export default function OfficesPage() {
  return (
    <>
      <PageHero
        eyebrow="About SPHMMC"
        title="Offices & Directorates"
        intro="Every administrative unit on the 2026 organogram — who they are, what they do, and where they sit in the structure."
      />
      <Breadcrumbs items={[{ label: "Offices" }]} />

      <section className="mx-auto max-w-7xl px-4 py-14">
        {OFFICE_GROUPS.map((group) => {
          const groupOffices = OFFICES.filter((o) => o.group === group);
          if (groupOffices.length === 0) return null;
          return (
            <div key={group} className="mb-12 last:mb-0">
              <h2 className="mb-2 border-b-2 border-brand/20 pb-2 text-center font-display text-2xl font-bold text-navy">
                {group}
              </h2>
              {GROUP_NOTES[group] && (
                <p className="mx-auto mb-5 max-w-3xl text-center text-sm leading-relaxed text-muted">{GROUP_NOTES[group]}</p>
              )}
              {group === "Academic & Medical Service" ? (
                <AcademicMedicalWings groupOffices={groupOffices} />
              ) : (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {groupOffices.map((o) => (
                    <OfficeCard key={o.slug} href={o.href ?? `/offices/${o.slug}`} name={o.name} text={o.summary} />
                  ))}
                </div>
              )}
            </div>
          );
        })}
        <p className="text-center text-sm text-muted">
          See how these offices connect on the{" "}
          <Link href="/about/organogram" className="font-semibold text-brand hover:underline">
            2026 organogram
          </Link>
          .
        </p>
      </section>
    </>
  );
}

function OfficeCard({ href, name, text }: { href: string; name: string; text: string }) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col items-center rounded-lg border border-line bg-white p-5 text-center transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-sm"
    >
      <h3 className="font-display text-base font-bold text-navy group-hover:text-brand">{name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {text.split(". ")[0].replace(/\.$/, "")}.
      </p>
      <p className="mt-3 text-sm font-bold text-brand">View →</p>
    </Link>
  );
}

/** The Academic & Medical Service corporate directorate as structured on the
 *  2026 organogram: two vice corporate directors (academic / medical service)
 *  plus three specialty centres reporting directly to the Vice Provost. */
function AcademicMedicalWings({
  groupOffices,
}: {
  groupOffices: { slug: string; name: string; summary: string; href?: string }[];
}) {
  const wingHeading = (title: string, lead: string) => (
    <div className="mb-4 text-center">
      <h3 className="font-display text-xl font-bold text-navy">{title}</h3>
      <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-sky">{lead}</p>
    </div>
  );
  return (
    <div className="space-y-6">
      {/* Academic wing */}
      <div className="rounded-2xl border border-line bg-paper p-6">
        {wingHeading("Academic Wing", "Led by the Academic Vice Corporate Director")}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SCHOOLS.map((s) => (
            <OfficeCard key={s.slug} href={`/academics/schools/${s.slug}`} name={s.name} text={s.tagline} />
          ))}
          {groupOffices.map((o) => (
            <OfficeCard key={o.slug} href={o.href ?? `/offices/${o.slug}`} name={o.name} text={o.summary} />
          ))}
          <div className="flex h-full flex-col items-center justify-center rounded-lg border border-dashed border-line p-5 text-center">
            <h3 className="font-display text-base font-bold text-muted">Other Health Science School</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              A future-opening unit reserved on the structure for new health-science schools.
            </p>
          </div>
        </div>
      </div>

      {/* Medical service wing */}
      <div className="rounded-2xl border border-line bg-paper p-6">
        {wingHeading("Medical Service Wing", "Led by the Medical Service Vice Corporate Director")}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICE_DIRECTORATES.map((d) => (
            <OfficeCard
              key={d.slug}
              href={`/patient-care/directorates/${d.slug}`}
              name={d.name}
              text={d.summary}
            />
          ))}
        </div>
      </div>

      {/* Specialty centres */}
      <div className="rounded-2xl border border-gold/40 bg-gold/5 p-6">
        {wingHeading("Specialty Centres", "Report directly to the Vice Provost/Corporate Director")}
        <div className="grid gap-4 sm:grid-cols-3">
          {CENTERS.filter((c) => c.kind === "specialty-centre").map((c) => (
            <OfficeCard key={c.slug} href={`/centers/${c.slug}`} name={c.name} text={c.tagline} />
          ))}
        </div>
      </div>
    </div>
  );
}
