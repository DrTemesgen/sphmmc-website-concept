/**
 * Institutional identity.
 * Vision, mission and core values reflect the College's current 2026 statements.
 * Contact details, tagline and statistics verified against sphmmc.edu.et
 * (crawled June 2026).
 */

export const INSTITUTION = {
  name: "Saint Paul's Hospital Millennium Medical College",
  shortName: "St. Paul's Hospital Millennium Medical College",
  acronym: "SPHMMC",
  tagline: "Our Speciality, Your Well-Being",
  established:
    "Established by the Council of Ministers Regulation No. 200/2011; accountable to the Federal Ministry of Health through its Governing Board.",

  vision:
    "To be a centre of excellence in specialised healthcare, postgraduate education, high-level evidence-generating research, and health innovation in Ethiopia and the Horn of Africa.",

  mission: [
    "Provide comprehensive, patient-centred healthcare services.",
    "Deliver high-quality medical and health sciences education through outcome-based programmes.",
    "Conduct problem-solving research of public health significance and translate findings into practice.",
    "Render community service that addresses the health needs of the population.",
    "Foster innovation and digital transformation in health education and service delivery.",
  ],

  coreValues: [
    { name: "Excellence", text: "Excellence and continuous improvement in all endeavours." },
    { name: "Integrity", text: "Integrity, transparency, and accountability." },
    { name: "Patient Safety", text: "Patient safety and ethical care." },
    { name: "Academic Freedom", text: "Academic freedom with responsibility." },
    { name: "Equity & Inclusion", text: "Equity, diversity, and inclusion." },
    { name: "Innovation", text: "Innovation, creativity, and evidence-based practice." },
    { name: "Collaboration", text: "Collaboration and partnership." },
    { name: "Social Responsibility", text: "Social responsibility and community engagement." },
  ],

  dualMandate:
    "The College operates under a dual mandate as both a higher education institution and a teaching hospital — integrating education, research, clinical service, and community engagement. Where conflict arises between patient safety and an academic activity, patient safety prevails.",

  // Headline statistics — from the College's published figures (verify with the
  // Public Relations & Communication Executive before each publication cycle).
  stats: [
    { value: "700+", label: "Inpatient beds" },
    { value: "1,200", label: "Daily emergency & outpatient visits" },
    { value: "2,800+", label: "Clinical, academic & support staff" },
    { value: "75+", label: "Academic programmes — MD to PhD" },
  ],

  contact: {
    address: "Gulele Sub-City, Addis Ababa, Ethiopia",
    poBox: "P.O. Box 1271, Addis Ababa",
    phone: "+251 112 75 01 25",
    shortCode: "976",
    email: "info@sphmmc.edu.et",
    website: "https://sphmmc.edu.et",
  },

  social: {
    facebook: "https://www.facebook.com/sphmmc/",
    instagram: "https://www.instagram.com/sphmmc/",
    youtube: "https://www.youtube.com/channel/UCU6zMg4MrgmXzFAyTBh9LMg",
  },

  portals: {
    studentPortal: "https://portal.sphmmc.edu.et/",
    cpid: "https://cpid.sphmmc.edu.et/",
    journal: "http://mjh.sphmmc.edu.et",
  },
};

export const HISTORY = {
  founding:
    "Saint Paul's Hospital was established in 1968 through a visionary collaboration between Emperor Haile Selassie I and the German Evangelical Church. Initially serving as a general and referral hospital, it provided essential healthcare to patients from all corners of Ethiopia — focusing on general medicine, surgery, paediatrics and obstetrics — with free care for the majority of its patients.",
  millennium:
    "Acknowledging the critical shortage of medical professionals in Ethiopia, the Federal Ministry of Health transformed Saint Paul's Hospital into a teaching institution. The medical school opened in 2007 — marking the Ethiopian Millennium — and the College was formally established by decree of the Council of Ministers (Regulation No. 200/2011). SPHMMC pioneered Ethiopia's first integrated modular and hybrid problem-based undergraduate medical curriculum.",
  growth:
    "Today SPHMMC is one of the country's premier academic medical centres: more than 700 inpatient beds, around 1,200 emergency and outpatient visits every day, and over 2,800 clinical, academic and support staff. The College pioneered Ethiopia's first kidney transplant centre and runs specialised facilities for cardiac intervention, fertility treatment, burn care, oncology and minimally invasive surgery — while training thousands of physicians, specialists, nurses, midwives and public-health professionals.",
  restructure2026:
    "In 2026, endorsed by the Governing Board, the College adopted a new organisational structure under a Provost and four Corporate Directorates: Administration & Business Development, Academic & Medical Service, Research & Community Service, and Quality & Innovation. The structure recognises three specialty centres (the Renal Transplant Centre, the Infertility Centre and the Cardiac Catheterisation Laboratory) and Aabet Hospital as the College's first affiliated health institution.",
  milestones: [
    { year: "1968", event: "Saint Paul's Hospital founded by Emperor Haile Selassie I with the German Evangelical Church." },
    { year: "2007", event: "Medical school opens — Ethiopia's first integrated modular, problem-based curriculum." },
    { year: "2011", event: "Council of Ministers Regulation No. 200/2011 formally establishes the College." },
    { year: "2015", event: "Ethiopia's first kidney transplant centre opens at SPHMMC." },
    { year: "2022", event: "School of Nursing established; postgraduate nursing programmes expand." },
    { year: "2026", event: "New organisational structure adopted — Provost with four Corporate Directorates, three specialty centres, and Aabet Hospital affiliated." },
  ],
};

/**
 * Current officeholders, mapped to the 2026 statutory titles.
 * Names verified from sphmmc.edu.et leader pages (June 2026) — confirm with the
 * Public Relations & Communication Executive before go-live.
 */
/**
 * Provost's welcome message. The legacy site carries no published message, so
 * this is an illustrative welcome written in the Provost's voice — grounded in
 * the College's real mission, the 2026 structure, and his stated public
 * priorities (partnerships, quality of care, workforce development and
 * skill-based training). To be confirmed by the Public Relations &
 * Communication Executive before any real use.
 */
export const PROVOST_MESSAGE = {
  name: "Dr. Muluken Tesfaye",
  title: "Provost & Chief Executive Director",
  photo: "/images/leaders/provost.png",
  greeting: "Welcome to St. Paul's",
  pullQuote:
    "We exist to heal and to teach — and to do both with excellence, integrity and compassion.",
  paragraphs: [
    "It is my honour to welcome you to St. Paul's Hospital Millennium Medical College. From a charitable hospital founded in 1968 to one of Ethiopia's premier academic medical centres, St. Paul's has always carried a dual mandate: to heal and to teach. Every day our wards, classrooms and laboratories serve around 1,200 patients while training the physicians, nurses, midwives, public-health specialists and pharmacists our nation needs.",
    "Our people are our greatest strength. We are investing in their competency through modern, skill-based training — from advanced nursing skills laboratories to simulation and structured assessment — so that every graduate leaves us ready to deliver safe, compassionate, high-quality care. Quality is not a department here; it is a habit we build into every ward round, every lecture and every research protocol.",
    "We believe a teaching hospital should also be an engine of discovery. Through problem-solving research of public-health significance, the Millennium Health Innovation Hub, and partnerships with leading institutions at home and abroad, we turn the real, unmet clinical problems we meet each day into evidence, new services and homegrown health technology — landmark firsts in transplantation, fertility care and emergency medicine among them.",
    "Under our 2026 organisational structure — a Provost working through four Corporate Directorates — we are sharpening our focus on service, education, research and community. Whether you are a patient seeking care, a student beginning your journey, a colleague who gives so much, or a partner who shares our mission, you are part of the St. Paul's story. Thank you for being here.",
  ],
};

export const LEADERSHIP = [
  {
    id: "provost",
    title: "Provost",
    name: "Dr. Muluken Tesfaye",
    bio: "Psychiatrist and health-system leader; previously Chief Executive Director of Eka Kotebe General Hospital and former President of the Ethiopian Psychiatric Association.",
    photo: "/images/leaders/provost.png",
  },
  {
    id: "admin",
    title: "Administration & Business Development Vice Provost/Corporate Director",
    name: "Mr. Jemal Shifa Mussa",
    bio: "Public-health professional (BSc, Dilla University; MPH, Addis Continental Institute of Public Health); previously Chief Executive Director of Werabe Comprehensive Specialized Hospital.",
    photo: "/images/leaders/admin-vp.jpg",
  },
  {
    id: "academic",
    title: "Academic & Medical Service Vice Provost/Corporate Director",
    name: "Dr. Lemi Belay",
    bio: "Associate Professor of Obstetrics & Gynaecology and a distinguished researcher, educator and trainer with more than 65 publications in leading international journals. He has contributed to WHO protocols and guidelines and served as Clinical Vice Chair of the Department of Obstetrics & Gynaecology.",
    photo: "/images/leaders/academic-vp.png",
  },
  {
    id: "research",
    title: "Research & Community Service Vice Provost/Corporate Director",
    name: "Dr. Ewenat Gebrehanna",
    bio: "Associate Professor of Public Health (PhD, University of Gondar; MPH, Addis Ababa University); at SPHMMC since 2017.",
    photo: "/images/leaders/research-vp.png",
  },
  {
    id: "quality",
    title: "Quality & Innovation Vice Provost/Corporate Director",
    name: "Dr. Tigist Bacha",
    bio: "Associate Professor of Paediatric Emergency & Critical Care (MD, MPH) and a pioneer of acute paediatric care — Ethiopia's first paediatric emergency and intensive-care physician, who founded the country's first Paediatric ICU. Appointed Vice Provost for Academic & Medical Service Quality and Corporate Director of Innovation in December 2025.",
    photo: "/images/leaders/quality-vp.jpg",
  },
];
