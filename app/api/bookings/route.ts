import { promises as fs } from "fs";
import path from "path";
import os from "os";
import { DOCTORS } from "@/data/doctors";

export const runtime = "nodejs";

/**
 * Demo-grade booking store: appointments are persisted to a JSON file in a
 * writable temp directory (works locally and on serverless hosts like Vercel,
 * where it is ephemeral — fine for a demo). Persistence is best-effort: if the
 * write fails, the confirmation is still returned so the demo flow completes.
 * Replace with the Medplum FHIR Appointment API for production.
 */
const DATA_DIR = path.join(os.tmpdir(), "sphmmc-demo");
const BOOKINGS_FILE = path.join(DATA_DIR, "bookings.json");

interface StoredBooking {
  reference: string;
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
  createdAt: string;
}

async function readBookings(): Promise<StoredBooking[]> {
  try {
    const raw = await fs.readFile(BOOKINGS_FILE, "utf-8");
    return JSON.parse(raw) as StoredBooking[];
  } catch {
    return [];
  }
}

async function writeBookings(bookings: StoredBooking[]): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(BOOKINGS_FILE, JSON.stringify(bookings, null, 2), "utf-8");
}

function makeReference(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let ref = "SP-";
  for (let i = 0; i < 6; i++) {
    ref += chars[Math.floor(Math.random() * chars.length)];
  }
  return ref;
}

/** GET /api/bookings?doctorId=… → already-booked slots for that doctor */
export async function GET(request: Request) {
  const url = new URL(request.url);
  const doctorId = url.searchParams.get("doctorId");
  if (!doctorId) {
    return Response.json({ error: "doctorId is required" }, { status: 400 });
  }
  const bookings = await readBookings();
  const booked = bookings
    .filter((b) => b.doctorId === doctorId)
    .map((b) => ({ date: b.date, start: b.start }));
  return Response.json({ booked });
}

/** POST /api/bookings → create a booking */
export async function POST(request: Request) {
  let body: Partial<StoredBooking>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { doctorId, date, start, patientName, phone, age, sex, reason } = body;

  if (!doctorId || !date || !start || !patientName || !phone || !age || !sex) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }
  const doctor = DOCTORS.find((d) => d.id === doctorId);
  if (!doctor) {
    return Response.json({ error: "Unknown doctor" }, { status: 400 });
  }
  if (!/^(\+251|0)?[79]\d{8}$/.test(String(phone).replace(/[\s-]/g, ""))) {
    return Response.json(
      { error: "Please enter a valid Ethiopian mobile number (09… or +2519…)" },
      { status: 400 }
    );
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(date)) || !/^\d{2}:\d{2}$/.test(String(start))) {
    return Response.json({ error: "Invalid date or time" }, { status: 400 });
  }

  const booking: StoredBooking = {
    reference: makeReference(),
    doctorId,
    doctorName: doctor.name,
    specialty: doctor.specialty,
    date: String(date),
    start: String(start),
    patientName: String(patientName).slice(0, 120),
    phone: String(phone).slice(0, 20),
    age: String(age).slice(0, 3),
    sex: String(sex).slice(0, 10),
    reason: reason ? String(reason).slice(0, 500) : undefined,
    createdAt: new Date().toISOString(),
  };

  // Best-effort persistence + conflict check. On a read-only/ephemeral
  // filesystem this is skipped so the demo confirmation still succeeds.
  try {
    const bookings = await readBookings();
    if (bookings.some((b) => b.doctorId === doctorId && b.date === date && b.start === start)) {
      return Response.json(
        { error: "That time was just booked. Please pick another slot." },
        { status: 409 }
      );
    }
    bookings.push(booking);
    await writeBookings(bookings);
  } catch {
    // ignore — demo confirmation is returned regardless
  }

  return Response.json({
    reference: booking.reference,
    status: "confirmed",
    message: `Appointment confirmed with ${doctor.name} on ${booking.date} at ${booking.start}. Reference: ${booking.reference}. Please arrive 15 minutes early with your ID.`,
  });
}
