import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero, Breadcrumbs, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "PACE — Centre of Excellence in Examination & Assessment",
  description:
    "PACE, the SPHMMC Centre of Excellence in Professional Assessment, Certification & Examination — secure computer-based testing, OSCE clinical exams, standardized patients, and defensible standard-setting.",
};

const Icon = {
  cbt: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" strokeLinecap="round" /></svg>
  ),
  osce: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><path d="M9 7a3 3 0 1 1 6 0v3a3 3 0 0 1-6 0z" /><path d="M5 21a7 7 0 0 1 14 0" strokeLinecap="round" /></svg>
  ),
  patient: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><circle cx="12" cy="7" r="3.5" /><path d="M5 21a7 7 0 0 1 14 0M12 14v3M10.5 15.5h3" strokeLinecap="round" /></svg>
  ),
  skills: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><path d="M4 7h16M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M6 7l1 13h10l1-13M12 11v5M9.5 13.5h5" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
  entrance: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><path d="m22 9-10-4L2 9l10 4 10-4zM6 11v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
  licence: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><circle cx="12" cy="9" r="5" /><path d="m9 13-1 7 4-2 4 2-1-7" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
  cpd: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><path d="M12 3v18M3 12h18" strokeLinecap="round" /><circle cx="12" cy="12" r="9" /></svg>
  ),
  faculty: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><path d="M4 5h13l3 3v11H4zM8 9h8M8 13h8M8 17h5" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
};

const examTypes = [
  { icon: Icon.cbt, name: "Computer-Based Testing (CBT)", text: "On-screen MCQ and structured written exams delivered on secure, locked-down workstations — for progress tests, end-of-course and high-stakes exams." },
  { icon: Icon.osce, name: "OSCE Clinical Exams", text: "Objective Structured Clinical Examinations: candidates rotate through timed stations scored on history-taking, examination, diagnosis and communication." },
  { icon: Icon.patient, name: "Standardized Patients", text: "Trained actors portray real cases for fair assessment of clinical and communication skills, with encounters video-recorded for scoring and feedback." },
  { icon: Icon.skills, name: "Practical & Skills Exams", text: "Procedural and bench competence assessed in controlled, mock-clinical environments with manikins and task-trainers." },
  { icon: Icon.entrance, name: "Entrance & Selection", text: "Aptitude and knowledge testing for programme admission, delivered securely at scale." },
  { icon: Icon.licence, name: "Licensing & Board Readiness", text: "Preparation and delivery support for the Ethiopian Health Professionals Licensing Examination (EHPLE / COC) and specialty board exams." },
  { icon: Icon.cpd, name: "CPD Certification", text: "Competency assessment tied to continuing professional development and recertification." },
  { icon: Icon.faculty, name: "Faculty Assessment Services", text: "Item-writing, blueprinting, item-banking and psychometric reporting offered to departments as an internal service." },
];

const facilities = [
  "Computer-based testing (CBT) workstation labs running a secure exam browser",
  "OSCE circuit — a ring of timed, identical examination stations",
  "Standardized-Patient suite with video-recorded rooms and one-way observation",
  "Simulation & clinical-skills labs with manikins and task-trainers",
  "Secure, invigilated written-exam halls",
  "Biometric check-in — photo capture and digital ID authentication",
  "CCTV invigilation, proctor walkthroughs and secure candidate lockers",
  "Item-bank software and a results, scoring & psychometrics unit",
];

const process = [
  ["Register & verify eligibility", "Apply and have prerequisites confirmed for your exam."],
  ["Schedule your sitting", "Choose an available date and seat."],
  ["Pre-exam briefing", "Receive the venue, rules, valid-ID requirement and prohibited-items list."],
  ["Secure check-in", "Present photo ID; photo and biometric capture; belongings into a secure locker."],
  ["Exam delivery", "Sit your CBT at an assigned workstation, or rotate the OSCE stations on the signal."],
  ["Continuous invigilation", "Audio/video recording, proctoring and biometric re-verification on every re-entry."],
  ["Scoring & standard-setting", "CBT is auto-scored; OSCE and written exams are marked with defensible cut-scores (modified Angoff / borderline-regression)."],
  ["Results & certification", "Results are released through official channels; successful candidates are certified."],
  ["Appeals, feedback & remediation", "A defined route to query results, with feedback and remediation for formative exams."],
];

const qualityAssessment = [
  "Blueprinting every exam to the curriculum and competencies for representative coverage",
  "Structured item-writing with peer review before any item is used",
  "An item bank with psychometric tagging (difficulty and discrimination)",
  "Defensible standard-setting — modified Angoff and borderline-regression for OSCEs",
  "Post-exam item analysis, reliability and station-quality reporting",
  "Trained examiners and standardized patients as calibrated raters",
];

const qualityIntegrity = [
  "Identity assurance: photo ID + biometric capture, re-checked on every re-entry",
  "Continuous audio/video recording, observation windows and proctor walkthroughs",
  "Metal-detector screening, item inspection and secure lockers for belongings",
  "Locked-down secure exam browser for all computer-based tests",
  "Segregated, access-controlled exam areas and chain-of-custody for papers",
  "Incident logging and a documented exam-security protocol",
];

export default function ExaminationCentrePage() {
  return (
    <>
      <PageHero
        eyebrow="Centre of Excellence"
        title="PACE — Examination & Assessment Centre"
        intro="Professional Assessment, Certification & Examination. A dedicated, secure, technology-enabled home for fair, high-stakes assessment — from computer-based exams to the bedside-style OSCE."
      />
      <Breadcrumbs items={[{ label: "Academics", href: "/academics" }, { label: "Examination & Assessment Centre" }]} />

      <section className="mx-auto max-w-7xl px-4 pt-10">
        <div className="overflow-hidden rounded-2xl border border-line">
          <Image
            src="/images/clinical/lab-analyzer.jpg"
            alt="Technology-enabled assessment facilities at SPHMMC"
            width={1400}
            height={460}
            priority
            quality={90}
            className="h-52 w-full object-cover sm:h-64"
          />
        </div>
      </section>

      {/* Positioning band */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid items-center gap-8 rounded-2xl bg-gradient-to-br from-navy to-brand p-8 text-white lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="font-display text-sm font-bold uppercase tracking-widest text-gold">Why PACE</p>
            <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">Assessment is where competence is proven</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/85">
              A medical college is only as trusted as its examinations. PACE brings the College&apos;s
              written, clinical and practical assessment under one roof — built to international best
              practice (AMEE assessment guidance and NBME methods) and inspired by Africa&apos;s leading
              assessment centres, such as Aga Khan University&apos;s Centre for Innovation in Medical
              Education in Nairobi. It is positioned to support Ethiopia&apos;s national licensing
              examination and, in time, to host international computer-based exams.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center lg:grid-cols-1">
            <div><p className="font-display text-3xl font-bold text-gold">CBT</p><p className="text-xs text-white/75">Secure computer-based testing</p></div>
            <div><p className="font-display text-3xl font-bold text-gold">OSCE</p><p className="text-xs text-white/75">Station-based clinical exams</p></div>
            <div><p className="font-display text-3xl font-bold text-gold">SP</p><p className="text-xs text-white/75">Standardized patients</p></div>
          </div>
        </div>
      </section>

      {/* What we deliver */}
      <section className="mx-auto max-w-7xl px-4 pb-14">
        <SectionHeading center eyebrow="What We Deliver" title="Every Kind of Assessment" intro="From multiple-choice to the bedside, one centre covers the full spectrum of health-professions assessment." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {examTypes.map((e) => (
            <div key={e.name} className="flex h-full flex-col items-center rounded-xl border border-line bg-white p-5 text-center transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md">
              <span className="inline-flex rounded-full bg-brand/10 p-3 text-brand">{e.icon}</span>
              <h3 className="mt-3 font-display text-base font-bold text-navy">{e.name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{e.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Facilities */}
      <section className="border-y border-line bg-paper py-14">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading center eyebrow="Purpose-Built" title="Facilities & Capabilities" />
          <div className="grid gap-3 sm:grid-cols-2">
            {facilities.map((f) => (
              <div key={f} className="flex items-start gap-3 rounded-lg border border-line bg-white px-4 py-3 text-sm leading-relaxed text-ink">
                <span aria-hidden className="mt-0.5 text-brand">✔</span>
                {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <SectionHeading center eyebrow="The Examination Journey" title="From Registration to Certification" intro="A clear, secure and fair path for every candidate." />
        <ol className="grid gap-5 md:grid-cols-3">
          {process.map(([title, text], i) => (
            <li key={title} className="relative rounded-xl border border-line p-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand to-sky font-display font-bold text-white">{i + 1}</span>
              <h3 className="mt-3 font-display text-base font-bold text-navy">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Quality & integrity */}
      <section className="border-t border-line bg-navy py-14 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading light center eyebrow="Trusted Results" title="Quality & Integrity" intro="Defensible scores and watertight security — the two promises every examination must keep." />
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-7">
              <h3 className="font-display text-xl font-bold text-gold">Assessment quality</h3>
              <ul className="mt-3 space-y-2">
                {qualityAssessment.map((q) => (
                  <li key={q} className="flex gap-2 text-sm leading-relaxed text-white/90"><span aria-hidden className="mt-0.5 text-sky">▹</span>{q}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-7">
              <h3 className="font-display text-xl font-bold text-gold">Integrity & security</h3>
              <ul className="mt-3 space-y-2">
                {qualityIntegrity.map((q) => (
                  <li key={q} className="flex gap-2 text-sm leading-relaxed text-white/90"><span aria-hidden className="mt-0.5 text-sky">▹</span>{q}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-white/60">
            PACE aligns with recognised assessment standards and best practice. Authorization to host
            specific external exams (e.g. Prometric / Pearson VUE) is pursued through the relevant
            bodies and stated only once granted.
          </p>
        </div>
      </section>

      {/* Who we serve + CTA */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border border-line p-6">
            <h3 className="font-display text-lg font-bold text-navy">Students, residents & fellows</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">Course, progress, clinical (OSCE) and exit examinations across the College&apos;s programmes.</p>
            <Link href="/academics/programs" className="mt-3 inline-block text-sm font-bold text-brand hover:underline">Our programmes →</Link>
          </div>
          <div className="rounded-xl border border-line p-6">
            <h3 className="font-display text-lg font-bold text-navy">Professional bodies & partners</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">A secure venue to host national and external examinations and certification.</p>
            <Link href="/offices/partnership-collaboration" className="mt-3 inline-block text-sm font-bold text-brand hover:underline">Partnerships →</Link>
          </div>
          <div className="rounded-xl border border-line p-6">
            <h3 className="font-display text-lg font-bold text-navy">Governance</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">PACE is guided by the Educational Quality Directorate and works with the Registrar &amp; Alumni Directorate on scheduling, results and certification.</p>
            <Link href="/offices/educational-quality" className="mt-3 inline-block text-sm font-bold text-brand hover:underline">Educational Quality →</Link>
          </div>
        </div>
        <div className="mt-8 rounded-2xl bg-gradient-to-r from-gold/15 to-sky/10 p-8 text-center">
          <h2 className="font-display text-2xl font-bold text-navy">Examine with confidence</h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            To run an examination, host an exam, or partner on assessment, contact the College.
          </p>
          <Link href="/contact" className="mt-4 inline-block rounded-md bg-brand px-6 py-3 font-display font-bold text-white transition hover:bg-brand-dark">
            Contact the College
          </Link>
        </div>
      </section>
    </>
  );
}
