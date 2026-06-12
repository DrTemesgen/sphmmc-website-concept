import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SCHOOLS, SCHOOL_IMAGES } from "@/data/schools";
import { INSTITUTION } from "@/data/institution";
import { PageHero, Breadcrumbs, SectionHeading, CTAButton } from "@/components/ui";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "Four schools, 40+ residency, fellowship and graduate programmes — medical and health sciences education at SPHMMC.",
};

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        eyebrow="The College"
        title="Education That Heals a Nation"
        intro="Ethiopia's pioneering integrated, problem-based medical curriculum — delivered across four schools inside one of the country's busiest referral hospitals."
      />
      <Breadcrumbs items={[{ label: "Academics" }]} />

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="mb-10 overflow-hidden rounded-2xl border border-line">
          <Image
            src="/images/community/students.png"
            alt="SPHMMC students in white coats celebrating on campus"
            width={1019}
            height={758}
            className="h-64 w-full object-cover sm:h-80"
          />
        </div>
        <SectionHeading eyebrow="Our Schools" title="Four Schools, One Mission" />
        <div className="grid gap-6 md:grid-cols-2">
          {SCHOOLS.map((s) => (
            <Link
              key={s.slug}
              href={`/academics/schools/${s.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-line transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md"
            >
              <Image
                src={SCHOOL_IMAGES[s.slug].src}
                alt={SCHOOL_IMAGES[s.slug].alt}
                width={700}
                height={300}
                className="h-40 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-display text-2xl font-bold text-navy group-hover:text-brand">{s.name}</h2>
                <p className="mt-2 text-sm font-semibold text-sky">{s.tagline}</p>
                <ul className="mt-4 space-y-1.5">
                  {s.highlights.slice(0, 3).map((h, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted">
                      <span aria-hidden className="text-brand">•</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 font-bold text-brand">Visit the school →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-paper py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-line bg-white p-6">
              <h3 className="font-display text-lg font-bold text-navy">Programmes A–Z</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                The full registrar catalogue — MD, 20 residencies, 30 fellowships, master&apos;s and
                PhD programmes, searchable by school and level.
              </p>
              <Link href="/academics/programs" className="mt-3 inline-block font-bold text-brand hover:underline">
                Browse programmes →
              </Link>
            </div>
            <div className="rounded-xl border border-line bg-white p-6">
              <h3 className="font-display text-lg font-bold text-navy">Departments A–Z</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Explore all clinical and preclinical departments — each with its services,
                programmes and faculty.
              </p>
              <Link href="/academics/departments" className="mt-3 inline-block font-bold text-brand hover:underline">
                Browse departments →
              </Link>
            </div>
            <div className="rounded-xl border border-line bg-white p-6">
              <h3 className="font-display text-lg font-bold text-navy">Admissions & Registrar</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Applications, registration, transcripts and certification are handled by the
                Registrar &amp; Alumni Directorate through the student portal.
              </p>
              <a
                href={INSTITUTION.portals.studentPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block font-bold text-brand hover:underline"
              >
                Student portal ↗
              </a>
            </div>
            <div className="rounded-xl border border-line bg-white p-6">
              <h3 className="font-display text-lg font-bold text-navy">Professional Development</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                The Centre for Professional &amp; Institutional Development (CPID) runs internal and
                external CPD, digital learning and faculty development.
              </p>
              <a
                href={INSTITUTION.portals.cpid}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block font-bold text-brand hover:underline"
              >
                CPID ↗
              </a>
            </div>
          </div>

          <div className="mt-10 rounded-xl bg-navy p-8 text-center text-white">
            <h2 className="font-display text-2xl font-bold">Considering St. Paul&apos;s?</h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-white/80">
              Admissions announcements — entrance exams, residency matching and graduate programme
              calls — are published on our news page and the student portal.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <CTAButton href="/news" variant="gold">Latest announcements</CTAButton>
              <CTAButton href="/contact" variant="outline">Contact the College</CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
