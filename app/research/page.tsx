import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { INSTITUTION } from "@/data/institution";
import { PageHero, Breadcrumbs, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research at SPHMMC — Research Affairs Directorate, IRERC ethics review, community service, partnerships and the Millennium Journal of Health.",
};

const pillars = [
  {
    name: "Research Affairs Directorate",
    href: "/offices/research-affairs",
    text: "Coordinates the College's research enterprise — grants, research administration, capacity building and scientific publication. Houses the Institutional Research and Ethics Review Committee.",
  },
  {
    name: "Research Ethics (IRERC)",
    href: "/offices/research-affairs",
    text: "A Level-A institutional review board with 15 board members and 200+ volunteer reviewers across 37+ specialties — reviewing every study that involves the College's patients, staff or students.",
  },
  {
    name: "Community Service Directorate",
    href: "/offices/community-service",
    text: "Community-based health programmes, outreach campaigns and public health education connecting the College's expertise to the population it serves.",
  },
  {
    name: "Partnership & Collaboration Directorate",
    href: "/offices/partnership-collaboration",
    text: "National and international research and training partnerships, plus the College's consultancy services under the institutional income-share framework.",
  },
];

const platforms = [
  {
    name: "Millennium Health Innovation Hub",
    href: "/initiatives",
    external: false,
    text: "Ethiopia's first medical-institution-led health innovation and startup initiative — the MedStart Accelerator and the IDREAM molecular lab.",
  },
  {
    name: "Millennium Journal of Health",
    href: INSTITUTION.portals.journal,
    external: true,
    text: "The College's peer-reviewed scientific journal, publishing original research of public-health significance.",
  },
  {
    name: "Library & Institutional Repository",
    href: "/library",
    external: false,
    text: "E-journals, UpToDate and HINARI databases, and the SPHMMC institutional repository of theses and research output.",
  },
];

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Research & Innovation"
        title="Problem-Solving Research of Public-Health Significance"
        intro="Research at SPHMMC is built into the mission: generate evidence, translate it into practice, and train the researchers Ethiopia needs."
      />
      <Breadcrumbs items={[{ label: "Research" }]} />

      <section className="mx-auto max-w-7xl px-4 pt-10">
        <div className="overflow-hidden rounded-2xl border border-line">
          <Image
            src="/images/clinical/lab-amr.jpg"
            alt="Antibiotic-susceptibility culture plate in the SPHMMC research laboratory"
            width={1600}
            height={720}
            priority
            quality={90}
            className="h-52 w-full object-cover sm:h-64"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <SectionHeading eyebrow="How Research is Organised" title="The Research & Community Service Corporate Directorate" />
        <div className="grid gap-5 md:grid-cols-2">
          {pillars.map((p) => (
            <Link
              key={p.name}
              href={p.href}
              className="group rounded-xl border border-line p-6 text-center transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md"
            >
              <h2 className="font-display text-xl font-bold text-navy group-hover:text-brand">{p.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
              <p className="mt-3 text-sm font-bold text-brand">Learn more →</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-paper py-14">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Platforms & Output" title="Where Our Science Lives" />
          <div className="grid gap-5 md:grid-cols-3">
            {platforms.map((p) =>
              p.external ? (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border border-line bg-white p-6 text-center transition hover:shadow-md"
                >
                  <h2 className="font-display text-lg font-bold text-navy group-hover:text-brand">{p.name} ↗</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
                </a>
              ) : (
                <Link
                  key={p.name}
                  href={p.href}
                  className="group rounded-xl border border-line bg-white p-6 text-center transition hover:shadow-md"
                >
                  <h2 className="font-display text-lg font-bold text-navy group-hover:text-brand">{p.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
                </Link>
              )
            )}
          </div>

          <div className="mt-10 rounded-xl bg-navy p-8 text-center text-white">
            <h2 className="font-display text-2xl font-bold">Want to collaborate?</h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-white/80">
              The Partnership &amp; Collaboration Directorate manages institutional research and
              training agreements with universities, health systems and industry — locally and
              internationally.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-block rounded-md bg-gold px-6 py-3 font-display font-bold text-navy-deep transition hover:brightness-105"
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
