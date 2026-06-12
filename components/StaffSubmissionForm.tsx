"use client";

import { useState } from "react";
import Link from "next/link";
import { DEPARTMENTS } from "@/data/departments";
import { SCHOOLS } from "@/data/schools";

const RANKS = [
  "Professor",
  "Associate Professor",
  "Assistant Professor",
  "Lecturer",
  "Assistant Lecturer",
  "Graduate Assistant",
  "Consultant",
  "Specialist",
  "Other",
];

interface FormState {
  name: string;
  department: string;
  rank: string;
  role: string;
  email: string;
  phone: string;
  qualifications: string;
  interests: string;
  bio: string;
  publications: string;
  photoNote: string;
  consent: boolean;
}

const EMPTY: FormState = {
  name: "",
  department: "",
  rank: "",
  role: "",
  email: "",
  phone: "",
  qualifications: "",
  interests: "",
  bio: "",
  publications: "",
  photoNote: "",
  consent: false,
};

export default function StaffSubmissionForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [reference, setReference] = useState<string | null>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;
    setError(null);
    if (!form.consent) {
      setError("Please confirm the declaration before submitting.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/staff-submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json()) as { reference?: string; error?: string };
      if (!res.ok) throw new Error(data.error ?? "Submission failed");
      setReference(data.reference ?? "received");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (reference) {
    return (
      <div className="mx-auto max-w-xl rounded-2xl border border-line bg-white p-8 text-center">
        <div aria-hidden className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">✅</div>
        <h2 className="mt-4 font-display text-2xl font-bold text-navy">Profile submitted for approval</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Thank you, {form.name || "colleague"}. Your profile has been received and sent to your
          Department Head / School Dean for review. Once approved, it will appear on your
          department&apos;s page.
        </p>
        <div className="mt-5 rounded-xl bg-paper p-5">
          <p className="text-xs font-bold uppercase tracking-wide text-muted">Submission reference</p>
          <p className="font-display text-2xl font-bold tracking-wider text-brand">{reference}</p>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-muted">
          If you included a photo note, please email your professional photo to{" "}
          <a href="mailto:registrar@sphmmc.edu.et" className="font-semibold text-brand">registrar@sphmmc.edu.et</a>{" "}
          with this reference.
        </p>
        <Link href="/academics/staff" className="mt-6 inline-block rounded-md bg-brand px-6 py-3 font-display font-bold text-white hover:bg-brand-dark">
          Back to faculty directory
        </Link>
      </div>
    );
  }

  const inputCls = "w-full rounded-md border border-line px-3 py-2.5 text-sm focus:border-brand focus:outline-none";
  const labelCls = "mb-1 block text-sm font-bold text-navy";

  return (
    <form onSubmit={submit} className="mx-auto max-w-2xl space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block sm:col-span-2">
          <span className={labelCls}>Full name (with title) *</span>
          <input required type="text" placeholder="e.g. Dr. Aster Tadesse" value={form.name} onChange={(e) => update("name", e.target.value)} className={inputCls} />
        </label>
        <label className="block">
          <span className={labelCls}>Department / unit *</span>
          <select required value={form.department} onChange={(e) => update("department", e.target.value)} className={inputCls}>
            <option value="">Select…</option>
            {SCHOOLS.map((school) => (
              <optgroup key={school.slug} label={school.name}>
                {DEPARTMENTS.filter((d) => d.school === school.slug).map((d) => (
                  <option key={d.slug} value={d.slug}>{d.name}</option>
                ))}
              </optgroup>
            ))}
          </select>
        </label>
        <label className="block">
          <span className={labelCls}>Academic rank *</span>
          <select required value={form.rank} onChange={(e) => update("rank", e.target.value)} className={inputCls}>
            <option value="">Select…</option>
            {RANKS.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className={labelCls}>Position / role (optional)</span>
          <input type="text" placeholder="e.g. Department Head, Consultant Cardiologist" value={form.role} onChange={(e) => update("role", e.target.value)} className={inputCls} />
        </label>
        <label className="block">
          <span className={labelCls}>Work email *</span>
          <input required type="email" placeholder="name@sphmmc.edu.et" value={form.email} onChange={(e) => update("email", e.target.value)} className={inputCls} />
        </label>
        <label className="block">
          <span className={labelCls}>Phone (optional)</span>
          <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className={inputCls} />
        </label>
        <label className="block sm:col-span-2">
          <span className={labelCls}>Qualifications *</span>
          <textarea required rows={3} placeholder="One per line — e.g. MD, Addis Ababa University (2010); Specialty in Internal Medicine, SPHMMC (2015)" value={form.qualifications} onChange={(e) => update("qualifications", e.target.value)} className={inputCls} />
        </label>
        <label className="block sm:col-span-2">
          <span className={labelCls}>Areas of interest / expertise *</span>
          <input required type="text" placeholder="Comma-separated — e.g. Diabetes, Medical education, NCDs" value={form.interests} onChange={(e) => update("interests", e.target.value)} className={inputCls} />
        </label>
        <label className="block sm:col-span-2">
          <span className={labelCls}>Short biography *</span>
          <textarea required rows={5} placeholder="A few sentences about your role, clinical/academic work and focus (max ~150 words)." value={form.bio} onChange={(e) => update("bio", e.target.value)} className={inputCls} />
        </label>
        <label className="block sm:col-span-2">
          <span className={labelCls}>Selected publications / links (optional)</span>
          <textarea rows={3} placeholder="One per line — citations, DOIs, ORCID, Google Scholar profile, etc." value={form.publications} onChange={(e) => update("publications", e.target.value)} className={inputCls} />
        </label>
        <label className="block sm:col-span-2">
          <span className={labelCls}>Photo (optional)</span>
          <input type="text" placeholder="Note here if you will email a professional photo separately" value={form.photoNote} onChange={(e) => update("photoNote", e.target.value)} className={inputCls} />
          <span className="mt-1 block text-xs text-muted">Please email a high-resolution professional photo (head &amp; shoulders) to registrar@sphmmc.edu.et with your reference number.</span>
        </label>
      </div>

      <label className="flex items-start gap-2 rounded-lg bg-paper p-4 text-sm text-ink">
        <input type="checkbox" checked={form.consent} onChange={(e) => update("consent", e.target.checked)} className="mt-0.5" />
        <span>
          I confirm the information above is accurate, and I consent to its publication on the SPHMMC
          website once approved by my Department Head / School Dean.
        </span>
      </label>

      {error && (
        <p role="alert" className="rounded-md border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-md bg-brand px-6 py-3 font-display font-bold text-white transition hover:bg-brand-dark disabled:opacity-50"
      >
        {submitting ? "Submitting…" : "Submit profile for approval"}
      </button>
    </form>
  );
}
