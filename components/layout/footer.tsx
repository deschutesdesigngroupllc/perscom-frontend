import Image from 'next/image'
import Link from 'next/link'
import { Container } from '../ui/container'
import { Logo } from '../ui/logo'
import { Button } from '../ui/button'
import { links } from '@/lib/links'

const sections = [
  {
    title: 'Product',
    items: [
      { name: 'Roster & Ranks', href: '/#features' },
      { name: 'Personnel Record', href: '/#personnel' },
      { name: 'Forms & Workflows', href: '/#showcase' },
      { name: 'Automations', href: '/#automations' },
      { name: 'Discord & Slack', href: '/#discord' },
      { name: 'API & Integrations', href: '/#integrations' },
      { name: 'Security', href: '/#security' },
    ],
  },
  {
    title: 'Hosting',
    items: [
      { name: 'PERSCOM Cloud', href: '/#cloud' },
      { name: 'Deploy on Railway', href: '/#hosting' },
      { name: 'Pricing', href: '/#pricing' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { name: 'Documentation', href: links.docs, external: true },
      { name: 'API Reference', href: links.apiDocs, external: true },
      { name: 'Live Demo', href: links.demo, external: true },
      { name: 'FAQ', href: '/#faq' },
      { name: 'Slack Community', href: links.slack },
    ],
  },
  {
    title: 'Legal',
    items: [
      { name: 'Acceptable Use', href: '/legal/acceptable-use' },
      { name: 'Cookie Policy', href: '/legal/cookies' },
      { name: 'Privacy Policy', href: '/legal/privacy' },
      { name: 'Terms of Service', href: '/legal/terms' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-ink-950 relative overflow-hidden text-white/70">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,_var(--color-brand-600)_0%,_transparent_70%)] opacity-20"
      />
      <Container className="relative pt-20 pb-20">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-6">
          <div className="col-span-2">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              The personnel command system for police, fire, EMS, military, and public safety
              organizations.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button href={links.register} size="sm">
                Start Free Trial
              </Button>
              <Button href={links.railway} variant="secondary" size="sm">
                <span className="grid h-4 w-4 flex-none place-items-center rounded-full bg-white">
                  <Image
                    src="/railway-logo.svg"
                    alt=""
                    width={10}
                    height={10}
                    className="h-2.5 w-2.5"
                  />
                </span>
                Deploy
              </Button>
            </div>
          </div>
          {sections.map((s) => (
            <div key={s.title}>
              <h3 className="text-sm font-semibold text-white">{s.title}</h3>
              <ul className="mt-4 space-y-3">
                {s.items.map((item) => (
                  <li key={item.name}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-white/60 transition hover:text-white"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-sm text-white/60 transition hover:text-white"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Deschutes Design Group LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <a
              href={links.slack}
              target="_blank"
              rel="noreferrer"
              aria-label="Join the Slack community"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
            >
              <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4" fill="currentColor">
                <path d="M5 15a2 2 0 1 1-2-2h2v2zm1 0a2 2 0 1 1 4 0v5a2 2 0 1 1-4 0v-5zm2-8a2 2 0 1 1 2-2v2H8zm0 1a2 2 0 1 1 0 4H3a2 2 0 1 1 0-4h5zm8 2a2 2 0 1 1 2 2h-2v-2zm-1 0a2 2 0 1 1-4 0V5a2 2 0 1 1 4 0v5zm-2 8a2 2 0 1 1-2 2v-2h2zm0-1a2 2 0 1 1 0-4h5a2 2 0 1 1 0 4h-5z" />
              </svg>
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
            >
              <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4" fill="currentColor">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.485 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.847-2.339 4.695-4.566 4.943.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.481A10.02 10.02 0 0 0 22 12.017C22 6.485 17.522 2 12 2Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </Container>
      <div
        aria-hidden
        className="font-display pointer-events-none relative -mb-[0.15em] w-full text-center text-[7rem] leading-[0.8] font-bold tracking-tighter text-white/[0.03] select-none sm:text-[18rem] lg:text-[24rem]"
      >
        PERSCOM
      </div>
    </footer>
  )
}
