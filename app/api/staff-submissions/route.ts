import { promises as fs } from "fs";
import path from "path";
import os from "os";
import { DEPARTMENTS } from "@/data/departments";

export const runtime = "nodejs";

/**
 * Staff profile submissions — stored as "pending" for review.
 *
 * Workflow: staff submit via /academics/staff/submit → stored here →
 * Department Head / School Dean reviews → approved profiles are added to
 * data/staff.ts (status "approved") and appear on the department page.
 *
 * Demo-grade storage in .data/staff-submissions.json. For production, route
 * these to an inbox/CMS/approval queue and notify the relevant Dean.
 */
const DATA_DIR = path.join(os.tmpdir(), "sphmmc-demo");
const FILE = path.join(DATA_DIR, "staff-submissions.json");

interface Submission {
  reference: string;
  name: string;
  department: string;
  rank: string;
  role?: string;
  email: string;
  phone?: string;
  qualifications: string;
  interests: string;
  bio: string;
  publications?: string;
  photoNote?: string;
  status: "pending";
  submittedAt: string;
}

async function read(): Promise<Submission[]> {
  try {
    return JSON.parse(await fs.readFile(FILE, "utf-8")) as Submission[];
  } catch {
    return [];
  }
}

async function write(items: Submission[]): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(FILE, JSON.stringify(items, null, 2), "utf-8");
}

function makeRef(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let ref = "PRF-";
  for (let i = 0; i < 6; i++) ref += chars[Math.floor(Math.random() * chars.length)];
  return ref;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const department = String(body.department ?? "").trim();
  const rank = String(body.rank ?? "").trim();
  const email = String(body.email ?? "").trim();
  const qualifications = String(body.qualifications ?? "").trim();
  const interests = String(body.interests ?? "").trim();
  const bio = String(body.bio ?? "").trim();

  if (!name || !department || !rank || !email || !qualifications || !interests || !bio) {
    return Response.json({ error: "Please complete all required fields." }, { status: 400 });
  }
  if (!DEPARTMENTS.some((d) => d.slug === department)) {
    return Response.json({ error: "Unknown department." }, { status: 400 });
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const submission: Submission = {
    reference: makeRef(),
    name: name.slice(0, 120),
    department,
    rank: rank.slice(0, 60),
    role: body.role ? String(body.role).slice(0, 120) : undefined,
    email: email.slice(0, 120),
    phone: body.phone ? String(body.phone).slice(0, 30) : undefined,
    qualifications: qualifications.slice(0, 2000),
    interests: interests.slice(0, 600),
    bio: bio.slice(0, 2000),
    publications: body.publications ? String(body.publications).slice(0, 2000) : undefined,
    photoNote: body.photoNote ? String(body.photoNote).slice(0, 300) : undefined,
    status: "pending",
    submittedAt: new Date().toISOString(),
  };

  // Best-effort persistence — on a read-only/ephemeral filesystem the
  // submission confirmation is still returned so the demo flow completes.
  try {
    const items = await read();
    items.push(submission);
    await write(items);
  } catch {
    // ignore in the demo
  }

  return Response.json({ reference: submission.reference, status: "pending" });
}
