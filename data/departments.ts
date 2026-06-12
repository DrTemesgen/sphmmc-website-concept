/**
 * Academic departments — per the Senate Legislation 2026, Article 68
 * (School of Medicine clinical and preclinical departments) and the
 * school structures under Articles 50, 53 and 64.
 *
 * Faculty lists are placeholders pending the official roster from the
 * Registrar & Alumni Directorate — replace before go-live.
 */

export type SchoolSlug = "medicine" | "nursing-midwifery" | "public-health" | "pharmacy";
export type DepartmentType = "clinical" | "preclinical" | "academic";

export interface FacultyMember {
  name: string;
  rank: string;
  role?: string;
  interests?: string;
}

export interface Department {
  slug: string;
  name: string;
  school: SchoolSlug;
  type: DepartmentType;
  overview: string;
  services: string[];
  programs: string[];
  faculty: FacultyMember[];
}

const f = (role: string): FacultyMember[] => [
  { name: "To be announced", rank: "—", role, interests: "Profile pending official faculty roster" },
];

export const DEPARTMENTS: Department[] = [
  // ════════ School of Medicine — clinical departments (Art. 68(2)) ════════
  {
    slug: "internal-medicine",
    name: "Internal Medicine",
    school: "medicine",
    type: "clinical",
    overview:
      "The Department of Internal Medicine is one of the College's largest clinical departments, providing comprehensive adult medical care across general medicine and its subspecialties — cardiology, nephrology, gastroenterology, endocrinology, pulmonology, haematology, infectious diseases, and rheumatology — while training residents and fellows for the whole country.",
    services: [
      "Adult outpatient and inpatient medical care",
      "Cardiology services, including the Cardiac Catheterisation Laboratory",
      "Nephrology, dialysis and transplant medicine with the Renal Transplant Centre",
      "Gastroenterology and endoscopy",
      "Endocrinology and diabetes care",
      "Infectious disease and HIV care",
    ],
    programs: ["Residency in Internal Medicine", "Subspecialty fellowships (cardiology, nephrology, GI, and more)", "Undergraduate clinical clerkships"],
    faculty: f("Department Head"),
  },
  {
    slug: "paediatrics",
    name: "Paediatrics & Child Health",
    school: "medicine",
    type: "clinical",
    overview:
      "The Department of Paediatrics & Child Health delivers preventive, curative and critical care for newborns, children and adolescents, including one of the country's largest neonatal intensive care units, and trains paediatricians and subspecialists for Ethiopia.",
    services: [
      "General paediatric outpatient and inpatient care",
      "Neonatal intensive care (NICU)",
      "Paediatric emergency and critical care",
      "Immunisation and well-child clinics",
      "Paediatric haematology-oncology and nutrition services",
    ],
    programs: ["Residency in Paediatrics & Child Health", "Neonatology and paediatric subspecialty fellowships", "Undergraduate clerkships"],
    faculty: f("Department Head"),
  },
  {
    slug: "obstetrics-gynaecology",
    name: "Obstetrics & Gynaecology",
    school: "medicine",
    type: "clinical",
    overview:
      "A national referral hub for maternal health, the Department of Obstetrics & Gynaecology provides high-risk obstetric care, gynaecologic surgery, oncology and reproductive medicine, working hand-in-hand with the Infertility Centre and the Centre of Excellence in Reproductive Health.",
    services: [
      "Antenatal, delivery and postnatal care, including high-risk obstetrics",
      "Gynaecologic surgery and gynaecologic oncology",
      "Family planning and comprehensive reproductive health",
      "Fistula and pelvic-floor surgery",
      "Infertility evaluation and assisted reproduction (with the Infertility Centre)",
    ],
    programs: ["Residency in Obstetrics & Gynaecology", "Fellowships in maternal-foetal medicine, gynaecologic oncology and reproductive medicine", "Undergraduate clerkships"],
    faculty: f("Department Head"),
  },
  {
    slug: "surgery",
    name: "Surgery",
    school: "medicine",
    type: "clinical",
    overview:
      "The Department of Surgery provides general and subspecialty surgical care — including hepatobiliary, colorectal, paediatric, cardiothoracic, neurosurgery, urology and transplant surgery — and runs one of Ethiopia's largest surgical residency programmes.",
    services: [
      "General and emergency surgery",
      "Urology and kidney transplant surgery (with the Renal Transplant Centre)",
      "Neurosurgery",
      "Cardiothoracic and vascular surgery",
      "Paediatric surgery",
      "Surgical oncology",
    ],
    programs: ["Residency in General Surgery", "Subspecialty fellowships (urology, neurosurgery, paediatric surgery, and more)", "Undergraduate clerkships"],
    faculty: f("Department Head"),
  },
  {
    slug: "orthopaedics",
    name: "Orthopaedics",
    school: "medicine",
    type: "clinical",
    overview:
      "The Department of Orthopaedics delivers trauma and elective orthopaedic care — fracture management, arthroplasty, spine and paediatric orthopaedics — serving as a major national trauma referral centre.",
    services: ["Orthopaedic trauma and fracture care", "Joint replacement (arthroplasty)", "Spine surgery", "Paediatric orthopaedics", "Sports injury management"],
    programs: ["Residency in Orthopaedic Surgery", "Undergraduate teaching"],
    faculty: f("Department Head"),
  },
  {
    slug: "ophthalmology",
    name: "Ophthalmology",
    school: "medicine",
    type: "clinical",
    overview:
      "The Department of Ophthalmology provides comprehensive eye care, from cataract and glaucoma surgery to retina services and community eye-health outreach, while training ophthalmologists for the region.",
    services: ["Comprehensive eye examinations", "Cataract and glaucoma surgery", "Medical and surgical retina services", "Paediatric ophthalmology", "Community eye-health outreach"],
    programs: ["Residency in Ophthalmology", "Undergraduate teaching"],
    faculty: f("Department Head"),
  },
  {
    slug: "neurology",
    name: "Neurology",
    school: "medicine",
    type: "clinical",
    overview:
      "The Department of Neurology cares for patients with stroke, epilepsy, movement disorders, neuromuscular disease and other disorders of the nervous system, and leads neurology training and research in Ethiopia.",
    services: ["Stroke care", "Epilepsy diagnosis and management (EEG)", "Movement disorders clinic", "Neuromuscular and headache clinics", "Electrophysiology (EMG/NCS)"],
    programs: ["Residency in Neurology", "Undergraduate teaching"],
    faculty: f("Department Head"),
  },
  {
    slug: "emergency-medicine",
    name: "Emergency Medicine & Critical Care",
    school: "medicine",
    type: "clinical",
    overview:
      "The Department of Emergency Medicine & Critical Care runs a 24/7 adult emergency department and intensive care services, coordinating with the Patients Referral & Flow Directorate as a front door to the national referral system.",
    services: ["24/7 adult emergency care", "Trauma resuscitation", "Medical and surgical intensive care", "Toxicology services", "Pre-hospital and disaster-response coordination"],
    programs: ["Residency in Emergency Medicine & Critical Care", "Emergency and critical-care nursing training"],
    faculty: f("Department Head"),
  },
  {
    slug: "ent",
    name: "Otorhinolaryngology (ENT)",
    school: "medicine",
    type: "clinical",
    overview:
      "The ENT Department provides medical and surgical care for disorders of the ear, nose, throat, head and neck, including endoscopic sinus surgery, head-and-neck oncology and audiology services.",
    services: ["Ear, nose and throat clinics", "Endoscopic sinus and skull-base surgery", "Head and neck surgery", "Audiology and hearing services", "Airway and voice disorders care"],
    programs: ["Residency in Otorhinolaryngology", "Undergraduate teaching"],
    faculty: f("Department Head"),
  },
  {
    slug: "dermatology",
    name: "Dermatology & Venereology",
    school: "medicine",
    type: "clinical",
    overview:
      "The Department of Dermatology & Venereology diagnoses and treats diseases of the skin, hair and nails, including dermato-oncology, paediatric dermatology and dermatologic surgery.",
    services: ["General dermatology clinics", "Dermatologic surgery and cryotherapy", "Paediatric dermatology", "Sexually transmitted infection care", "Phototherapy"],
    programs: ["Residency in Dermatology & Venereology", "Undergraduate teaching"],
    faculty: f("Department Head"),
  },
  {
    slug: "psychiatry",
    name: "Psychiatry",
    school: "medicine",
    type: "clinical",
    overview:
      "The Department of Psychiatry provides outpatient and inpatient mental health care — adult, child and adolescent, and addiction services — and advances mental health education, advocacy and research.",
    services: ["Adult psychiatry outpatient and inpatient care", "Child and adolescent mental health", "Addiction medicine", "Consultation-liaison psychiatry", "Psychotherapy and counselling"],
    programs: ["Residency in Psychiatry", "Mental health training for primary care"],
    faculty: f("Department Head"),
  },
  {
    slug: "dentistry",
    name: "Dentistry & Maxillofacial Surgery",
    school: "medicine",
    type: "clinical",
    overview:
      "The Department of Dentistry provides comprehensive dental and oral health services, including oral and maxillofacial surgery, restorative dentistry and orthodontics.",
    services: ["General dental care", "Oral and maxillofacial surgery", "Restorative dentistry and prosthodontics", "Orthodontics", "Paediatric dentistry"],
    programs: ["Dental surgery training", "Oral & maxillofacial surgery residency"],
    faculty: f("Department Head"),
  },
  {
    slug: "anaesthesiology",
    name: "Anaesthesiology & Pain Medicine",
    school: "medicine",
    type: "clinical",
    overview:
      "The Department of Anaesthesiology provides perioperative anaesthetic care across all surgical services, critical-care support, and pain medicine, in close coordination with the Operation Room and ICU & Critical Care Directorates.",
    services: ["General and regional anaesthesia", "Obstetric anaesthesia", "Critical care support", "Acute and chronic pain management", "Pre-anaesthetic evaluation clinics"],
    programs: ["Residency in Anaesthesiology", "Anaesthetist training programmes"],
    faculty: f("Department Head"),
  },
  {
    slug: "radiology",
    name: "Radiology & Medical Imaging",
    school: "medicine",
    type: "clinical",
    overview:
      "The Department of Radiology delivers diagnostic and interventional imaging — X-ray, ultrasound, CT, MRI and image-guided procedures — supporting every clinical service of the College.",
    services: ["X-ray and fluoroscopy", "Ultrasound and Doppler studies", "CT and MRI", "Interventional radiology", "Breast imaging"],
    programs: ["Residency in Radiology", "Imaging technologist training"],
    faculty: f("Department Head"),
  },
  {
    slug: "pathology",
    name: "Pathology",
    school: "medicine",
    type: "clinical",
    overview:
      "The Department of Pathology provides anatomic and clinical pathology services — histopathology, cytopathology, haematopathology and autopsy services — underpinning cancer diagnosis and clinical decision-making across the College.",
    services: ["Histopathology and biopsy diagnosis", "Cytopathology (including FNAC)", "Haematopathology", "Immunohistochemistry", "Autopsy and forensic support"],
    programs: ["Residency in Pathology", "Laboratory science training"],
    faculty: f("Department Head"),
  },
  {
    slug: "surgical-education",
    name: "Surgical Education",
    school: "medicine",
    type: "clinical",
    overview:
      "The Department of Surgical Education advances simulation-based and competency-driven training for surgical disciplines, running skills laboratories and faculty-development programmes that strengthen surgical care across Ethiopia.",
    services: ["Surgical skills and simulation laboratory", "Competency-based surgical curricula", "Faculty development for surgical educators", "Assessment and certification support"],
    programs: ["Surgical education fellowships", "Skills courses for residents and practising surgeons"],
    faculty: f("Department Head"),
  },
  {
    slug: "plastic-reconstructive-surgery",
    name: "Plastic & Reconstructive Surgery",
    school: "medicine",
    type: "clinical",
    overview:
      "The Department of Plastic & Reconstructive Surgery provides reconstructive care for burns, congenital anomalies, trauma and cancer defects, alongside hand surgery and microsurgery — one of the few dedicated academic plastic surgery units in the country.",
    services: ["Burn care and reconstruction", "Cleft lip and palate surgery", "Hand surgery and microsurgery", "Post-oncologic reconstruction", "Craniofacial and congenital anomaly surgery"],
    programs: ["Residency in Plastic & Reconstructive Surgery", "Burn-care training"],
    faculty: f("Department Head"),
  },

  // ════════ School of Medicine — preclinical departments (Art. 68(3)) ═════
  {
    slug: "anatomy",
    name: "Anatomy",
    school: "medicine",
    type: "preclinical",
    overview:
      "The Department of Anatomy teaches gross anatomy, histology, embryology and neuroanatomy to medical and health-science students, anchoring the preclinical curriculum.",
    services: ["Gross anatomy and dissection laboratory", "Histology and microscopy teaching", "Embryology and neuroanatomy courses", "Body-donation programme coordination"],
    programs: ["MSc in Human Anatomy", "Undergraduate preclinical teaching"],
    faculty: f("Department Head"),
  },
  {
    slug: "biochemistry",
    name: "Medical Biochemistry",
    school: "medicine",
    type: "preclinical",
    overview:
      "The Department of Medical Biochemistry delivers the molecular foundations of medicine — metabolism, molecular biology and clinical biochemistry — and contributes to translational research.",
    services: ["Preclinical biochemistry teaching", "Clinical biochemistry consultation", "Molecular biology laboratory teaching"],
    programs: ["MSc in Medical Biochemistry", "Undergraduate preclinical teaching"],
    faculty: f("Department Head"),
  },
  {
    slug: "microbiology",
    name: "Medical Microbiology, Immunology & Parasitology",
    school: "medicine",
    type: "preclinical",
    overview:
      "The Department of Medical Microbiology, Immunology & Parasitology teaches infection biology and supports diagnostic microbiology, antimicrobial-resistance surveillance and infection-prevention research.",
    services: ["Microbiology and immunology teaching", "Diagnostic microbiology support", "Antimicrobial resistance surveillance research"],
    programs: ["MSc programmes in microbiology and immunology", "Undergraduate preclinical teaching"],
    faculty: f("Department Head"),
  },
  {
    slug: "physiology",
    name: "Medical Physiology",
    school: "medicine",
    type: "preclinical",
    overview:
      "The Department of Medical Physiology teaches the function of human organ systems and runs physiology laboratories supporting integrated, organ-system-based learning.",
    services: ["Physiology lectures and laboratories", "Integrated organ-system teaching", "Research in cardiovascular and respiratory physiology"],
    programs: ["MSc in Medical Physiology", "Undergraduate preclinical teaching"],
    faculty: f("Department Head"),
  },
  {
    slug: "forensic-medicine",
    name: "Forensic Medicine & Toxicology",
    school: "medicine",
    type: "preclinical",
    overview:
      "The Department of Forensic Medicine & Toxicology provides medico-legal services and education, including forensic autopsies, clinical forensic examinations and expert testimony.",
    services: ["Medico-legal autopsies", "Clinical forensic examinations", "Toxicology consultation", "Expert court testimony"],
    programs: ["Forensic medicine teaching for undergraduates and residents"],
    faculty: f("Department Head"),
  },
  {
    slug: "pharmacology",
    name: "Pharmacology",
    school: "medicine",
    type: "preclinical",
    overview:
      "Positioned within the School of Medicine (Senate Legislation 2026, Art. 64(3)), the Department of Pharmacology teaches the science of drugs and therapeutics and supports rational-prescribing and pharmacovigilance initiatives.",
    services: ["Pharmacology teaching", "Pharmacovigilance and drug-information support", "Rational prescribing programmes"],
    programs: ["MSc in Pharmacology", "Undergraduate preclinical teaching"],
    faculty: f("Department Head"),
  },

  // ════════ School of Nursing & Midwifery ════════
  {
    slug: "nursing",
    name: "Nursing",
    school: "nursing-midwifery",
    type: "academic",
    overview:
      "The Department of Nursing prepares professional nurses through BSc and MSc programmes spanning adult health, paediatric, emergency and critical care, perioperative and oncology nursing.",
    services: ["BSc and MSc nursing education", "Specialty nursing training (ICU, OR, emergency, neonatal)", "Continuing professional development for nurses"],
    programs: ["BSc in Nursing", "MSc in Adult Health, Paediatric, Emergency & Critical Care Nursing"],
    faculty: f("Department Head"),
  },
  {
    slug: "midwifery",
    name: "Midwifery",
    school: "nursing-midwifery",
    type: "academic",
    overview:
      "The Department of Midwifery trains midwives who safeguard mothers and newborns, with strong clinical immersion in one of the country's busiest maternity services.",
    services: ["BSc and MSc midwifery education", "Clinical midwifery training", "Maternal and newborn health outreach"],
    programs: ["BSc in Midwifery", "MSc in Clinical Midwifery"],
    faculty: f("Department Head"),
  },

  // ════════ School of Public Health ════════
  {
    slug: "public-health",
    name: "Public Health",
    school: "public-health",
    type: "academic",
    overview:
      "The School of Public Health develops public-health leaders through MPH and PhD programmes in epidemiology, biostatistics, health policy, health-systems management and reproductive health, and leads community-based research.",
    services: ["Graduate public health education", "Epidemiologic and health-systems research", "Community health programmes and field epidemiology"],
    programs: ["Master of Public Health (MPH)", "MSc/PhD programmes in epidemiology and health systems", "Field epidemiology training"],
    faculty: f("Dean / Department Head"),
  },

  // ════════ Pharmacy & Service ════════
  {
    slug: "pharmacy",
    name: "Pharmacy",
    school: "pharmacy",
    type: "academic",
    overview:
      "The Pharmacy & Service unit operates as both an academic programme and the pharmacy service of the College (Senate Legislation 2026, Art. 64) — training pharmacists while running inpatient, outpatient and clinical pharmacy services.",
    services: ["Inpatient and outpatient pharmacy services", "Clinical pharmacy and medication-therapy management", "Drug information services", "Pharmacy education (BPharm and postgraduate)"],
    programs: ["BPharm", "Postgraduate clinical pharmacy programmes"],
    faculty: f("Director"),
  },
];

export const departmentBySlug = (slug: string) => DEPARTMENTS.find((d) => d.slug === slug);
export const departmentsBySchool = (school: SchoolSlug) => DEPARTMENTS.filter((d) => d.school === school);
