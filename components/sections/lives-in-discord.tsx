'use client'

import { useState } from 'react'
import { BoltIcon, ChatBubbleLeftRightIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { Container } from '../ui/container'
import { DiscordMock } from './discord-mock'
import { SlackMock } from './slack-mock'

type Platform = 'discord' | 'slack'

const platforms: Record<Platform, { label: string; accent: string }> = {
  discord: { label: 'Discord', accent: 'text-[#5865f2]' },
  slack: { label: 'Slack · Soon', accent: 'text-[#36c5f0]' },
}

const highlights = [
  {
    icon: BoltIcon,
    title: 'Fires on every event',
    description:
      'Promotions, awards, assignments, RSVPs, form submissions — any record change can hit any channel.',
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Real embeds, not pings',
    description:
      'Rich Discord embeds with the member, rank, award, unit, and a link straight to the record. Your members get the whole story in one message.',
  },
  {
    icon: CodeBracketIcon,
    title: 'Webhooks + a real API',
    description:
      'Discord is one of many. Twilio SMS, email, generic webhooks, and OAuth/OIDC for your own bots — with Slack support on the way.',
  },
]

export function LivesInDiscord() {
  const [platform, setPlatform] = useState<Platform>('discord')
  const active = platforms[platform]

  return (
    <section id="discord" className="bg-surface relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="bg-grid mask-radial pointer-events-none absolute inset-0 -z-10 opacity-30"
      />
      <div
        aria-hidden
        className="bg-brand-600/15 pointer-events-none absolute -top-32 right-1/4 -z-10 h-[28rem] w-[28rem] rounded-full blur-3xl"
      />

      <Container className="relative">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="text-brand-400 text-sm font-semibold tracking-wider uppercase">
              Lives where your team lives
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
              Every promotion, every order — straight into{' '}
              <span className={active.accent}>{active.label}</span>.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/60">
              Your members are already in {active.label}. PERSCOM meets them there — rich,
              auto-generated messages for promotions, awards, assignments, AARs, and event RSVPs. No
              more &quot;@everyone go check the website.&quot;
            </p>

            <ul className="mt-10 space-y-6">
              {highlights.map((h) => (
                <li key={h.title} className="flex gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5">
                    <h.icon className="text-brand-300 h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">{h.title}</h3>
                    <p className="mt-1 text-sm text-white/60">{h.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative lg:col-span-7">
            <div
              aria-hidden
              className="from-brand-600/25 via-brand-500/10 to-brand-700/20 absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br blur-2xl"
            />

            <div
              role="tablist"
              aria-label="Chat platform"
              className="mb-4 inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 backdrop-blur"
            >
              {(Object.keys(platforms) as Platform[]).map((key) => {
                const isActive = platform === key
                return (
                  <button
                    key={key}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setPlatform(key)}
                    className={clsx(
                      'rounded-full px-4 py-1.5 text-sm font-medium transition outline-none',
                      isActive
                        ? 'bg-white/10 text-white shadow-sm'
                        : 'text-white/60 hover:text-white',
                    )}
                  >
                    {platforms[key].label}
                  </button>
                )
              })}
            </div>

            {platform === 'discord' ? <DiscordMock /> : <SlackMock />}
          </div>
        </div>
      </Container>
    </section>
  )
}
