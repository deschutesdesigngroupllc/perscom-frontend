import Image from "next/image";
import {
  BoltIcon,
  ChatBubbleLeftRightIcon,
  GlobeAltIcon,
  ArrowsRightLeftIcon,
} from "@heroicons/react/24/outline";
import { Container } from "../ui/container";
import { Reveal } from "../motion/reveal";

const actions = [
  {
    icon: GlobeAltIcon,
    name: "Send a webhook",
    detail:
      "Fire a custom HTTPS payload — with a Twig-templated body — to any endpoint. Bots, dashboards, integrations: take your pick.",
  },
  {
    icon: ChatBubbleLeftRightIcon,
    name: "Send a message",
    detail:
      "Compose a message in-app, by email, SMS, or Discord. Resolve recipients dynamically with an expression (rank, unit, role).",
  },
  {
    icon: ArrowsRightLeftIcon,
    name: "Update a record",
    detail:
      "Promote, transfer, change status, or write a custom field — automatically, when the trigger fires.",
  },
];

const triggerExamples = [
  "assignmentrecord.created",
  "awardrecord.updated",
  "rankrecord.created",
  "trainingrecord.created",
  "event.updated",
  "message.created",
  "qualificationrecord.created",
  "calendar.created",
  "servicerecord.created",
  "combatrecord.created",
];

export function Automations() {
  return (
    <section
      id="automations"
      className="relative overflow-hidden bg-ink-950 py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-40 mask-radial"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-1/4 -z-10 h-[28rem] w-[28rem] rounded-full bg-brand-600/20 blur-3xl"
      />

      <Container className="relative">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold tracking-wider text-brand-400 uppercase">
              Automations
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              When this happens,{" "}
              <span className="bg-gradient-to-r from-brand-400 to-brand-300 bg-clip-text text-transparent">
                do that
              </span>{" "}
              — automatically.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/60">
              Trigger an action on any record change, calendar event, or message — with
              conditional logic, priority, and full execution logs. Quick-start templates
              get you running in a click.
            </p>

            <ul className="mt-10 space-y-6">
              {actions.map((a) => (
                <li key={a.name} className="flex gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.04]">
                    <a.icon className="h-5 w-5 text-brand-300" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">{a.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/60">
                      {a.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <p className="text-xs font-semibold tracking-wider text-white/40 uppercase">
                Trigger on
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {triggerExamples.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-brand-200"
                  >
                    {t}
                  </span>
                ))}
                <span className="rounded-md border border-white/5 bg-white/[0.02] px-2.5 py-1 font-mono text-xs text-white/40">
                  + 20 more
                </span>
              </div>
            </div>
          </div>

          <Reveal className="relative lg:col-span-7">
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-600/25 via-brand-500/10 to-brand-700/20 blur-2xl"
            />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-800/60 p-2 shadow-[var(--shadow-ring)] backdrop-blur-md">
              <Image
                src="/screenshots/automations.png"
                alt="PERSCOM Automations dashboard with quick-start templates"
                width={3600}
                height={1902}
                className="w-full rounded-xl"
              />
            </div>

            <div className="pointer-events-none absolute -bottom-5 -left-5 hidden rounded-xl border border-white/10 bg-ink-900/90 px-4 py-3 shadow-2xl backdrop-blur-md md:flex md:items-center md:gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-brand-500/20 text-brand-300">
                <BoltIcon className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="font-mono text-xs text-white/50">trigger</p>
                <p className="font-mono text-sm font-medium text-white">
                  rankrecord.created
                </p>
              </div>
              <span className="text-white/30">→</span>
              <div className="text-left">
                <p className="font-mono text-xs text-white/50">action</p>
                <p className="font-mono text-sm font-medium text-brand-300">
                  send Discord embed
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
