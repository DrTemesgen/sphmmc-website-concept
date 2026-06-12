"use client";

import { useMemo, useState } from "react";
import { DOCTORS, activeSpecialties } from "@/data/doctors";
import DoctorCard from "@/components/DoctorCard";

export default function DoctorDirectory() {
  const [query, setQuery] = useState("");
  const [specialty, setSpecialty] = useState("all");
  const [gender, setGender] = useState("all");

  const specialties = activeSpecialties();

  const filtered = useMemo(() => {
    return DOCTORS.filter((d) => {
      if (specialty !== "all" && d.specialty !== specialty) return false;
      if (gender !== "all" && d.gender !== gender) return false;
      if (query) {
        const q = query.toLowerCase();
        const haystack = `${d.name} ${d.specialty} ${d.subspecialties.join(" ")} ${d.title}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [query, specialty, gender]);

  return (
    <div>
      {/* Filters */}
      <div className="mb-8 grid gap-3 rounded-xl border border-line bg-paper p-4 sm:grid-cols-3">
        <label className="block">
          <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-muted">Search</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Name, specialty, condition…"
            className="w-full rounded-md border border-line bg-white px-3 py-2 text-sm focus:border-brand focus:outline-none"
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-muted">Specialty</span>
          <select
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            className="w-full rounded-md border border-line bg-white px-3 py-2 text-sm focus:border-brand focus:outline-none"
          >
            <option value="all">All specialties</option>
            {specialties.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-muted">Doctor gender</span>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full rounded-md border border-line bg-white px-3 py-2 text-sm focus:border-brand focus:outline-none"
          >
            <option value="all">Any</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </label>
      </div>

      <p className="mb-4 text-sm text-muted" role="status">
        {filtered.length} consultant{filtered.length === 1 ? "" : "s"} found
      </p>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((d) => (
          <DoctorCard key={d.id} doctor={d} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="rounded-xl border border-line bg-paper p-8 text-center">
          <p className="font-display text-lg font-bold text-navy">No consultants match your filters</p>
          <p className="mt-1 text-sm text-muted">
            Try a different specialty, or call +251 112 75 01 25 for help finding the right doctor.
          </p>
        </div>
      )}
    </div>
  );
}
