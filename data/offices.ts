/**
 * Offices, executives and directorates directory — every administrative unit
 * on the 2026 organisational structure, with mandates summarised per unit.
 */

export interface Office {
  slug: string;
  name: string;
  group:
    | "Provost/CED Office"
    | "Administration & Business Development"
    | "Academic & Medical Service"
    | "Research & Community Service"
    | "Quality & Innovation";
  summary: string;
  responsibilities: string[];
  /** When set, the directory links here instead of the generated office page. */
  href?: string;
}

export const OFFICES: Office[] = [
  // ── Provost/CED Office ──────────────────────────────────────────────────
  {
    slug: "provost-ced-office",
    name: "Provost/CED Office",
    group: "Provost/CED Office",
    summary:
      "The Office of the Provost/Chief Executive Director coordinates the executive administration of the College. The Office Head manages office administration only; the audit, ethics, legal, communication and gender executives report directly to the Provost/CED.",
    responsibilities: [
      "Executive coordination and correspondence of the Provost/CED",
      "Scheduling and follow-up of executive decisions",
      "Liaison between the Provost/CED and the four Corporate Directorates",
    ],
  },
  {
    slug: "internal-audit",
    name: "Internal Audit Executive",
    group: "Provost/CED Office",
    summary:
      "Provides independent, objective assurance over the College's financial and operational controls, reporting directly to the Provost/CED and supporting the Board Audit Committee.",
    responsibilities: [
      "Internal audit of financial and operational systems",
      "Risk-based audit planning and follow-up",
      "Support to the Board Audit Committee",
    ],
  },
  {
    slug: "ethics-anti-corruption",
    name: "Ethics & Anti-Corruption Executive",
    group: "Provost/CED Office",
    summary:
      "Promotes integrity and prevents corruption across the College, handling ethics complaints and prevention programmes, reporting directly to the Provost/CED.",
    responsibilities: [
      "Ethics education and corruption prevention",
      "Receipt and referral of integrity complaints",
      "Asset-disclosure and conflict-of-interest compliance support",
    ],
  },
  {
    slug: "legal-service",
    name: "Legal Service Executive",
    group: "Provost/CED Office",
    summary:
      "The College's legal office — representing the College in legal proceedings, advising governing bodies, and managing contracts and compliance. The College sues and is sued through this office.",
    responsibilities: [
      "Legal advice to the Board, Senate and management",
      "Litigation and legal representation",
      "Contract drafting, review and compliance",
      "Defence of staff for acts within the scope of their College duties",
    ],
  },
  {
    slug: "public-relations",
    name: "Public Relations & Communication Executive",
    group: "Provost/CED Office",
    summary:
      "Manages the College's public image, media relations, publications, website content and community communication, reporting directly to the Provost/CED.",
    responsibilities: [
      "Media relations and official communication",
      "Website, social media and publications",
      "Event coordination and institutional branding",
      "Public health communication campaigns",
    ],
  },
  {
    slug: "gender-social-affairs",
    name: "Gender & Social Affairs Inclusion Executive",
    group: "Provost/CED Office",
    summary:
      "Advances gender equity, disability inclusion and social affairs across the College community — staff, students and patients alike.",
    responsibilities: [
      "Gender mainstreaming and equity programmes",
      "Disability inclusion and accessibility",
      "Prevention of and response to gender-based harassment",
      "Support services for vulnerable groups",
    ],
  },

  // ── Administration & Business Development ──────────────────────────────
  {
    slug: "human-resources",
    name: "Competency & Human Resource Development Executive",
    group: "Administration & Business Development",
    summary:
      "Leads recruitment, competency development, employee relations and workforce planning for all staff categories of the College.",
    responsibilities: [
      "Recruitment and staffing for non-academic positions",
      "Coordination of academic and clinical recruitment processes",
      "Training and continuing professional development",
      "Employee relations, welfare, and occupational health & safety",
      "HR records and workforce planning",
    ],
  },
  {
    slug: "finance",
    name: "Finance Executive",
    group: "Administration & Business Development",
    summary:
      "Responsible for budget planning and control, accounts, payroll, treasury and financial reporting in line with federal financial law.",
    responsibilities: [
      "Budget planning, preparation and control",
      "Accounts management and financial reporting",
      "Payroll and employee benefits administration",
      "Treasury and disbursement management",
    ],
  },
  {
    slug: "procurement",
    name: "Procurement Executive",
    group: "Administration & Business Development",
    summary:
      "Manages the procurement of goods, services and works for the College in accordance with public procurement law — from medical supplies to capital equipment.",
    responsibilities: [
      "Procurement planning and execution",
      "Tender management and supplier relations",
      "Contract administration and inventory coordination",
    ],
  },
  {
    slug: "internal-revenue",
    name: "Internal Revenue Executive",
    group: "Administration & Business Development",
    summary:
      "Generates and manages the College's internal revenue streams — including the private wing, consultancy support services and other income-generating activities — under Board-approved guidelines.",
    responsibilities: [
      "Internal revenue generation and collection",
      "Private wing business administration",
      "Income-generating project development",
    ],
  },
  {
    slug: "engineering",
    name: "Engineering Executive",
    group: "Administration & Business Development",
    summary:
      "Plans, builds and maintains the College's physical infrastructure — buildings, utilities and campus development projects.",
    responsibilities: [
      "Construction project management",
      "Facility maintenance and utilities",
      "Campus master planning",
    ],
  },
  {
    slug: "ict",
    name: "ICT (Information Technology) Directorate",
    group: "Administration & Business Development",
    summary:
      "Runs the College's information technology backbone — networks, infrastructure, enterprise systems and user support. Distinct from the Health Information System Directorate, which governs clinical data.",
    responsibilities: [
      "Network and infrastructure management",
      "Enterprise systems and e-learning platform support",
      "IT user services and cybersecurity operations",
    ],
  },
  {
    slug: "ras-emiru-printing",
    name: "Ras Emiru Printing Centre",
    group: "Administration & Business Development",
    summary:
      "The College's printing and publication centre — producing academic materials, clinical forms, and institutional publications.",
    responsibilities: [
      "Printing of academic and clinical materials",
      "Institutional publications production",
      "Print-revenue services",
    ],
  },
  {
    slug: "student-services",
    name: "Student Services Directorate",
    group: "Administration & Business Development",
    summary:
      "Supports student life beyond the classroom — accommodation, food services, counselling, recreation and student wellbeing.",
    responsibilities: [
      "Student accommodation and cafeteria services",
      "Counselling and wellbeing support",
      "Student recreation, clubs and support schemes",
    ],
  },
  {
    slug: "basic-service",
    name: "Basic Service Executive",
    group: "Administration & Business Development",
    summary:
      "Delivers the campus's foundational support services — transport, security coordination, cleaning, grounds and general services.",
    responsibilities: [
      "Transport and fleet management",
      "Security and access coordination",
      "Cleaning, grounds and general services",
    ],
  },
  {
    slug: "strategic-affairs",
    name: "Strategic Affairs Executive",
    group: "Administration & Business Development",
    summary:
      "Coordinates strategic planning, performance monitoring and institutional reporting — the engine room of the College's five-year strategic plan.",
    responsibilities: [
      "Strategic plan development and cascade",
      "Institutional performance monitoring and reporting",
      "Annual planning and evaluation cycles",
    ],
  },
  {
    slug: "good-governance",
    name: "Good Governance Executive",
    group: "Administration & Business Development",
    summary:
      "Champions transparency, accountability and service-delivery standards across the College's administrative systems, handling grievances and governance reform.",
    responsibilities: [
      "Good-governance and service-delivery standards",
      "Complaint and grievance handling systems",
      "Administrative reform initiatives",
    ],
  },

  // ── Academic & Medical Service (academic support units) ────────────────
  {
    slug: "registrar-alumni",
    name: "Registrar & Alumni Directorate",
    group: "Academic & Medical Service",
    summary:
      "Keeper of the academic record — admissions processing, registration, certification, graduation and alumni relations. The Registrar serves as standing Secretary of the Senate.",
    responsibilities: [
      "Student records, registration and certification",
      "Admissions processing and graduation",
      "Alumni relations and graduate tracking",
      "Secretary to the Senate",
    ],
  },
  {
    slug: "library",
    name: "Library",
    group: "Academic & Medical Service",
    summary:
      "Comprehensive information services for teaching, research and clinical care — including electronic databases, e-learning repositories and open-access platforms. See the full library site for e-resources, services and hours.",
    responsibilities: [
      "Print and digital collections",
      "Electronic databases and e-resources",
      "E-learning repositories and open-access platforms",
      "Guideline Registry custodian",
    ],
    href: "/library",
  },

  // ── Research & Community Service ────────────────────────────────────────
  {
    slug: "research-affairs",
    name: "Research Affairs Directorate",
    group: "Research & Community Service",
    summary:
      "Coordinates the College's research enterprise — grants, research administration and scientific publication — and houses the Institutional Research and Ethics Review Committee (IRERC).",
    responsibilities: [
      "Research grants and administration",
      "Research ethics review through the IRERC",
      "Scientific publication and dissemination support",
      "Research capacity building",
    ],
  },
  {
    slug: "community-service",
    name: "Community Service Directorate",
    group: "Research & Community Service",
    summary:
      "Connects the College to the community it serves — outreach campaigns, community-based health programmes, and public health education.",
    responsibilities: [
      "Community health outreach programmes",
      "Public health education campaigns",
      "Community-based training platforms",
    ],
  },
  {
    slug: "partnership-collaboration",
    name: "Partnership & Collaboration Directorate",
    group: "Research & Community Service",
    summary:
      "Builds and manages the College's national and international partnerships and carries the institutional consultancy function, under the staff income-share framework.",
    responsibilities: [
      "National and international partnership agreements",
      "Consultancy services coordination (income-share rule)",
      "Collaborative research and training platforms",
    ],
  },

  // ── Quality & Innovation ────────────────────────────────────────────────
  {
    slug: "cpid",
    name: "Centre for Professional & Institutional Development (CPID)",
    group: "Quality & Innovation",
    summary:
      "The College's internal faculty- and staff-development engine — pedagogy training, leadership development and institutional capacity building.",
    responsibilities: [
      "Faculty development and health-professions education training",
      "Leadership and management development",
      "Institutional capacity building",
    ],
  },
  {
    slug: "health-information-system",
    name: "Health Information System Directorate",
    group: "Quality & Innovation",
    summary:
      "Governs the College's clinical and health data systems — the electronic medical record, health statistics and digital health platforms. Independent of ICT, which runs the technology infrastructure.",
    responsibilities: [
      "Electronic medical record (EMR) governance",
      "Health data quality, statistics and reporting",
      "Digital health and telemedicine platforms",
      "Health-data privacy and security standards",
    ],
  },
  {
    slug: "medical-service-quality",
    name: "Medical Service Quality Directorate",
    group: "Quality & Innovation",
    summary:
      "Drives clinical quality and patient-safety improvement across all services — clinical audit, quality indicators and accreditation readiness.",
    responsibilities: [
      "Clinical quality measurement and improvement",
      "Clinical audit programmes",
      "Patient-safety and accreditation standards",
    ],
  },
  {
    slug: "educational-quality",
    name: "Educational Quality Directorate",
    group: "Quality & Innovation",
    summary:
      "Assures the quality of the College's academic programmes — curriculum review cycles, programme evaluation and external accreditation.",
    responsibilities: [
      "Academic programme quality assurance",
      "Curriculum review coordination",
      "External accreditation processes",
    ],
  },
  {
    slug: "innovation-technology-transfer",
    name: "Innovation & Technology Transfer Directorate",
    group: "Quality & Innovation",
    summary:
      "Turns the College's ideas into impact — managing intellectual property, patents, prototypes and technology packages, and nurturing health innovation.",
    responsibilities: [
      "Intellectual property management",
      "Patent, prototype and technology-package development",
      "Innovation incubation and commercialisation",
    ],
  },
];

export const officeBySlug = (slug: string) => OFFICES.find((o) => o.slug === slug);
export const OFFICE_GROUPS = [
  "Provost/CED Office",
  "Administration & Business Development",
  "Academic & Medical Service",
  "Research & Community Service",
  "Quality & Innovation",
] as const;
