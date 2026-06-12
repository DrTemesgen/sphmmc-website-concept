import type { Metadata } from "next";
import Link from "next/link";
import {
  ORG_UNITS,
  CORPORATE_DIRECTORATES,
  PROVOST_DIRECT_REPORTS,
  childrenOf,
  OrgUnit,
} from "@/data/organogram";
import { PageHero, Breadcrumbs, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Organisational Structure 2026",
  description:
    "The locked 2026 organogram of SPHMMC — Ministry of Health, Governing Board, Provost, four Corporate Directorates, specialty centres and all offices.",
};

function UnitChip({ unit, accent = false }: { unit: OrgUnit; accent?: boolean }) {
  const label = unit.shortName ?? unit.name;
  const base = accent
    ? "border-gold/60 bg-gold/10 text-navy"
    : "border-line bg-white text-ink";
  const inner = (
    <span
      className={`block rounded-md border px-3 py-2 text-[13px] font-semibold leading-snug transition ${base} ${
        unit.href ? "hover:border-brand hover:text-brand" : ""
      }`}
      title={unit.note}
    >
      {label}
      {unit.note && <span aria-hidden className="ml-1 text-muted">ⓘ</span>}
    </span>
  );
  return unit.href ? <Link href={unit.href}>{inner}</Link> : inner;
}

function Branch({ parentId }: { parentId: string }) {
  const children = childrenOf(parentId);
  if (children.length === 0) return null;
  return (
    <ul className="ml-3 space-y-1.5 border-l-2 border-brand/20 pl-3">
      {children.map((c) => (
        <li key={c.id}>
          <UnitChip unit={c} accent={c.tier === "L2-Centre"} />
          <div className="mt-1.5">
            <Branch parentId={c.id} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function OrganogramPage() {
  return (
    <>
      <PageHero
        eyebrow="About SPHMMC"
        title="Organisational Structure 2026"
        intro="The authoritative structure of the College — the 2026 organisational structure. Click any unit to visit its page."
      />
      <Breadcrumbs items={[{ label: "About", href: "/about" }, { label: "Organogram" }]} />

      <section className="mx-auto max-w-7xl px-4 py-14">
        {/* Apex chain */}
        <div className="mx-auto mb-10 flex max-w-md flex-col items-center gap-0 text-center">
          <div className="w-full rounded-lg bg-navy-deep px-4 py-3 font-display font-bold text-white">
            MINISTRY OF HEALTH
            <span className="block text-[11px] font-normal text-white/70">Sole parent ministry — Reg. 200/2011</span>
          </div>
          <span aria-hidden className="h-5 w-0.5 bg-brand/40" />
          <div className="w-full rounded-lg bg-navy px-4 py-3 font-display font-bold text-white">
            GOVERNING BOARD
          </div>
          <span aria-hidden className="h-5 w-0.5 bg-brand/40" />
          <div className="w-full rounded-lg bg-brand px-4 py-3 font-display font-bold text-white">
            PROVOST
            <span className="block text-[11px] font-normal text-white/80">Chief executive and academic officer (L0)</span>
          </div>
        </div>

        {/* Direct reports */}
        <SectionHeading
          eyebrow="Reporting directly to the Provost"
          title="Executive Offices & Affiliated Institution"
        />
        <div className="mb-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {PROVOST_DIRECT_REPORTS.map((u) => (
            <UnitChip key={u.id} unit={u} accent={u.id === "aabet"} />
          ))}
        </div>

        {/* Four corporate directorates */}
        <SectionHeading
          eyebrow="Four Corporate Directorates"
          title="Each led by a Vice Provost/Corporate Director"
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {CORPORATE_DIRECTORATES.map((cd) => (
            <div key={cd.id} className="rounded-xl border border-line bg-paper p-4">
              <div className="mb-3 rounded-lg bg-navy px-3 py-2.5 text-center">
                <p className="font-display text-sm font-bold leading-snug text-white">{cd.shortName}</p>
                <p className="text-[11px] text-white/70">Vice Provost/Corporate Director</p>
              </div>
              <Branch parentId={cd.id} />
            </div>
          ))}
        </div>

        {/* Legend + provenance */}
        <div className="mt-10 rounded-xl border border-line bg-white p-5 text-sm leading-relaxed text-muted">
          <p className="font-display font-bold text-navy">About this structure</p>
          <p className="mt-2">
            This organogram is the College&apos;s 2026 organisational structure. Specialty centres
            (gold) report directly to the Academic &amp; Medical Service Vice Provost/Corporate
            Director, parallel to the two Vice Corporate Directors. Aabet Hospital is the
            College&apos;s first affiliated health institution, reporting to the Provost. The
            structure may be amended by the Board upon recommendation of the Provost and approval
            of the Senate.
          </p>
          <p className="mt-3">
            Total units shown: {ORG_UNITS.length}. See the{" "}
            <Link href="/offices" className="font-semibold text-brand hover:underline">
              office directory
            </Link>{" "}
            for the mandate of each unit.
          </p>
        </div>
      </section>
    </>
  );
}
