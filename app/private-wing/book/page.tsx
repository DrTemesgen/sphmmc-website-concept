import type { Metadata } from "next";
import { PageHero, Breadcrumbs } from "@/components/ui";
import BookingWizard from "@/components/BookingWizard";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Book a private-wing consultant at SPHMMC in four steps — choose a doctor, pick a time, enter your details, get instant confirmation.",
};

export default async function BookPage({
  searchParams,
}: {
  searchParams: Promise<{ doctor?: string }>;
}) {
  const { doctor } = await searchParams;
  return (
    <>
      <PageHero
        eyebrow="Private Wing"
        title="Book an Appointment"
        intro="Four steps, no account needed. Prefer the phone? Call +251 112 75 01 25."
      />
      <Breadcrumbs items={[{ label: "Private Wing", href: "/private-wing" }, { label: "Book" }]} />
      <section className="mx-auto max-w-7xl px-4 py-12">
        <BookingWizard preselectedDoctor={doctor} />
      </section>
    </>
  );
}
