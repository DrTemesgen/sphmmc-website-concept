import type { Metadata } from "next";
import Link from "next/link";
import { OFFICES, OFFICE_GROUPS } from "@/data/offices";
import { PageHero, Breadcrumbs } from "@/components/ui";

export const metadata: Metadata = {
  title: "Offices & Directorates",
  description:
    "Directory of every office, executive and directorate on the SPHMMC 2026 organisational structure — with the mandate of each unit.",
};

export default function OfficesPage() {
  return (
    <>
      <PageHero
        eyebrow="About SPHMMC"
        title="Offices & Directorates"
        intro="Every administrative unit on the 2026 organogram — who they are, what they do, and where they sit in the structure."
      />
      <Breadcrumbs items={[{ label: "Offices" }]} />

      <section className="mx-auto max-w-7xl px-4 py-14">
        {OFFICE_GROUPS.map((group) => {
          const groupOffices = OFFICES.filter((o) => o.group === group);
          if (groupOffices.length === 0) return null;
          return (
            <div key={group} className="mb-12 last:mb-0">
              <h2 className="mb-5 border-b-2 border-brand/20 pb-2 font-display text-2xl font-bold text-navy">
                {group}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {groupOffices.map((o) => (
                  <Link
                    key={o.slug}
                    href={o.href ?? `/offices/${o.slug}`}
                    className="group flex h-full flex-col rounded-lg border border-line p-5 transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-sm"
                  >
                    <h3 className="font-display text-base font-bold text-navy group-hover:text-brand">
                      {o.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                      {o.summary.split(". ")[0]}.
                    </p>
                    <p className="mt-3 text-sm font-bold text-brand">View office →</p>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
        <p className="text-sm text-muted">
          See how these offices connect on the{" "}
          <Link href="/about/organogram" className="font-semibold text-brand hover:underline">
            2026 organogram
          </Link>
          .
        </p>
      </section>
    </>
  );
}
