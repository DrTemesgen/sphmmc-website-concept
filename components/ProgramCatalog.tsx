"use client";

import { useMemo, useState } from "react";
import { PROGRAMS, PROGRAM_LEVELS } from "@/data/programs";
import { SCHOOLS } from "@/data/schools";

const SCHOOL_LABELS: Record<string, string> = Object.fromEntries(
  SCHOOLS.map((s) => [s.slug, s.name])
);

export default function ProgramCatalog() {
  const [query, setQuery] = useState("");
  const [school, setSchool] = useState("all");
  const [level, setLevel] = useState("all");

  const filtered = useMemo(
    () =>
      PROGRAMS.filter((p) => {
        if (school !== "all" && p.school !== school) return false;
        if (level !== "all" && p.level !== level) return false;
        if (query && !p.name.toLowerCase().includes(query.toLowerCase())) return false;
        return true;
      }),
    [query, school, level]
  );

  const grouped = useMemo(() => {
    const map = new Map<string, typeof filtered>();
    for (const p of filtered) {
      const key = `${SCHOOL_LABELS[p.school] ?? p.school} — ${p.level}`;
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(p);
    }
    return map;
  }, [filtered]);

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
            placeholder="e.g. cardiology, nursing, epidemiology…"
            className="w-full rounded-md border border-line bg-white px-3 py-2 text-sm focus:border-brand focus:outline-none"
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-muted">School</span>
          <select
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            className="w-full rounded-md border border-line bg-white px-3 py-2 text-sm focus:border-brand focus:outline-none"
          >
            <option value="all">All schools</option>
            {SCHOOLS.filter((s) => PROGRAMS.some((p) => p.school === s.slug)).map((s) => (
              <option key={s.slug} value={s.slug}>{s.name}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-muted">Level</span>
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="w-full rounded-md border border-line bg-white px-3 py-2 text-sm focus:border-brand focus:outline-none"
          >
            <option value="all">All levels</option>
            {PROGRAM_LEVELS.map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
        </label>
      </div>

      <p className="mb-6 text-sm text-muted" role="status">
        {filtered.length} programme{filtered.length === 1 ? "" : "s"} shown
      </p>

      {[...grouped.entries()].map(([groupName, programs]) => (
        <div key={groupName} className="mb-8">
          <h2 className="mb-3 border-b border-line pb-1.5 font-display text-lg font-bold text-navy">
            {groupName}
            <span className="ml-2 text-sm font-normal text-muted">({programs.length})</span>
          </h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            {programs.map((p) => (
              <li
                key={`${p.school}-${p.name}`}
                className="flex items-baseline justify-between gap-3 rounded-md border border-line px-3.5 py-2.5"
              >
                <div>
                  <span className="text-sm font-semibold text-ink">{p.name}</span>
                  {p.modes && <span className="block text-xs text-muted">{p.modes}</span>}
                </div>
                <span className="shrink-0 rounded-full bg-paper px-2.5 py-0.5 text-xs font-bold text-brand">
                  {p.years} yr{p.years === "1" ? "" : "s"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {filtered.length === 0 && (
        <div className="rounded-xl border border-line bg-paper p-8 text-center">
          <p className="font-display text-lg font-bold text-navy">No programmes match your filters</p>
          <p className="mt-1 text-sm text-muted">Try clearing the search or choosing another school.</p>
        </div>
      )}
    </div>
  );
}
