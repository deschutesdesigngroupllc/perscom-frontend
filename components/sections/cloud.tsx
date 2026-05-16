import {
  CloudIcon,
  BoltIcon,
  ArrowPathIcon,
  LifebuoyIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ArrowRightIcon,
  PlayCircleIcon,
  CheckIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Container } from '../ui/container'
import { Reveal } from '../motion/reveal'
import { Button } from '../ui/button'
import { links } from '@/lib/links'

const perks = [
  {
    icon: BoltIcon,
    title: 'Up and running in 60 seconds',
    detail: 'Sign up, pick a subdomain, invite your unit. No servers, no env vars, no DevOps.',
  },
  {
    icon: ArrowPathIcon,
    title: 'Always on the latest release',
    detail: 'Updates, patches, and new features ship continuously — you never have to deploy.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Hardened by default',
    detail:
      'Encrypted at rest and in transit, automated daily backups, role-based access — all dialed in.',
  },
  {
    icon: LifebuoyIcon,
    title: 'Human support',
    detail: 'Real people who run units themselves. Discord, email, and onboarding sessions.',
  },
]

const included = [
  'Unlimited members on every plan',
  'Daily encrypted backups',
  '99.9% uptime SLA',
  'Free SSL on a perscom.io subdomain',
  'Custom domain support',
  'All integrations & API access',
]

export function Cloud() {
  return (
    <section id="cloud" className="bg-surface relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="bg-grid mask-radial pointer-events-none absolute inset-0 -z-10 opacity-40"
      />
      <div
        aria-hidden
        className="bg-brand-600/20 pointer-events-none absolute -top-32 left-1/4 -z-10 h-[32rem] w-[32rem] rounded-full blur-3xl"
      />
      <div
        aria-hidden
        className="bg-brand-400/10 pointer-events-none absolute right-1/4 -bottom-32 -z-10 h-[28rem] w-[28rem] rounded-full blur-3xl"
      />

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-brand-400 inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase">
            <SparklesIcon className="h-4 w-4" />
            PERSCOM Cloud
          </p>
          <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl md:text-6xl">
            The fully managed{' '}
            <span className="from-brand-400 to-brand-600 bg-gradient-to-r bg-clip-text text-transparent">
              PERSCOM experience
            </span>
            .
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/60">
            Don&apos;t want to think about servers, deploys, or backups? We&apos;ll run PERSCOM for
            you on hardened infrastructure — so your command staff can focus on the unit, not the
            stack.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={links.register} size="lg">
              Start free trial
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
            <a
              href={links.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white/80 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
            >
              <PlayCircleIcon className="h-4 w-4" />
              Try the live demo
            </a>
          </div>
          <p className="mt-4 text-xs text-white/40">
            No credit card required · Cancel anytime · Migrate to self-host whenever you want
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {perks.map((p, i) => (
                <Reveal
                  key={p.title}
                  delay={i * 0.05}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20 hover:bg-white/[0.05]"
                >
                  <div
                    aria-hidden
                    className="bg-brand-500/15 absolute -top-16 -right-16 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
                  />
                  <div className="relative">
                    <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04]">
                      <p.icon className="text-brand-300 h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-medium text-white">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{p.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              <div
                aria-hidden
                className="bg-brand-600/20 absolute -top-24 -right-24 h-56 w-56 rounded-full blur-3xl"
              />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/70">
                  <CloudIcon className="text-brand-300 h-3.5 w-3.5" />
                  Hosted at app.perscom.io
                </div>
                <h3 className="mt-5 text-xl font-medium text-white">Everything included</h3>
                <p className="mt-2 text-sm text-white/55">
                  Every plan ships with the full platform — pricing scales with usage, not features.
                </p>
                <ul className="mt-6 space-y-3">
                  {included.map((line) => (
                    <li key={line} className="flex items-start gap-3 text-sm text-white/75">
                      <span className="bg-brand-500/15 text-brand-300 ring-brand-500/30 mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full ring-1 ring-inset">
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>
                      {line}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#pricing"
                  className="text-brand-300 hover:text-brand-200 mt-7 inline-flex items-center gap-1.5 text-sm font-medium"
                >
                  See pricing
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
