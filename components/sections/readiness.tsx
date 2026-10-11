import Image from 'next/image'
import {
  ArrowTrendingUpIcon,
  ClockIcon,
  QrCodeIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline'
import { Container } from '../ui/container'
import { Reveal } from '../motion/reveal'

const capabilities = [
  {
    icon: ArrowTrendingUpIcon,
    title: 'Promotion Board',
    detail:
      'Set requirements per rank — time in grade, time in service, attendance, qualifications, credentials. PERSCOM tracks who qualifies, tells members when they do, and promotes in one click.',
  },
  {
    icon: ClockIcon,
    title: 'Expiring credentials',
    detail:
      'Give credentials and qualifications a validity period. Members are reminded 30, 14, and 1 day out, and automations can act the day something lapses.',
  },
  {
    icon: ChartBarIcon,
    title: 'Unit readiness',
    detail:
      'See every unit’s current-and-qualified percentage, attendance rate, and what expires next — before it becomes a problem.',
  },
  {
    icon: QrCodeIcon,
    title: 'QR check-in & attendance',
    detail:
      'Members check in from a QR code at the event. Attendance feeds promotion rules and can write training records automatically.',
  },
]

export function Readiness() {
  return (
    <section id="readiness" className="bg-surface relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="bg-grid mask-radial pointer-events-none absolute inset-0 opacity-30"
      />
      <div
        aria-hidden
        className="bg-brand-600/15 pointer-events-none absolute -top-32 right-1/3 -z-10 h-[28rem] w-[28rem] rounded-full blur-3xl"
      />

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-brand-400 text-sm font-semibold tracking-wider uppercase">
            Readiness on autopilot
          </p>
          <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl md:text-6xl">
            Always know who&apos;s{' '}
            <span className="from-brand-600 to-brand-700 bg-gradient-to-r bg-clip-text text-transparent">
              ready, current, and next
            </span>
            .
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/60">
            PERSCOM watches the clock for you — time in grade, expiring qualifications, missed
            drills — and turns it into action instead of a spreadsheet someone forgot to update.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {capabilities.map((c) => (
              <div key={c.title} className="flex gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.04]">
                  <c.icon className="text-brand-300 h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-white">{c.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/60">{c.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <Reveal className="lg:col-span-7">
            <div className="relative">
              <div
                aria-hidden
                className="from-brand-600/25 via-brand-500/10 to-brand-700/20 absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br blur-2xl"
              />
              <div className="bg-ink-800/60 relative overflow-hidden rounded-2xl border border-white/10 p-2 shadow-[var(--shadow-ring)] backdrop-blur-md">
                <div className="flex items-center gap-2 px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="ml-3 text-xs text-white/40">app.perscom.io/promotion-board</span>
                </div>
                <div className="overflow-hidden rounded-xl border border-white/10">
                  <Image
                    src="/screenshots/promotion-board.png"
                    alt="PERSCOM Promotion Board listing members eligible for their next rank"
                    width={2400}
                    height={1500}
                    className="w-full"
                  />
                </div>
              </div>
              <div className="bg-ink-800/80 absolute -bottom-12 -left-10 hidden w-[55%] overflow-hidden rounded-xl border border-white/15 p-1.5 shadow-2xl ring-1 ring-black/40 backdrop-blur-md lg:block">
                <Image
                  src="/screenshots/readiness.png"
                  alt="PERSCOM Readiness dashboard showing current, attendance, and expiring metrics per unit"
                  width={2400}
                  height={1500}
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
