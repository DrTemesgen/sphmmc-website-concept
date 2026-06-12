/**
 * Academic programme catalogue.
 * Source: https://portal.sphmmc.edu.et/Web/ProgramList (official registrar list,
 * fetched June 2026) — cleaned for presentation: "(Old)" curriculum variants and
 * duplicate entries merged, obvious registrar typos normalised. Durations are
 * as published on the portal.
 */

export type ProgramLevel =
  | "Undergraduate"
  | "Specialty (Residency)"
  | "Subspecialty (Fellowship)"
  | "Master's"
  | "PhD";

export interface Program {
  name: string;
  school: "medicine" | "nursing-midwifery" | "public-health";
  level: ProgramLevel;
  years: string;
  modes?: string;
}

export const PROGRAMS: Program[] = [
  // ════════ School of Medicine — Undergraduate ════════
  { name: "Doctor of Medicine (MD)", school: "medicine", level: "Undergraduate", years: "6" },
  { name: "Pre-Medicine", school: "medicine", level: "Undergraduate", years: "1" },

  // ════════ School of Medicine — Specialty residencies ════════
  { name: "Anesthesiology, Critical Care & Pain Medicine", school: "medicine", level: "Specialty (Residency)", years: "3" },
  { name: "Dermato-Venereology", school: "medicine", level: "Specialty (Residency)", years: "2" },
  { name: "Emergency Medicine & Critical Care", school: "medicine", level: "Specialty (Residency)", years: "4" },
  { name: "Family Medicine", school: "medicine", level: "Specialty (Residency)", years: "2" },
  { name: "Forensic Medicine & Toxicology", school: "medicine", level: "Specialty (Residency)", years: "2" },
  { name: "General Surgery", school: "medicine", level: "Specialty (Residency)", years: "3" },
  { name: "Internal Medicine", school: "medicine", level: "Specialty (Residency)", years: "3" },
  { name: "Neurosurgery", school: "medicine", level: "Specialty (Residency)", years: "2" },
  { name: "Obstetrics & Gynecology", school: "medicine", level: "Specialty (Residency)", years: "4" },
  { name: "Ophthalmology", school: "medicine", level: "Specialty (Residency)", years: "2" },
  { name: "Oral & Maxillofacial Surgery", school: "medicine", level: "Specialty (Residency)", years: "4" },
  { name: "Orthopedics & Trauma Surgery", school: "medicine", level: "Specialty (Residency)", years: "2–4" },
  { name: "Otolaryngology — Head & Neck Surgery (ENT)", school: "medicine", level: "Specialty (Residency)", years: "4" },
  { name: "Pathology (Anatomic & Clinical)", school: "medicine", level: "Specialty (Residency)", years: "2–4" },
  { name: "Pediatric Surgery", school: "medicine", level: "Specialty (Residency)", years: "5" },
  { name: "Pediatrics & Child Health", school: "medicine", level: "Specialty (Residency)", years: "3" },
  { name: "Plastic, Reconstructive & Hand Surgery", school: "medicine", level: "Specialty (Residency)", years: "3" },
  { name: "Psychiatry", school: "medicine", level: "Specialty (Residency)", years: "3" },
  { name: "Radiology", school: "medicine", level: "Specialty (Residency)", years: "3–4" },
  { name: "Urologic Surgery", school: "medicine", level: "Specialty (Residency)", years: "4" },

  // ════════ School of Medicine — Subspecialty fellowships ════════
  { name: "Adult Hematology & Medical Oncology", school: "medicine", level: "Subspecialty (Fellowship)", years: "2" },
  { name: "Adult Intensive Care Medicine", school: "medicine", level: "Subspecialty (Fellowship)", years: "2" },
  { name: "Adult Nephrology", school: "medicine", level: "Subspecialty (Fellowship)", years: "2" },
  { name: "Body Imaging Radiology", school: "medicine", level: "Subspecialty (Fellowship)", years: "2" },
  { name: "Breast & Women's Imaging", school: "medicine", level: "Subspecialty (Fellowship)", years: "2" },
  { name: "Cardiology", school: "medicine", level: "Subspecialty (Fellowship)", years: "2" },
  { name: "Cardio-Thoracic Imaging", school: "medicine", level: "Subspecialty (Fellowship)", years: "2" },
  { name: "Cardiovascular & Thoracic Surgery", school: "medicine", level: "Subspecialty (Fellowship)", years: "2" },
  { name: "Colorectal Surgery", school: "medicine", level: "Subspecialty (Fellowship)", years: "2" },
  { name: "Endocrine & Breast Surgery", school: "medicine", level: "Subspecialty (Fellowship)", years: "2" },
  { name: "Family Planning", school: "medicine", level: "Subspecialty (Fellowship)", years: "2" },
  { name: "Gastroenterology & Hepatology", school: "medicine", level: "Subspecialty (Fellowship)", years: "2" },
  { name: "Gynecologic Oncology", school: "medicine", level: "Subspecialty (Fellowship)", years: "2" },
  { name: "Hepatobiliary & Pancreatic Surgery", school: "medicine", level: "Subspecialty (Fellowship)", years: "2" },
  { name: "Maternal-Fetal Medicine", school: "medicine", level: "Subspecialty (Fellowship)", years: "2" },
  { name: "Musculoskeletal (MSK) Imaging", school: "medicine", level: "Subspecialty (Fellowship)", years: "2" },
  { name: "Neonatology", school: "medicine", level: "Subspecialty (Fellowship)", years: "2" },
  { name: "Neuroradiology", school: "medicine", level: "Subspecialty (Fellowship)", years: "2" },
  { name: "Non-Interventional Cardiology", school: "medicine", level: "Subspecialty (Fellowship)", years: "2" },
  { name: "Pediatric Cardiology", school: "medicine", level: "Subspecialty (Fellowship)", years: "2" },
  { name: "Pediatric Emergency & Critical Care Medicine", school: "medicine", level: "Subspecialty (Fellowship)", years: "2" },
  { name: "Pediatric Hematology & Clinical Oncology", school: "medicine", level: "Subspecialty (Fellowship)", years: "2" },
  { name: "Pediatric Nephrology", school: "medicine", level: "Subspecialty (Fellowship)", years: "2" },
  { name: "Pediatric Pulmonology & Critical Care", school: "medicine", level: "Subspecialty (Fellowship)", years: "2" },
  { name: "Reproductive Endocrinology & Infertility", school: "medicine", level: "Subspecialty (Fellowship)", years: "2" },
  { name: "Reproductive Health & Infertility", school: "medicine", level: "Subspecialty (Fellowship)", years: "3" },
  { name: "Spine Surgery", school: "medicine", level: "Subspecialty (Fellowship)", years: "2" },
  { name: "Urogynecology & Reconstructive Pelvic Surgery", school: "medicine", level: "Subspecialty (Fellowship)", years: "2" },
  { name: "Vascular & Endovascular Surgery", school: "medicine", level: "Subspecialty (Fellowship)", years: "2" },
  { name: "Vascular & Interventional Radiology", school: "medicine", level: "Subspecialty (Fellowship)", years: "2" },

  // ════════ School of Medicine — Master's ════════
  { name: "MSc in Medical Microbiology", school: "medicine", level: "Master's", years: "2" },
  { name: "MSc in Respiratory Care", school: "medicine", level: "Master's", years: "2" },
  { name: "MSc in Clinical Embryology", school: "medicine", level: "Master's", years: "2–3" },
  { name: "MSc in Medical Radiologic Technology — CT & MRI", school: "medicine", level: "Master's", years: "2–3" },
  { name: "MSc in Medical Radiologic Technology — Ultrasonography", school: "medicine", level: "Master's", years: "2–3" },
  { name: "MSc in Medical Radiologic Technology — Cath Lab", school: "medicine", level: "Master's", years: "3" },
  { name: "MSc in Radiography, Fluoroscopy & Mammography", school: "medicine", level: "Master's", years: "3" },

  // ════════ School of Nursing & Midwifery — Undergraduate ════════
  { name: "BSc in Emergency & Critical Care Nursing", school: "nursing-midwifery", level: "Undergraduate", years: "3" },
  { name: "BSc in Neonatal Nursing", school: "nursing-midwifery", level: "Undergraduate", years: "2" },
  { name: "BSc in Operating Theater Nursing", school: "nursing-midwifery", level: "Undergraduate", years: "2" },
  { name: "BSc in Pediatrics & Child Health Nursing", school: "nursing-midwifery", level: "Undergraduate", years: "2" },
  { name: "BSc in Surgical Nursing", school: "nursing-midwifery", level: "Undergraduate", years: "2" },

  // ════════ School of Nursing & Midwifery — Master's ════════
  { name: "MSc in Cardiothoracic Nursing", school: "nursing-midwifery", level: "Master's", years: "2" },
  { name: "MSc in Cardiovascular Nursing Practitioner", school: "nursing-midwifery", level: "Master's", years: "2" },
  { name: "MSc in Clinical Oncology Nursing", school: "nursing-midwifery", level: "Master's", years: "2" },
  { name: "MSc in Critical Care Nursing", school: "nursing-midwifery", level: "Master's", years: "2" },
  { name: "MSc in Neonatal Nursing", school: "nursing-midwifery", level: "Master's", years: "2" },
  { name: "MSc in Nephrology Nursing", school: "nursing-midwifery", level: "Master's", years: "2" },
  { name: "MSc in Paramedics Science", school: "nursing-midwifery", level: "Master's", years: "2" },
  { name: "MSc in Pediatric Emergency & Critical Care Nursing", school: "nursing-midwifery", level: "Master's", years: "2" },

  // ════════ School of Public Health — Master's ════════
  { name: "Master of General Public Health (MPH)", school: "public-health", level: "Master's", years: "2", modes: "Regular · Weekend · Extension" },
  { name: "Master of Applied Public Health (MAPH)", school: "public-health", level: "Master's", years: "2" },
  { name: "MPH in Field Epidemiology", school: "public-health", level: "Master's", years: "2", modes: "Regular · Weekend (Lab & Medical tracks)" },
  { name: "MPH in Epidemiology", school: "public-health", level: "Master's", years: "3", modes: "Regular · Weekend" },
  { name: "MPH in Public Health Nutrition", school: "public-health", level: "Master's", years: "2", modes: "Regular · Weekend" },
  { name: "MPH in Public Health Promotion & Communication", school: "public-health", level: "Master's", years: "3", modes: "Regular · Weekend" },

  // ════════ School of Public Health — PhD ════════
  { name: "PhD in Health Sciences (Public Health concentration)", school: "public-health", level: "PhD", years: "4–5" },
];

export const PROGRAM_LEVELS: ProgramLevel[] = [
  "Undergraduate",
  "Specialty (Residency)",
  "Subspecialty (Fellowship)",
  "Master's",
  "PhD",
];

export const programCounts = () => ({
  total: PROGRAMS.length,
  residencies: PROGRAMS.filter((p) => p.level === "Specialty (Residency)").length,
  fellowships: PROGRAMS.filter((p) => p.level === "Subspecialty (Fellowship)").length,
  masters: PROGRAMS.filter((p) => p.level === "Master's").length,
});
