import Image from "next/image";
import {
  IdentificationIcon,
  ClockIcon,
  DocumentTextIcon,
  TrophyIcon,
  AcademicCapIcon,
  FireIcon,
  StarIcon,
  ClipboardDocumentListIcon,
  BriefcaseIcon,
  ChevronDoubleUpIcon,
  CheckBadgeIcon,
  Squares2X2Icon,
  PaperClipIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";
import { Container } from "../ui/container";
import { Reveal } from "../motion/reveal";

const recordTypes = [
  {
    icon: BriefcaseIcon,
    name: "Assignment Records",
    detail:
      "Primary & secondary assignments, position, specialty, unit, status, and the OPORD / SOP attached.",
  },
  {
    icon: TrophyIcon,
    name: "Award Records",
    detail:
      "Decorations from a configurable shadowbox — citation text, award category, effective date, attached orders.",
  },
  {
    icon: FireIcon,
    name: "Combat Records",
    detail:
      "Operations, deployments, engagements. Narrative text plus the briefs and AARs that go with them.",
  },
  {
    icon: StarIcon,
    name: "Qualification Records",
    detail:
      "Schools, badges, and ratings — by category, with completion notes and supporting documents.",
  },
  {
    icon: ChevronDoubleUpIcon,
    name: "Rank Records",
    detail:
      "Promotions, demotions, and lateral moves. Every grade change recorded with type, authority, and order number.",
  },
  {
    icon: ClipboardDocumentListIcon,
    name: "Service Records",
    detail:
      "General service narrative — letters of commendation, counseling, evaluations, and anything else for the file.",
  },
  {
    icon: AcademicCapIcon,
    name: "Training Records",
    detail:
      "Instructor, competencies covered, credentials issued, and the document trail. Rolled up MTD / QTD / YTD.",
  },
];

const profileFacets = [
  {
    icon: IdentificationIcon,
    title: "Identity & contact",
    detail:
      "Name, display name, email, phone, profile photo, cover photo, and a linked Discord / GitHub / Google / Facebook account.",
  },
  {
    icon: AdjustmentsHorizontalIcon,
    title: "Position in the org",
    detail:
      "Rank, paygrade, position, specialty, status, unit, and unit slot — every one a first-class field with its own history.",
  },
  {
    icon: ClockIcon,
    title: "Service timekeeping",
    detail:
      "Time in service, time in grade, time in assignment, last assignment change, last rank change, last seen — all computed live.",
  },
  {
    icon: CheckBadgeIcon,
    title: "Credentials",
    detail:
      "Issued credentials with issuer, validity, and expiration. Tracked separately from qualifications for compliance work.",
  },
  {
    icon: Squares2X2Icon,
    title: "Custom fields",
    detail:
      "Any field your unit needs — text, select, file, date — saved to the personnel file alongside everything else.",
  },
  {
    icon: PaperClipIcon,
    title: "Documents on file",
    detail:
      "Attach OPORDs, SOPs, AARs, scanned forms, and signed orders to any record. Searchable, taggable, audit-logged.",
  },
];

export function PersonnelRecord() {
  return (
    <section
      id="personnel"
      className="relative overflow-hidden bg-surface py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid opacity-30 mask-radial"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/3 -z-10 h-[28rem] w-[28rem] rounded-full bg-brand-600/15 blur-3xl"
      />

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wider text-brand-400 uppercase">
            The personnel file
          </p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            A real record for every member.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/60">
            Not a forum profile. Not a spreadsheet row. A first-class personnel file with
            seven record types, full service timekeeping, attached documents, and a chain
            of custody you can defend in a board.
          </p>
        </div>

        {/* Hero screenshot */}
        <Reveal className="mt-16">
          <div className="relative mx-auto max-w-6xl">
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-600/25 via-brand-500/10 to-brand-700/20 blur-2xl"
            />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-800/60 p-2 shadow-[var(--shadow-ring)] backdrop-blur-md">
              <Image
                src="/screenshots/profile-assignments.png"
                alt="Personnel record with assignment history and record-type sub-tabs"
                width={3600}
                height={1902}
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </Reveal>

        {/* Record types grid */}
        <div className="mt-24">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-balance text-2xl font-semibold text-white sm:text-3xl">
              Seven record types. One personnel file.
            </h3>
            <p className="mt-4 text-white/60">
              Every record links to documents, fires automations, and shows up in the
              member&apos;s timeline. Nothing lives in a spreadsheet.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {recordTypes.map((r, i) => (
              <Reveal
                key={r.name}
                delay={i * 0.05}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20 hover:bg-white/[0.05]"
              >
                <div
                  aria-hidden
                  className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-brand-500/20 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
                />
                <div className="relative">
                  <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04]">
                    <r.icon className="h-5 w-5 text-brand-300" />
                  </div>
                  <h4 className="mt-4 font-medium text-white">{r.name}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                    {r.detail}
                  </p>
                </div>
              </Reveal>
            ))}
            {/* 8th cell — the "and more" summary */}
            <Reveal
              delay={recordTypes.length * 0.05}
              className="relative overflow-hidden rounded-2xl border border-brand-500/30 bg-brand-500/[0.06] p-6"
            >
              <div
                aria-hidden
                className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-brand-500/30 blur-2xl"
              />
              <div className="relative">
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-brand-500/30 bg-brand-500/20">
                  <DocumentTextIcon className="h-5 w-5 text-brand-200" />
                </div>
                <h4 className="mt-4 font-medium text-white">
                  Status & timeline records
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                  Member status changes (Active, Inactive, On Leave) and every newsfeed
                  event are recorded too — full lifecycle, no gaps.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Profile facets */}
        <div className="mt-24">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-balance text-2xl font-semibold text-white sm:text-3xl">
              And everything around them.
            </h3>
            <p className="mt-4 text-white/60">
              The file is more than records. It&apos;s identity, position, time, credentials,
              custom data, and documents — woven together.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {profileFacets.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.05}>
                <div className="flex gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.04]">
                    <f.icon className="h-5 w-5 text-brand-300" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">{f.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-white/55">
                      {f.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
