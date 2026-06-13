import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero, Breadcrumbs, SectionHeading } from "@/components/ui";
import {
  PARTNERSHIP_INTRO,
  PARTNERSHIP_MANDATE,
  COLLABORATION_TYPES,
  PARTNER_GROUPS,
  type Partner,
} from "@/data/partners";

/** Small logo (or initials monogram fallback) shown atop each partner card. */
function PartnerBadge({ partner }: { partner: Partner }) {
  if (partner.logo) {
    return (
      <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-line bg-white p-1.5 shadow-sm">
        <Image
          src={partner.logo}
          alt={`${partner.name} logo`}
          width={40}
          height={40}
          className="h-full w-full object-contain"
        />
      </span>
    );
  }
  const initials = partner.name
    .replace(/\(.*?\)/g, "")
    .split(/[\s—&]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  return (
    <span
      aria-hidden
      className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 font-display text-base font-bold text-brand"
    >
      {initials}
    </span>
  );
}

export const metadata: Metadata = {
  title: "Partnership & Collaboration",
  description:
    "St. Paul's Hospital Millennium Medical College partners with universities, research institutes, hospitals and organisations at home and abroad — building training, research and specialty-care capacity.",
};

const totalPartners = PARTNER_GROUPS.reduce((n, g) => n + g.partners.length, 0);

export default function PartnershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Research & Community Service"
        title="Partnership & Collaboration Directorate"
        intro={PARTNERSHIP_INTRO}
      />
      <Breadcrumbs
        items={[
          { label: "Offices", href: "/offices" },
          { label: "Partnership & Collaboration" },
        ]}
      />

      {/* Stat band */}
      <section className="border-b border-line bg-gradient-to-br from-navy to-brand py-10 text-white">
        <div className="mx-auto grid max-w-5xl grid-cols-3 gap-6 px-4 text-center">
          {[
            [`${totalPartners}+`, "Partner institutions"],
            ["4", "Continents"],
            ["1968", "Partnering since"],
          ].map(([k, v]) => (
            <div key={v}>
              <p className="font-display text-3xl font-bold text-gold sm:text-4xl">{k}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-white/80 sm:text-sm">{v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What the directorate does */}
      <section className="mx-auto max-w-5xl px-4 py-14">
        <SectionHeading
          eyebrow="The Mandate"
          title="What the Directorate Does"
          intro="One office builds the agreements, runs the College's consultancy function and turns partnerships into capacity on the ground."
        />
        <ul className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
          {PARTNERSHIP_MANDATE.map((m) => (
            <li
              key={m}
              className="flex gap-2.5 rounded-lg border border-line bg-white p-4 text-sm leading-relaxed text-ink"
            >
              <span aria-hidden className="mt-0.5 shrink-0 text-brand">✔</span>
              {m}
            </li>
          ))}
        </ul>
      </section>

      {/* How we collaborate */}
      <section className="border-y border-line bg-paper py-14">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="How We Work Together"
            title="Forms of Collaboration"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {COLLABORATION_TYPES.map((c) => (
              <div
                key={c.title}
                className="flex h-full flex-col items-center rounded-xl border border-line bg-white p-6 text-center"
              >
                <h3 className="font-display text-base font-bold text-navy">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner directory */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHeading
          eyebrow="Our Network"
          title="Partner Institutions"
          intro="The universities, institutes, hospitals and organisations we are proud to work alongside."
        />
        <div className="space-y-12">
          {PARTNER_GROUPS.map((group) => (
            <div key={group.id}>
              <div className="mb-5 text-center">
                <h3 className="font-display text-xl font-bold text-navy">{group.title}</h3>
                <p className="mx-auto mt-1 max-w-2xl text-sm leading-relaxed text-muted">{group.blurb}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.partners.map((p) => {
                  const inner = (
                    <>
                      <PartnerBadge partner={p} />
                      <h4 className="mt-3 font-display text-base font-bold text-navy group-hover:text-brand">
                        {p.name}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{p.domain}</p>
                      {p.url && <p className="mt-2 text-xs font-bold text-brand">Visit ↗</p>}
                    </>
                  );
                  return p.url ? (
                    <a
                      key={p.name}
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-full flex-col items-center rounded-xl border border-line bg-white p-5 text-center transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div
                      key={p.name}
                      className="group flex h-full flex-col items-center rounded-xl border border-line bg-white p-5 text-center transition hover:border-brand/40 hover:shadow-sm"
                    >
                      {inner}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Consultancy + partner CTA */}
      <section className="border-t border-line bg-navy py-14 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Partner or work with us</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/85">
            The Partnership &amp; Collaboration Directorate manages institutional agreements and the
            College&apos;s consultancy function — from joint research and training to technical
            assistance for health facilities. We welcome new collaborators who share our mission.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-md bg-gold px-6 py-3 font-display font-bold text-navy-deep transition hover:brightness-105"
            >
              Start a conversation
            </Link>
            <Link
              href="/research"
              className="rounded-md border-2 border-white px-6 py-3 font-display font-bold text-white transition hover:bg-white hover:text-navy"
            >
              Research at SPHMMC
            </Link>
          </div>
          <p className="mt-8 text-xs text-white/60">
            Part of the Research &amp; Community Service Corporate Directorate on the{" "}
            <Link href="/about/organogram" className="font-semibold text-sky hover:underline">
              2026 organisational structure
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
