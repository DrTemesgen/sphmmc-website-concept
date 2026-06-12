import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero, Breadcrumbs, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Millennium Health Innovation Hub",
  description:
    "The Millennium Health Innovation Hub — Ethiopia's first medical-institution-led health innovation and startup initiative, with the MedStart Accelerator and the IDREAM molecular lab.",
};

const pillars = [
  {
    name: "MedStart Accelerator",
    tag: "Startup incubation",
    text: "A structured incubation track that turns clinical insight into ventures — taking student, resident and faculty teams from problem to prototype to pilot, with mentorship, seed support and a path to market. The first medical-institution-led health-startup accelerator in Ethiopia.",
  },
  {
    name: "Innovation & Technology Transfer",
    tag: "IP & commercialisation",
    text: "The College's framework for intellectual property, patents, prototypes and technology packages — protecting inventions and licensing them responsibly.",
    href: "/offices/innovation-technology-transfer",
  },
  {
    name: "IDREAM Molecular Lab",
    tag: "Deep-tech research",
    text: "An advanced molecular and genomic-epidemiology laboratory (BSL-2, Oxford Nanopore sequencing, multiplex PCR, AMR testing) established in 2022 for pandemic preparedness — the research engine behind data-driven health innovation.",
  },
  {
    name: "Digital Health & AI",
    tag: "Applied AI",
    text: "Building on the College's AI-in-medicine policy and partnerships (e.g. KOICA-supported AI diagnostics) to bring decision support, imaging AI and telemedicine into routine care — coordinated with the Health Information System Directorate.",
  },
];

const focusAreas = [
  "Maternal, newborn & reproductive health technologies",
  "Medical devices & biomedical engineering",
  "Diagnostics, genomics & antimicrobial-resistance tools",
  "Digital health, telemedicine & clinical AI",
  "Health-systems and supply-chain solutions",
  "Assistive and rehabilitation technologies",
];

const journey = [
  ["Discover", "Clinicians, residents and students surface real problems from the wards and clinics."],
  ["Design", "Multidisciplinary teams prototype solutions with mentorship and skills support from CPID and partners."],
  ["Validate", "Ideas are tested for clinical value and ethics (IRERC), with IP protected by the Innovation & Technology Transfer Directorate."],
  ["Launch", "Promising ventures enter the MedStart Accelerator for seed support, piloting inside the hospital, and a route to market."],
];

export default function InitiativesPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality & Innovation"
        title="Millennium Health Innovation Hub"
        intro="Ethiopia's first medical-institution-led health innovation and startup initiative — where clinical problems become products, and ideas from the bedside reach the whole country."
      />
      <Breadcrumbs items={[{ label: "Innovation & Startups" }]} />

      {/* First-of-its-kind banner */}
      <section className="border-b border-line bg-gradient-to-r from-gold/15 to-sky/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-8 text-center sm:flex-row sm:text-left">
          <span aria-hidden className="text-4xl">🚀</span>
          <p className="text-lg font-semibold leading-relaxed text-navy">
            A first for Ethiopia: a teaching hospital and medical college running its own end-to-end
            health-innovation pipeline — from molecular research to startup launch — under the 2026
            Quality &amp; Innovation Corporate Directorate.
          </p>
        </div>
      </section>

      {/* Overview with image */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Why a Hub" title="Innovation built into the mission" />
            <div className="space-y-4 leading-relaxed text-ink">
              <p>
                St. Paul&apos;s sees around 1,200 patients a day across every specialty. That scale is
                also Ethiopia&apos;s richest source of real, unmet clinical problems — and the people
                best placed to solve them are the clinicians, nurses, scientists and students who meet
                those problems every day.
              </p>
              <p>
                The Millennium Health Innovation Hub gives them the structure to act: a place to take
                an idea from the ward to a working product, with research facilities, mentorship,
                ethics and IP support, seed funding, and a hospital ready to be the first pilot site.
              </p>
              <p>
                It is the first initiative of its kind led by a medical institution in Ethiopia —
                turning a teaching hospital into an engine of homegrown health technology.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-line">
            <Image
              src="/images/lab/all-labs.png"
              alt="Advanced molecular laboratory equipment at the IDREAM Lab — PCR systems, analysers and an automated blood-culture system"
              width={1384}
              height={1136}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Four pillars */}
      <section className="bg-paper py-14">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="What's Inside" title="Four Engines, One Pipeline" />
          <div className="grid gap-5 sm:grid-cols-2">
            {pillars.map((p) => {
              const inner = (
                <div className="flex h-full flex-col rounded-xl border border-line bg-white p-6 transition hover:border-brand/40 hover:shadow-md">
                  <span className="text-xs font-bold uppercase tracking-wide text-sky">{p.tag}</span>
                  <h3 className="mt-1 font-display text-xl font-bold text-navy">{p.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.text}</p>
                  {p.href && <p className="mt-3 text-sm font-bold text-brand">Learn more →</p>}
                </div>
              );
              return p.href ? (
                <Link key={p.name} href={p.href} className="block h-full">{inner}</Link>
              ) : (
                <div key={p.name}>{inner}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <SectionHeading eyebrow="How It Works" title="From Bedside to Market" />
        <div className="grid gap-5 md:grid-cols-4">
          {journey.map(([title, text], i) => (
            <div key={title} className="relative rounded-xl border border-line p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand font-display text-lg font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-navy">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* IDREAM spotlight */}
      <section className="bg-navy py-14 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="order-2 grid grid-cols-2 gap-3 lg:order-1">
              <Image src="/images/lab/nanopore.png" alt="Oxford Nanopore genomic sequencing device" width={500} height={500} className="rounded-xl border border-white/10 bg-white object-cover" />
              <Image src="/images/lab/pcr.png" alt="Multiplex real-time PCR system" width={500} height={500} className="rounded-xl border border-white/10 bg-white object-cover" />
              <Image src="/images/lab/blood-culture.png" alt="Automated blood-culture system" width={500} height={400} className="col-span-2 rounded-xl border border-white/10 bg-white object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading light eyebrow="Research Engine" title="The IDREAM Molecular Lab" />
              <p className="leading-relaxed text-white/85">
                Established in December 2022 for pandemic preparedness — with support from the Bavarian
                State Ministry of Science &amp; Art and GIZ via LMU Klinikum Munich — IDREAM is a
                BSL-2 molecular laboratory running genomic sequencing, multiplex PCR, immune-response
                detection and antimicrobial-resistance testing.
              </p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {[
                  "Oxford Nanopore sequencing",
                  "Seegene–BioRad multiplex PCR",
                  "Automated blood-culture system",
                  "ADAGIO AMR zone reader",
                  "Maelstrom 4810 extraction robot",
                  "Bio-banking & sample storage",
                ].map((t) => (
                  <li key={t} className="flex gap-2 text-sm text-white/90">
                    <span aria-hidden className="text-sky">▹</span>
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-white/70">
                Programmes include EpiGen Ethiopia (pathogen genomic epidemiology) and national
                antimicrobial-resistance research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <SectionHeading eyebrow="Where We Innovate" title="Priority Focus Areas" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((f) => (
            <div key={f} className="flex items-center gap-3 rounded-lg border border-line px-4 py-3 text-sm font-semibold text-navy">
              <span aria-hidden className="text-brand">◆</span>
              {f}
            </div>
          ))}
        </div>
      </section>

      {/* Get involved */}
      <section className="border-t border-line bg-paper py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border border-line bg-white p-6">
              <h3 className="font-display text-lg font-bold text-navy">Innovators & students</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Have an idea from the ward, lab or classroom? Bring it to the Hub and join the next
                MedStart cohort.
              </p>
            </div>
            <div className="rounded-xl border border-line bg-white p-6">
              <h3 className="font-display text-lg font-bold text-navy">Partners & investors</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Co-develop, license a technology, or support a cohort. The Partnership &amp;
                Collaboration Directorate manages agreements.
              </p>
              <Link href="/offices/partnership-collaboration" className="mt-2 inline-block text-sm font-bold text-brand hover:underline">
                Partnerships →
              </Link>
            </div>
            <div className="rounded-xl border border-line bg-white p-6">
              <h3 className="font-display text-lg font-bold text-navy">Get in touch</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Reach the Innovation &amp; Technology Transfer Directorate to discuss an idea,
                collaboration or visit.
              </p>
              <Link href="/contact" className="mt-2 inline-block text-sm font-bold text-brand hover:underline">
                Contact the College →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
