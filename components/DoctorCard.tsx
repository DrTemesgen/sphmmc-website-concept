import Link from "next/link";
import { Doctor } from "@/data/doctors";

const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function DoctorCard({ doctor }: { doctor: Doctor }) {
  const days = [...new Set(doctor.sessions.map((s) => DAY_NAMES[s.day]))].join(" · ");
  return (
    <article className="flex h-full flex-col rounded-xl border border-line bg-white p-5 transition hover:border-brand/40 hover:shadow-md">
      <div className="flex items-start gap-4">
        <div
          aria-hidden
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand/10 font-display text-lg font-bold text-brand"
        >
          {doctor.specialty.slice(0, 2).toUpperCase()}
        </div>
        <div>
          <h3 className="font-display text-lg font-bold leading-snug text-navy">
            <Link href={`/private-wing/doctors/${doctor.slug}`} className="hover:text-brand hover:underline">
              {doctor.name}
            </Link>
          </h3>
          <p className="text-sm font-semibold text-brand">{doctor.specialty}</p>
        </div>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-muted">{doctor.title}</p>
      <dl className="mt-3 flex-1 space-y-1 text-sm text-ink">
        <div className="flex justify-between gap-2">
          <dt className="text-muted">Clinic days</dt>
          <dd className="font-semibold">{days}</dd>
        </div>
        <div className="flex justify-between gap-2">
          <dt className="text-muted">Languages</dt>
          <dd className="font-semibold">{doctor.languages.join(", ")}</dd>
        </div>
        <div className="flex justify-between gap-2">
          <dt className="text-muted">Consultation fee</dt>
          <dd className="font-display font-bold text-brand">{doctor.fee} ETB</dd>
        </div>
      </dl>
      <div className="mt-4 flex gap-2">
        <Link
          href={`/private-wing/book?doctor=${doctor.slug}`}
          className="flex-1 rounded-md bg-brand px-3 py-2 text-center font-display text-sm font-bold text-white transition hover:bg-brand-dark"
        >
          Book
        </Link>
        <Link
          href={`/private-wing/doctors/${doctor.slug}`}
          className="flex-1 rounded-md border border-line px-3 py-2 text-center font-display text-sm font-bold text-navy transition hover:bg-paper"
        >
          Profile
        </Link>
      </div>
    </article>
  );
}
