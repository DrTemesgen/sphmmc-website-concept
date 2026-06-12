"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { DOCTORS, Doctor, activeSpecialties, doctorBySlug } from "@/data/doctors";
import { TimeSlot, getBookingProvider, BookingConfirmation } from "@/lib/booking";

const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  return `${DAY_NAMES[date.getDay()]}, ${MONTHS[m - 1]} ${d}`;
}

const STEPS = ["Doctor", "Time", "Details", "Confirm"] as const;

export default function BookingWizard({ preselectedDoctor }: { preselectedDoctor?: string }) {
  const provider = useMemo(() => getBookingProvider(), []);
  const initialDoctor = preselectedDoctor ? doctorBySlug(preselectedDoctor) ?? null : null;

  const [step, setStep] = useState(initialDoctor ? 1 : 0);
  const [specialty, setSpecialty] = useState(initialDoctor?.specialty ?? "all");
  const [doctor, setDoctor] = useState<Doctor | null>(initialDoctor);
  const [slots, setSlots] = useState<TimeSlot[] | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [form, setForm] = useState({ patientName: "", phone: "", age: "", sex: "", reason: "" });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmation, setConfirmation] = useState<BookingConfirmation | null>(null);

  const specialties = activeSpecialties();
  const doctors = specialty === "all" ? DOCTORS : DOCTORS.filter((d) => d.specialty === specialty);

  // Load availability when a doctor is chosen
  useEffect(() => {
    if (!doctor) return;
    let cancelled = false;
    setSlots(null);
    provider.getSlots(doctor).then((s) => {
      if (!cancelled) setSlots(s);
    });
    return () => {
      cancelled = true;
    };
  }, [doctor, provider]);

  const slotsByDate = useMemo(() => {
    if (!slots) return new Map<string, TimeSlot[]>();
    const map = new Map<string, TimeSlot[]>();
    for (const s of slots) {
      if (!map.has(s.date)) map.set(s.date, []);
      map.get(s.date)!.push(s);
    }
    return map;
  }, [slots]);

  async function submit() {
    if (!doctor || !selectedSlot) return;
    setSubmitting(true);
    setError(null);
    try {
      const result = await provider.book({
        doctorId: doctor.id,
        doctorName: doctor.name,
        specialty: doctor.specialty,
        date: selectedSlot.date,
        start: selectedSlot.start,
        patientName: form.patientName,
        phone: form.phone,
        age: form.age,
        sex: form.sex,
        reason: form.reason || undefined,
      });
      setConfirmation(result);
      setStep(3);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Booking failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  // ── Confirmation screen ────────────────────────────────────────────────
  if (confirmation) {
    return (
      <div className="mx-auto max-w-xl rounded-2xl border border-line bg-white p-8 text-center">
        <div aria-hidden className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
          ✅
        </div>
        <h2 className="mt-4 font-display text-2xl font-bold text-navy">Appointment Confirmed</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">{confirmation.message}</p>
        <div className="mt-5 rounded-xl bg-paper p-5">
          <p className="text-xs font-bold uppercase tracking-wide text-muted">Booking reference</p>
          <p className="font-display text-3xl font-bold tracking-wider text-brand">{confirmation.reference}</p>
        </div>
        <ul className="mt-5 space-y-1.5 text-left text-sm text-ink">
          <li>• Please arrive <strong>15 minutes early</strong> with your ID.</li>
          <li>• Bring previous medical records and current medications.</li>
          <li>• Pay the consultation fee at the Private Wing reception.</li>
          <li>• To cancel or reschedule, call +251 112 75 01 25 with your reference.</li>
        </ul>
        <Link href="/" className="mt-6 inline-block rounded-md bg-brand px-6 py-3 font-display font-bold text-white hover:bg-brand-dark">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl">
      {/* Progress */}
      <ol className="mb-8 flex items-center justify-between gap-1" aria-label="Booking progress">
        {STEPS.map((label, i) => (
          <li key={label} className="flex flex-1 items-center gap-1 last:flex-none">
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold ${
                i < step ? "bg-green-500 text-white" : i === step ? "bg-brand text-white" : "bg-line text-muted"
              }`}
              aria-current={i === step ? "step" : undefined}
            >
              {i < step ? "✓" : i + 1}
            </span>
            <span className={`hidden text-xs font-bold sm:inline ${i === step ? "text-navy" : "text-muted"}`}>
              {label}
            </span>
            {i < STEPS.length - 1 && <span aria-hidden className="mx-1 h-0.5 flex-1 bg-line" />}
          </li>
        ))}
      </ol>

      {/* Step 0: choose doctor */}
      {step === 0 && (
        <div>
          <h2 className="font-display text-xl font-bold text-navy">Choose a specialty and consultant</h2>
          <select
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            aria-label="Filter by specialty"
            className="mt-4 w-full rounded-md border border-line px-3 py-2.5 text-sm focus:border-brand focus:outline-none sm:w-72"
          >
            <option value="all">All specialties</option>
            {specialties.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {doctors.map((d) => (
              <button
                key={d.id}
                type="button"
                onClick={() => {
                  setDoctor(d);
                  setSelectedSlot(null);
                  setStep(1);
                }}
                className="rounded-xl border border-line p-4 text-left transition hover:border-brand hover:shadow-sm"
              >
                <p className="font-display font-bold text-navy">{d.name}</p>
                <p className="text-sm font-semibold text-brand">{d.specialty}</p>
                <p className="mt-1 text-xs text-muted">{d.title}</p>
                <p className="mt-2 text-sm font-bold text-ink">{d.fee} ETB</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 1: choose time */}
      {step === 1 && doctor && (
        <div>
          <div className="mb-5 flex items-center justify-between gap-3 rounded-xl border border-line bg-paper p-4">
            <div>
              <p className="font-display font-bold text-navy">{doctor.name}</p>
              <p className="text-sm text-brand">{doctor.specialty} · {doctor.fee} ETB</p>
            </div>
            <button type="button" onClick={() => setStep(0)} className="text-sm font-bold text-brand hover:underline">
              Change
            </button>
          </div>
          <h2 className="font-display text-xl font-bold text-navy">Pick a date and time</h2>
          {!slots && <p className="mt-4 text-sm text-muted" role="status">Loading availability…</p>}
          {slots && slotsByDate.size === 0 && (
            <p className="mt-4 text-sm text-muted">No upcoming clinic sessions found. Please call +251 112 75 01 25.</p>
          )}
          <div className="mt-4 max-h-[420px] space-y-5 overflow-y-auto pr-1">
            {[...slotsByDate.entries()].map(([date, daySlots]) => (
              <div key={date}>
                <p className="font-display text-sm font-bold text-navy">{formatDate(date)}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {daySlots.map((s) => {
                    const isSelected = selectedSlot?.date === s.date && selectedSlot?.start === s.start;
                    return (
                      <button
                        key={`${s.date}T${s.start}`}
                        type="button"
                        disabled={!s.available}
                        onClick={() => setSelectedSlot(s)}
                        className={`rounded-md border px-3.5 py-2 text-sm font-semibold transition ${
                          isSelected
                            ? "border-brand bg-brand text-white"
                            : s.available
                              ? "border-line bg-white text-navy hover:border-brand"
                              : "cursor-not-allowed border-line bg-paper text-muted line-through"
                        }`}
                      >
                        {s.start}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-end">
            <button
              type="button"
              disabled={!selectedSlot}
              onClick={() => setStep(2)}
              className="rounded-md bg-brand px-6 py-3 font-display font-bold text-white transition hover:bg-brand-dark disabled:opacity-40"
            >
              Continue →
            </button>
          </div>
        </div>
      )}

      {/* Step 2: details */}
      {step === 2 && doctor && selectedSlot && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
        >
          <div className="mb-5 rounded-xl border border-line bg-paper p-4 text-sm">
            <p className="font-display font-bold text-navy">{doctor.name} — {doctor.specialty}</p>
            <p className="text-muted">
              {formatDate(selectedSlot.date)} at {selectedSlot.start} · {doctor.fee} ETB
              <button type="button" onClick={() => setStep(1)} className="ml-2 font-bold text-brand hover:underline">
                Change
              </button>
            </p>
          </div>
          <h2 className="font-display text-xl font-bold text-navy">Who is the appointment for?</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="block sm:col-span-2">
              <span className="mb-1 block text-sm font-bold text-navy">Full name *</span>
              <input
                required
                type="text"
                value={form.patientName}
                onChange={(e) => setForm({ ...form, patientName: e.target.value })}
                className="w-full rounded-md border border-line px-3 py-2.5 text-sm focus:border-brand focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-bold text-navy">Mobile number *</span>
              <input
                required
                type="tel"
                inputMode="tel"
                placeholder="09… or +2519…"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-md border border-line px-3 py-2.5 text-sm focus:border-brand focus:outline-none"
              />
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label className="block">
                <span className="mb-1 block text-sm font-bold text-navy">Age *</span>
                <input
                  required
                  type="number"
                  min={0}
                  max={120}
                  inputMode="numeric"
                  value={form.age}
                  onChange={(e) => setForm({ ...form, age: e.target.value })}
                  className="w-full rounded-md border border-line px-3 py-2.5 text-sm focus:border-brand focus:outline-none"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-bold text-navy">Sex *</span>
                <select
                  required
                  value={form.sex}
                  onChange={(e) => setForm({ ...form, sex: e.target.value })}
                  className="w-full rounded-md border border-line px-3 py-2.5 text-sm focus:border-brand focus:outline-none"
                >
                  <option value="">Select…</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
              </label>
            </div>
            <label className="block sm:col-span-2">
              <span className="mb-1 block text-sm font-bold text-navy">Reason for visit (optional)</span>
              <textarea
                rows={3}
                value={form.reason}
                onChange={(e) => setForm({ ...form, reason: e.target.value })}
                placeholder="Briefly describe your concern — this helps the consultant prepare."
                className="w-full rounded-md border border-line px-3 py-2.5 text-sm focus:border-brand focus:outline-none"
              />
            </label>
          </div>
          {error && (
            <p role="alert" className="mt-4 rounded-md border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-700">
              {error}
            </p>
          )}
          <p className="mt-4 text-xs leading-relaxed text-muted">
            By booking you agree that SPHMMC may contact you by phone about this appointment. Your
            information is used only for appointment management.
          </p>
          <div className="mt-5 flex justify-between">
            <button type="button" onClick={() => setStep(1)} className="rounded-md border border-line px-5 py-3 font-display font-bold text-navy hover:bg-paper">
              ← Back
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="rounded-md bg-brand px-6 py-3 font-display font-bold text-white transition hover:bg-brand-dark disabled:opacity-50"
            >
              {submitting ? "Booking…" : "Confirm appointment"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
