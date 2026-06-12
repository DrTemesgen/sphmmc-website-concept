/**
 * Department staff & faculty profiles.
 *
 * Profiles are self-submitted by staff through /academics/staff/submit and
 * published here after approval by the Department Head / School Dean
 * (coordinated by the Registrar & Alumni Directorate).
 *
 * ⚠️ The entries below are SAMPLE profiles that demonstrate the layout and the
 * required fields. Replace them with approved, staff-submitted profiles before
 * go-live. The submission form collects exactly the fields in `StaffMember`.
 */

export interface StaffMember {
  id: string;
  slug: string;
  name: string;
  /** Department slug — must match a department in data/departments.ts */
  department: string;
  /** Academic rank, e.g. "Professor", "Associate Professor", "Assistant Professor", "Lecturer" */
  rank: string;
  /** Position / role within the unit, e.g. "Department Head", "Consultant" */
  role?: string;
  qualifications: string[];
  interests: string[];
  bio: string;
  email?: string;
  photo?: string;
  /** Selected publications, links or ORCID — optional */
  publications?: string[];
  status: "approved" | "pending";
  /** Mark sample/demo profiles so they can be filtered before launch */
  sample?: boolean;
}

export const STAFF: StaffMember[] = [
  // ───────────── Internal Medicine ─────────────
  {
    id: "s-im-1",
    slug: "sample-im-head",
    name: "Dr. Sample A. (Internal Medicine)",
    department: "internal-medicine",
    rank: "Associate Professor",
    role: "Department Head",
    qualifications: ["MD — Addis Ababa University", "Specialty in Internal Medicine — SPHMMC", "Fellowship in Endocrinology"],
    interests: ["Diabetes & endocrinology", "Medical education", "Non-communicable diseases"],
    bio: "Sample profile. Consultant internist and endocrinologist leading the department's teaching, ward and clinic services, with a research focus on diabetes care in resource-limited settings.",
    email: "im.head@sphmmc.edu.et",
    publications: ["Example: 20+ peer-reviewed publications in internal medicine and endocrinology"],
    status: "approved",
    sample: true,
  },
  {
    id: "s-im-2",
    slug: "sample-im-cardiology",
    name: "Dr. Sample B. (Cardiology)",
    department: "internal-medicine",
    rank: "Assistant Professor",
    role: "Consultant Cardiologist",
    qualifications: ["MD — SPHMMC", "Internal Medicine Residency — SPHMMC", "Cardiology Fellowship — SPHMMC"],
    interests: ["Interventional cardiology", "Echocardiography", "Rheumatic heart disease"],
    bio: "Sample profile. Cardiologist working with the Cardiac Catheterisation Laboratory, teaching residents and fellows and building Ethiopia's interventional-cardiology capacity.",
    email: "cardiology@sphmmc.edu.et",
    status: "approved",
    sample: true,
  },

  // ───────────── Paediatrics ─────────────
  {
    id: "s-paed-1",
    slug: "sample-paed-head",
    name: "Dr. Sample C. (Paediatrics)",
    department: "paediatrics",
    rank: "Associate Professor",
    role: "Department Head",
    qualifications: ["MD — Hawassa University", "Paediatrics Residency — SPHMMC", "Neonatology Fellowship — SPHMMC"],
    interests: ["Neonatology", "Newborn survival", "Child health systems"],
    bio: "Sample profile. Paediatrician and neonatologist leading newborn-care services and research aimed at reducing preterm and neonatal mortality.",
    email: "paediatrics@sphmmc.edu.et",
    status: "approved",
    sample: true,
  },
  {
    id: "s-paed-2",
    slug: "sample-paed-emergency",
    name: "Dr. Sample D. (Paediatric Critical Care)",
    department: "paediatrics",
    rank: "Assistant Professor",
    role: "Consultant",
    qualifications: ["MD — SPHMMC", "Paediatrics Residency — SPHMMC", "Paediatric Emergency & Critical Care Fellowship"],
    interests: ["Paediatric intensive care", "Procedural sedation", "Acute care training"],
    bio: "Sample profile. Paediatric emergency and critical-care physician supporting the paediatric ICU and acute-care training programmes.",
    email: "paed.picu@sphmmc.edu.et",
    status: "approved",
    sample: true,
  },

  // ───────────── Obstetrics & Gynaecology ─────────────
  {
    id: "s-og-1",
    slug: "sample-og-head",
    name: "Dr. Sample E. (Obstetrics & Gynaecology)",
    department: "obstetrics-gynaecology",
    rank: "Associate Professor",
    role: "Department Head",
    qualifications: ["MD — Jimma University", "OB-GYN Residency — SPHMMC", "Maternal-Foetal Medicine Fellowship"],
    interests: ["High-risk obstetrics", "Maternal-foetal medicine", "Safe motherhood"],
    bio: "Sample profile. High-risk obstetrics consultant leading maternity services and maternal-health research in one of Ethiopia's busiest referral maternity units.",
    email: "obgyn@sphmmc.edu.et",
    status: "approved",
    sample: true,
  },

  // ───────────── Surgery ─────────────
  {
    id: "s-surg-1",
    slug: "sample-surgery-head",
    name: "Dr. Sample F. (Surgery)",
    department: "surgery",
    rank: "Associate Professor",
    role: "Department Head",
    qualifications: ["MD — Addis Ababa University", "General Surgery Residency — SPHMMC", "Hepatobiliary Surgery Fellowship"],
    interests: ["Hepatobiliary surgery", "Laparoscopic surgery", "Surgical education"],
    bio: "Sample profile. General and hepatobiliary surgeon leading the surgical teaching programme and expanding minimally invasive surgery.",
    email: "surgery@sphmmc.edu.et",
    status: "approved",
    sample: true,
  },

  // ───────────── Public Health ─────────────
  {
    id: "s-sph-1",
    slug: "sample-sph-epi",
    name: "Dr. Sample G. (Public Health)",
    department: "public-health",
    rank: "Assistant Professor",
    role: "Lecturer & Researcher",
    qualifications: ["BSc Public Health", "MPH in Epidemiology — SPHMMC", "PhD candidate, Health Sciences"],
    interests: ["Field epidemiology", "Health-systems research", "Maternal & child health"],
    bio: "Sample profile. Epidemiologist teaching on the MPH programmes and leading community-based research that informs national health policy.",
    email: "sph@sphmmc.edu.et",
    status: "approved",
    sample: true,
  },

  // ───────────── Nursing ─────────────
  {
    id: "s-nur-1",
    slug: "sample-nursing-critical-care",
    name: "Sr. Sample H. (Critical Care Nursing)",
    department: "nursing",
    rank: "Lecturer",
    role: "Programme Coordinator",
    qualifications: ["BSc Nursing", "MSc in Critical Care Nursing — SPHMMC"],
    interests: ["Critical-care nursing", "Clinical skills training", "Patient safety"],
    bio: "Sample profile. Critical-care nurse educator coordinating the MSc programme and clinical placements across the College's intensive-care units.",
    email: "nursing@sphmmc.edu.et",
    status: "approved",
    sample: true,
  },
];

export const staffByDepartment = (deptSlug: string) =>
  STAFF.filter((s) => s.department === deptSlug && s.status === "approved");

export const staffBySlug = (slug: string) => STAFF.find((s) => s.slug === slug);

export const approvedStaff = () => STAFF.filter((s) => s.status === "approved");
