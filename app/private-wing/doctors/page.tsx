import type { Metadata } from "next";
import { PageHero, Breadcrumbs } from "@/components/ui";
import DoctorDirectory from "@/components/DoctorDirectory";

export const metadata: Metadata = {
  title: "Find a Doctor",
  description:
    "Browse SPHMMC private-wing consultants by specialty, language and clinic day — and book online.",
};

export default function DoctorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Private Wing"
        title="Find a Doctor"
        intro="Browse our consultants by specialty, search by name or condition, and book directly from any profile."
      />
      <Breadcrumbs items={[{ label: "Private Wing", href: "/private-wing" }, { label: "Find a Doctor" }]} />
      <section className="mx-auto max-w-7xl px-4 py-14">
        <DoctorDirectory />
        <p className="mt-8 rounded-lg bg-paper p-4 text-xs leading-relaxed text-muted">
          This directory currently shows a sample roster while the official private-wing consultant
          list is finalised. Names, fees and schedules will be replaced with verified data from the
          Medical Services Facilitation Directorate before launch.
        </p>
      </section>
    </>
  );
}
