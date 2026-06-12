import type { Metadata } from "next";
import Link from "next/link";
import { activeSpecialties } from "@/data/doctors";
import { INSTITUTION } from "@/data/institution";
import { PageHero, Breadcrumbs, SectionHeading, CTAButton } from "@/components/ui";

export const metadata: Metadata = {
  title: "Private Wing",
  description:
    "The SPHMMC Private Wing — evening and weekend consultations with senior specialists, bookable online. No referral needed.",
};

export default function PrivateWingPage() {
  const specialties = activeSpecialties();
  return (
    <>
      <PageHero
        eyebrow="Private Wing"
        title="Senior Specialists. Your Schedule."
        intro="The Private Wing gives you direct access to the College's most experienced consultants — in the evenings and weekends, without a referral. Book online in minutes."
      />
      <Breadcrumbs items={[{ label: "Private Wing" }]} />

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="How It Works" title="Four Simple Steps" />
            <ol className="space-y-5">
              {[
                ["Choose your specialist", "Browse consultants by specialty, language and clinic day — or pick the specialty and we'll show you who's available."],
                ["Pick a time", "Real availability, evenings and weekends. Choose the slot that suits you."],
                ["Tell us who's coming", "Just a name and phone number — no account, no paperwork."],
                ["Get your confirmation", "Instant confirmation with a booking reference. Pay the consultation fee at the Private Wing reception on arrival."],
              ].map(([title, text], i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand font-display text-lg font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-display text-lg font-bold text-navy">{title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-muted">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton href="/private-wing/book">Book an appointment</CTAButton>
              <Link
                href="/private-wing/doctors"
                className="inline-block rounded-md border-2 border-brand px-6 py-3 font-display font-bold text-brand transition hover:bg-brand hover:text-white"
              >
                Find a doctor
              </Link>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-xl border border-line bg-paper p-6">
              <h2 className="font-display text-lg font-bold text-navy">Why the Private Wing?</h2>
              <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-ink">
                <li className="flex gap-2"><span aria-hidden className="text-brand">✔</span> See a senior consultant directly — no referral letter needed</li>
                <li className="flex gap-2"><span aria-hidden className="text-brand">✔</span> Evening and weekend clinics that fit around work</li>
                <li className="flex gap-2"><span aria-hidden className="text-brand">✔</span> Full access to the hospital&apos;s laboratories, imaging and theatres</li>
                <li className="flex gap-2"><span aria-hidden className="text-brand">✔</span> Income supports the College&apos;s public service and teaching mission</li>
              </ul>
            </div>
            <div className="rounded-xl border border-line p-6">
              <h2 className="font-display text-lg font-bold text-navy">Specialties Available</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {specialties.map((s) => (
                  <span key={s} className="rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-navy">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-gold/40 bg-gold/10 p-5 text-sm leading-relaxed text-ink">
              <strong>Fees:</strong> consultation fees vary by consultant (about 800–1,200 ETB) and
              are shown on each doctor&apos;s profile. Investigations and procedures are charged
              separately. Questions? Call{" "}
              <a href={`tel:${INSTITUTION.contact.phone.replace(/\s/g, "")}`} className="font-bold text-brand">
                {INSTITUTION.contact.phone}
              </a>
              .
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
