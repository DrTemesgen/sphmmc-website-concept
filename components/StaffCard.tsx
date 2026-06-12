import Link from "next/link";
import Image from "next/image";
import { StaffMember } from "@/data/staff";

function initials(name: string) {
  const parts = name.replace(/^(Dr\.|Mr\.|Mrs\.|Ms\.|Sr\.|Prof\.)\s*/i, "").split(/\s+/);
  return parts.slice(0, 2).map((p) => p[0]?.toUpperCase() ?? "").join("");
}

export default function StaffCard({ staff }: { staff: StaffMember }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-line bg-white p-5 transition hover:border-brand/40 hover:shadow-md">
      <div className="flex items-start gap-4">
        {staff.photo ? (
          <Image
            src={staff.photo}
            alt={staff.name}
            width={64}
            height={64}
            className="h-16 w-16 rounded-full border border-line object-cover object-top"
          />
        ) : (
          <div aria-hidden className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand/10 font-display text-lg font-bold text-brand">
            {initials(staff.name)}
          </div>
        )}
        <div>
          <h3 className="font-display text-base font-bold leading-snug text-navy">
            <Link href={`/academics/staff/${staff.slug}`} className="hover:text-brand hover:underline">
              {staff.name}
            </Link>
          </h3>
          <p className="text-sm font-semibold text-brand">{staff.rank}</p>
          {staff.role && <p className="text-xs text-muted">{staff.role}</p>}
        </div>
      </div>
      {staff.interests.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {staff.interests.slice(0, 3).map((i) => (
            <span key={i} className="rounded-full bg-paper px-2 py-0.5 text-[11px] font-semibold text-sky">
              {i}
            </span>
          ))}
        </div>
      )}
      <div className="mt-3 flex items-center justify-between">
        <Link href={`/academics/staff/${staff.slug}`} className="text-sm font-bold text-brand hover:underline">
          View profile →
        </Link>
        {staff.sample && (
          <span className="rounded bg-gold/15 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide" style={{ color: "#9a6a00" }}>
            Sample
          </span>
        )}
      </div>
    </article>
  );
}
