import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CARE_PATHWAYS, SERVICE_DIRECTORATES } from "@/data/services";
import { INSTITUTION } from "@/data/institution";
import { PageHero, Breadcrumbs, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Getting Care at St. Paul's",
  description:
    "How to access care at SPHMMC — 24/7 emergency, referral outpatient clinics, the private wing and national specialty centres.",
};

export default function PatientCarePage() {
  return (
    <>
      <PageHero
        eyebrow="Patient Care"
        title="Getting Care at St. Paul's"
        intro="Four ways to reach our services — and a team that sees around 1,200 patients every single day."
      />
      <Breadcrumbs items={[{ label: "Patient Care" }]} />

      <section className="mx-auto max-w-7xl px-4 pt-10">
        <div className="overflow-hidden rounded-2xl border border-line">
          <Image
            src="/images/clinical/icu.jpg"
            alt="A modern patient-care room at St. Paul's"
            width={1400}
            height={460}
            priority
            className="h-52 w-full object-cover sm:h-64"
          />
        </div>
      </section>

      {/* Pathways */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <SectionHeading eyebrow="Where do I go?" title="Choose Your Path to Care" />
        <div className="grid gap-5 md:grid-cols-2">
          {CARE_PATHWAYS.map((p) => (
            <article key={p.name} className="flex flex-col items-center rounded-xl border border-line p-6 text-center">
              <h2 className="font-display text-xl font-bold text-navy">{p.name}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.text}</p>
              <Link href={p.cta.href} className="mt-4 font-bold text-brand hover:underline">
                {p.cta.label} →
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-red-200 bg-red-50 p-5">
          <p className="font-display text-lg font-bold text-red-700">In an emergency</p>
          <p className="mt-1 text-sm leading-relaxed text-red-800">
            Call <a href="tel:976" className="font-bold underline">976</a> or come directly to the
            emergency department — open 24 hours a day, 7 days a week. No referral is needed for
            emergencies.
          </p>
        </div>
      </section>

      {/* Patient info */}
      <section className="border-t border-line bg-paper py-14">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="For Patients & Visitors" title="Practical Information" />
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border border-line bg-white p-5">
              <h3 className="font-display text-lg font-bold text-navy">What to bring</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-ink">
                <li>• Identity card (kebele ID or passport)</li>
                <li>• Referral letter (for outpatient clinics)</li>
                <li>• Previous medical records and medications</li>
                <li>• CBHI / insurance documentation if applicable</li>
              </ul>
            </div>
            <div className="rounded-xl border border-line bg-white p-5">
              <h3 className="font-display text-lg font-bold text-navy">Location & contact</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink">
                {INSTITUTION.contact.address}
                <br />
                {INSTITUTION.contact.poBox}
                <br />
                Phone: <a href={`tel:${INSTITUTION.contact.phone.replace(/\s/g, "")}`} className="font-semibold text-brand">{INSTITUTION.contact.phone}</a>
                <br />
                Hotline: <a href="tel:976" className="font-semibold text-brand">976</a>
              </p>
            </div>
            <div className="rounded-xl border border-line bg-white p-5">
              <h3 className="font-display text-lg font-bold text-navy">Patient rights & safety</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink">
                Patient safety prevails over every other consideration at this College — it is
                written into our 2026 legislation. Concerns? Contact the Infection Prevention &amp;
                Patient Safety Directorate or the Good Governance Executive via{" "}
                <Link href="/contact" className="font-semibold text-brand hover:underline">our contact page</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service directorates */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <SectionHeading
          eyebrow="Behind the Scenes"
          title="Medical Service Directorates"
          intro="Eight directorates keep the hospital running — from theatres and intensive care to laboratories and patient flow."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICE_DIRECTORATES.map((s) => (
            <Link
              key={s.slug}
              href={`/patient-care/directorates/${s.slug}`}
              className="group rounded-lg border border-line p-4 transition hover:border-brand/40 hover:shadow-sm"
            >
              <h3 className="font-display text-base font-bold text-navy group-hover:text-brand">{s.name}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">{s.summary.split(" — ")[0].split(". ")[0].replace(/\.$/, "")}.</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
