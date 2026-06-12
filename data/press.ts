/**
 * "In the News" — verified third-party media coverage of SPHMMC.
 * Each item was confirmed to refer to St. Paul's Hospital Millennium Medical
 * College, Addis Ababa (researched June 2026). Summaries are original; we link
 * out to the source rather than reproducing article text.
 *
 * NOTE on link rot: several Ethiopian outlet URLs move or expire. Keep the
 * metadata here (outlet/date/headline/summary) as the source of truth so cards
 * still render if a source link breaks; consider archiving Wayback snapshots.
 */

export type PressTopic =
  | "Transplant"
  | "Maternal & Reproductive Health"
  | "Cancer Care"
  | "Education & Research"
  | "International Partnerships"
  | "Innovation & AI"
  | "Infrastructure";

export interface PressItem {
  outlet: string;
  date: string; // human-readable
  year: number;
  headline: string;
  summary: string;
  url: string;
  topics: PressTopic[];
}

export const PRESS_ITEMS: PressItem[] = [
  {
    outlet: "Ethiosports",
    date: "Sep 2015",
    year: 2015,
    headline: "First successful kidney transplant conducted in Ethiopia",
    summary:
      "St. Paul's performed Ethiopia's first-ever kidney transplants — three patients — with University of Michigan support, inaugurating the National Kidney Transplant Center.",
    url: "https://www.ethiosports.com/2015/09/25/first-successful-kidney-transplant-conducted-in-ethiopia/",
    topics: ["Transplant", "International Partnerships"],
  },
  {
    outlet: "Michigan Medicine",
    date: "Mar 2018",
    year: 2018,
    headline: "Trained by U-M, Ethiopia's first transplant surgeons nearly ready to go it alone",
    summary:
      "A follow-up on the University of Michigan–SPHMMC partnership: Ethiopian surgeons trained through the programme approach independent transplant practice.",
    url: "https://medicine.umich.edu/dept/globalreach/news/archive/201803/sustainable-surgery-trained-u-m-ethiopias-first-transplant-surgeons-nearly-ready-go-it-alone",
    topics: ["Transplant", "Education & Research", "International Partnerships"],
  },
  {
    outlet: "Capital Ethiopia",
    date: "Sep 2018",
    year: 2018,
    headline: "St. Paul's Hospital starts cancer department",
    summary:
      "SPHMMC launched its oncology department — only the second cancer-treatment facility in Ethiopia — and announced a nine-storey, 250-bed oncology centre of excellence.",
    url: "https://www.capitalethiopia.com/2018/09/24/st-paul-hospital-starts-cancer-department/",
    topics: ["Cancer Care", "Infrastructure"],
  },
  {
    outlet: "Cure Blindness Project",
    date: "Oct 2018",
    year: 2018,
    headline: "Partnership strengthens eye-care training at SPHMMC",
    summary:
      "An eye-care partnership delivered equipment, community outreach and ophthalmology training at the College.",
    url: "https://cureblindness.org/news/st-pauls-hospital-millennium-medical-college",
    topics: ["Education & Research", "International Partnerships"],
  },
  {
    outlet: "Addis Fortune",
    date: "Nov 2019",
    year: 2019,
    headline: "Nine-year saga of St. Paul's maternity expansion comes to end",
    summary:
      "SPHMMC opened a 444-million-birr maternity and paediatric centre — 300 beds, 26 neonatal ICU beds, ten theatres — to cut maternal and neonatal mortality.",
    url: "https://addisfortune.news/nine-year-saga-of-st-pauls-maternity-expansion-comes-to-end/",
    topics: ["Maternal & Reproductive Health", "Infrastructure"],
  },
  {
    outlet: "ENA (Ethiopian News Agency)",
    date: "Apr 2021",
    year: 2021,
    headline: "HaSET project in Ethiopia to improve maternal, child health",
    summary:
      "SPHMMC co-implements the Gates Foundation–funded HaSET maternal and child health research programme with the Ethiopian Public Health Institute and Harvard Chan School.",
    url: "https://www.ena.et/en/?p=23787",
    topics: ["Maternal & Reproductive Health", "Education & Research", "International Partnerships"],
  },
  {
    outlet: "Addis Fortune",
    date: "Apr 2021",
    year: 2021,
    headline: "St. Paul's Centre for Reproductive Medicine — Ethiopia's first public IVF centre",
    summary:
      "Coverage documents SPHMMC's reproductive-medicine centre as the country's first public IVF service, with 1,000+ procedures performed and treatment free in the public wing.",
    url: "https://addisfortune.news/addis-gets-third-fertility-treatment-centre",
    topics: ["Maternal & Reproductive Health"],
  },
  {
    outlet: "ENA (Ethiopian News Agency)",
    date: "May 2021",
    year: 2021,
    headline: "Health Minister launches 45m birr project to renovate St. Paul's",
    summary:
      "The Minister of Health launched a renovation of the ~50-year-old hospital and inspected a 2-billion-birr centre for cancer, cardiac and other non-communicable diseases.",
    url: "https://www.ena.et/en/?p=24268",
    topics: ["Infrastructure", "Cancer Care"],
  },
  {
    outlet: "Addis Fortune",
    date: "Dec 2021",
    year: 2021,
    headline: "Addis Abeba hospitals designated for health-infrastructure repair in the North",
    summary:
      "SPHMMC was assigned to rehabilitate war-damaged Dessie Hospital, dispatching specialists, nurses, equipment and medicines for post-conflict health restoration.",
    url: "https://addisfortune.news/ministry-designates-addis-abeba-hospitals-for-health-infrastructure-repair-in-north/",
    topics: ["Infrastructure"],
  },
  {
    outlet: "Diabetes Africa",
    date: "May 2024",
    year: 2024,
    headline: "International partnership to transform diabetes care in Ethiopia",
    summary:
      "Diabetes Africa and SPHMMC signed a three-year agreement to train and certify diabetes specialist nurses, supported by Biocon Biologics.",
    url: "https://diabetesafrica.org/international-partnership-to-transform-diabetes-care-in-ethiopia/",
    topics: ["Education & Research", "International Partnerships"],
  },
  {
    outlet: "The Ethiopian Herald",
    date: "2025",
    year: 2025,
    headline: "SPHMMC introduces AI-powered medical services with KOICA support",
    summary:
      "KOICA donated AI-enabled diagnostic devices; the College described a new institutional policy for AI in medical education and radiology, developed with the Ethiopian Artificial Intelligence Institute.",
    url: "https://press.et/herald/?p=120682",
    topics: ["Innovation & AI", "International Partnerships"],
  },
  {
    outlet: "The Reporter (Ethiopia)",
    date: "Sep 2025",
    year: 2025,
    headline: "Ethiopia's smallest patients face big odds",
    summary:
      "A feature on neonatal mortality quotes SPHMMC paediatrician Dr. Gesit Metaferia, who presented research on preterm-infant survival at a clinical symposium.",
    url: "https://www.thereporterethiopia.com/47070/",
    topics: ["Maternal & Reproductive Health", "Education & Research"],
  },
  {
    outlet: "OncoDaily",
    date: "Sep 2025",
    year: 2025,
    headline: "Moving closer to establishing Ethiopia's first liver transplant centre",
    summary:
      "SPHMMC leadership and a steering committee with the Ministry of Health advanced plans for Ethiopia's first liver transplant centre, with diaspora-expert support.",
    url: "https://oncodaily.com/voices/sphmmc-379839",
    topics: ["Transplant", "International Partnerships"],
  },
  {
    outlet: "BFIRST (UK)",
    date: "Jan 2026",
    year: 2026,
    headline: "Ethiopia's first dedicated microsurgical training courses launched at St. Paul's",
    summary:
      "A UK surgical team helped establish a new microsurgical skills laboratory and the country's first microsurgery training courses, with surgeons from St. Paul's, AaBET and ALERT.",
    url: "https://bfirst.org.uk/news_and_events/news/33/st_pauls_hospital_addis_ababa_january_2026/",
    topics: ["Education & Research", "International Partnerships"],
  },
  {
    outlet: "ENA (Ethiopian News Agency)",
    date: "May 2026",
    year: 2026,
    headline: "Ethiopia advances as Horn of Africa medical-tourism hub",
    summary:
      "The State Minister of Health cited the newly expanded facility at SPHMMC as a key milestone in Ethiopia's push to become a regional medical-tourism destination with AI-driven diagnostics.",
    url: "https://www.ena.et/web/eng/w/eng_8932592",
    topics: ["Infrastructure", "Innovation & AI"],
  },
];

export const PRESS_OUTLETS = [
  "ENA",
  "Addis Fortune",
  "Capital Ethiopia",
  "The Reporter",
  "The Ethiopian Herald",
  "OncoDaily",
  "Michigan Medicine",
  "BFIRST",
];

export const PRESS_TOPICS: PressTopic[] = [
  "Transplant",
  "Maternal & Reproductive Health",
  "Cancer Care",
  "Education & Research",
  "International Partnerships",
  "Innovation & AI",
  "Infrastructure",
];
