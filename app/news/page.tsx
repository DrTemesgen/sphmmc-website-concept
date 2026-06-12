import type { Metadata } from "next";
import Link from "next/link";
import { INSTITUTION } from "@/data/institution";
import { PageHero, Breadcrumbs, SectionHeading } from "@/components/ui";
import FacebookFeed from "@/components/FacebookFeed";

export const metadata: Metadata = {
  title: "News & Announcements",
  description:
    "Latest news, admission announcements, entrance exams, research calls and public notices from SPHMMC.",
};

// Placeholder announcements — to be managed by the Public Relations &
// Communication Executive (e.g. via a headless CMS) after launch.
const announcements = [
  {
    date: "June 2026",
    category: "Governance",
    title: "College adopts its 2026 organisational structure",
    text: "Endorsed by the Governing Board, the College's 2026 restructure establishes a Provost leading four Corporate Directorates, three specialty centres, and Aabet Hospital as the College's first affiliated institution.",
  },
  {
    date: "Rolling",
    category: "Admissions",
    title: "Graduate programme applications",
    text: "Calls for MPH, MSc, residency and fellowship applications are announced each academic cycle. Check the student portal for current openings and entrance-exam schedules.",
  },
  {
    date: "Rolling",
    category: "Research",
    title: "Research proposal calls",
    text: "The Research Affairs Directorate periodically invites proposals for institutional research grants. Watch this page and the IRERC notice board for deadlines.",
  },
];

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Stay Informed"
        title="News & Announcements"
        intro="Admissions, entrance exams, research calls, public notices and College news."
      />
      <Breadcrumbs items={[{ label: "News" }]} />

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Latest" title="Announcements" />
            <div className="space-y-5">
              {announcements.map((a, i) => (
                <article key={i} className="rounded-xl border border-line p-6">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="rounded-full bg-brand/10 px-2.5 py-0.5 font-bold uppercase tracking-wide text-brand">
                      {a.category}
                    </span>
                    <span className="text-muted">{a.date}</span>
                  </div>
                  <h2 className="mt-2 font-display text-xl font-bold text-navy">{a.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{a.text}</p>
                </article>
              ))}
            </div>
            <p className="mt-6 rounded-lg bg-paper p-4 text-xs leading-relaxed text-muted">
              Official announcements (including Amharic-language notices) are published by the
              Public Relations &amp; Communication Executive. For student-specific notices, check
              the{" "}
              <a href={INSTITUTION.portals.studentPortal} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand hover:underline">
                student portal ↗
              </a>
              .
            </p>
          </div>

          <aside className="space-y-6">
            <div>
              <SectionHeading eyebrow="Newsroom" title="In the News" />
              <Link
                href="/press"
                className="block rounded-xl border border-line bg-white p-5 transition hover:border-brand/40 hover:shadow-sm"
              >
                <p className="text-sm leading-relaxed text-muted">
                  How the College&apos;s milestones — Ethiopia&apos;s first kidney transplant, first
                  public IVF centre, first microsurgery training — are reported by ENA, Addis
                  Fortune, The Reporter and international outlets.
                </p>
                <p className="mt-3 font-bold text-brand">Browse press coverage →</p>
              </Link>
            </div>
            <div>
              <SectionHeading eyebrow="Live" title="From Our Facebook" />
              <FacebookFeed />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
