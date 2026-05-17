'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  UsersIcon,
  IdentificationIcon,
  Squares2X2Icon,
  BoltIcon,
  ChatBubbleLeftRightIcon,
  CodeBracketSquareIcon,
  ShieldCheckIcon,
  ServerStackIcon,
  CloudIcon,
  BookOpenIcon,
  QuestionMarkCircleIcon,
  PlayCircleIcon,
} from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { Container } from '../ui/container'
import { Logo } from '../ui/logo'
import { Button } from '../ui/button'
import { links } from '@/lib/links'

type NavLeaf = {
  name: string
  description?: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
  external?: boolean
}

type NavGroup = {
  name: string
  items: NavLeaf[]
  footer?: { name: string; href: string; external?: boolean }
}

type NavItem = NavLeaf | { name: string; menu: NavGroup[] }

const productMenu: NavGroup[] = [
  {
    name: 'Personnel',
    items: [
      {
        name: 'Roster & ranks',
        description: 'Org hierarchy, paygrades, and progression rules.',
        href: '/#features',
        icon: UsersIcon,
      },
      {
        name: 'Personnel record',
        description: 'Seven record types with MTD / QTD / YTD analytics.',
        href: '/#personnel',
        icon: IdentificationIcon,
      },
      {
        name: 'Forms & workflows',
        description: 'Submissions, approvals, and routing.',
        href: '/#showcase',
        icon: Squares2X2Icon,
      },
    ],
  },
  {
    name: 'Operations',
    items: [
      {
        name: 'Automations',
        description: 'Event-driven actions across the platform.',
        href: '/#automations',
        icon: BoltIcon,
      },
      {
        name: 'Discord integration',
        description: 'Lives where your unit already talks.',
        href: '/#discord',
        icon: ChatBubbleLeftRightIcon,
      },
      {
        name: 'API & integrations',
        description: 'Full REST API and PHP SDK.',
        href: '/#integrations',
        icon: CodeBracketSquareIcon,
      },
      {
        name: 'Security',
        description: 'Hardened by default, audited continuously.',
        href: '/#security',
        icon: ShieldCheckIcon,
      },
    ],
  },
]

const hostingMenu: NavGroup[] = [
  {
    name: 'Hosting',
    items: [
      {
        name: 'PERSCOM Cloud',
        description: 'Fully managed, hosted by us. Free trial included.',
        href: '/#cloud',
        icon: CloudIcon,
      },
      {
        name: 'Self-host on Railway',
        description: 'One-click deploy to your own infrastructure.',
        href: '/#hosting',
        icon: ServerStackIcon,
      },
    ],
    footer: { name: 'See pricing →', href: '/#pricing' },
  },
]

const resourcesMenu: NavGroup[] = [
  {
    name: 'Resources',
    items: [
      {
        name: 'Documentation',
        description: 'Guides, references, and onboarding.',
        href: links.docs,
        icon: BookOpenIcon,
        external: true,
      },
      {
        name: 'API reference',
        description: 'Endpoints, schemas, and examples.',
        href: links.apiDocs,
        icon: CodeBracketSquareIcon,
        external: true,
      },
      {
        name: 'Live demo',
        description: 'Poke around a real instance.',
        href: links.demo,
        icon: PlayCircleIcon,
        external: true,
      },
      {
        name: 'FAQ',
        description: 'Answers to the most common questions.',
        href: '/#faq',
        icon: QuestionMarkCircleIcon,
      },
    ],
  },
]

const nav: NavItem[] = [
  { name: 'Product', menu: productMenu },
  { name: 'Hosting', menu: hostingMenu },
  { name: 'Pricing', href: '/#pricing' },
  { name: 'Resources', menu: resourcesMenu },
]

function isMenu(item: NavItem): item is { name: string; menu: NavGroup[] } {
  return 'menu' in item
}

function HoverMenu({ name, groups }: { name: string; groups: NavGroup[] }) {
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const wide = groups.length > 1

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }
  const scheduleClose = () => {
    cancelClose()
    closeTimer.current = setTimeout(() => setOpen(false), 120)
  }
  const openNow = () => {
    cancelClose()
    setOpen(true)
  }

  useEffect(() => {
    if (!open) return
    const onDocClick = (e: MouseEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  useEffect(() => () => cancelClose(), [])

  return (
    <div ref={wrapperRef} className="relative" onMouseEnter={openNow} onMouseLeave={scheduleClose}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((v) => !v)}
        onFocus={openNow}
        className={clsx(
          'inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-sm font-medium transition outline-none',
          open ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/10 hover:text-white',
        )}
      >
        {name}
        <ChevronDownIcon
          className={clsx('h-3.5 w-3.5 transition', open ? 'rotate-180' : 'rotate-0')}
        />
      </button>

      <Transition
        show={open}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 -translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-1"
      >
        <div
          role="menu"
          className={clsx(
            'absolute top-full left-1/2 z-50 -translate-x-1/2 pt-3',
            wide ? 'w-[640px]' : 'w-80',
          )}
        >
          <div className="bg-ink-900/95 rounded-2xl border border-white/10 p-2 shadow-2xl shadow-black/50 backdrop-blur-xl">
            <div className={clsx('grid gap-1', wide && 'grid-cols-2')}>
              {groups.map((group) => (
                <div key={group.name} className="p-2">
                  <p className="text-brand-300/80 px-3 pt-1 pb-2 text-[11px] font-semibold tracking-wider uppercase">
                    {group.name}
                  </p>
                  <ul className="flex flex-col">
                    {group.items.map((item) => {
                      const Icon = item.icon
                      const content = (
                        <>
                          {Icon ? (
                            <span className="bg-brand-500/10 text-brand-300 ring-brand-500/20 mt-0.5 grid h-9 w-9 flex-none place-items-center rounded-lg ring-1 ring-inset">
                              <Icon className="h-5 w-5" />
                            </span>
                          ) : null}
                          <span className="flex-1">
                            <span className="block text-sm font-medium text-white">
                              {item.name}
                            </span>
                            {item.description ? (
                              <span className="mt-0.5 block text-xs leading-relaxed text-white/55">
                                {item.description}
                              </span>
                            ) : null}
                          </span>
                        </>
                      )
                      const className =
                        'flex items-start gap-3 rounded-xl p-3 transition hover:bg-white/5'
                      return (
                        <li key={item.name}>
                          {item.external ? (
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noreferrer"
                              className={className}
                              onClick={() => setOpen(false)}
                            >
                              {content}
                            </a>
                          ) : (
                            <Link
                              href={item.href}
                              className={className}
                              onClick={() => setOpen(false)}
                            >
                              {content}
                            </Link>
                          )}
                        </li>
                      )
                    })}
                  </ul>
                  {group.footer ? (
                    <div className="mt-2 border-t border-white/5 px-3 pt-3">
                      <Link
                        href={group.footer.href}
                        onClick={() => setOpen(false)}
                        className="text-brand-300 hover:text-brand-200 text-xs font-medium"
                      >
                        {group.footer.name}
                      </Link>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Transition>
    </div>
  )
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpenMenu, setMobileOpenMenu] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'bg-ink-900/80 border-b border-white/5 py-3 backdrop-blur-xl' : 'py-5',
      )}
    >
      <Container>
        <nav className="flex items-center justify-between gap-6 lg:grid lg:grid-cols-[1fr_auto_1fr]">
          <Link href="/" className="flex items-center justify-self-start">
            <Logo />
          </Link>

          <ul className="bg-ink-900/60 hidden items-center gap-1 justify-self-center rounded-full border border-white/10 px-2 py-1.5 shadow-sm backdrop-blur-md lg:flex">
            {nav.map((item) => (
              <li key={item.name}>
                {isMenu(item) ? (
                  <HoverMenu name={item.name} groups={item.menu} />
                ) : (
                  <Link
                    href={item.href}
                    className="rounded-full px-3.5 py-1.5 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 justify-self-end lg:flex">
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="View PERSCOM on GitHub"
              title="View on GitHub"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 .5C5.73.5.67 5.59.67 11.86c0 5.02 3.24 9.27 7.74 10.77.57.11.78-.25.78-.55 0-.27-.01-1.16-.02-2.1-3.15.69-3.82-1.34-3.82-1.34-.51-1.31-1.26-1.66-1.26-1.66-1.03-.71.08-.69.08-.69 1.14.08 1.74 1.18 1.74 1.18 1.01 1.74 2.66 1.24 3.31.95.1-.74.4-1.24.72-1.53-2.51-.29-5.16-1.27-5.16-5.65 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 2.87-.39c.97 0 1.95.13 2.87.39 2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.75.11 3.04.73.8 1.18 1.82 1.18 3.07 0 4.39-2.66 5.36-5.19 5.64.41.36.78 1.07.78 2.16 0 1.56-.01 2.81-.01 3.19 0 .31.2.67.79.55 4.49-1.5 7.73-5.75 7.73-10.77C23.33 5.59 18.27.5 12 .5Z"
                />
              </svg>
            </a>
            <a
              href={links.railway}
              target="_blank"
              rel="noreferrer"
              aria-label="Deploy your own instance on Railway"
              title="Self-host on Railway"
              className="inline-flex h-9 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 text-sm font-medium whitespace-nowrap text-white/80 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
            >
              <span className="grid h-5 w-5 flex-none place-items-center rounded-full bg-white">
                <Image src="/railway-logo.svg" alt="" width={12} height={12} className="h-3 w-3" />
              </span>
              Deploy
            </a>
            <Button href={links.register} size="sm">
              Start free trial
            </Button>
          </div>

          <Popover className="lg:hidden">
            <PopoverButton className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur">
              {({ open }) =>
                open ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />
              }
            </PopoverButton>
            <Transition
              enter="duration-200 ease-out"
              enterFrom="opacity-0 translate-y-2"
              enterTo="opacity-100 translate-y-0"
              leave="duration-150 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <PopoverPanel
                anchor="bottom end"
                className="bg-ink-900 z-50 mt-3 max-h-[80vh] w-80 overflow-y-auto rounded-2xl border border-white/10 p-3 shadow-2xl shadow-black/40"
              >
                <ul className="flex flex-col">
                  {nav.map((item) => {
                    if (!isMenu(item)) {
                      return (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="block rounded-xl px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/5"
                          >
                            {item.name}
                          </a>
                        </li>
                      )
                    }
                    const open = mobileOpenMenu === item.name
                    return (
                      <li key={item.name}>
                        <button
                          type="button"
                          onClick={() => setMobileOpenMenu(open ? null : item.name)}
                          className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium text-white/80 hover:bg-white/5"
                        >
                          {item.name}
                          <ChevronDownIcon
                            className={clsx(
                              'h-4 w-4 text-white/50 transition',
                              open ? 'rotate-180' : 'rotate-0',
                            )}
                          />
                        </button>
                        {open ? (
                          <div className="mt-1 mb-2 ml-2 border-l border-white/10 pl-3">
                            {item.menu.map((group) => (
                              <div key={group.name} className="py-1">
                                <p className="text-brand-300/80 px-2 pt-2 pb-1 text-[10px] font-semibold tracking-wider uppercase">
                                  {group.name}
                                </p>
                                {group.items.map((leaf) => (
                                  <a
                                    key={leaf.name}
                                    href={leaf.href}
                                    target={leaf.external ? '_blank' : undefined}
                                    rel={leaf.external ? 'noreferrer' : undefined}
                                    className="block rounded-lg px-2 py-2 text-sm text-white/75 hover:bg-white/5 hover:text-white"
                                  >
                                    {leaf.name}
                                  </a>
                                ))}
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </li>
                    )
                  })}
                </ul>
                <div className="mt-2 flex items-center gap-2 border-t border-white/10 pt-3">
                  <Button href={links.register} className="flex-1">
                    Start free trial
                  </Button>
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="View PERSCOM on GitHub"
                    className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 .5C5.73.5.67 5.59.67 11.86c0 5.02 3.24 9.27 7.74 10.77.57.11.78-.25.78-.55 0-.27-.01-1.16-.02-2.1-3.15.69-3.82-1.34-3.82-1.34-.51-1.31-1.26-1.66-1.26-1.66-1.03-.71.08-.69.08-.69 1.14.08 1.74 1.18 1.74 1.18 1.01 1.74 2.66 1.24 3.31.95.1-.74.4-1.24.72-1.53-2.51-.29-5.16-1.27-5.16-5.65 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 2.87-.39c.97 0 1.95.13 2.87.39 2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.75.11 3.04.73.8 1.18 1.82 1.18 3.07 0 4.39-2.66 5.36-5.19 5.64.41.36.78 1.07.78 2.16 0 1.56-.01 2.81-.01 3.19 0 .31.2.67.79.55 4.49-1.5 7.73-5.75 7.73-10.77C23.33 5.59 18.27.5 12 .5Z"
                      />
                    </svg>
                  </a>
                </div>
              </PopoverPanel>
            </Transition>
          </Popover>
        </nav>
      </Container>
    </header>
  )
}
