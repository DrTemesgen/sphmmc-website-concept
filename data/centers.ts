/**
 * Specialty centres and affiliated institutions of the College.
 */

export interface Center {
  slug: string;
  name: string;
  kind: "specialty-centre" | "affiliated-hospital";
  tagline: string;
  overview: string;
  teams: string[];
  trainingRole: string;
  image?: { src: string; alt: string };
}

export const CENTERS: Center[] = [
  {
    slug: "renal-transplant",
    name: "Renal Transplant Centre",
    kind: "specialty-centre",
    tagline: "Ethiopia's national kidney transplant programme.",
    overview:
      "The Renal Transplant Centre provides comprehensive renal-transplant services — donor evaluation, transplant surgery, post-transplant care, and related training and research. Home to the country's first living-donor kidney transplant programme, the Centre maintains a national transplant registry documenting all procedures and outcomes.",
    teams: [
      "Transplant Surgery Team",
      "Nephrology & Dialysis Team",
      "Donor Evaluation & Coordination Team",
      "Post-Transplant Follow-Up & Immunology Team",
      "Transplant Research & Data Management Team",
    ],
    trainingRole: "Training site for nephrology, urology and transplant-surgery fellowship programmes.",
    image: { src: "/images/clinical/icu.jpg", alt: "A modern intensive-care room at St. Paul's" },
  },
  {
    slug: "infertility",
    name: "Infertility Centre",
    kind: "specialty-centre",
    tagline: "Comprehensive reproductive medicine and assisted reproductive technology.",
    overview:
      "The Infertility Centre provides comprehensive reproductive-health services — the diagnosis and treatment of infertility, assisted reproductive technologies (ART), and related training and research — in compliance with national ART regulations and reproductive-health ethics guidelines.",
    teams: [
      "Gynaecological Assessment & Diagnosis Team",
      "Male Infertility & Andrology Team",
      "Assisted Reproductive Technology (ART) Team",
      "Reproductive Endocrinology Team",
      "Embryology & Laboratory Team",
      "Counselling & Patient Support Team",
      "Infertility Research & Data Management Team",
    ],
    trainingRole: "Training and research hub for reproductive medicine fellowships.",
  },
  {
    slug: "cardiac-cath-lab",
    name: "Cardiac Catheterisation Laboratory",
    kind: "specialty-centre",
    tagline: "Diagnostic and interventional cardiology for the nation.",
    overview:
      "The Cardiac Catheterisation Laboratory provides diagnostic and interventional cardiology services — coronary angiography, percutaneous coronary intervention (PCI) and structural-heart procedures — to national and international standards, including radiation-safety standards, with a full procedural registry.",
    teams: [
      "Interventional Cardiology Team",
      "Cardiac Imaging & Diagnostics Team",
      "Cath-Lab Nursing & Technology Team",
    ],
    trainingRole: "Training site for cardiology fellowship and interventional-cardiology sub-specialty programmes.",
    image: { src: "/images/campus/cardiovascular.png", alt: "The Cardiovascular Center building at St. Paul's" },
  },
  {
    slug: "aabet-hospital",
    name: "Aabet Hospital",
    kind: "affiliated-hospital",
    tagline: "The College's first affiliated health institution.",
    overview:
      "Aabet Hospital is the first health institution affiliated to the College. Operating under a written affiliation agreement while retaining its own internal governance, Aabet Hospital reports to the Provost/CED and extends the College's clinical service, training and research platforms — with a major role in trauma and surgical care.",
    teams: [],
    trainingRole: "Clinical training and service-expansion site of the College.",
  },
];

export const centerBySlug = (slug: string) => CENTERS.find((c) => c.slug === slug);
