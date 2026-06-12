import type { Metadata } from "next";
import Link from "next/link";
import { PRESS_OUTLETS, PRESS_ITEMS } from "@/data/press";
import { INSTITUTION } from "@/data/institution";
import { PageHero, Breadcrumbs, SectionHeading } from "@/components/ui";
import PressGridClient from "@/components/PressGrid";

export const metadata: Metadata = {
  title: "In the News",
  description:
    "Press and media coverage of St. Paul's Hospital Millennium Medical College — first-in-Ethiopia transplant, IVF, cancer and microsurgery milestones, and international partnerships.",
};

export default function PressPage() {
  const years = [...new Set(PRESS_ITEMS.map((i) => i.year))].sort((a, b) => a - b);
  return (
    <>
      <PageHero
        eyebrow="Newsroom"
        title="In the News"
        intro="From Ethiopia's first kidney transplant to its first public IVF centre and first microsurgery training — how St. Paul's milestones are reported by the press."
      />
      <Breadcrumbs items={[{ label: "News", href: "/news" }, { label: "In the News" }]} />

      {/* Outlet credibility strip */}
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-5">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-muted">As featured in</p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {PRESS_OUTLETS.map((o) => (
              <span key={o} className="font-display text-sm font-bold text-navy/70">{o}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <SectionHeading
          eyebrow={`Coverage ${years[0]}–${years[years.length - 1]}`}
          title="Media Coverage"
          intro="Independent reporting on the College. We link to each source — headlines and summaries are provided for reference."
        />
        {/* PressGrid is a client component imported below */}
        <PressGridClient />
      </section>

      {/* Media resources / press kit */}
      <section className="border-t border-line bg-navy py-14 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading light eyebrow="For Journalists" title="Media Resources" />
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border border-white/15 bg-white/5 p-6 text-center">
              <h3 className="font-display text-lg font-bold text-gold">Press contact</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/85">
                Media enquiries and interview requests are handled by the Public Relations &amp;
                Communication Executive.
              </p>
              <p className="mt-3 text-sm">
                <a href={`mailto:${INSTITUTION.contact.email}`} className="font-semibold text-sky hover:underline">
                  {INSTITUTION.contact.email}
                </a>
                <br />
                <a href={`tel:${INSTITUTION.contact.phone.replace(/\s/g, "")}`} className="font-semibold text-sky hover:underline">
                  {INSTITUTION.contact.phone}
                </a>
              </p>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 p-6 text-center">
              <h3 className="font-display text-lg font-bold text-gold">Facts &amp; figures</h3>
              <ul className="mt-2 space-y-1.5 text-sm text-white/85">
                <li>• Founded 1968; medical college since 2007</li>
                <li>• 700+ inpatient beds</li>
                <li>• ~1,200 emergency &amp; outpatient visits daily</li>
                <li>• 2,800+ staff; 75+ academic programmes</li>
                <li>• Ethiopia&apos;s first kidney transplant &amp; public IVF centre</li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 p-6 text-center">
              <h3 className="font-display text-lg font-bold text-gold">More from the College</h3>
              <ul className="mt-2 space-y-1.5 text-sm">
                <li><Link href="/news" className="font-semibold text-sky hover:underline">Announcements →</Link></li>
                <li><Link href="/initiatives" className="font-semibold text-sky hover:underline">Innovation &amp; startups →</Link></li>
                <li><Link href="/centers" className="font-semibold text-sky hover:underline">Specialty centres →</Link></li>
                <li><a href={INSTITUTION.social.facebook} target="_blank" rel="noopener noreferrer" className="font-semibold text-sky hover:underline">Facebook ↗</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
