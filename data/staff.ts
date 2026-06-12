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

export interface Publication {
  title: string;
  /** Clickable link — DOI, PubMed, journal page, or a topic search */
  url?: string;
  /** Journal / venue */
  venue?: string;
  year?: string;
}

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
  /** Selected publications — rendered as a checkable, linked list */
  publications?: Publication[];
  status: "approved" | "pending";
  /** Mark sample/demo profiles so they can be filtered before launch */
  sample?: boolean;
}

export const STAFF: StaffMember[] = [
  // ───────────── Internal Medicine ─────────────
  {
    id: "s-im-1",
    slug: "sample-im-head",
    name: "Dr. Dawit Mekonnen",
    department: "internal-medicine",
    rank: "Associate Professor",
    role: "Department Head",
    qualifications: ["MD — Addis Ababa University", "Specialty in Internal Medicine — SPHMMC", "Fellowship in Endocrinology"],
    interests: ["Diabetes & endocrinology", "Medical education", "Non-communicable diseases"],
    bio: "Sample profile. Consultant internist and endocrinologist leading the department's teaching, ward and clinic services, with a research focus on diabetes care in resource-limited settings.",
    email: "im.head@sphmmc.edu.et",
    publications: [
      {
        title: "Glycaemic control and complications among type 2 diabetes patients at a tertiary hospital (sample)",
        venue: "Ethiopian Journal of Health Sciences",
        year: "2023",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=type+2+diabetes+ethiopia+tertiary+hospital",
      },
      {
        title: "Hypertension awareness, treatment and control in an urban Ethiopian population (sample)",
        venue: "BMC Public Health",
        year: "2022",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=hypertension+control+ethiopia",
      },
      {
        title: "Outcomes of diabetic ketoacidosis admissions in Addis Ababa (sample)",
        venue: "Ethiopian Medical Journal",
        year: "2021",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=diabetic+ketoacidosis+addis+ababa",
      },
    ],
    status: "approved",
    sample: true,
  },
  {
    id: "s-im-2",
    slug: "sample-im-cardiology",
    name: "Dr. Hiwot Assefa",
    department: "internal-medicine",
    rank: "Assistant Professor",
    role: "Consultant Cardiologist",
    qualifications: ["MD — SPHMMC", "Internal Medicine Residency — SPHMMC", "Cardiology Fellowship — SPHMMC"],
    interests: ["Interventional cardiology", "Echocardiography", "Rheumatic heart disease"],
    bio: "Sample profile. Cardiologist working with the Cardiac Catheterisation Laboratory, teaching residents and fellows and building Ethiopia's interventional-cardiology capacity.",
    email: "cardiology@sphmmc.edu.et",
    publications: [
      {
        title: "Spectrum of valvular heart disease at a cardiac referral centre (sample)",
        venue: "Ethiopian Heart Journal",
        year: "2023",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=valvular+heart+disease+ethiopia",
      },
      {
        title: "Early outcomes of percutaneous coronary intervention in a low-resource setting (sample)",
        venue: "BMC Cardiovascular Disorders",
        year: "2022",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=percutaneous+coronary+intervention+ethiopia",
      },
    ],
    status: "approved",
    sample: true,
  },

  // ───────────── Paediatrics ─────────────
  {
    id: "s-paed-1",
    slug: "sample-paed-head",
    name: "Dr. Selamawit Bekele",
    department: "paediatrics",
    rank: "Associate Professor",
    role: "Department Head",
    qualifications: ["MD — Hawassa University", "Paediatrics Residency — SPHMMC", "Neonatology Fellowship — SPHMMC"],
    interests: ["Neonatology", "Newborn survival", "Child health systems"],
    bio: "Sample profile. Paediatrician and neonatologist leading newborn-care services and research aimed at reducing preterm and neonatal mortality.",
    email: "paediatrics@sphmmc.edu.et",
    publications: [
      {
        title: "Predictors of neonatal mortality in a tertiary neonatal intensive care unit (sample)",
        venue: "BMC Pediatrics",
        year: "2023",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=neonatal+mortality+NICU+ethiopia",
      },
      {
        title: "Kangaroo mother care and survival of low-birth-weight newborns (sample)",
        venue: "Ethiopian Journal of Pediatrics and Child Health",
        year: "2022",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=kangaroo+mother+care+ethiopia",
      },
    ],
    status: "approved",
    sample: true,
  },
  {
    id: "s-paed-2",
    slug: "sample-paed-emergency",
    name: "Dr. Yonas Girma",
    department: "paediatrics",
    rank: "Assistant Professor",
    role: "Consultant",
    qualifications: ["MD — SPHMMC", "Paediatrics Residency — SPHMMC", "Paediatric Emergency & Critical Care Fellowship"],
    interests: ["Paediatric intensive care", "Procedural sedation", "Acute care training"],
    bio: "Sample profile. Paediatric emergency and critical-care physician supporting the paediatric ICU and acute-care training programmes.",
    email: "paed.picu@sphmmc.edu.et",
    publications: [
      {
        title: "Establishing a paediatric intensive care unit in a tertiary hospital: a 3-year experience (sample)",
        venue: "Journal of Tropical Pediatrics",
        year: "2023",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=paediatric+intensive+care+unit+ethiopia",
      },
      {
        title: "Procedural sedation practice and safety in paediatric emergency care (sample)",
        venue: "African Journal of Emergency Medicine",
        year: "2021",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=procedural+sedation+paediatric+emergency",
      },
    ],
    status: "approved",
    sample: true,
  },

  // ───────────── Obstetrics & Gynaecology ─────────────
  {
    id: "s-og-1",
    slug: "sample-og-head",
    name: "Dr. Meron Tesfaye",
    department: "obstetrics-gynaecology",
    rank: "Associate Professor",
    role: "Department Head",
    qualifications: ["MD — Jimma University", "OB-GYN Residency — SPHMMC", "Maternal-Foetal Medicine Fellowship"],
    interests: ["High-risk obstetrics", "Maternal-foetal medicine", "Safe motherhood"],
    bio: "Sample profile. High-risk obstetrics consultant leading maternity services and maternal-health research in one of Ethiopia's busiest referral maternity units.",
    email: "obgyn@sphmmc.edu.et",
    publications: [
      {
        title: "Causes and trends of maternal near-miss at a tertiary referral hospital (sample)",
        venue: "International Journal of Gynecology & Obstetrics",
        year: "2023",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=maternal+near+miss+ethiopia",
      },
      {
        title: "Outcomes of caesarean delivery in a high-volume maternity unit (sample)",
        venue: "BMC Pregnancy and Childbirth",
        year: "2021",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=caesarean+outcomes+ethiopia",
      },
    ],
    status: "approved",
    sample: true,
  },

  // ───────────── Surgery ─────────────
  {
    id: "s-surg-1",
    slug: "sample-surgery-head",
    name: "Dr. Bereket Alemu",
    department: "surgery",
    rank: "Associate Professor",
    role: "Department Head",
    qualifications: ["MD — Addis Ababa University", "General Surgery Residency — SPHMMC", "Hepatobiliary Surgery Fellowship"],
    interests: ["Hepatobiliary surgery", "Laparoscopic surgery", "Surgical education"],
    bio: "Sample profile. General and hepatobiliary surgeon leading the surgical teaching programme and expanding minimally invasive surgery.",
    email: "surgery@sphmmc.edu.et",
    publications: [
      {
        title: "Outcomes of hepatobiliary surgery at a tertiary referral hospital (sample)",
        venue: "World Journal of Surgery",
        year: "2023",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=hepatobiliary+surgery+ethiopia",
      },
      {
        title: "Adoption of laparoscopic surgery in a resource-limited setting (sample)",
        venue: "Surgical Endoscopy",
        year: "2022",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=laparoscopic+surgery+ethiopia",
      },
    ],
    status: "approved",
    sample: true,
  },

  // ───────────── Public Health ─────────────
  {
    id: "s-sph-1",
    slug: "sample-sph-epi",
    name: "Dr. Abel Worku",
    department: "public-health",
    rank: "Assistant Professor",
    role: "Lecturer & Researcher",
    qualifications: ["BSc Public Health", "MPH in Epidemiology — SPHMMC", "PhD candidate, Health Sciences"],
    interests: ["Field epidemiology", "Health-systems research", "Maternal & child health"],
    bio: "Sample profile. Epidemiologist teaching on the MPH programmes and leading community-based research that informs national health policy.",
    email: "sph@sphmmc.edu.et",
    publications: [
      {
        title: "Determinants of skilled birth attendance in rural Ethiopia (sample)",
        venue: "PLOS ONE",
        year: "2023",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=skilled+birth+attendance+ethiopia",
      },
      {
        title: "Health-systems readiness for non-communicable disease care: a facility survey (sample)",
        venue: "BMC Health Services Research",
        year: "2022",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=health+system+readiness+NCD+ethiopia",
      },
    ],
    status: "approved",
    sample: true,
  },

  // ───────────── Nursing ─────────────
  {
    id: "s-nur-1",
    slug: "sample-nursing-critical-care",
    name: "Sr. Tsion Abebe",
    department: "nursing",
    rank: "Lecturer",
    role: "Programme Coordinator",
    qualifications: ["BSc Nursing", "MSc in Critical Care Nursing — SPHMMC"],
    interests: ["Critical-care nursing", "Clinical skills training", "Patient safety"],
    bio: "Sample profile. Critical-care nurse educator coordinating the MSc programme and clinical placements across the College's intensive-care units.",
    email: "nursing@sphmmc.edu.et",
    publications: [
      {
        title: "Nurse-led early warning scoring and patient outcomes in critical care (sample)",
        venue: "Intensive and Critical Care Nursing",
        year: "2023",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=nurse+early+warning+score+critical+care",
      },
      {
        title: "Simulation-based training for critical-care nurses: an evaluation (sample)",
        venue: "BMC Nursing",
        year: "2021",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=simulation+training+critical+care+nursing",
      },
    ],
    status: "approved",
    sample: true,
  },
];

/** Resolve a profile photo — sample profiles fall back to an illustrated avatar. */
export const staffPhoto = (s: StaffMember): string | undefined =>
  s.photo ?? (s.sample ? `/images/staff/${s.slug}.png` : undefined);

export const staffByDepartment = (deptSlug: string) =>
  STAFF.filter((s) => s.department === deptSlug && s.status === "approved");

export const staffBySlug = (slug: string) => STAFF.find((s) => s.slug === slug);

export const approvedStaff = () => STAFF.filter((s) => s.status === "approved");
