/**
 * SPHMMC Organisational Structure — 2026.
 *
 * This is the authoritative reporting-line table. Do not edit unit names or
 * reporting lines without a corresponding Board-approved amendment.
 */

export type Tier =
  | "Ministry"
  | "Board"
  | "L0"
  | "L1-Office"
  | "L1-Exec"
  | "L1-Unit"
  | "L1-CD"
  | "L2-Dir"
  | "L2-VCD"
  | "L2-Centre"
  | "L3";

export interface OrgUnit {
  id: string;
  name: string;
  shortName?: string;
  reportsTo: string | null;
  tier: Tier;
  note?: string;
  /** Route on the website, when the unit has its own page */
  href?: string;
}

export const ORG_UNITS: OrgUnit[] = [
  // ── Apex ────────────────────────────────────────────────────────────────
  {
    id: "moh",
    name: "Ministry of Health",
    reportsTo: null,
    tier: "Ministry",
    note: "Sole parent ministry of the College (Council of Ministers Regulation No. 200/2011).",
  },
  {
    id: "board",
    name: "Governing Board",
    reportsTo: "moh",
    tier: "Board",
    note: "Supreme governing body of the College (Higher Education Proclamation No. 1152/2019).",
    href: "/about/leadership#board",
  },
  {
    id: "provost",
    name: "Provost",
    shortName: "Provost",
    reportsTo: "board",
    tier: "L0",
    note: "Chief executive and academic officer; reports to the Board and to the Ministry of Health.",
    href: "/about/leadership#provost",
  },

  // ── Reporting directly to the Provost ──────────────────────────────
  {
    id: "office-head",
    name: "Office Head — Provost Office",
    reportsTo: "provost",
    tier: "L1-Office",
    note: "Coordinates Provost-office administration; no line-reports.",
    href: "/offices/provost-office",
  },
  {
    id: "internal-audit",
    name: "Internal Audit Executive",
    reportsTo: "provost",
    tier: "L1-Exec",
    href: "/offices/internal-audit",
  },
  {
    id: "ethics",
    name: "Ethics & Anti-Corruption Executive",
    reportsTo: "provost",
    tier: "L1-Exec",
    href: "/offices/ethics-anti-corruption",
  },
  {
    id: "legal",
    name: "Legal Service Executive",
    reportsTo: "provost",
    tier: "L1-Exec",
    href: "/offices/legal-service",
  },
  {
    id: "pr",
    name: "Public Relations & Communication Executive",
    reportsTo: "provost",
    tier: "L1-Exec",
    href: "/offices/public-relations",
  },
  {
    id: "gender",
    name: "Gender & Social Affairs Inclusion Executive",
    reportsTo: "provost",
    tier: "L1-Exec",
    href: "/offices/gender-social-affairs",
  },
  {
    id: "aabet",
    name: "Aabet Hospital",
    reportsTo: "provost",
    tier: "L1-Unit",
    note: "First health institution affiliated to the College.",
    href: "/centers/aabet-hospital",
  },

  // ── Corporate Directorate 1: Administration & Business Development ─────
  {
    id: "cd-admin",
    name: "Administration & Business Development Vice Provost/Corporate Director",
    shortName: "Administration & Business Development",
    reportsTo: "provost",
    tier: "L1-CD",
    href: "/about/leadership#admin",
  },
  { id: "hr", name: "Competency & Human Resource Development Executive", reportsTo: "cd-admin", tier: "L2-Dir", href: "/offices/human-resources" },
  { id: "finance", name: "Finance Executive", reportsTo: "cd-admin", tier: "L2-Dir", href: "/offices/finance" },
  { id: "procurement", name: "Procurement Executive", reportsTo: "cd-admin", tier: "L2-Dir", href: "/offices/procurement" },
  { id: "internal-revenue", name: "Internal Revenue Executive", reportsTo: "cd-admin", tier: "L2-Dir", href: "/offices/internal-revenue" },
  { id: "engineering", name: "Engineering Executive", reportsTo: "cd-admin", tier: "L2-Dir", href: "/offices/engineering" },
  {
    id: "ict",
    name: "ICT (Information Technology) Director",
    reportsTo: "cd-admin",
    tier: "L2-Dir",
    note: "Renamed from 'CIT'. Distinct from the Health Information System Directorate.",
    href: "/offices/ict",
  },
  { id: "printing", name: "Ras Emiru Printing Centre", reportsTo: "cd-admin", tier: "L2-Dir", href: "/offices/ras-emiru-printing" },
  {
    id: "student-services",
    name: "Student Services Directorate",
    reportsTo: "cd-admin",
    tier: "L2-Dir",
    note: "Moved from Quality & Innovation in the 2026 baseline.",
    href: "/offices/student-services",
  },
  { id: "basic-service", name: "Basic Service Executive", reportsTo: "cd-admin", tier: "L2-Dir", href: "/offices/basic-service" },
  {
    id: "strategic-affairs",
    name: "Strategic Affairs Executive",
    reportsTo: "cd-admin",
    tier: "L2-Dir",
    note: "Moved from the Provost Office in the 2026 baseline.",
    href: "/offices/strategic-affairs",
  },
  {
    id: "good-governance",
    name: "Good Governance Executive",
    reportsTo: "cd-admin",
    tier: "L2-Dir",
    note: "Moved from the Provost Office in the 2026 baseline.",
    href: "/offices/good-governance",
  },

  // ── Corporate Directorate 2: Academic & Medical Service ────────────────
  {
    id: "cd-academic",
    name: "Academic & Medical Service Vice Provost/Corporate Director",
    shortName: "Academic & Medical Service",
    reportsTo: "provost",
    tier: "L1-CD",
    href: "/about/leadership#academic",
  },
  {
    id: "academic-vcd",
    name: "Academic Vice Corporate Director",
    reportsTo: "cd-academic",
    tier: "L2-VCD",
    note: "Operational deputy — not a statutory Vice Provost.",
  },
  { id: "som", name: "School of Medicine & Medical Service Director", shortName: "School of Medicine", reportsTo: "academic-vcd", tier: "L3", href: "/academics/schools/medicine" },
  { id: "snm", name: "School of Nursing, Midwifery & Medical Service Director", shortName: "School of Nursing & Midwifery", reportsTo: "academic-vcd", tier: "L3", href: "/academics/schools/nursing-midwifery" },
  { id: "sph", name: "School of Public Health & Medical Service Director", shortName: "School of Public Health", reportsTo: "academic-vcd", tier: "L3", href: "/academics/schools/public-health" },
  { id: "pharmacy", name: "Pharmacy & Service Director", shortName: "Pharmacy & Service", reportsTo: "academic-vcd", tier: "L3", href: "/academics/schools/pharmacy" },
  {
    id: "other-school",
    name: "Other Health Science School",
    reportsTo: "academic-vcd",
    tier: "L3",
    note: "Future-opening unit.",
  },
  { id: "registrar", name: "Registrar & Alumni Director", reportsTo: "academic-vcd", tier: "L3", href: "/offices/registrar-alumni" },
  { id: "library", name: "Library", reportsTo: "academic-vcd", tier: "L3", href: "/offices/library" },
  {
    id: "medical-vcd",
    name: "Medical Service Vice Corporate Director",
    reportsTo: "cd-academic",
    tier: "L2-VCD",
    note: "Operational deputy — not a statutory Vice Provost.",
  },
  { id: "msf", name: "Medical Services Facilitation Directorate", reportsTo: "medical-vcd", tier: "L3", href: "/patient-care/directorates/medical-services-facilitation" },
  { id: "or", name: "Operation Room Directorate", reportsTo: "medical-vcd", tier: "L3", href: "/patient-care/directorates/operation-room" },
  { id: "icu", name: "ICU & Critical Care Directorate", reportsTo: "medical-vcd", tier: "L3", href: "/patient-care/directorates/icu-critical-care" },
  { id: "reform", name: "Reform Directorate", reportsTo: "medical-vcd", tier: "L3", href: "/patient-care/directorates/reform" },
  { id: "referral", name: "Patients Referral & Flow Directorate", reportsTo: "medical-vcd", tier: "L3", href: "/patient-care/directorates/patient-referral-flow" },
  { id: "biomedical", name: "Biomedical Directorate", reportsTo: "medical-vcd", tier: "L3", href: "/patient-care/directorates/biomedical" },
  { id: "ipps", name: "Infection Prevention & Patient Safety Directorate", reportsTo: "medical-vcd", tier: "L3", href: "/patient-care/directorates/infection-prevention" },
  { id: "lab", name: "Laboratory Services Directorate", reportsTo: "medical-vcd", tier: "L3", href: "/patient-care/directorates/laboratory" },
  {
    id: "renal-centre",
    name: "Renal Transplant Centre",
    reportsTo: "cd-academic",
    tier: "L2-Centre",
    note: "Specialty centre, parallel to the two Vice CDs.",
    href: "/centers/renal-transplant",
  },
  {
    id: "infertility-centre",
    name: "Infertility Centre",
    reportsTo: "cd-academic",
    tier: "L2-Centre",
    note: "Specialty centre, parallel to the two Vice CDs.",
    href: "/centers/infertility",
  },
  {
    id: "cathlab",
    name: "Cardiac Catheterisation Laboratory",
    reportsTo: "cd-academic",
    tier: "L2-Centre",
    note: "Specialty centre, parallel to the two Vice CDs.",
    href: "/centers/cardiac-cath-lab",
  },

  // ── Corporate Directorate 3: Research & Community Service ──────────────
  {
    id: "cd-research",
    name: "Research & Community Service Vice Provost/Corporate Director",
    shortName: "Research & Community Service",
    reportsTo: "provost",
    tier: "L1-CD",
    href: "/about/leadership#research",
  },
  {
    id: "research-affairs",
    name: "Research Affairs Directorate",
    reportsTo: "cd-research",
    tier: "L2-Dir",
    note: "Houses the Institutional Research and Ethics Review Committee (IRERC).",
    href: "/research/research-affairs",
  },
  { id: "community-service", name: "Community Service Directorate", reportsTo: "cd-research", tier: "L2-Dir", href: "/research/community-service" },
  {
    id: "partnership",
    name: "Partnership & Collaboration Directorate",
    reportsTo: "cd-research",
    tier: "L2-Dir",
    note: "Carries the consultancy function (75–90% staff income-share rule).",
    href: "/research/partnership-collaboration",
  },

  // ── Corporate Directorate 4: Quality & Innovation ──────────────────────
  {
    id: "cd-quality",
    name: "Quality & Innovation Vice Provost/Corporate Director",
    shortName: "Quality & Innovation",
    reportsTo: "provost",
    tier: "L1-CD",
    href: "/about/leadership#quality",
  },
  {
    id: "cpid",
    name: "Centre for Professional & Institutional Development (CPID)",
    reportsTo: "cd-quality",
    tier: "L2-Dir",
    href: "/offices/cpid",
  },
  {
    id: "his",
    name: "Health Information System Directorate",
    reportsTo: "cd-quality",
    tier: "L2-Dir",
    note: "Independent of ICT; not a fifth Corporate Directorate.",
    href: "/offices/health-information-system",
  },
  { id: "msq", name: "Medical Service Quality Directorate", reportsTo: "cd-quality", tier: "L2-Dir", href: "/offices/medical-service-quality" },
  { id: "edq", name: "Educational Quality Directorate", reportsTo: "cd-quality", tier: "L2-Dir", href: "/offices/educational-quality" },
  {
    id: "itt",
    name: "Innovation & Technology Transfer Directorate",
    reportsTo: "cd-quality",
    tier: "L2-Dir",
    note: "Carries the IP / patent / prototype / technology-package framework.",
    href: "/offices/innovation-technology-transfer",
  },
];

export const unitById = (id: string) => ORG_UNITS.find((u) => u.id === id);
export const childrenOf = (id: string) => ORG_UNITS.filter((u) => u.reportsTo === id);

/** The four Corporate Directorates, in canonical order */
export const CORPORATE_DIRECTORATES = ["cd-admin", "cd-academic", "cd-research", "cd-quality"].map(
  (id) => unitById(id)!
);

/** Units reporting directly to the Provost (excluding the four CDs) */
export const PROVOST_DIRECT_REPORTS = ORG_UNITS.filter(
  (u) => u.reportsTo === "provost" && u.tier !== "L1-CD"
);
