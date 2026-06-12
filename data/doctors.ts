/**
 * Private Wing consultant roster.
 *
 * ⚠️ SAMPLE DATA — every entry below is a placeholder to demonstrate the
 * directory and booking system. Replace with the official private-wing
 * roster (names, photos, fees, schedules) from the Internal Revenue
 * Executive / Medical Services Facilitation Directorate before go-live.
 *
 * The shape is deliberately FHIR-friendly: each doctor maps to a Medplum
 * `Practitioner` (+ `PractitionerRole` for specialty/availability) so the
 * future EMR integration is a data-source swap, not a redesign.
 */

export interface ClinicSession {
  /** 0 = Sunday … 6 = Saturday */
  day: number;
  start: string; // "17:00"
  end: string; // "20:00"
  location: string;
}

export interface Doctor {
  id: string;
  slug: string;
  name: string;
  credentials: string;
  /** Dual identity: academic rank + clinical role */
  title: string;
  specialty: string;
  department: string; // department slug
  subspecialties: string[];
  languages: string[];
  education: string[];
  bio: string;
  /** Consultation fee in ETB for the private wing */
  fee: number;
  sessions: ClinicSession[];
  gender: "male" | "female";
  photo?: string;
}

export const SPECIALTIES = [
  "Internal Medicine",
  "Cardiology",
  "Nephrology",
  "Gastroenterology",
  "Endocrinology",
  "General Surgery",
  "Urology",
  "Neurosurgery",
  "Orthopaedics",
  "Obstetrics & Gynaecology",
  "Reproductive Medicine",
  "Paediatrics",
  "Neonatology",
  "Neurology",
  "Psychiatry",
  "Dermatology",
  "Ophthalmology",
  "ENT",
  "Plastic & Reconstructive Surgery",
  "Radiology",
  "Pathology",
  "Anaesthesiology & Pain Medicine",
  "Emergency Medicine",
  "Dentistry & Maxillofacial Surgery",
] as const;

const days = { Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6, Sun: 0 };

export const DOCTORS: Doctor[] = [
  {
    id: "d-001",
    slug: "sample-cardiologist",
    name: "Dr. Sample Consultant — Cardiology",
    credentials: "MD, Internal Medicine; Fellowship in Cardiology",
    title: "Associate Professor & Consultant Cardiologist",
    specialty: "Cardiology",
    department: "internal-medicine",
    subspecialties: ["Interventional cardiology", "Echocardiography"],
    languages: ["Amharic", "English"],
    education: ["MD — Addis Ababa University", "Internal Medicine Residency — SPHMMC", "Cardiology Fellowship — SPHMMC"],
    bio: "Placeholder profile. Consultant cardiologist at the Cardiac Catheterisation Laboratory with subspecialty practice in coronary intervention and structural heart disease.",
    fee: 1000,
    sessions: [
      { day: days.Mon, start: "17:00", end: "20:00", location: "Private Wing, Consultation Room 3" },
      { day: days.Thu, start: "17:00", end: "20:00", location: "Private Wing, Consultation Room 3" },
    ],
    gender: "male",
  },
  {
    id: "d-002",
    slug: "sample-nephrologist",
    name: "Dr. Sample Consultant — Nephrology",
    credentials: "MD, Internal Medicine; Fellowship in Nephrology",
    title: "Assistant Professor & Consultant Nephrologist",
    specialty: "Nephrology",
    department: "internal-medicine",
    subspecialties: ["Kidney transplantation", "Dialysis"],
    languages: ["Amharic", "English"],
    education: ["MD — SPHMMC", "Internal Medicine Residency — SPHMMC", "Nephrology Fellowship — SPHMMC"],
    bio: "Placeholder profile. Transplant nephrologist with the Renal Transplant Centre, caring for chronic kidney disease, dialysis and post-transplant patients.",
    fee: 1000,
    sessions: [
      { day: days.Tue, start: "17:00", end: "20:00", location: "Private Wing, Consultation Room 1" },
      { day: days.Sat, start: "09:00", end: "12:00", location: "Private Wing, Consultation Room 1" },
    ],
    gender: "female",
  },
  {
    id: "d-003",
    slug: "sample-obstetrician",
    name: "Dr. Sample Consultant — Obstetrics & Gynaecology",
    credentials: "MD, Obstetrics & Gynaecology; Fellowship in Maternal-Foetal Medicine",
    title: "Associate Professor & Consultant Obstetrician-Gynaecologist",
    specialty: "Obstetrics & Gynaecology",
    department: "obstetrics-gynaecology",
    subspecialties: ["High-risk pregnancy", "Maternal-foetal medicine"],
    languages: ["Amharic", "English", "Afaan Oromo"],
    education: ["MD — Jimma University", "OB-GYN Residency — SPHMMC", "MFM Fellowship — SPHMMC"],
    bio: "Placeholder profile. High-risk obstetrics consultant in one of Ethiopia's busiest maternity referral services.",
    fee: 900,
    sessions: [
      { day: days.Wed, start: "17:00", end: "20:00", location: "Private Wing, Consultation Room 5" },
      { day: days.Sat, start: "14:00", end: "17:00", location: "Private Wing, Consultation Room 5" },
    ],
    gender: "female",
  },
  {
    id: "d-004",
    slug: "sample-fertility-specialist",
    name: "Dr. Sample Consultant — Reproductive Medicine",
    credentials: "MD, OB-GYN; Fellowship in Reproductive Endocrinology & Infertility",
    title: "Assistant Professor & Fertility Specialist",
    specialty: "Reproductive Medicine",
    department: "obstetrics-gynaecology",
    subspecialties: ["IVF / assisted reproduction", "Reproductive endocrinology"],
    languages: ["Amharic", "English"],
    education: ["MD — Addis Ababa University", "OB-GYN Residency — SPHMMC", "REI Fellowship"],
    bio: "Placeholder profile. Fertility specialist at the Infertility Centre offering evaluation, ovulation induction, IUI and IVF services.",
    fee: 1200,
    sessions: [{ day: days.Fri, start: "14:00", end: "18:00", location: "Infertility Centre, Private Clinic" }],
    gender: "male",
  },
  {
    id: "d-005",
    slug: "sample-paediatrician",
    name: "Dr. Sample Consultant — Paediatrics",
    credentials: "MD, Paediatrics & Child Health; Fellowship in Neonatology",
    title: "Assistant Professor & Consultant Paediatrician-Neonatologist",
    specialty: "Paediatrics",
    department: "paediatrics",
    subspecialties: ["Neonatology", "Newborn follow-up"],
    languages: ["Amharic", "English"],
    education: ["MD — Hawassa University", "Paediatrics Residency — SPHMMC", "Neonatology Fellowship — SPHMMC"],
    bio: "Placeholder profile. Neonatologist caring for premature and critically ill newborns, with a general paediatrics private clinic.",
    fee: 800,
    sessions: [
      { day: days.Mon, start: "17:00", end: "20:00", location: "Private Wing, Paediatric Clinic" },
      { day: days.Wed, start: "17:00", end: "20:00", location: "Private Wing, Paediatric Clinic" },
    ],
    gender: "female",
  },
  {
    id: "d-006",
    slug: "sample-general-surgeon",
    name: "Dr. Sample Consultant — General Surgery",
    credentials: "MD, General Surgery; Fellowship in Hepatobiliary Surgery",
    title: "Associate Professor & Consultant General Surgeon",
    specialty: "General Surgery",
    department: "surgery",
    subspecialties: ["Hepatobiliary surgery", "Laparoscopic surgery"],
    languages: ["Amharic", "English"],
    education: ["MD — Addis Ababa University", "Surgery Residency — SPHMMC", "HPB Fellowship"],
    bio: "Placeholder profile. General and hepatobiliary surgeon with a laparoscopic and open surgical practice.",
    fee: 1000,
    sessions: [{ day: days.Tue, start: "17:00", end: "20:00", location: "Private Wing, Consultation Room 2" }],
    gender: "male",
  },
  {
    id: "d-007",
    slug: "sample-urologist",
    name: "Dr. Sample Consultant — Urology",
    credentials: "MD, General Surgery; Fellowship in Urology & Transplant Surgery",
    title: "Assistant Professor & Consultant Urologist",
    specialty: "Urology",
    department: "surgery",
    subspecialties: ["Kidney transplant surgery", "Endourology"],
    languages: ["Amharic", "English"],
    education: ["MD — SPHMMC", "Surgery Residency — SPHMMC", "Urology Fellowship — SPHMMC"],
    bio: "Placeholder profile. Urologist and transplant surgeon with the Renal Transplant Centre.",
    fee: 1000,
    sessions: [{ day: days.Thu, start: "17:00", end: "20:00", location: "Private Wing, Consultation Room 2" }],
    gender: "male",
  },
  {
    id: "d-008",
    slug: "sample-neurologist",
    name: "Dr. Sample Consultant — Neurology",
    credentials: "MD, Neurology",
    title: "Assistant Professor & Consultant Neurologist",
    specialty: "Neurology",
    department: "neurology",
    subspecialties: ["Stroke", "Epilepsy"],
    languages: ["Amharic", "English"],
    education: ["MD — Addis Ababa University", "Neurology Residency — SPHMMC"],
    bio: "Placeholder profile. Neurologist with special interest in stroke care and epilepsy management.",
    fee: 900,
    sessions: [{ day: days.Wed, start: "17:00", end: "20:00", location: "Private Wing, Consultation Room 4" }],
    gender: "female",
  },
  {
    id: "d-009",
    slug: "sample-orthopaedic-surgeon",
    name: "Dr. Sample Consultant — Orthopaedics",
    credentials: "MD, Orthopaedic Surgery",
    title: "Assistant Professor & Consultant Orthopaedic Surgeon",
    specialty: "Orthopaedics",
    department: "orthopaedics",
    subspecialties: ["Trauma surgery", "Arthroplasty"],
    languages: ["Amharic", "English"],
    education: ["MD — Gondar University", "Orthopaedics Residency — SPHMMC"],
    bio: "Placeholder profile. Orthopaedic trauma and joint-replacement surgeon.",
    fee: 900,
    sessions: [{ day: days.Sat, start: "09:00", end: "13:00", location: "Private Wing, Consultation Room 6" }],
    gender: "male",
  },
  {
    id: "d-010",
    slug: "sample-dermatologist",
    name: "Dr. Sample Consultant — Dermatology",
    credentials: "MD, Dermatology & Venereology",
    title: "Assistant Professor & Consultant Dermatologist",
    specialty: "Dermatology",
    department: "dermatology",
    subspecialties: ["Paediatric dermatology", "Dermatologic surgery"],
    languages: ["Amharic", "English"],
    education: ["MD — Addis Ababa University", "Dermatology Residency — SPHMMC"],
    bio: "Placeholder profile. Consultant dermatologist treating adult and paediatric skin conditions.",
    fee: 800,
    sessions: [
      { day: days.Tue, start: "17:00", end: "20:00", location: "Private Wing, Consultation Room 7" },
      { day: days.Fri, start: "17:00", end: "20:00", location: "Private Wing, Consultation Room 7" },
    ],
    gender: "female",
  },
  {
    id: "d-011",
    slug: "sample-psychiatrist",
    name: "Dr. Sample Consultant — Psychiatry",
    credentials: "MD, Psychiatry",
    title: "Assistant Professor & Consultant Psychiatrist",
    specialty: "Psychiatry",
    department: "psychiatry",
    subspecialties: ["Adult psychiatry", "Addiction medicine"],
    languages: ["Amharic", "English"],
    education: ["MD — SPHMMC", "Psychiatry Residency — SPHMMC"],
    bio: "Placeholder profile. Consultant psychiatrist providing confidential adult mental-health consultations.",
    fee: 800,
    sessions: [{ day: days.Mon, start: "17:00", end: "20:00", location: "Private Wing, Consultation Room 8" }],
    gender: "male",
  },
  {
    id: "d-012",
    slug: "sample-ophthalmologist",
    name: "Dr. Sample Consultant — Ophthalmology",
    credentials: "MD, Ophthalmology",
    title: "Assistant Professor & Consultant Ophthalmologist",
    specialty: "Ophthalmology",
    department: "ophthalmology",
    subspecialties: ["Cataract surgery", "Glaucoma"],
    languages: ["Amharic", "English"],
    education: ["MD — Addis Ababa University", "Ophthalmology Residency — SPHMMC"],
    bio: "Placeholder profile. Eye surgeon providing comprehensive ophthalmic consultations and surgery.",
    fee: 800,
    sessions: [{ day: days.Thu, start: "17:00", end: "20:00", location: "Private Wing, Eye Clinic" }],
    gender: "female",
  },
];

export const doctorBySlug = (slug: string) => DOCTORS.find((d) => d.slug === slug);
export const doctorsBySpecialty = (s: string) => DOCTORS.filter((d) => d.specialty === s);
export const activeSpecialties = () => [...new Set(DOCTORS.map((d) => d.specialty))];
