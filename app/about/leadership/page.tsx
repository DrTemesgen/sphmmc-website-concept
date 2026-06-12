import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { LEADERSHIP } from "@/data/institution";
import { PageHero, Breadcrumbs, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Leadership & Governance",
  description:
    "Governance of SPHMMC — the Governing Board, the Senate, the Provost and the four Corporate Directorates.",
};

const governanceBodies = [
  {
    id: "board",
    name: "Governing Board",
    text: "The supreme governing body of the College, established under the Higher Education Proclamation No. 1152/2019. Seven voting members appointed with gender balance; accountable to the Federal Ministry of Health. The Board approves strategy, budgets and senior appointments.",
  },
  {
    id: "senate",
    name: "The Senate",
    text: "The College's highest academic body — approving curricula, academic standards, graduations, promotions and academic policy through its standing committees. The Registrar serves as standing Secretary of the Senate.",
  },
  {
    id: "provost",
    name: "Provost",
    text: "The chief executive and academic officer of the College, reporting to the Board. Seven offices report directly to the Provost — Internal Audit, Ethics & Anti-Corruption, Legal Service, Public Relations & Communication, Gender & Social Affairs Inclusion, the Provost Office — alongside Aabet Hospital and the four Corporate Directorates.",
  },
];

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="About SPHMMC"
        title="Leadership & Governance"
        intro="The College is governed by a Governing Board accountable to the Ministry of Health, an academic Senate, and a Provost leading four Corporate Directorates."
      />
      <Breadcrumbs items={[{ label: "About", href: "/about" }, { label: "Leadership" }]} />

      <section className="mx-auto max-w-7xl px-4 py-14">
        <SectionHeading eyebrow="Governance" title="How the College is Governed" />
        <div className="grid gap-5 lg:grid-cols-3">
          {governanceBodies.map((g) => (
            <article key={g.id} id={g.id} className="rounded-xl border border-line p-6 scroll-mt-24">
              <h2 className="font-display text-xl font-bold text-navy">{g.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{g.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">
          See the full structure on the{" "}
          <Link href="/about/organogram" className="font-semibold text-brand hover:underline">
            2026 organogram
          </Link>
          .
        </p>
      </section>

      <section className="border-t border-line bg-paper py-14">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Executive Leadership"
            title="The Provost & Corporate Directors"
            intro="Four Corporate Directorates — each led by a Vice Provost/Corporate Director — carry the College's mandate."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {LEADERSHIP.map((l) => (
              <article key={l.id} id={l.id} className="flex flex-col rounded-xl border border-line bg-white p-6 scroll-mt-24">
                {l.photo ? (
                  <Image
                    src={l.photo}
                    alt={l.name}
                    width={96}
                    height={96}
                    className="h-24 w-24 rounded-full border border-line object-cover object-top"
                  />
                ) : (
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-brand/10 font-display text-2xl font-bold text-brand" aria-hidden>
                    {l.name.startsWith("To be") ? "—" : l.name.split(" ").slice(-2).map((w) => w[0]).join("")}
                  </div>
                )}
                <h2 className="mt-4 font-display text-lg font-bold text-navy">{l.name}</h2>
                <p className="mt-1 text-sm font-semibold text-brand">{l.title}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{l.bio}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted">
            Officeholder details to be confirmed by the Public Relations &amp; Communication Executive.
          </p>
        </div>
      </section>
    </>
  );
}
