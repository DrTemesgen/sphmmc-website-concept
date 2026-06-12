import type { Metadata } from "next";
import Link from "next/link";
import { INSTITUTION } from "@/data/institution";
import { PageHero, Breadcrumbs, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Emergency Services",
  description: "SPHMMC emergency department — open 24/7. Call 976. No referral needed.",
};

const warningSigns = [
  "Chest pain or pressure",
  "Difficulty breathing",
  "Severe bleeding or major injury",
  "Sudden weakness, facial droop or slurred speech (stroke signs)",
  "Loss of consciousness",
  "Severe abdominal pain",
  "Poisoning or overdose",
  "Labour complications or heavy pregnancy bleeding",
  "High fever in a newborn",
  "Thoughts of self-harm",
];

export default function EmergencyPage() {
  return (
    <>
      <PageHero
        eyebrow="Patient Care"
        title="Emergency Services — Open 24/7"
        intro="Our adult and paediatric emergency departments never close. In an emergency, come directly — no referral is needed."
      />
      <Breadcrumbs items={[{ label: "Patient Care", href: "/patient-care" }, { label: "Emergency" }]} />

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="rounded-2xl bg-red-600 p-8 text-center text-white">
          <p className="font-display text-lg font-bold uppercase tracking-widest">In an emergency, call</p>
          <a href="tel:976" className="mt-2 block font-display text-6xl font-bold hover:underline">976</a>
          <p className="mt-3 text-white/85">
            or {INSTITUTION.contact.phone} · {INSTITUTION.contact.address}
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Know the Signs" title="Come Immediately If You Have…" />
            <ul className="space-y-2.5">
              {warningSigns.map((s, i) => (
                <li key={i} className="flex gap-3 rounded-md border border-line px-4 py-2.5 text-sm font-semibold text-ink">
                  <span aria-hidden className="text-red-600">⚠</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="What to Expect" title="When You Arrive" />
            <ol className="space-y-4">
              {[
                ["Triage", "A trained nurse assesses every arrival immediately. The sickest patients are seen first — not the first to arrive."],
                ["Stabilisation", "Our emergency physicians and residents stabilise life-threatening conditions in dedicated resuscitation rooms."],
                ["Diagnosis", "Laboratory, imaging and specialist consultations are available around the clock."],
                ["Admission or discharge", "You may be admitted to a ward or ICU, observed, or discharged with follow-up instructions and referrals."],
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
            <p className="mt-6 rounded-lg bg-paper p-4 text-sm leading-relaxed text-ink">
              <strong>Not an emergency?</strong> For non-urgent specialist care, use the{" "}
              <Link href="/patient-care/referrals" className="font-semibold text-brand hover:underline">referral process</Link>{" "}
              or book a{" "}
              <Link href="/private-wing" className="font-semibold text-brand hover:underline">private-wing consultation</Link>{" "}
              — this keeps the emergency department free for those who need it most.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
