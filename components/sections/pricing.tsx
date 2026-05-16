'use client'

import { useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import { Container } from '../ui/container'
import { Button } from '../ui/button'
import { links } from '@/lib/links'

const features = [
  'Unlimited members',
  'Powerful REST API',
  'Real-time webhooks',
  'OAuth 2.0 & OIDC',
  'Single sign-on',
  'Social login support',
  'Custom subdomain',
  'Automated backups',
  'Records management',
  'Embeddable widgets',
  'Discord & SMS notifications',
  'Priority email support',
]

export function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="pricing" className="bg-surface relative overflow-hidden py-24 sm:py-32">
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-brand-400 text-sm font-semibold tracking-wider uppercase">Pricing</p>
          <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl md:text-6xl">
            One plan.{' '}
            <span className="from-brand-600 to-brand-700 bg-gradient-to-r bg-clip-text text-transparent">
              Everything included.
            </span>
          </h2>
          <p className="mt-6 text-lg text-white/60">
            No tiers. No feature gates. No surprises. Switch between monthly and yearly whenever you
            like.
          </p>
        </div>

        <LayoutGroup>
          <div className="mt-12 flex justify-center">
            <div className="bg-ink-800/80 relative inline-flex rounded-full border border-white/10 p-1 shadow-sm">
              {(['monthly', 'yearly'] as const).map((opt) => {
                const isActive = (opt === 'yearly') === yearly
                return (
                  <button
                    key={opt}
                    onClick={() => setYearly(opt === 'yearly')}
                    className={clsx(
                      'relative z-10 rounded-full px-6 py-2 text-sm font-medium transition',
                      isActive ? 'text-white' : 'text-white/60 hover:text-white',
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="pricing-pill"
                        className="from-brand-600 to-brand-500 absolute inset-0 -z-10 rounded-full bg-gradient-to-r shadow-[0_8px_30px_-10px_rgba(37,99,235,0.6)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="capitalize">{opt}</span>
                    {opt === 'yearly' && (
                      <span
                        className={clsx(
                          'ml-2 rounded-full px-1.5 py-0.5 text-[10px] font-semibold transition',
                          isActive ? 'bg-white/20 text-white' : 'bg-brand-500/15 text-brand-300',
                        )}
                      >
                        Save 17%
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </LayoutGroup>

        <div className="relative mx-auto mt-12 max-w-4xl">
          <div
            aria-hidden
            className="from-brand-600/30 via-brand-400/20 to-brand-700/30 absolute -inset-2 -z-10 rounded-[2.5rem] bg-gradient-to-br blur-2xl"
          />
          <div className="bg-ink-900 relative overflow-hidden rounded-3xl border border-white/10 p-10 text-white shadow-[var(--shadow-ring)] sm:p-12">
            <div
              aria-hidden
              className="bg-grid mask-radial pointer-events-none absolute inset-0 opacity-30"
            />
            <div
              aria-hidden
              className="bg-brand-600/40 absolute -top-32 -right-24 h-80 w-80 rounded-full blur-3xl"
            />
            <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="font-display text-2xl font-semibold">Professional</p>
                <p className="mt-2 text-white/60">
                  Complete personnel management. Perfect for organizations of any size.
                </p>
                <div className="mt-8 flex items-baseline gap-2">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={yearly ? 'yearly' : 'monthly'}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="font-display text-6xl font-semibold tracking-tight"
                    >
                      ${yearly ? '200' : '20'}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-white/50">/ {yearly ? 'year' : 'month'}</span>
                </div>
                <Button href={links.register} size="lg" className="mt-8">
                  Start your 7-day free trial
                </Button>
                <p className="mt-3 text-xs text-white/40">No credit card required to start.</p>
              </div>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <span className="from-brand-400 to-brand-500 mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-gradient-to-br">
                      <CheckIcon className="text-ink-950 h-3 w-3" />
                    </span>
                    <span className="text-white/80">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
