import Link from "next/link";
import Image from "next/image";
import { INSTITUTION } from "@/data/institution";
import { CENTERS } from "@/data/centers";
import { SCHOOLS, SCHOOL_IMAGES } from "@/data/schools";
import { SectionHeading, CTAButton } from "@/components/ui";
import FacebookFeed from "@/components/FacebookFeed";

const actionCards = [
  {
    title: "Book an Appointment",
    text: "See a senior consultant at the Private Wing — evening and weekend clinics, booked online in minutes.",
    href: "/private-wing/book",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 10h18M9 15l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Find a Doctor",
    text: "Browse our private-wing consultants by specialty, language and clinic day.",
    href: "/private-wing/doctors",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <circle cx="11" cy="8" r="4" /><path d="M4 21c0-3.9 3.1-7 7-7 1.4 0 2.7.4 3.8 1.1M17 14v3m0 0v3m0-3h3m-3 0h-3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Departments & Services",
    text: "Explore every clinical department, service directorate and specialty centre, A to Z.",
    href: "/academics/departments",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6M10 9h4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const audiences = [
  { label: "I am a patient", href: "/patient-care" },
  { label: "I am a referring clinician", href: "/patient-care/referrals" },
  { label: "I am a prospective student", href: "/academics" },
  { label: "I am a researcher", href: "/research" },
  { label: "I am a partner or donor", href: "/offices/partnership-collaboration" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-deep text-white">
        <Image
          src="/images/campus/panorama.png"
          alt="Aerial view of the St. Paul's Hospital Millennium Medical College campus"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 object-cover opacity-25"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-navy-deep/90 via-navy/85 to-brand/70" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 20%, #24ace2 0, transparent 45%), radial-gradient(circle at 15% 85%, #f6a821 0, transparent 35%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-16 sm:pb-20 sm:pt-24">
          <p className="font-display text-sm font-bold uppercase tracking-[0.25em] text-gold">
            Saint Paul&apos;s Hospital Millennium Medical College
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Our Speciality, <span className="text-sky">Your Well-Being</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
            Ethiopia&apos;s premier academic medical centre — a 700+ bed teaching hospital and
            medical college where world-class patient care, education and research meet.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton href="/private-wing/book" variant="gold">Book an Appointment</CTAButton>
            <CTAButton href="/patient-care" variant="outline">Getting Care at St. Paul&apos;s</CTAButton>
          </div>
        </div>

        {/* Action cards */}
        <div className="relative mx-auto max-w-7xl px-4 pb-12">
          <div className="grid gap-4 md:grid-cols-3">
            {actionCards.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="group rounded-xl border border-white/15 bg-white/10 p-6 backdrop-blur transition hover:bg-white hover:shadow-xl"
              >
                <span className="inline-flex rounded-lg bg-sky/20 p-3 text-sky transition group-hover:bg-brand/10 group-hover:text-brand">
                  {c.icon}
                </span>
                <h2 className="mt-4 font-display text-xl font-bold text-white transition group-hover:text-navy">
                  {c.title} →
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-white/75 transition group-hover:text-muted">{c.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section aria-label="Key figures" className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 sm:grid-cols-4">
          {INSTITUTION.stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-bold text-brand sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Audience router */}
      <section aria-label="Quick start" className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 py-4">
          <span className="mr-2 text-sm font-bold text-navy">Quick start:</span>
          {audiences.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="rounded-full border border-line bg-paper px-4 py-1.5 text-sm font-semibold text-navy transition hover:border-brand hover:bg-brand hover:text-white"
            >
              {a.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Tripartite mission */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeading
          eyebrow="One College, One Mission"
          title="Care. Teach. Discover."
          intro="SPHMMC operates under a dual mandate as a teaching hospital and a higher education institution — every ward is a classroom, every patient benefits from the latest evidence."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          <article className="flex flex-col items-center rounded-xl border border-line p-6 text-center">
            <h3 className="font-display text-2xl font-bold text-navy">Patient Care</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Around 1,200 emergency and outpatient visits every day across 17 clinical departments,
              eight medical-service directorates and three national specialty centres — from kidney
              transplantation to interventional cardiology.
            </p>
            <Link href="/patient-care" className="mt-4 inline-block font-bold text-brand hover:underline">
              Getting care →
            </Link>
          </article>
          <article className="flex flex-col items-center rounded-xl border border-line p-6 text-center">
            <h3 className="font-display text-2xl font-bold text-navy">Education</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Four schools — Medicine, Nursing &amp; Midwifery, Public Health, and Pharmacy — delivering
              outcome-based undergraduate programmes and nearly 80 residency, fellowship, master&apos;s
              and PhD programmes to more than 2,000 students.
            </p>
            <Link href="/academics" className="mt-4 inline-block font-bold text-brand hover:underline">
              Explore academics →
            </Link>
          </article>
          <article className="flex flex-col items-center rounded-xl border border-line p-6 text-center">
            <h3 className="font-display text-2xl font-bold text-navy">Research &amp; Innovation</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Problem-solving research of public-health significance — coordinated by the Research
              Affairs Directorate, reviewed by a Level-A ethics committee (IRERC), and published in
              the College&apos;s Millennium Journal of Health.
            </p>
            <Link href="/research" className="mt-4 inline-block font-bold text-brand hover:underline">
              Research at SPHMMC →
            </Link>
          </article>
        </div>
      </section>

      {/* Specialty centres */}
      <section className="bg-navy py-16 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            light
            eyebrow="National Referral Programmes"
            title="Specialty Centres"
            intro="Our specialty centres lead the country in transplant medicine, fertility care and cardiac intervention."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {CENTERS.filter((c) => c.kind === "specialty-centre").map((c) => (
              <Link
                key={c.slug}
                href={`/centers/${c.slug}`}
                className="group rounded-xl border border-white/15 bg-white/5 p-6 transition hover:bg-white hover:shadow-xl"
              >
                <h3 className="font-display text-xl font-bold text-sky transition group-hover:text-brand">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75 transition group-hover:text-muted">{c.tagline}</p>
                <p className="mt-4 text-sm font-bold text-gold">Visit the centre →</p>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-sm text-white/70">
            Also part of our network:{" "}
            <Link href="/centers/aabet-hospital" className="font-semibold text-sky hover:underline">
              Aabet Hospital
            </Link>{" "}
            — the College&apos;s first affiliated health institution.
          </p>
        </div>
      </section>

      {/* Schools */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeading
          eyebrow="The College"
          title="Four Schools, One Campus"
          intro="From the bedside to the community, our schools train the health workforce Ethiopia needs."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SCHOOLS.map((s) => (
            <Link
              key={s.slug}
              href={`/academics/schools/${s.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md"
            >
              <Image
                src={SCHOOL_IMAGES[s.slug].src}
                alt={SCHOOL_IMAGES[s.slug].alt}
                width={700}
                height={300}
                className="h-36 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-bold text-navy group-hover:text-brand">{s.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.tagline}</p>
                <p className="mt-3 text-sm font-bold text-brand">Visit the school →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Firsts for Ethiopia + Innovation */}
      <section className="border-t border-line bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center rounded-2xl bg-gradient-to-br from-gold/15 to-sky/10 p-8">
              <p className="font-display text-sm font-bold uppercase tracking-widest text-brand">Firsts for Ethiopia</p>
              <h2 className="mt-2 font-display text-2xl font-bold text-navy sm:text-3xl">
                A track record of national milestones
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                The country&apos;s first kidney transplant and National Kidney Transplant Centre, its
                first public IVF service, and its first dedicated microsurgery training — widely
                covered by Ethiopian and international press.
              </p>
              <Link href="/press" className="mt-4 inline-block font-bold text-brand hover:underline">
                See SPHMMC in the news →
              </Link>
            </div>
            <div className="flex flex-col justify-center rounded-2xl bg-navy p-8 text-white">
              <p className="font-display text-sm font-bold uppercase tracking-widest text-gold">🚀 Innovation</p>
              <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
                Millennium Health Innovation Hub
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                Ethiopia&apos;s first medical-institution-led health innovation and startup
                initiative — the MedStart Accelerator and the IDREAM molecular lab, turning clinical
                problems into homegrown technology.
              </p>
              <Link href="/initiatives" className="mt-4 inline-block font-bold text-sky hover:underline">
                Explore our initiatives →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI assistant + news/facebook */}
      <section className="border-t border-line bg-paper py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Always Here to Help"
              title="Ask St. Paul's — Your Virtual Assistant"
              intro="Our AI assistant can help you find the right department, understand the booking process, learn visiting hours, and answer general health-education questions — in seconds, any time of day."
            />
            <ul className="space-y-3 text-sm text-ink">
              <li className="flex items-start gap-2">
                <span aria-hidden className="mt-0.5 text-brand">✔</span>
                Find the right clinic or department for your condition
              </li>
              <li className="flex items-start gap-2">
                <span aria-hidden className="mt-0.5 text-brand">✔</span>
                Get help booking a private-wing consultant
              </li>
              <li className="flex items-start gap-2">
                <span aria-hidden className="mt-0.5 text-brand">✔</span>
                General health information — not a substitute for medical advice
              </li>
            </ul>
            <p className="mt-5 rounded-lg border border-gold/40 bg-gold/10 p-3 text-xs leading-relaxed text-ink">
              <strong>In an emergency, do not use the assistant.</strong> Call{" "}
              <a href="tel:976" className="font-bold underline">976</a> or come directly to our
              24/7 emergency department.
            </p>
            <p className="mt-5 text-sm text-muted">
              Look for the <span className="font-bold text-brand">chat button</span> at the bottom-right
              of every page.
            </p>
          </div>
          <div>
            <SectionHeading eyebrow="Stay Informed" title="News & Community" />
            <div className="space-y-4">
              <Link
                href="/news"
                className="block rounded-lg border border-line bg-white p-4 transition hover:border-brand/40 hover:shadow-sm"
              >
                <p className="text-xs font-bold uppercase tracking-wide text-sky">Announcements</p>
                <p className="mt-1 font-display text-lg font-bold text-navy">
                  Admissions, entrance exams, research calls and public notices →
                </p>
              </Link>
              <FacebookFeed />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
