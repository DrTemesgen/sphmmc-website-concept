/**
 * Partnership & Collaboration — content migrated from the legacy College
 * Partners page (sphmmc.edu.et/collegepartners) and substantially expanded with
 * verified recent partnerships (2017–2026). The Partnership & Collaboration
 * Directorate (Research & Community Service wing) builds and manages these
 * national and international partnerships and carries the institutional
 * consultancy function under the staff income-share framework.
 */

export interface Partner {
  name: string;
  /** Short note on what the collaboration covers. */
  domain: string;
  /** Optional homepage. */
  url?: string;
}

export interface PartnerGroup {
  id: string;
  title: string;
  blurb: string;
  partners: Partner[];
}

export const PARTNERSHIP_INTRO =
  "In our journey to become a Centre of Excellence, St. Paul's has built invaluable partnerships at home and abroad. These collaborations raise our own standards of care and uplift colleagues across the nation — a shared commitment to better health outcomes and collective growth.";

/** What the directorate does — the consultancy + partnership mandate. */
export const PARTNERSHIP_MANDATE = [
  "Negotiate and manage national and international partnership agreements and MoUs",
  "Coordinate the College's institutional consultancy services under the staff income-share framework",
  "Build collaborative research, training and faculty-exchange platforms",
  "Channel technical assistance into capacity-building across the hospital and its partner facilities",
];

/** How St. Paul's works with its partners. */
export const COLLABORATION_TYPES: { title: string; text: string }[] = [
  {
    title: "Faculty training & exchange",
    text: "Technical assistance and reciprocal faculty exchanges that strengthen teaching and clinical practice.",
  },
  {
    title: "Specialty programme development",
    text: "Joint residency and fellowship programmes — from Obstetrics & Gynaecology and Surgery to ophthalmology and neurosurgery.",
  },
  {
    title: "Flagship clinical services",
    text: "Partner support to establish landmark services — kidney and liver transplant, IVF, neonatal ICU, breast-cancer screening and more.",
  },
  {
    title: "Equipment, ICT & research",
    text: "Donated equipment, digital-health and library resources, and jointly funded research that turns evidence into practice.",
  },
];

export const PARTNER_GROUPS: PartnerGroup[] = [
  {
    id: "national",
    title: "National Partners",
    blurb:
      "Ethiopian universities, research institutes, hospitals and health facilities we train, learn and grow with.",
    partners: [
      { name: "Addis Ababa University", domain: "Academic collaboration & joint training" },
      { name: "Ethiopian Public Health Institute (EPHI)", domain: "Public-health research & national programmes" },
      { name: "Armauer Hansen Research Institute (AHRI)", domain: "Biomedical & translational research" },
      { name: "Jimma University", domain: "Health-professions education & research" },
      { name: "Myungsung Christian Medical Center (MCM)", domain: "Cardiovascular-care network, Addis Ababa" },
      { name: "Ras Desta Damtew Memorial Hospital", domain: "Clinical service & referral collaboration" },
      { name: "Yekatit 12 Hospital Medical College", domain: "Clinical training & service partnership" },
      { name: "Amanuel Mental Specialized Hospital", domain: "Psychiatry & mental-health training" },
      { name: "Worabe Comprehensive Specialized Hospital", domain: "Service strengthening & referral" },
      { name: "Health centres across Addis Ababa", domain: "Community-based education & primary-care platforms" },
    ],
  },
  {
    id: "academic-research",
    title: "Academic & Research Partners",
    blurb:
      "Universities, medical schools and research-funding bodies collaborating on training, faculty exchange and science.",
    partners: [
      { name: "University of Michigan", domain: "Faculty exchange, neonatal care & the Kellogg Eye Center ophthalmology residency" },
      { name: "Harvard T.H. Chan School of Public Health", domain: "Public-health research & training" },
      { name: "Maternal Health Task Force (Harvard)", domain: "Maternal-health research & capacity building" },
      { name: "Johns Hopkins University — TSEHAI", domain: "HIV & health-systems training and research" },
      { name: "Tulane University", domain: "Public health & research collaboration" },
      { name: "University of Bergen", domain: "Research & academic exchange" },
      { name: "University of Alberta", domain: "Academic & clinical collaboration" },
      { name: "California Pacific Medical Center (CPMC) — Sutter Health", domain: "Establishing Ethiopia's first liver-transplant centre" },
      { name: "Global Health EDCTP3 (EU–Africa)", domain: "Funds the EpiGen Ethiopia pathogen-genomics project (2023–2028)" },
      { name: "LMU Munich — Center for International Health (with DAAD & BMZ)", domain: "One Health research & the IDREAM molecular laboratory" },
      { name: "Ethiopian Diaspora Fellowship", domain: "Placing skilled diaspora professionals at the College" },
    ],
  },
  {
    id: "clinical-specialty",
    title: "Clinical & Specialty-Care Partners",
    blurb:
      "Institutions and organisations that helped build St. Paul's landmark specialty services.",
    partners: [
      { name: "Cure Blindness Project (formerly Himalayan Cataract Project)", domain: "Eye care, equipment & ophthalmology training (since 2017)" },
      { name: "Tilganga Institute of Ophthalmology (Nepal)", domain: "Eye-care delivery model & training" },
      { name: "ReachAnother Foundation", domain: "Paediatric neurosurgery Centre of Excellence & fellowship" },
      { name: "MedStar Health", domain: "Brain & spine tumour surgery collaboration" },
      { name: "Wax & Gold Inc. (WAGI)", domain: "Ethiopia's first neonatal-ICU nursing programme (since 2015)" },
      { name: "Heart Attack Ethiopia (HAE)", domain: "Interventional-cardiology missions" },
      { name: "Merck Foundation", domain: "Training for Ethiopia's first public IVF centre" },
      { name: "Diabetes Africa (with Biocon Biologics)", domain: "Diabetes specialist-nurse training (MoU 2024)" },
      { name: "Team 413 for Mahelet & Alpha Breast Cancer Support", domain: "3D mammography & the Breast Cancer Screening Clinic (2025)" },
      { name: "Trauma Care Ethiopia", domain: "Trauma & emergency-care development" },
      { name: "Children Burn Foundation", domain: "Paediatric burns care & support" },
      { name: "EngenderHealth", domain: "Reproductive & maternal-health programmes" },
    ],
  },
  {
    id: "development",
    title: "Government, Foundations & Development Partners",
    blurb:
      "Government agencies, donors and foundations that fund, equip and sustain the College's mission.",
    partners: [
      { name: "Korea International Cooperation Agency (KOICA)", domain: "Diagnostic-equipment donation for AI-powered services (2025)" },
      { name: "UNHCR", domain: "Haemodialysis machines for the Renal Unit" },
      { name: "Evangelical Church in Germany (EKD)", domain: "Founding partner of St. Paul's Hospital (1968)" },
      { name: "Teaching institutions & Ministry of Health of Egypt", domain: "Specialty-care exchange & training" },
      { name: "ENAHPA — Ethiopian North American Health Professionals Association", domain: "Diaspora-led capacity building" },
      { name: "Barneveldse Techniek Opleiding (BTO), Netherlands", domain: "Medical-equipment donation & four dental clinics" },
    ],
  },
];
