'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CloseButton, Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react'
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

function MenuPanel({ groups }: { groups: NavGroup[] }) {
  const wide = groups.length > 1
  return (
    <PopoverPanel
      anchor={{ to: 'bottom', gap: 12 }}
      transition
      className={clsx(
        'bg-ink-900/95 z-50 rounded-2xl border border-white/10 p-2 shadow-2xl shadow-black/50 backdrop-blur-xl',
        'data-closed:translate-y-1 data-closed:opacity-0',
        'transition duration-150 ease-out data-closed:duration-100',
        wide ? 'w-[640px]' : 'w-80',
      )}
    >
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
                      <span className="block text-sm font-medium text-white">{item.name}</span>
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
                      <CloseButton
                        as="a"
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className={className}
                      >
                        {content}
                      </CloseButton>
                    ) : (
                      <CloseButton as={Link} href={item.href} className={className}>
                        {content}
                      </CloseButton>
                    )}
                  </li>
                )
              })}
            </ul>
            {group.footer ? (
              <div className="mt-2 border-t border-white/5 px-3 pt-3">
                <CloseButton
                  as={Link}
                  href={group.footer.href}
                  className="text-brand-300 hover:text-brand-200 text-xs font-medium"
                >
                  {group.footer.name}
                </CloseButton>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </PopoverPanel>
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
                  <Popover>
                    {({ open }) => (
                      <>
                        <PopoverButton
                          className={clsx(
                            'inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-sm font-medium transition outline-none',
                            open
                              ? 'bg-white/10 text-white'
                              : 'text-white/70 hover:bg-white/10 hover:text-white',
                          )}
                        >
                          {item.name}
                          <ChevronDownIcon
                            className={clsx(
                              'h-3.5 w-3.5 transition',
                              open ? 'rotate-180' : 'rotate-0',
                            )}
                          />
                        </PopoverButton>
                        <MenuPanel groups={item.menu} />
                      </>
                    )}
                  </Popover>
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
              href={links.railway}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-sm font-medium text-white/80 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
              title="Deploy your own instance on Railway"
            >
              <Image src="/railway-logo.svg" alt="" width={16} height={16} className="h-4 w-4" />
              Self-host
              <span className="hidden text-white/40 group-hover:text-white/60 xl:inline">
                on Railway
              </span>
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
                <div className="mt-2 border-t border-white/10 pt-3">
                  <Button href={links.register} className="w-full">
                    Start free trial
                  </Button>
                </div>
              </PopoverPanel>
            </Transition>
          </Popover>
        </nav>
      </Container>
    </header>
  )
}
