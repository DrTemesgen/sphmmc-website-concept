/**
 * Booking data layer — provider abstraction.
 *
 * Today: `LocalBookingProvider` stores appointments via the internal API
 * (file-backed JSON, demo-grade).
 *
 * Future (Medplum EMR): implement `MedplumBookingProvider` against the same
 * interface and swap it in `getBookingProvider()`. The mapping is direct:
 *   Doctor            → FHIR Practitioner + PractitionerRole
 *   ClinicSession     → FHIR Schedule (+ generated Slot resources)
 *   BookingRequest    → FHIR Appointment (status: proposed → booked)
 *   Patient details   → FHIR Patient (matched by phone)
 * See https://www.medplum.com/docs/scheduling for the reference flows.
 */

import { Doctor } from "@/data/doctors";

export interface TimeSlot {
  /** ISO date, e.g. "2026-06-15" */
  date: string;
  /** "17:00" */
  start: string;
  end: string;
  available: boolean;
}

export interface BookingRequest {
  doctorId: string;
  doctorName: string;
  specialty: string;
  date: string;
  start: string;
  patientName: string;
  phone: string;
  age: string;
  sex: string;
  reason?: string;
}

export interface BookingConfirmation {
  reference: string;
  status: "confirmed" | "pending";
  message: string;
}

export const SLOT_MINUTES = 20;

/** Generate the next N days of slots for a doctor from their weekly sessions. */
export function generateSlots(doctor: Doctor, daysAhead = 21, from = new Date()): TimeSlot[] {
  const slots: TimeSlot[] = [];
  for (let i = 1; i <= daysAhead; i++) {
    const d = new Date(from);
    d.setDate(d.getDate() + i);
    const sessions = doctor.sessions.filter((s) => s.day === d.getDay());
    for (const s of sessions) {
      const [sh, sm] = s.start.split(":").map(Number);
      const [eh, em] = s.end.split(":").map(Number);
      let mins = sh * 60 + sm;
      const endMins = eh * 60 + em;
      while (mins + SLOT_MINUTES <= endMins) {
        const start = `${String(Math.floor(mins / 60)).padStart(2, "0")}:${String(mins % 60).padStart(2, "0")}`;
        const endM = mins + SLOT_MINUTES;
        const end = `${String(Math.floor(endM / 60)).padStart(2, "0")}:${String(endM % 60).padStart(2, "0")}`;
        slots.push({
          date: d.toISOString().slice(0, 10),
          start,
          end,
          available: true,
        });
        mins += SLOT_MINUTES;
      }
    }
  }
  return slots;
}

export interface BookingProvider {
  getSlots(doctor: Doctor): Promise<TimeSlot[]>;
  book(request: BookingRequest): Promise<BookingConfirmation>;
}

/** Demo-grade provider backed by the /api/bookings route. */
export class LocalBookingProvider implements BookingProvider {
  async getSlots(doctor: Doctor): Promise<TimeSlot[]> {
    const all = generateSlots(doctor);
    try {
      const res = await fetch(`/api/bookings?doctorId=${encodeURIComponent(doctor.id)}`);
      if (res.ok) {
        const { booked } = (await res.json()) as { booked: { date: string; start: string }[] };
        const taken = new Set(booked.map((b) => `${b.date}T${b.start}`));
        return all.map((s) => (taken.has(`${s.date}T${s.start}`) ? { ...s, available: false } : s));
      }
    } catch {
      // fall through — show generated slots optimistically
    }
    return all;
  }

  async book(request: BookingRequest): Promise<BookingConfirmation> {
    const res = await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ error: "Booking failed" }));
      throw new Error(err.error ?? "Booking failed");
    }
    return (await res.json()) as BookingConfirmation;
  }
}

export function getBookingProvider(): BookingProvider {
  // Future: return new MedplumBookingProvider(medplumClient) when the EMR
  // integration goes live (NEXT_PUBLIC_BOOKING_PROVIDER=medplum).
  return new LocalBookingProvider();
}
