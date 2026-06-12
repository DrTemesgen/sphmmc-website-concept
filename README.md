# SPHMMC Website Redesign (2026) — Concept Demo

> ⚠️ **Unofficial concept demonstration.** This is a **proposed** redesign of the
> St. Paul's Hospital Millennium Medical College (SPHMMC) website, for
> **demonstration purposes only**. It is **not affiliated with, operated by, or
> endorsed by** SPHMMC. Booking, the AI assistant, and the doctor/staff profiles
> are **illustrative samples**, not live services. See [`DISCLAIMER.md`](./DISCLAIMER.md).

A proposed redesign for **Saint Paul's Hospital Millennium Medical College** —
keeping the existing branding (logo, blue `#1e73be`, "Our Speciality, Your Well-Being").

## Stack

- **Next.js 16** (App Router, Turbopack) + **Tailwind CSS v4** + TypeScript
- 106 statically generated pages (fast loading); only the booking/chat APIs are dynamic
- **Anthropic Claude API** for the "Ask St. Paul's" assistant (with rule-based fallback)
- Medplum-ready booking abstraction (see below)

## Run

```bash
npm install
cp .env.example .env.local   # add ANTHROPIC_API_KEY to enable the full AI assistant
npm run dev                  # development
npm run build && npm start   # production
```

Without `ANTHROPIC_API_KEY`, the assistant still works using built-in rule-based
answers (demo mode).

## Content architecture

All institutional content lives in `data/` as typed TypeScript — pages render from it:

| File | Contents | Source |
|---|---|---|
| `data/organogram.ts` | Full 2026 reporting-line structure | 04_Organogram_2026.xlsx + 2026 organisational structure |
| `data/institution.ts` | Vision/mission/values, history, stats, contacts, leadership | 2026 institutional statements + sphmmc.edu.et |
| `data/departments.ts` | All departments with services/programmes/faculty | 2026 organisational structure |
| `data/schools.ts` | The four schools | 2026 organisational structure |
| `data/centers.ts` | Specialty centres + Aabet Hospital | 2026 organisational structure |
| `data/offices.ts` | Every office/executive/directorate with mandates | 2026 organisational structure |
| `data/services.ts` | Medical service directorates + care pathways | 2026 organisational structure |
| `data/programs.ts` | 75+ programme catalogue (MD → PhD) | portal.sphmmc.edu.et/Web/ProgramList |
| `data/press.ts` | 15 verified "In the News" media items | press research, June 2026 |
| `data/staff.ts` | Faculty/staff profiles per department (**sample entries**) | self-submitted + approved |
| `data/doctors.ts` | **SAMPLE private-wing roster — replace before launch** | placeholder |

Real photographs (campus, leadership, IDREAM lab, students) were harvested from
the legacy WordPress media library and live in `public/images/`. Leadership
portraits are wired only where the name was consistent across crawls (Provost,
Admin VP, Research VP); the Academic VP is shown as "to be confirmed" pending PR.

## Key features

- **Private-wing booking** (`/private-wing/book`): 4-step guest flow — doctor →
  real slot calendar → name+phone → instant confirmation with reference.
  Demo persistence in `.data/bookings.json` via `/api/bookings`.
- **AI assistant** (floating widget, every page): navigator-not-doctor scope,
  pinned emergency escape (call 976), EN/AM, links to site pages.
  `/api/chat` → Claude (`claude-opus-4-8`) with prompt caching; falls back to
  rules without a key.
- **Organogram** (`/about/organogram`): interactive, clickable 2026 structure.
- **Directories**: programmes A–Z (`/academics/programs`), departments A–Z,
  offices by directorate, doctors with specialty/gender/search filters.
- **Library** (`/library`): full e-resources, databases, services and hours
  rebuilt from the legacy library site (see footer-content mapping below).
- **Innovation initiative** (`/initiatives`): the Millennium Health Innovation
  Hub — Ethiopia's first medical-institution-led health-startup initiative
  (MedStart Accelerator + IDREAM molecular lab).
- **In the News** (`/press`): filterable press-coverage grid + media-resources
  / press-kit block, linked from `/news`.
- **Faculty & staff profiles** (`/academics/staff`): per-department profile cards
  shown on each department page; staff **self-submit** at `/academics/staff/submit`
  → stored as pending in `.data/staff-submissions.json` via `/api/staff-submissions`
  → published in `data/staff.ts` after Department Head / Dean approval. Sample
  profiles are seeded to demonstrate the layout.
- **Facebook feed**: click-to-load embed (no third-party JS until user opts in).

## Legacy library-footer content — where each item now lives

The old `/library/` footer items were mapped onto the new site:

| Legacy footer item | New location |
|---|---|
| Library Catalogue / OPAC | `/library` → E-Resources |
| Digital Library | `/library` → E-Resources |
| SPHMMC Institutional Repository | `/library` → E-Resources (also linked from `/research`) |
| National Academic Digital Library of Ethiopia | `/library` → E-Resources |
| E-Journals | `/library` → E-Resources |
| UpToDate / HINARI databases | `/library` → Subscribed Databases |
| Scanning / printing / training / ILL services | `/library` → Library Services |
| Library address, phone, email | `/library` → Contact + main site footer |

Update the external URLs in `app/library/page.tsx` (`eResources[].href`) once the
new library platform / repository URLs are provisioned.

## Future Medplum EMR integration

`lib/booking.ts` defines a `BookingProvider` interface. Today
`LocalBookingProvider` stores to JSON; to go live with Medplum implement
`MedplumBookingProvider` against the same interface:

- `Doctor` → FHIR `Practitioner` + `PractitionerRole`
- `ClinicSession` → FHIR `Schedule` / `Slot`
- `BookingRequest` → FHIR `Appointment`
- patient details → FHIR `Patient` (match by phone)

## Before go-live checklist

1. Replace the sample doctor roster in `data/doctors.ts` with the verified
   private-wing list (names, photos, fees, schedules).
2. Confirm leadership names/photos with the PR & Communication Executive
   (`data/institution.ts` → `LEADERSHIP`) — the Academic & Medical Service VP
   is "to be confirmed" (legacy site showed conflicting names across pages).
3. Higher-resolution campus photography would help the hero/centres (the legacy
   homepage hero was a video, so no high-res slider image existed to reuse).
   `MedStart`/IDREAM and press content are real and verified.
4. Set `ANTHROPIC_API_KEY` and review the assistant system prompt
   (`lib/assistant-knowledge.ts`).
5. Wire the news page to a CMS or simple admin flow.
6. SMS confirmations for bookings (e.g. local SMS gateway) — hooks are in
   `/api/bookings`.
7. **URGENT (existing site):** `https://sphmmc.edu.et/` currently 301-redirects
   to `http://197.156.83.12/` (an unrelated app). The ICT Directorate should
   fix the web-server/DNS config before this redesign is deployed.
