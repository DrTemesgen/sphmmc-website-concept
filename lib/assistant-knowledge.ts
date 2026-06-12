/**
 * Knowledge base for the "Ask St. Paul's" virtual assistant.
 * Built from the same data files that render the site, so the assistant
 * always reflects the published structure.
 */
import { DEPARTMENTS } from "@/data/departments";
import { CENTERS } from "@/data/centers";
import { SCHOOLS } from "@/data/schools";
import { DOCTORS, activeSpecialties } from "@/data/doctors";
import { INSTITUTION } from "@/data/institution";
import { SERVICE_DIRECTORATES } from "@/data/services";

export function buildSystemPrompt(): string {
  const departmentList = DEPARTMENTS.map((d) => `- ${d.name} (/academics/departments/${d.slug})`).join("\n");
  const centerList = CENTERS.map((c) => `- ${c.name}: ${c.tagline} (/centers/${c.slug})`).join("\n");
  const schoolList = SCHOOLS.map((s) => `- ${s.name} (/academics/schools/${s.slug})`).join("\n");
  const specialtyList = activeSpecialties().join(", ");
  const doctorList = DOCTORS.map(
    (d) => `- ${d.name} — ${d.specialty}, fee ${d.fee} ETB (/private-wing/doctors/${d.slug})`
  ).join("\n");
  const directorateList = SERVICE_DIRECTORATES.map((s) => `- ${s.name}`).join("\n");

  return `You are "Ask St. Paul's", the virtual assistant on the website of Saint Paul's Hospital Millennium Medical College (SPHMMC) in Addis Ababa, Ethiopia.

YOUR ROLE — a navigator, not a doctor:
- Help visitors find the right department, clinic, centre or office.
- Explain how to access care: emergency, referral outpatient clinics, and the Private Wing.
- Help users book a private-wing consultant (direct them to /private-wing/book).
- Answer questions about the College: its schools, programmes, history, leadership structure and offices.
- Provide general, educational health information only.

STRICT SAFETY RULES:
1. You do NOT diagnose, prescribe, or give personal medical advice. If asked, explain kindly that you can only give general information and help them book the right specialist.
2. EMERGENCIES: if a message suggests an emergency (chest pain, difficulty breathing, severe bleeding, stroke symptoms, labour, poisoning, suicidal thoughts), IMMEDIATELY tell them to call ${INSTITUTION.contact.shortCode} or come to the 24/7 emergency department. Do not continue normal conversation until you have said this.
3. Always offer a human path: the hotline ${INSTITUTION.contact.shortCode}, phone ${INSTITUTION.contact.phone}, or email ${INSTITUTION.contact.email}.
4. If you are not sure about a fact (fees, schedules, names), say so and direct the user to the relevant page or phone line. Never invent details.
5. Respond in the user's language — English or Amharic (አማርኛ). Keep answers short (2–5 sentences), warm and clear. Use simple language; many visitors are not medical professionals.

KEY FACTS:
- ${INSTITUTION.name} (${INSTITUTION.acronym}) — "${INSTITUTION.tagline}". Founded 1968; medical college since 2007; governed by a Board under the Federal Ministry of Health.
- 700+ beds, ~1,200 emergency & outpatient visits daily, 2,800+ staff.
- Location: ${INSTITUTION.contact.address} (${INSTITUTION.contact.poBox}).
- Hotline: ${INSTITUTION.contact.shortCode} | Phone: ${INSTITUTION.contact.phone} | Email: ${INSTITUTION.contact.email}
- Private Wing: evening & weekend consultant clinics. Booking: choose specialty/doctor → pick a time → enter name + phone → confirm. Online at /private-wing/book. Consultation fees vary by consultant (about 800–1,200 ETB).
- Emergency department: open 24/7, no referral needed.
- Regular outpatient clinics: referral-based, coordinated by the Patients Referral & Flow Directorate.

SCHOOLS:
${schoolList}

CLINICAL & ACADEMIC DEPARTMENTS:
${departmentList}

SPECIALTY CENTRES & AFFILIATES:
${centerList}

MEDICAL SERVICE DIRECTORATES:
${directorateList}

PRIVATE-WING SPECIALTIES AVAILABLE: ${specialtyList}

PRIVATE-WING CONSULTANTS (sample roster):
${doctorList}

OTHER KEY PAGES YOU CAN POINT TO:
- Programmes A–Z (75+ MD/residency/fellowship/MSc/MPH/PhD programmes): /academics/programs
- Faculty & Staff directory (profiles by department): /academics/staff
- Staff profile submission (for SPHMMC academic staff to add/update their own profile, subject to Dean approval): /academics/staff/submit
- Library (e-journals, UpToDate, HINARI, institutional repository, services, hours): /library
- Millennium Health Innovation Hub (Ethiopia's first medical-institution-led health innovation & startup initiative; MedStart Accelerator; IDREAM molecular lab): /initiatives
- In the News / press coverage: /press
- Health education: /education
- Contact & map: /contact

When you reference a page, give the path (e.g. /private-wing/book) — the chat UI turns it into a link.`;
}

/** Rule-based fallback when no API key is configured. */
export function fallbackAnswer(message: string): string {
  const m = message.toLowerCase();
  const emergency = /(emergency|chest pain|bleeding|breath|stroke|unconscious|poison|labor|labour|suicide|ድንገተኛ)/;
  if (emergency.test(m)) {
    return `🚨 If this is an emergency, please call ${INSTITUTION.contact.shortCode} now or come directly to our emergency department — it is open 24/7 and no referral is needed.`;
  }
  if (/(referr|refer me|how.*refer|referral)/.test(m)) {
    return `St. Paul's is a national referral hospital. With a referral letter from your health centre or hospital, bring it (with your ID and previous records) to outpatient registration; the Patients Referral & Flow Directorate schedules you into the right clinic. Details at /patient-care/referrals. Prefer not to wait? Book a private consultation at /private-wing/book.`;
  }
  if (/(book|appointment|reserve|schedule|ቀጠሮ)/.test(m)) {
    return `You can book a private-wing consultant online in four steps: go to /private-wing/book, choose a specialty or doctor, pick an available time, and enter your name and phone number — you'll get an instant confirmation. You can also call ${INSTITUTION.contact.phone}.`;
  }
  if (/(fee|cost|price|how much|payment|pay|ክፍያ)/.test(m)) {
    return `Private-wing consultation fees vary by consultant (about 800–1,200 ETB) and are shown on each doctor's profile at /private-wing/doctors. Investigations and procedures are charged separately. Emergency and referral outpatient services follow the hospital's standard arrangements.`;
  }
  if (/(doctor|specialist|consultant|find a|ሐኪም)/.test(m)) {
    return `You can browse our private-wing consultants by specialty, language and clinic day at /private-wing/doctors. Each profile shows the doctor's focus areas, clinic days and consultation fee, with a "Book" button.`;
  }
  if (/(transplant|kidney|fertility|ivf|infertilit|cardiac|cath|heart centre|heart center|centre|center)/.test(m)) {
    return `Our specialty centres are at /centers — the Renal Transplant Centre (Ethiopia's first kidney transplant programme), the Infertility Centre (reproductive medicine and IVF), and the Cardiac Catheterisation Laboratory (interventional cardiology). Access is usually by referral via /patient-care/referrals.`;
  }
  if (/(department|clinic|service|treat|condition)/.test(m)) {
    return `All our clinical and academic departments are listed A–Z at /academics/departments — Internal Medicine, Paediatrics, Surgery, Obstetrics & Gynaecology, Orthopaedics, Neurology and many more. Tell me your concern and I can point you to the right one.`;
  }
  if (/(programme|program|course|residency|fellowship|masters|mph|phd|degree)/.test(m)) {
    return `The College offers 75+ programmes — the MD, 20 specialty residencies, 30 subspecialty fellowships, and master's/PhD programmes. Browse and search them all at /academics/programs.`;
  }
  if (/(apply|admission|enrol|enroll|register|entrance|how to join|student|study|ትምህርት)/.test(m)) {
    return `SPHMMC has four schools — Medicine, Nursing & Midwifery, Public Health, and Pharmacy (/academics). Admissions, entrance exams and registration run through the student portal at portal.sphmmc.edu.et; programme calls are announced at /news. Staff can submit a profile at /academics/staff/submit.`;
  }
  if (/(library|book a journal|e-?journal|database|repository|uptodate|hinari)/.test(m)) {
    return `The Library offers e-journals, the UpToDate and HINARI databases, an institutional repository and digital library — plus scanning, printing and inter-library loan. See /library.`;
  }
  if (/(research|innovat|startup|idream|publication|journal)/.test(m)) {
    return `Research is coordinated by the Research Affairs Directorate (with the IRERC ethics committee) — see /research. The College also runs the Millennium Health Innovation Hub (MedStart accelerator + IDREAM molecular lab) at /initiatives, and publishes the Millennium Journal of Health.`;
  }
  if (/(news|press|media|in the news|coverage|announcement)/.test(m)) {
    return `Announcements are at /news, and press coverage of the College — first-in-Ethiopia transplant, IVF and microsurgery milestones — is at /press.`;
  }
  if (/(visit|hour|opening|open|when.*open|visiting)/.test(m)) {
    return `Our emergency department is open 24/7. Specialty outpatient clinics run during the day (by referral), and private-wing clinics run in the evenings and weekends — see each consultant's clinic days at /private-wing/doctors. For other visiting arrangements, please call ${INSTITUTION.contact.phone}.`;
  }
  if (/(contact|phone|address|location|where|direction|map|email|social|facebook|አድራሻ)/.test(m)) {
    return `We are located in ${INSTITUTION.contact.address} (${INSTITUTION.contact.poBox}). Phone: ${INSTITUTION.contact.phone}, hotline ${INSTITUTION.contact.shortCode}, email ${INSTITUTION.contact.email}. A map and our social links are at /contact.`;
  }
  if (/(about|history|mission|vision|leader|provost|govern|organog)/.test(m)) {
    return `St. Paul's was founded in 1968 and became a medical college in 2007. Learn about its history, mission and values at /about, the leadership at /about/leadership, and the full organisational structure at /about/organogram.`;
  }
  return `I can help you book a private-wing consultant (/private-wing/book), find a doctor (/private-wing/doctors), explore departments (/academics/departments) and programmes (/academics/programs), or learn about the College (/about). For anything urgent, call ${INSTITUTION.contact.shortCode}. What do you need?`;
}
