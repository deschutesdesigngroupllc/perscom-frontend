'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChatBubbleLeftRightIcon,
  DocumentDuplicateIcon,
  CalendarDaysIcon,
} from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { Container } from '../ui/container'

const features = [
  {
    name: 'Multi-channel messaging',
    summary: 'One message, every channel, scheduled.',
    description:
      'Compose once, then pick channels — in-app, email, SMS, Discord — set details, and schedule for later. Onboarding sequences, drill reminders, and command announcements run themselves.',
    image: '/screenshots/message-wizard.png',
    width: 3136,
    height: 1561,
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Custom forms & fields',
    summary: 'Build any form your SOP requires.',
    description:
      'Fifteen field types with defaults, validation rules, and conditional visibility. Build DA 4187s, after-action reports, recruitment applications, or anything else your unit submits.',
    image: '/screenshots/form-field-editor.png',
    width: 3136,
    height: 1561,
    icon: DocumentDuplicateIcon,
  },
  {
    name: 'Events & RSVP',
    summary: 'Drills, briefs, exercises — checked in.',
    description:
      'Recurring events, RSVP, and QR code check-in. Attendance writes training records and counts toward promotion requirements automatically.',
    image: '/screenshots/event-view.png',
    width: 3024,
    height: 1600,
    icon: CalendarDaysIcon,
  },
]

export function SecondaryFeatures() {
  const [active, setActive] = useState(0)
  const current = features[active]

  return (
    <section
      id="showcase"
      className="bg-ink-950 relative overflow-hidden py-24 text-white sm:py-32"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-brand-700/20 absolute -top-32 right-1/4 h-[30rem] w-[30rem] rounded-full blur-3xl" />
        <div className="bg-brand-600/30 absolute bottom-0 left-1/4 h-[28rem] w-[28rem] rounded-full blur-3xl" />
      </div>
      <div
        aria-hidden
        className="bg-grid mask-radial pointer-events-none absolute inset-0 -z-10 opacity-40"
      />

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-brand-400 text-sm font-semibold tracking-wider uppercase">
            The everyday wins
          </p>
          <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
            Simplify the work your team{' '}
            <span className="from-brand-400 to-brand-700 bg-gradient-to-r bg-clip-text text-transparent">
              actually does
            </span>
            .
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/60">
            Less admin. Less duct tape. Less &quot;hey, do you have that spreadsheet?&quot;
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          <div className="flex flex-col gap-3 lg:col-span-5">
            {features.map((f, i) => {
              const isActive = i === active
              return (
                <button
                  key={f.name}
                  onClick={() => setActive(i)}
                  className={clsx(
                    'group relative overflow-hidden rounded-2xl border p-6 text-left transition-all',
                    isActive
                      ? 'border-white/15 bg-white/[0.06] shadow-[var(--shadow-ring)]'
                      : 'border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]',
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-bar"
                      className="from-brand-400 to-brand-700 absolute inset-y-0 left-0 w-1 bg-gradient-to-b"
                    />
                  )}
                  <div className="flex items-start gap-4">
                    <div
                      className={clsx(
                        'grid h-10 w-10 place-items-center rounded-xl transition',
                        isActive
                          ? 'from-brand-400 to-brand-500 bg-gradient-to-br text-white'
                          : 'bg-white/5 text-white/60 group-hover:text-white',
                      )}
                    >
                      <f.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-semibold">{f.name}</h3>
                      <p className="mt-1 text-sm text-white/60">{f.summary}</p>
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-3 overflow-hidden text-sm leading-relaxed text-white/70"
                          >
                            {f.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          <div className="relative lg:col-span-7">
            <div
              aria-hidden
              className="from-brand-400/20 to-brand-700/20 absolute -inset-8 -z-10 rounded-[2.5rem] bg-gradient-to-br blur-2xl"
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={current.name}
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="bg-ink-900/60 relative rounded-2xl border border-white/10 p-2 shadow-[var(--shadow-ring)] backdrop-blur-md"
              >
                <div className="overflow-hidden rounded-xl border border-white/10">
                  <Image
                    src={current.image}
                    alt={current.name}
                    width={current.width}
                    height={current.height}
                    className="w-full"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  )
}
