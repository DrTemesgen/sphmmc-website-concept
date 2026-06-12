import type { Metadata } from "next";
import Link from "next/link";
import { INSTITUTION } from "@/data/institution";
import { PageHero, Breadcrumbs, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact St. Paul's Hospital Millennium Medical College — Gulele Sub-City, Addis Ababa. Hotline 976.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        intro="We're in Gulele Sub-City, Addis Ababa — and reachable by phone, email and social media."
      />
      <Breadcrumbs items={[{ label: "Contact" }]} />

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-5">
            <div className="rounded-xl border border-red-200 bg-red-50 p-5">
              <p className="font-display text-lg font-bold text-red-700">Emergency — 24/7</p>
              <p className="mt-1 text-sm text-red-800">
                Call <a href="tel:976" className="font-bold underline">976</a> or come directly to
                the emergency department. No referral needed.
              </p>
            </div>

            <div className="rounded-xl border border-line p-6">
              <SectionHeading center={false} eyebrow="Reach Us" title="Contact Details" />
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="font-bold text-navy">Address</dt>
                  <dd className="mt-0.5 text-muted">
                    {INSTITUTION.contact.address}
                    <br />
                    {INSTITUTION.contact.poBox}
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-navy">Phone</dt>
                  <dd className="mt-0.5">
                    <a href={`tel:${INSTITUTION.contact.phone.replace(/\s/g, "")}`} className="font-semibold text-brand hover:underline">
                      {INSTITUTION.contact.phone}
                    </a>{" "}
                    · Hotline{" "}
                    <a href="tel:976" className="font-semibold text-brand hover:underline">976</a>
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-navy">Email</dt>
                  <dd className="mt-0.5">
                    <a href={`mailto:${INSTITUTION.contact.email}`} className="font-semibold text-brand hover:underline">
                      {INSTITUTION.contact.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-navy">Social media</dt>
                  <dd className="mt-1 flex flex-wrap gap-2">
                    <a href={INSTITUTION.social.facebook} target="_blank" rel="noopener noreferrer" className="rounded-md border border-line px-3 py-1.5 text-xs font-bold text-navy hover:bg-paper">Facebook ↗</a>
                    <a href={INSTITUTION.social.instagram} target="_blank" rel="noopener noreferrer" className="rounded-md border border-line px-3 py-1.5 text-xs font-bold text-navy hover:bg-paper">Instagram ↗</a>
                    <a href={INSTITUTION.social.youtube} target="_blank" rel="noopener noreferrer" className="rounded-md border border-line px-3 py-1.5 text-xs font-bold text-navy hover:bg-paper">YouTube ↗</a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-xl border border-line bg-paper p-6">
              <h2 className="font-display text-lg font-bold text-navy">Looking for something specific?</h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li><Link href="/private-wing/book" className="font-semibold text-brand hover:underline">Book a private consultation →</Link></li>
                <li><Link href="/patient-care/referrals" className="font-semibold text-brand hover:underline">Referral process →</Link></li>
                <li><Link href="/offices" className="font-semibold text-brand hover:underline">Office directory →</Link></li>
                <li>
                  <a href={INSTITUTION.portals.studentPortal} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand hover:underline">
                    Student portal / Registrar ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-line">
            <iframe
              title="Map — St. Paul's Hospital Millennium Medical College, Addis Ababa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1721356825374!2d38.72562537511361!3d9.048057988690129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b88afe0282569%3A0xdc11a3fc3a34debf!2sSt.%20Paul%27s%20Hospital%2C%20Ethiopia!5e0!3m2!1sen!2set!4v1781284814048!5m2!1sen!2set"
              className="h-full min-h-[420px] w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
