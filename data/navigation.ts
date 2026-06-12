/** Main navigation structure — max one sub-tier (per healthcare IA best practice). */

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
  description?: string;
}

export interface NavSection {
  label: string;
  href: string;
  links?: NavLink[];
}

export const MAIN_NAV: NavSection[] = [
  {
    label: "Patient Care",
    href: "/patient-care",
    links: [
      { label: "Getting Care at St. Paul's", href: "/patient-care", description: "Emergency, referrals, clinics and the private wing" },
      { label: "Emergency Services", href: "/patient-care/emergency", description: "Open 24/7 — what to do in an emergency" },
      { label: "Referral Process", href: "/patient-care/referrals", description: "For referred patients and referring facilities" },
      { label: "Clinical Departments", href: "/academics/departments", description: "All specialty services, A–Z" },
      { label: "Specialty Centres", href: "/centers", description: "Transplant, fertility, cardiac intervention" },
      { label: "Find a Doctor", href: "/private-wing/doctors", description: "Search our private-wing consultants" },
    ],
  },
  {
    label: "Private Wing",
    href: "/private-wing",
    links: [
      { label: "About the Private Wing", href: "/private-wing", description: "Evening & weekend consultant clinics" },
      { label: "Find a Doctor", href: "/private-wing/doctors", description: "Browse consultants by specialty" },
      { label: "Book an Appointment", href: "/private-wing/book", description: "Online booking in four steps" },
    ],
  },
  {
    label: "College",
    href: "/academics",
    links: [
      { label: "Academics Overview", href: "/academics", description: "Programmes across four schools" },
      { label: "Programmes A–Z", href: "/academics/programs", description: "The full catalogue — MD to PhD" },
      { label: "School of Medicine", href: "/academics/schools/medicine" },
      { label: "School of Nursing & Midwifery", href: "/academics/schools/nursing-midwifery" },
      { label: "School of Public Health", href: "/academics/schools/public-health" },
      { label: "Pharmacy & Service", href: "/academics/schools/pharmacy" },
      { label: "Departments A–Z", href: "/academics/departments" },
      { label: "Faculty & Staff", href: "/academics/staff", description: "Profiles across all departments" },
      { label: "Submit Staff Profile", href: "/academics/staff/submit", description: "For SPHMMC academic staff" },
      { label: "Student Portal / Registrar", href: "https://portal.sphmmc.edu.et/", external: true },
    ],
  },
  {
    label: "Research",
    href: "/research",
    links: [
      { label: "Research at SPHMMC", href: "/research", description: "Research Affairs, ethics and platforms" },
      { label: "Innovation & Startups", href: "/initiatives", description: "Millennium Health Innovation Hub & MedStart" },
      { label: "Research Affairs Directorate", href: "/offices/research-affairs" },
      { label: "Community Service", href: "/offices/community-service" },
      { label: "Partnership & Collaboration", href: "/offices/partnership-collaboration" },
      { label: "Library", href: "/library" },
      { label: "Millennium Journal of Health", href: "http://mjh.sphmmc.edu.et", external: true },
    ],
  },
  {
    label: "About",
    href: "/about",
    links: [
      { label: "About the College", href: "/about", description: "History, mission, vision and values" },
      { label: "Leadership & Governance", href: "/about/leadership", description: "Board, Senate, Provost/CED and directorates" },
      { label: "Organisational Structure", href: "/about/organogram", description: "The 2026 organogram" },
      { label: "Offices & Directorates", href: "/offices", description: "Every office on the organogram" },
      { label: "Health Education", href: "/education", description: "Public health information" },
      { label: "News & Announcements", href: "/news" },
      { label: "In the News (Press)", href: "/press", description: "Media coverage of the College" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export const UTILITY_NAV: NavLink[] = [
  { label: "Student Portal", href: "https://portal.sphmmc.edu.et/", external: true },
  { label: "CPID", href: "https://cpid.sphmmc.edu.et/", external: true },
  { label: "Library", href: "/library" },
  { label: "Journal", href: "http://mjh.sphmmc.edu.et", external: true },
  { label: "News", href: "/news" },
];
