import type { Metadata } from "next";
import { PageHero, Breadcrumbs } from "@/components/ui";
import StaffSubmissionForm from "@/components/StaffSubmissionForm";

export const metadata: Metadata = {
  title: "Submit Your Staff Profile",
  description:
    "SPHMMC academic staff submit their own profile for publication on the College website, subject to approval by the Department Head / School Dean.",
};

const steps = [
  ["Submit", "Complete the form below with your details, qualifications and a short bio."],
  ["Review", "Your Department Head / School Dean reviews the profile for accuracy."],
  ["Publish", "Once approved, your profile appears on your department page and the faculty directory."],
];

export default function SubmitProfilePage() {
  return (
    <>
      <PageHero
        eyebrow="Faculty & Staff"
        title="Submit Your Profile"
        intro="Academic and clinical staff: add or update your profile on the College website. Submissions are published after approval by your Department Head or School Dean."
      />
      <Breadcrumbs
        items={[
          { label: "Academics", href: "/academics" },
          { label: "Faculty & Staff", href: "/academics/staff" },
          { label: "Submit Profile" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-12">
        {/* How it works */}
        <ol className="mb-10 grid gap-4 md:grid-cols-3">
          {steps.map(([title, text], i) => (
            <li key={title} className="flex gap-3 rounded-xl border border-line p-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand font-display font-bold text-white">{i + 1}</span>
              <div>
                <p className="font-display font-bold text-navy">{title}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-muted">{text}</p>
              </div>
            </li>
          ))}
        </ol>

        <StaffSubmissionForm />

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-muted">
          Submissions are coordinated by the Registrar &amp; Alumni Directorate. For help, email{" "}
          <a href="mailto:registrar@sphmmc.edu.et" className="font-semibold text-brand">registrar@sphmmc.edu.et</a>.
          Your contact details are used only for verifying and managing your profile.
        </p>
      </section>
    </>
  );
}
