/**
 * Patient-care services and medical-service directorates.
 */

export interface ServiceDirectorate {
  slug: string;
  name: string;
  summary: string;
}

export const SERVICE_DIRECTORATES: ServiceDirectorate[] = [
  {
    slug: "medical-services-facilitation",
    name: "Medical Services Facilitation Directorate",
    summary:
      "Coordinates outpatient and inpatient service delivery across the hospital — appointments, admissions, ward management and the smooth day-to-day running of clinical services, including the private wing clinics.",
  },
  {
    slug: "operation-room",
    name: "Operation Room Directorate",
    summary:
      "Manages the College's operating theatres — scheduling, perioperative safety standards, surgical-instrument readiness and theatre efficiency across all surgical disciplines.",
  },
  {
    slug: "icu-critical-care",
    name: "ICU & Critical Care Directorate",
    summary:
      "Runs the adult, paediatric and neonatal intensive-care services — beds, equipment, staffing standards and critical-care protocols for the sickest patients in the referral system.",
  },
  {
    slug: "reform",
    name: "Reform Directorate",
    summary:
      "Drives hospital service-delivery reform initiatives — implementing national reform programmes, process redesign and patient-experience improvement across clinical services.",
  },
  {
    slug: "patient-referral-flow",
    name: "Patients Referral & Flow Directorate",
    summary:
      "The gateway for referred patients — managing the national referral network, triage of incoming referrals, bed allocation and patient flow from arrival to discharge.",
  },
  {
    slug: "biomedical",
    name: "Biomedical Directorate",
    summary:
      "Keeps the hospital's medical equipment alive — biomedical engineering, equipment maintenance, calibration and medical-device management.",
  },
  {
    slug: "infection-prevention",
    name: "Infection Prevention & Patient Safety Directorate",
    summary:
      "Protects patients and staff — infection-prevention protocols, surveillance, hand-hygiene and sterilisation standards, and the patient-safety incident system.",
  },
  {
    slug: "laboratory",
    name: "Laboratory Services Directorate",
    summary:
      "Operates the clinical laboratories — haematology, clinical chemistry, microbiology, serology and blood-bank services — supporting diagnosis across every department.",
  },
];

export const directorateBySlug = (slug: string) =>
  SERVICE_DIRECTORATES.find((s) => s.slug === slug);

/** How patients access care at SPHMMC */
export const CARE_PATHWAYS = [
  {
    name: "Emergency Care",
    icon: "emergency",
    text: "Our adult and paediatric emergency departments are open 24 hours a day, 7 days a week. In an emergency, come directly — no referral is needed.",
    cta: { label: "Emergency information", href: "/patient-care/emergency" },
  },
  {
    name: "Outpatient Clinics (Referral)",
    icon: "clinic",
    text: "Specialty outpatient clinics serve patients referred from health centres and hospitals across Ethiopia, coordinated by the Patients Referral & Flow Directorate.",
    cta: { label: "Referral process", href: "/patient-care/referrals" },
  },
  {
    name: "Private Wing",
    icon: "private",
    text: "See the consultant of your choice at a time that suits you. Evening and weekend clinics with the College's senior specialists — book online in minutes.",
    cta: { label: "Book a private consultation", href: "/private-wing" },
  },
  {
    name: "Specialty Centres",
    icon: "center",
    text: "National referral programmes in kidney transplantation, fertility care and interventional cardiology, with dedicated multidisciplinary teams.",
    cta: { label: "Explore our centres", href: "/centers" },
  },
];
