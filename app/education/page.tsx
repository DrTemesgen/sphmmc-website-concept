import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { INSTITUTION } from "@/data/institution";
import { PageHero, Breadcrumbs, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Health Education",
  description:
    "Public health education from SPHMMC — practical tips for healthy living, disease prevention and knowing when to seek care.",
};

const topics = [
  {
    title: "Know the Emergency Warning Signs",
    text: "Chest pain, sudden weakness on one side, difficulty breathing, severe bleeding — these need emergency care immediately. Don't wait. Call 976 or come straight to the emergency department.",
    link: { label: "Emergency information", href: "/patient-care/emergency" },
  },
  {
    title: "High Blood Pressure: The Silent Killer",
    text: "Hypertension usually has no symptoms but damages the heart, brain and kidneys over years. Adults should check their blood pressure at least once a year — and keep salt low, stay active, and take prescribed medicines every day.",
    link: { label: "Internal Medicine department", href: "/academics/departments/internal-medicine" },
  },
  {
    title: "Safe Motherhood",
    text: "Antenatal care saves lives. Every pregnant woman should attend at least four antenatal visits, deliver with a skilled birth attendant, and know the danger signs: bleeding, severe headache, blurred vision, reduced baby movement.",
    link: { label: "Obstetrics & Gynaecology", href: "/academics/departments/obstetrics-gynaecology" },
  },
  {
    title: "Diabetes: Check, Control, Live Well",
    text: "Frequent thirst, urination and unexplained weight loss can signal diabetes. With early diagnosis, healthy eating, exercise and medication, people with diabetes live full lives — uncontrolled, it damages eyes, kidneys and nerves.",
    link: { label: "Internal Medicine department", href: "/academics/departments/internal-medicine" },
  },
  {
    title: "Kidney Health",
    text: "Your kidneys filter your blood 24/7. Protect them: drink enough water, control blood pressure and diabetes, avoid unnecessary painkillers, and never buy unprescribed antibiotics. Early kidney disease has no symptoms — screening matters.",
    link: { label: "Renal Transplant Centre", href: "/centers/renal-transplant" },
  },
  {
    title: "Mental Health is Health",
    text: "Depression and anxiety are medical conditions, not weakness. Persistent sadness, sleep changes, loss of interest, or thoughts of self-harm deserve care, just like any illness. Our psychiatry team provides confidential support.",
    link: { label: "Psychiatry department", href: "/academics/departments/psychiatry" },
  },
  {
    title: "Childhood Immunisation",
    text: "Vaccines protect children from killers like measles, pneumonia and whooping cough. Follow the national immunisation schedule completely — and catch up missed doses as soon as possible at your nearest health facility.",
    link: { label: "Paediatrics & Child Health", href: "/academics/departments/paediatrics" },
  },
  {
    title: "Infection Prevention at Home",
    text: "Hand washing with soap remains the single most effective way to prevent infection — before eating, after the toilet, and when caring for the sick. Cover coughs, keep wounds clean, and complete prescribed antibiotic courses.",
    link: { label: "Infection Prevention Directorate", href: "/patient-care/directorates/infection-prevention" },
  },
];

export default function EducationPage() {
  return (
    <>
      <PageHero
        eyebrow="Community Service"
        title="Health Education for Everyone"
        intro="Practical, trustworthy health information from the College's clinicians — because prevention is the best medicine."
      />
      <Breadcrumbs items={[{ label: "Health Education" }]} />

      <section className="mx-auto max-w-7xl px-4 pt-10">
        <div className="overflow-hidden rounded-2xl border border-line">
          <Image
            src="/images/community/ambassadors.jpg"
            alt="SPHMMC community-health outreach"
            width={1400}
            height={420}
            priority
            className="h-48 w-full object-cover sm:h-60"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-5 md:grid-cols-2">
          {topics.map((t) => (
            <article key={t.title} className="flex flex-col rounded-xl border border-line p-6">
              <h2 className="font-display text-xl font-bold text-navy">{t.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{t.text}</p>
              <Link href={t.link.href} className="mt-4 text-sm font-bold text-brand hover:underline">
                {t.link.label} →
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl bg-navy p-7 text-white">
            <SectionHeading
              light
              eyebrow="Ask Anything"
              title="Have a health question?"
              intro="The Ask St. Paul's assistant (bottom-right) can answer general health-education questions any time — in English or Amharic. For personal medical advice, always see a clinician."
            />
          </div>
          <div className="rounded-xl border border-line bg-paper p-7">
            <SectionHeading
              eyebrow="Follow Our Campaigns"
              title="Health education on social media"
              intro="The Public Relations & Communication Executive runs regular public-health campaigns — follow us for updates."
            />
            <div className="flex flex-wrap gap-3">
              <a href={INSTITUTION.social.facebook} target="_blank" rel="noopener noreferrer" className="rounded-md bg-[#1877f2] px-4 py-2 text-sm font-bold text-white">
                Facebook
              </a>
              <a href={INSTITUTION.social.youtube} target="_blank" rel="noopener noreferrer" className="rounded-md bg-[#ff0000] px-4 py-2 text-sm font-bold text-white">
                YouTube
              </a>
              <a href={INSTITUTION.social.instagram} target="_blank" rel="noopener noreferrer" className="rounded-md bg-[#d62976] px-4 py-2 text-sm font-bold text-white">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <p className="mt-8 text-xs leading-relaxed text-muted">
          This information is educational and does not replace professional medical advice,
          diagnosis or treatment. If you are unwell, please see a health professional.
        </p>
      </section>
    </>
  );
}
