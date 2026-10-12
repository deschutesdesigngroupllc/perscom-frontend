import Image from 'next/image'
import { UsersIcon, AdjustmentsHorizontalIcon, CircleStackIcon } from '@heroicons/react/24/outline'
import { Container } from '../ui/container'
import { Reveal } from '../motion/reveal'

const features = [
  {
    title: 'Roster you can run an op from',
    description:
      'Nested unit hierarchy from battalion → company → platoon. Online status, duty status, and readiness badges on every member — searchable, filterable, and printable as an org chart.',
    image: '/screenshots/roster.png',
    icon: UsersIcon,
    accent: 'from-brand-500 to-brand-400',
    span: 'lg:col-span-4 lg:row-span-2',
  },
  {
    title: 'Rank & paygrade engine',
    description:
      'Full E-1 through O-10 (or build your own) with insignia, abbreviations, paygrades, and per-rank promotion requirements.',
    image: '/screenshots/ranks.png',
    icon: AdjustmentsHorizontalIcon,
    accent: 'from-brand-700 to-brand-500',
    span: 'lg:col-span-2',
  },
  {
    title: 'Records with depth',
    description:
      'Seven record types per member — Assignment, Award, Combat, Qualification, Rank, Service, Training — with MTD / QTD / YTD analytics built in.',
    image: '/screenshots/training-records.png',
    icon: CircleStackIcon,
    accent: 'from-brand-400 to-brand-500',
    span: 'lg:col-span-2',
  },
]

export function PrimaryFeatures() {
  return (
    <section id="features" className="bg-surface relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="bg-grid mask-radial pointer-events-none absolute inset-0 opacity-40"
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-brand-400 text-sm font-semibold tracking-wider uppercase">
            The platform
          </p>
          <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl md:text-6xl">
            Everything you need to{' '}
            <span className="from-brand-400 to-brand-600 bg-gradient-to-r bg-clip-text text-transparent">
              run your roster
            </span>
            .
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/60">
            Packed with the features your operations team has been asking for — and backed by years
            of running real units in production.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-5 lg:auto-rows-[18rem] lg:grid-cols-6">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 0.08}
              className={`group bg-ink-800/60 relative flex flex-col overflow-hidden rounded-3xl border border-white/10 p-8 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)] backdrop-blur transition-shadow hover:shadow-[0_40px_80px_-30px_rgba(37,99,235,0.45)] ${f.span ?? ''}`}
            >
              <div
                aria-hidden
                className={`absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br ${f.accent} opacity-10 blur-3xl transition group-hover:opacity-20`}
              />
              <div className="relative flex items-start gap-4">
                <div
                  className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${f.accent} text-white shadow-lg`}
                >
                  <f.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{f.description}</p>
                </div>
              </div>
              <div className="relative mt-auto pt-6">
                <div className="relative overflow-hidden rounded-xl border border-white/10 shadow-inner">
                  <Image
                    src={f.image}
                    alt=""
                    width={3024}
                    height={1600}
                    className="w-full transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
