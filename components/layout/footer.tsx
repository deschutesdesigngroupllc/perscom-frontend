import Link from 'next/link'
import { Container } from '../ui/container'
import { Logo } from '../ui/logo'
import { links } from '@/lib/links'

const sections = [
  {
    title: 'Product',
    items: [
      { name: 'Features', href: '/#features' },
      { name: 'Showcase', href: '/#showcase' },
      { name: 'Pricing', href: '/#pricing' },
      { name: 'Live demo', href: links.demo, external: true },
    ],
  },
  {
    title: 'Resources',
    items: [
      { name: 'Documentation', href: links.docs, external: true },
      { name: 'API reference', href: links.apiDocs, external: true },
      { name: 'Slack community', href: links.slack, external: true },
      { name: 'GitHub', href: links.github, external: true },
    ],
  },
  {
    title: 'Get started',
    items: [
      { name: 'Sign up', href: links.register, external: true },
      { name: 'Live demo', href: links.demo, external: true },
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
            <p className="mt-5 max-w-xs text-sm text-white/60">
              Personnel management built for the people running mission-critical operations.
            </p>
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
