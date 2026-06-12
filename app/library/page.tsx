import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Breadcrumbs, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Library",
  description:
    "The SPHMMC Library — digital library, institutional repository, e-journals, UpToDate and HINARI databases, and scanning, printing and inter-library loan services.",
};

const LIBRARY_CONTACT = {
  name: "St. Paul's Hospital Millennium Medical College Library",
  address: "Swaziland Street, Addis Ababa · P.O. Box 1271",
  phone: "+251 112 73 26 98",
  email: "Library@sphmmc.edu.et",
};

// E-Resources surfaced from the legacy library footer. External destinations
// point at the College portal/library sub-systems; update URLs when the new
// library platform is provisioned.
const eResources = [
  {
    name: "Library Catalogue (OPAC)",
    text: "Search the library's full book and journal holdings online.",
    href: "https://sphmmc.edu.et/library/",
  },
  {
    name: "Digital Library",
    text: "Any time, anywhere access to e-books and digital reading materials.",
    href: "https://sphmmc.edu.et/library/",
  },
  {
    name: "SPHMMC Institutional Repository",
    text: "Theses, dissertations, research output and College publications, openly archived.",
    href: "https://sphmmc.edu.et/library/",
  },
  {
    name: "National Academic Digital Library of Ethiopia (NADLE)",
    text: "Shared national collection of academic resources across Ethiopian institutions.",
    href: "https://nadre.edu.et/",
  },
  {
    name: "E-Journals",
    text: "Full-text access to thousands of biomedical and health-sciences journals.",
    href: "https://sphmmc.edu.et/library/",
  },
];

const databases = [
  {
    name: "UpToDate",
    text: "Evidence-based clinical decision support, licensed to the College since August 2021.",
  },
  {
    name: "HINARI / Research4Life",
    text: "WHO programme providing free or low-cost access to major biomedical journals — including RSNA radiology titles.",
  },
];

const services = [
  { name: "Digital scanning service", text: "Digitisation of documents and reading materials on request." },
  { name: "Photocopy & printing", text: "Copying and printing of academic materials for staff and students." },
  { name: "Training & consultancy", text: "Information-literacy training and research support for users." },
  { name: "Inter-Library Loan (ILL)", text: "Borrow materials held at partner libraries within and beyond Ethiopia." },
];

export default function LibraryPage() {
  return (
    <>
      <PageHero
        eyebrow="Academic & Medical Service"
        title="The Library"
        intro="Comprehensive information services supporting teaching, research and clinical care — print and digital, on campus and online, any time, anywhere."
      />
      <Breadcrumbs items={[{ label: "Library" }]} />

      {/* E-Resources */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <SectionHeading
          eyebrow="Digital Library — any time, anywhere"
          title="E-Resources"
          intro="The library maintains and develops digital resources — electronic databases, e-learning repositories and open-access platforms — in coordination with ICT."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {eResources.map((r) => (
            <a
              key={r.name}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col items-center rounded-xl border border-line p-5 text-center transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md"
            >
              <h3 className="font-display text-base font-bold text-navy group-hover:text-brand">{r.name} ↗</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{r.text}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Databases */}
      <section className="border-t border-line bg-paper py-14">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Clinical Evidence" title="Subscribed Databases" />
          <div className="grid gap-5 md:grid-cols-2">
            {databases.map((d) => (
              <div key={d.name} className="rounded-xl border border-line bg-white p-6 text-center">
                <h3 className="font-display text-lg font-bold text-navy">{d.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{d.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-muted">
            Access to subscribed databases is for registered staff and students; sign in through the
            library or campus network.
          </p>
        </div>
      </section>

      {/* Services + hours + contact */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="What We Offer" title="Library Services" />
            <div className="grid gap-3 sm:grid-cols-2">
              {services.map((s) => (
                <div key={s.name} className="rounded-lg border border-line p-4 text-center">
                  <h3 className="font-display font-bold text-navy">{s.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{s.text}</p>
                </div>
              ))}
            </div>

            <h2 className="mt-10 text-center font-display text-xl font-bold text-navy">Library Rules</h2>
            <ul className="mt-3 space-y-1.5 text-sm text-ink">
              <li>• Maintain silence in reading areas; switch phones to silent.</li>
              <li>• Present a valid College ID to enter and to borrow.</li>
              <li>• Handle books and equipment with care; report damage.</li>
              <li>• Return borrowed items by the due date to avoid penalties.</li>
              <li>• Food and drink are not permitted among the collections.</li>
            </ul>
          </div>

          <aside className="space-y-4">
            <div className="rounded-xl bg-navy p-6 text-white">
              <h3 className="font-display text-lg font-bold">Hours & Location</h3>
              <dl className="mt-3 space-y-2 text-sm text-white/90">
                <div>
                  <dt className="font-bold text-gold">Reading rooms</dt>
                  <dd>Mon–Fri 8:00–20:00 · Sat 8:00–17:00</dd>
                </div>
                <div>
                  <dt className="font-bold text-gold">Digital library</dt>
                  <dd>Online 24/7</dd>
                </div>
                <div>
                  <dt className="font-bold text-gold">Location</dt>
                  <dd>Main campus, {LIBRARY_CONTACT.address}</dd>
                </div>
              </dl>
            </div>
            <div className="rounded-xl border border-line bg-paper p-6">
              <h3 className="font-display text-lg font-bold text-navy">Contact the Library</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink">
                {LIBRARY_CONTACT.name}
                <br />
                <a href={`tel:${LIBRARY_CONTACT.phone.replace(/\s/g, "")}`} className="font-semibold text-brand hover:underline">
                  {LIBRARY_CONTACT.phone}
                </a>
                <br />
                <a href={`mailto:${LIBRARY_CONTACT.email}`} className="font-semibold text-brand hover:underline">
                  {LIBRARY_CONTACT.email}
                </a>
              </p>
            </div>
            <div className="rounded-xl border border-line p-6">
              <h3 className="font-display text-lg font-bold text-navy">Related</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li><Link href="/research" className="font-semibold text-brand hover:underline">Research at SPHMMC →</Link></li>
                <li><Link href="/offices/registrar-alumni" className="font-semibold text-brand hover:underline">Registrar &amp; Alumni →</Link></li>
                <li><a href="http://mjh.sphmmc.edu.et" target="_blank" rel="noopener noreferrer" className="font-semibold text-brand hover:underline">Millennium Journal of Health ↗</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
