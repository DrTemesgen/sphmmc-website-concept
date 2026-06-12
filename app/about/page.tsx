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
            <SectionHeading center={false} eyebrow="At a Glance" title="St. Paul's Hospital Millennium Medical College" />
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
            <div key={v.name} className="flex flex-col items-center rounded-lg border border-line p-5 text-center">
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
      <section className="border-t border-line bg-gradient-to-b from-paper to-white py-16">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHeading center eyebrow="Our Story" title="Six Decades of Firsts" intro="From a charitable hospital in 1968 to Ethiopia's premier academic medical centre." />
          <div className="relative mt-4">
            {/* Vertical gradient spine — left on mobile, centred on desktop */}
            <span
              aria-hidden
              className="absolute left-6 top-2 h-[calc(100%-1rem)] w-1 rounded-full bg-gradient-to-b from-brand via-sky to-gold md:left-1/2 md:-translate-x-1/2"
            />
            <ol className="space-y-6 md:space-y-3">
              {HISTORY.milestones.map((m, i) => {
                const right = i % 2 === 1;
                return (
                  <li key={m.year} className="relative md:grid md:grid-cols-2 md:items-center md:gap-12">
                    {/* Node */}
                    <span
                      aria-hidden
                      className="absolute left-6 top-6 z-10 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border-4 border-paper bg-gradient-to-br from-brand to-sky text-white shadow-lg md:left-1/2 md:top-1/2 md:-translate-y-1/2"
                    >
                      {MILESTONE_ICONS[i % MILESTONE_ICONS.length]}
                    </span>
                    {/* Card */}
                    <div
                      className={`ml-16 rounded-2xl border border-line bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md md:ml-0 ${
                        right ? "md:col-start-2 md:ml-2 md:pl-2" : "md:col-start-1 md:mr-2 md:pr-2 md:text-right"
                      }`}
                    >
                      <p className="font-display text-3xl font-bold text-brand">{m.year}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink">{m.event}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}

const MILESTONE_ICONS = [
  // 1968 — founding / building
  <svg key="b" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden><path d="M3 21h18M5 21V8l7-4 7 4v13M9 21v-5h6v5M10 11h4" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  // 2007 — school / graduation cap
  <svg key="c" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden><path d="M22 9 12 5 2 9l10 4 10-4zM6 11v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  // 2011 — establishment / seal
  <svg key="s" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden><circle cx="12" cy="9" r="5" /><path d="m9 13-1 7 4-2 4 2-1-7" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  // 2015 — transplant / heart
  <svg key="h" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 21s-7-4.5-9.3-9C1 8.5 2.6 5 6 5c2 0 3.2 1.2 4 2.3C10.8 6.2 12 5 14 5c3.4 0 5 3.5 3.3 7-2.3 4.5-9.3 9-9.3 9z" /></svg>,
  // 2022 — people / nursing
  <svg key="p" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden><circle cx="9" cy="8" r="3" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M17 14a4 4 0 0 0 0-8" strokeLinecap="round" /></svg>,
  // 2026 — structure / sitemap
  <svg key="g" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden><rect x="9" y="3" width="6" height="5" rx="1" /><rect x="3" y="16" width="6" height="5" rx="1" /><rect x="15" y="16" width="6" height="5" rx="1" /><path d="M12 8v4M6 16v-2h12v2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
];
