import type { Metadata } from "next";
import Link from "next/link";
import { approvedStaff } from "@/data/staff";
import { DEPARTMENTS } from "@/data/departments";
import { SCHOOLS } from "@/data/schools";
import { PageHero, Breadcrumbs, SectionHeading } from "@/components/ui";
import StaffCard from "@/components/StaffCard";

export const metadata: Metadata = {
  title: "Faculty & Staff Directory",
  description:
    "Academic staff and faculty profiles across the SPHMMC schools and departments. Staff submit their own profiles for approval.",
};

export default function StaffDirectoryPage() {
  const staff = approvedStaff();

  return (
    <>
      <PageHero
        eyebrow="The College"
        title="Faculty & Staff Directory"
        intro="Meet the academics and clinicians who teach, treat and research at St. Paul's. Profiles are submitted by staff and published after approval by their Department Head or School Dean."
      />
      <Breadcrumbs items={[{ label: "Academics", href: "/academics" }, { label: "Faculty & Staff" }]} />

      {/* Submit CTA */}
      <section className="border-b border-line bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row">
          <p className="text-sm font-semibold text-navy">
            Are you a member of staff? Add or update your profile.
          </p>
          <Link
            href="/academics/staff/submit"
            className="rounded-md bg-brand px-5 py-2.5 font-display text-sm font-bold text-white transition hover:bg-brand-dark"
          >
            Submit your profile →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        {SCHOOLS.map((school) => {
          const deptSlugs = DEPARTMENTS.filter((d) => d.school === school.slug).map((d) => d.slug);
          const schoolStaff = staff.filter((s) => deptSlugs.includes(s.department));
          if (schoolStaff.length === 0) return null;
          return (
            <div key={school.slug} className="mb-12">
              <SectionHeading eyebrow="School" title={school.name} />
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {schoolStaff.map((s) => (
                  <StaffCard key={s.id} staff={s} />
                ))}
              </div>
            </div>
          );
        })}

        <div className="rounded-xl border border-gold/40 bg-gold/10 p-5 text-sm leading-relaxed text-ink">
          <strong>Note:</strong> the profiles shown are sample entries that demonstrate the format.
          Every department&apos;s real faculty will appear here as staff submit and Deans approve their
          profiles. Each department page also lists its own team.
        </div>
      </section>
    </>
  );
}
