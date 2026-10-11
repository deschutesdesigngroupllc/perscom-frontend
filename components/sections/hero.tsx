import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon, PlayCircleIcon } from '@heroicons/react/24/solid'
import { Container } from '../ui/container'
import { Button } from '../ui/button'
import { AbstractBackdrop } from '../motion/abstract-backdrop'
import { links } from '@/lib/links'

export function Hero() {
  return (
    <section
      id="hero"
      className="bg-ink-900 relative isolate overflow-hidden pt-32 pb-24 text-white sm:pt-40 sm:pb-32"
    >
      <AbstractBackdrop />

      <Container className="relative">
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          <Link
            href="/#ai"
            className="group mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-md transition hover:border-white/20 hover:bg-white/10"
          >
            <span className="relative flex h-2 w-2">
              <span className="bg-brand-400 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
              <span className="bg-brand-400 relative inline-flex h-2 w-2 rounded-full" />
            </span>
            <span className="text-white/80">
              New: connect Claude &amp; Cursor to your roster with MCP
            </span>
            <ArrowRightIcon className="h-3.5 w-3.5 text-white/60 transition group-hover:translate-x-0.5" />
          </Link>

          <h1 className="font-display text-4xl leading-[1.05] font-semibold tracking-tight text-balance text-white sm:text-5xl md:text-6xl lg:text-7xl">
            The AI-powered personnel platform
            <span className="block text-white/55">for high-performing organizations.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-balance text-white/65 sm:text-xl">
            PERSCOM builds your organization in minutes, answers questions about your people right
            inside Claude and Cursor, and runs readiness and promotions on autopilot — built for
            military, police, fire, EMS, and public safety teams.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <Button href={links.register} size="lg">
              Get 1 week free
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
            <Button href={links.demo} size="lg" variant="secondary">
              <PlayCircleIcon className="h-5 w-5" />
              Try the live demo
            </Button>
          </div>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Image
                  key={i}
                  src={`/avatars/avatar-${i}.png`}
                  alt=""
                  width={32}
                  height={32}
                  className="ring-ink-950 h-8 w-8 rounded-full ring-2"
                />
              ))}
            </div>
            <p className="text-sm text-white/60">
              <span className="font-semibold text-white">Hundreds of agencies</span> already run on
              PERSCOM
            </p>
          </div>
        </div>

        {/* Hero screenshot card */}
        <div className="relative mx-auto mt-20 max-w-7xl">
          <div
            aria-hidden
            className="from-brand-600/20 via-brand-400/10 to-brand-700/20 absolute -inset-x-12 -top-8 -bottom-8 -z-10 rounded-[3rem] bg-gradient-to-br blur-2xl"
          />
          <div className="bg-ink-900/60 relative rounded-2xl border border-white/10 p-2 shadow-[var(--shadow-ring)] backdrop-blur-md">
            <div className="flex items-center gap-2 px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
              <span className="ml-3 text-xs text-white/40">app.perscom.io/dashboard</span>
            </div>
            <div className="overflow-hidden rounded-xl border border-white/10">
              <Image
                src="/screenshots/dashboard-v2.png"
                alt="PERSCOM dashboard"
                width={2400}
                height={1500}
                priority
                className="w-full"
              />
            </div>
          </div>

          {/* Floating activity tags */}
          <FloatingTag
            className="top-[14%] -left-8"
            icon="✓"
            tone="emerald"
            label="Promotion approved"
            value="SGT → SSG"
          />
          <FloatingTag
            className="top-[10%] -right-6"
            icon="🎖"
            tone="amber"
            label="Award granted"
            value="Bronze Star"
          />
          <FloatingTag
            className="top-[44%] -left-10"
            icon="✦"
            tone="brand"
            label="Copilot proposal"
            value="3 promotions ready"
          />
          <FloatingTag
            className="top-[40%] -right-10"
            icon="◉"
            tone="brand"
            label="MCP"
            value="Claude connected"
            mono
          />
          <FloatingTag
            className="top-[72%] -left-6"
            icon="📡"
            tone="indigo"
            label="Discord embed"
            value="#ops-announcements"
          />
          <FloatingTag
            className="top-[68%] -right-8"
            icon="📅"
            tone="brand"
            label="RSVP confirmed"
            value="Drill · Sat 19:00"
          />
          <FloatingTag
            className="-bottom-6 left-[12%]"
            icon="⏱"
            tone="amber"
            label="Qualification expiring"
            value="CLS · 12 days"
          />
          <FloatingTag
            className="right-[14%] -bottom-7"
            icon="📈"
            tone="brand"
            label="Unit readiness"
            value="Alpha Co · 94%"
          />
        </div>
      </Container>
    </section>
  )
}

const toneClasses: Record<string, string> = {
  brand: 'bg-brand-500/15 text-brand-200 ring-brand-400/30',
  emerald: 'bg-emerald-500/15 text-emerald-300 ring-emerald-400/30',
  amber: 'bg-amber-500/15 text-amber-200 ring-amber-400/30',
  rose: 'bg-rose-500/15 text-rose-200 ring-rose-400/30',
  indigo: 'bg-indigo-500/15 text-indigo-200 ring-indigo-400/30',
}

function FloatingTag({
  className,
  icon,
  tone,
  label,
  value,
  mono = false,
}: {
  className?: string
  icon: string
  tone: keyof typeof toneClasses
  label: string
  value: string
  mono?: boolean
}) {
  return (
    <div
      className={`bg-ink-900/85 pointer-events-none absolute z-10 hidden items-center gap-3 rounded-2xl border border-white/10 p-3 pr-4 shadow-2xl ring-1 ring-black/40 backdrop-blur-md md:flex ${className ?? ''}`}
    >
      <div
        className={`grid h-9 w-9 place-items-center rounded-lg text-base ring-1 ${toneClasses[tone]}`}
      >
        <span aria-hidden>{icon}</span>
      </div>
      <div className="text-left">
        <p className="text-[11px] tracking-wide text-white/45 uppercase">{label}</p>
        <p className={`text-sm font-medium text-white ${mono ? 'font-mono text-[12px]' : ''}`}>
          {value}
        </p>
      </div>
    </div>
  )
}
