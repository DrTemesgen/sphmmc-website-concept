import type { Metadata } from "next";
import { PageHero, Breadcrumbs } from "@/components/ui";
import ProgramCatalog from "@/components/ProgramCatalog";
import { programCounts } from "@/data/programs";
import { INSTITUTION } from "@/data/institution";

export const metadata: Metadata = {
  title: "Programmes A–Z",
  description:
    "The full SPHMMC academic catalogue — MD, specialty residencies, subspecialty fellowships, MSc/MPH and PhD programmes across all schools.",
};

export default function ProgramsPage() {
  const counts = programCounts();
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="Programmes A–Z"
        intro={`The official catalogue from the College Registrar: ${counts.total} programmes — including ${counts.residencies} specialty residencies, ${counts.fellowships} subspecialty fellowships and ${counts.masters} master's programmes.`}
      />
      <Breadcrumbs items={[{ label: "Academics", href: "/academics" }, { label: "Programmes" }]} />
      <section className="mx-auto max-w-7xl px-4 py-12">
        <ProgramCatalog />
        <div className="mt-10 rounded-xl bg-navy p-7 text-white">
          <h2 className="font-display text-xl font-bold">Ready to apply?</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/80">
            Admissions, entrance-exam schedules and registration run through the Registrar &amp;
            Alumni Directorate on the student portal. Programme availability varies by intake.
          </p>
          <a
            href={`${INSTITUTION.portals.studentPortal}Web/ProgramList`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-md bg-gold px-5 py-2.5 font-display font-bold text-navy-deep transition hover:brightness-105"
          >
            Student portal — programme list ↗
          </a>
        </div>
      </section>
    </>
  );
}
