import type { Metadata } from "next";
import Link from "next/link";
import { INSTITUTION } from "@/data/institution";
import { PageHero, Breadcrumbs, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Referral Process",
  description:
    "How patients are referred to SPHMMC specialty clinics — for patients and referring health facilities.",
};

export default function ReferralsPage() {
  return (
    <>
      <PageHero
        eyebrow="Patient Care"
        title="The Referral Process"
        intro="St. Paul's is a national referral hospital: our specialty outpatient clinics serve patients referred from health centres and hospitals across Ethiopia, coordinated by the Patients Referral & Flow Directorate."
      />
      <Breadcrumbs items={[{ label: "Patient Care", href: "/patient-care" }, { label: "Referrals" }]} />

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="For Patients" title="If You Are Being Referred" />
            <ol className="space-y-4">
              {[
                ["Get your referral letter", "Your health centre or hospital issues a referral letter to St. Paul's stating your condition and the specialty needed."],
                ["Registration", "Bring the referral letter, your ID, and any previous records to the outpatient registration desk."],
                ["Appointment", "The Patients Referral & Flow Directorate schedules you into the correct specialty clinic based on urgency."],
                ["Your visit", "Arrive early with all documents. After your consultation, you may receive tests, treatment, admission, or a letter back to your referring facility."],
              ].map(([title, text], i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand font-display font-bold text-white">{i + 1}</span>
                  <div>
                    <p className="font-display font-bold text-navy">{title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-muted">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-6 rounded-lg bg-gold/10 p-4 text-sm leading-relaxed text-ink">
              <strong>Prefer not to wait for a referral?</strong> The{" "}
              <Link href="/private-wing" className="font-semibold text-brand hover:underline">Private Wing</Link>{" "}
              offers direct access to senior consultants in the evenings and weekends — bookable
              online without a referral.
            </p>
          </div>

          <div>
            <SectionHeading eyebrow="For Referring Facilities" title="Clinicians & Health Facilities" />
            <div className="space-y-4 text-sm leading-relaxed text-ink">
              <p>
                SPHMMC accepts referrals across all specialties listed in our{" "}
                <Link href="/academics/departments" className="font-semibold text-brand hover:underline">departments directory</Link>{" "}
                — including national referral programmes in kidney transplantation, fertility
                treatment and interventional cardiology.
              </p>
              <p>
                <strong>To refer a patient:</strong> include the clinical summary, investigations
                done, treatments given, and the reason for referral. Urgent referrals should be
                communicated by phone in advance.
              </p>
              <div className="rounded-xl border border-line bg-paper p-5">
                <p className="font-display font-bold text-navy">Referral coordination</p>
                <p className="mt-2">
                  Patients Referral &amp; Flow Directorate
                  <br />
                  Phone: <a href={`tel:${INSTITUTION.contact.phone.replace(/\s/g, "")}`} className="font-semibold text-brand">{INSTITUTION.contact.phone}</a>
                  <br />
                  Email: <a href={`mailto:${INSTITUTION.contact.email}`} className="font-semibold text-brand">{INSTITUTION.contact.email}</a>
                </p>
              </div>
              <p>
                Emergency cases need no referral —{" "}
                <Link href="/patient-care/emergency" className="font-semibold text-brand hover:underline">
                  emergency information
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
