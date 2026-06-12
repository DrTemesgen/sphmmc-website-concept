import Link from "next/link";
import Image from "next/image";
import { INSTITUTION } from "@/data/institution";

const year = 2026;

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Identity */}
          <div className="lg:col-span-2">
            <div className="inline-block rounded bg-white p-2">
              <Image src="/sphmmc-logo.png" alt="SPHMMC" width={101} height={60} className="h-12 w-auto" />
            </div>
            <p className="mt-4 font-display text-lg font-bold text-gold">
              “{INSTITUTION.tagline}”
            </p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-white/75">
              {INSTITUTION.name} — Ethiopia&apos;s premier academic medical centre, integrating
              patient care, education, research and community service since 1968.
            </p>
            <div className="mt-4 flex gap-3" aria-label="Social media">
              <a href={INSTITUTION.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-full bg-white/10 p-2.5 transition hover:bg-brand">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M13.5 21v-7h2.6l.4-3h-3V9.1c0-.9.3-1.5 1.6-1.5H16.7V4.9c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4V11H7.9v3h2.6v7h3z"/></svg>
              </a>
              <a href={INSTITUTION.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full bg-white/10 p-2.5 transition hover:bg-brand">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href={INSTITUTION.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="rounded-full bg-white/10 p-2.5 transition hover:bg-brand">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M21.6 7.2a2.6 2.6 0 00-1.8-1.9C18.2 5 12 5 12 5s-6.2 0-7.8.3a2.6 2.6 0 00-1.8 1.9A27 27 0 002 12c0 1.6.1 3.2.4 4.8a2.6 2.6 0 001.8 1.9c1.6.3 7.8.3 7.8.3s6.2 0 7.8-.3a2.6 2.6 0 001.8-1.9c.3-1.6.4-3.2.4-4.8s-.1-3.2-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick actions */}
          <nav aria-label="Quick actions">
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-gold">For Patients</h2>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li><Link href="/private-wing/book" className="hover:text-white hover:underline">Book an appointment</Link></li>
              <li><Link href="/private-wing/doctors" className="hover:text-white hover:underline">Find a doctor</Link></li>
              <li><Link href="/patient-care/emergency" className="hover:text-white hover:underline">Emergency services</Link></li>
              <li><Link href="/patient-care/referrals" className="hover:text-white hover:underline">Referral process</Link></li>
              <li><Link href="/centers" className="hover:text-white hover:underline">Specialty centres</Link></li>
              <li><Link href="/education" className="hover:text-white hover:underline">Health education</Link></li>
            </ul>
          </nav>

          {/* College */}
          <nav aria-label="College links">
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-gold">College</h2>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li><Link href="/academics" className="hover:text-white hover:underline">Academics</Link></li>
              <li><Link href="/academics/programs" className="hover:text-white hover:underline">Programmes A–Z</Link></li>
              <li><Link href="/academics/departments" className="hover:text-white hover:underline">Departments A–Z</Link></li>
              <li><Link href="/academics/staff" className="hover:text-white hover:underline">Faculty &amp; Staff</Link></li>
              <li><Link href="/academics/examination-centre" className="hover:text-white hover:underline">Examination Centre (PACE)</Link></li>
              <li><Link href="/research" className="hover:text-white hover:underline">Research</Link></li>
              <li><Link href="/offices" className="hover:text-white hover:underline">Offices & directorates</Link></li>
              <li><Link href="/about/organogram" className="hover:text-white hover:underline">Organisational structure</Link></li>
              <li><a href={INSTITUTION.portals.studentPortal} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline">Student portal ↗</a></li>
              <li><a href={INSTITUTION.portals.journal} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline">Millennium Journal of Health ↗</a></li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-gold">Contact</h2>
            <address className="mt-3 space-y-2 text-sm not-italic text-white/80">
              <p>{INSTITUTION.contact.address}</p>
              <p>{INSTITUTION.contact.poBox}</p>
              <p>
                <a href={`tel:${INSTITUTION.contact.phone.replace(/\s/g, "")}`} className="hover:text-white hover:underline">
                  {INSTITUTION.contact.phone}
                </a>
              </p>
              <p>
                Hotline:{" "}
                <a href={`tel:${INSTITUTION.contact.shortCode}`} className="font-bold text-white hover:underline">
                  {INSTITUTION.contact.shortCode}
                </a>
              </p>
              <p>
                <a href={`mailto:${INSTITUTION.contact.email}`} className="hover:text-white hover:underline">
                  {INSTITUTION.contact.email}
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 bg-[#0b2240]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-white/60 sm:flex-row">
          <p>© {year} {INSTITUTION.name}. All rights reserved.</p>
          <p>
            <Link href="/about/organogram" className="hover:text-white hover:underline">
              Organisational Structure 2026
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
