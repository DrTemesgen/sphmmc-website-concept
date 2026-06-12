/**
 * The College's four schools.
 */
import { SchoolSlug } from "./departments";

export interface School {
  slug: SchoolSlug;
  name: string;
  tagline: string;
  overview: string;
  highlights: string[];
  image?: { src: string; alt: string };
}

/** Banner image per school */
export const SCHOOL_IMAGES: Record<SchoolSlug, { src: string; alt: string }> = {
  medicine: { src: "/images/campus/entrance-hires.jpg", alt: "Medical students at the St. Paul's campus" },
  "nursing-midwifery": { src: "/images/community/students.png", alt: "SPHMMC students in white coats on campus" },
  "public-health": { src: "/images/community/ambassadors.jpg", alt: "SPHMMC community-health ambassadors" },
  pharmacy: { src: "/images/clinical/lab-analyzer.jpg", alt: "Laboratory analyser at SPHMMC" },
};

export const SCHOOLS: School[] = [
  {
    slug: "medicine",
    name: "School of Medicine",
    tagline: "Ethiopia's second-largest medical school — training physicians, specialists and sub-specialists.",
    overview:
      "The School of Medicine is the College's founding school, established with the first cohort of medical students in 2008. It comprises seventeen clinical departments and six preclinical departments, delivering an outcome-based undergraduate medical curriculum alongside one of the largest portfolios of residency and fellowship programmes in the country. All clinical departments operate under the dual-accountability framework that integrates teaching with patient care.",
    highlights: [
      "17 clinical and 6 preclinical departments",
      "20 specialty residencies and 30 subspecialty fellowships",
      "Dual mandate: every teacher a clinician, every ward a classroom",
      "National referral services in transplant, maternal health, trauma and cancer care",
    ],
  },
  {
    slug: "nursing-midwifery",
    name: "School of Nursing & Midwifery",
    tagline: "Preparing the nurses and midwives who carry Ethiopia's health system.",
    overview:
      "The School of Nursing & Midwifery trains professional nurses and midwives through undergraduate and graduate programmes with deep clinical immersion in the College's wards, operating theatres, intensive care units and one of the busiest maternity services in the country.",
    highlights: [
      "BSc and MSc programmes in nursing and midwifery",
      "Specialty tracks: emergency, ICU, perioperative, neonatal nursing",
      "Clinical training across a 700+ bed referral hospital",
    ],
  },
  {
    slug: "public-health",
    name: "School of Public Health",
    tagline: "Evidence for policy — public-health leadership for Ethiopia and the Horn of Africa.",
    overview:
      "The School of Public Health develops public-health researchers, managers and field epidemiologists through MPH, MSc and PhD programmes, and leads community-based research and service programmes that link the College to the population it serves.",
    highlights: [
      "MPH, MSc and PhD programmes",
      "Epidemiology, biostatistics, health policy and health-systems research",
      "Community-based education and research platforms",
    ],
  },
  {
    slug: "pharmacy",
    name: "Pharmacy & Service",
    tagline: "Academic pharmacy with a working service mandate.",
    overview:
      "Pharmacy & Service operates as both an academic programme and the pharmacy service of the College — educating pharmacists while running the inpatient, outpatient and clinical pharmacy services that keep the hospital's medicines safe, available and rationally used.",
    highlights: [
      "BPharm and postgraduate clinical pharmacy programmes",
      "Hospital-wide pharmacy services",
      "Pharmacovigilance and drug-information centre",
    ],
  },
];

export const schoolBySlug = (slug: string) => SCHOOLS.find((s) => s.slug === slug);
