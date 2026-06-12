import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { INSTITUTION, HISTORY } from "@/data/institution";
import { PageHero, Breadcrumbs, SectionHeading } from "@/components/ui";

const CAMPUS_PHOTOS = [
  { src: "/images/campus/facade.png", alt: "The St. Paul's Hospital main building with its bilingual signage" },
  { src: "/images/campus/cardiovascular.png", alt: "The Cardiovascular Center building" },
  { src: "/images/campus/gi-center.png", alt: "The Gastrointestinal (GI) Center building" },
];

export const metadata: Metadata = {
  title: "About the College",
  description:
    "St. Paul's Hospital Millennium Medical College at a glance — history since 1968, mission, vision and core values.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About SPHMMC"
        title="A beacon of hope and innovation in healthcare and medical education"
        intro="From a charitable hospital founded in 1968 to Ethiopia's premier academic medical centre — St. Paul's integrates education, research, clinical service and community engagement under one mission."
      />
      <Breadcrumbs items={[{ label: "About" }]} />

      {/* At a glance */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="At a Glance" title="St. Paul's Hospital Millennium Medical College" />
            <div className="space-y-4 leading-relaxed text-ink">
              <p>{HISTORY.founding}</p>
              <p>{HISTORY.millennium}</p>
              <p>{HISTORY.growth}</p>
              <p>{HISTORY.restructure2026}</p>
            </div>
          </div>
          <aside className="space-y-4">
            <div className="rounded-xl border border-line bg-paper p-5">
              <h3 className="font-display text-lg font-bold text-navy">Key Figures</h3>
              <dl className="mt-3 space-y-3">
                {INSTITUTION.stats.map((s) => (
                  <div key={s.label} className="flex items-baseline justify-between gap-3 border-b border-line/70 pb-2 last:border-0">
                    <dt className="text-sm text-muted">{s.label}</dt>
                    <dd className="font-display text-xl font-bold text-brand">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="rounded-xl border border-line p-5">
              <h3 className="font-display text-lg font-bold text-navy">Explore</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><Link href="/about/leadership" className="font-semibold text-brand hover:underline">Leadership & governance →</Link></li>
                <li><Link href="/about/organogram" className="font-semibold text-brand hover:underline">Organisational structure (2026) →</Link></li>
                <li><Link href="/offices" className="font-semibold text-brand hover:underline">Offices & directorates →</Link></li>
                <li><Link href="/academics" className="font-semibold text-brand hover:underline">Schools & programmes →</Link></li>
              </ul>
            </div>
          </aside>
        </div>

        {/* Campus photo strip */}
        <div className="mt-12 grid gap-3 sm:grid-cols-3">
          {CAMPUS_PHOTOS.map((p) => (
            <div key={p.src} className="overflow-hidden rounded-xl border border-line">
              <Image
                src={p.src}
                alt={p.alt}
                width={880}
                height={560}
                className="h-48 w-full object-cover transition hover:scale-105"
              />
            </div>
          ))}
        </div>
        <p className="mt-2 text-xs text-muted">
          The St. Paul&apos;s campus — the historic main hospital, the Cardiovascular Center and the GI Center.
        </p>
      </section>

      {/* Vision / Mission */}
      <section className="bg-navy py-14 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl border border-white/15 bg-white/5 p-7">
              <p className="font-display text-sm font-bold uppercase tracking-widest text-gold">Our Vision</p>
              <p className="mt-3 font-display text-2xl font-bold leading-snug">{INSTITUTION.vision}</p>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 p-7">
              <p className="font-display text-sm font-bold uppercase tracking-widest text-gold">Our Mission</p>
              <ul className="mt-3 space-y-2.5">
                {INSTITUTION.mission.map((m, i) => (
                  <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-white/90">
                    <span aria-hidden className="mt-0.5 text-sky">✦</span>
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-6 text-xs text-white/60">
            Vision, mission and core values of Saint Paul&apos;s Hospital Millennium Medical College.
          </p>
        </div>
      </section>

      {/* Core values */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <SectionHeading
          eyebrow="What Guides Us"
          title="Core Values"
          intro="Eight values guide every decision in our wards, classrooms and laboratories."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INSTITUTION.coreValues.map((v) => (
            <div key={v.name} className="rounded-lg border border-line p-5">
              <h3 className="font-display text-base font-bold text-brand">{v.name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{v.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-xl border border-gold/40 bg-gold/10 p-5 text-sm leading-relaxed text-ink">
          <strong className="font-display">The Dual Mandate.</strong> {INSTITUTION.dualMandate}
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t border-line bg-paper py-14">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Our Story" title="Milestones" />
          <ol className="relative ml-3 space-y-7 border-l-2 border-brand/30 pl-7">
            {HISTORY.milestones.map((m) => (
              <li key={m.year} className="relative">
                <span aria-hidden className="absolute -left-[37px] top-1 h-4 w-4 rounded-full border-4 border-paper bg-brand" />
                <p className="font-display text-xl font-bold text-brand">{m.year}</p>
                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-ink">{m.event}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
