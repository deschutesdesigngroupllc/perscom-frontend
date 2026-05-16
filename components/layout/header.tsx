'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { Container } from '../ui/container'
import { Logo } from '../ui/logo'
import { Button } from '../ui/button'
import { links } from '@/lib/links'

const nav = [
  { name: 'Features', href: '/#features' },
  { name: 'Showcase', href: '/#showcase' },
  { name: 'Hosting', href: '/#hosting' },
  { name: 'Pricing', href: '/#pricing' },
  { name: 'Docs', href: links.docs, external: true },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)

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
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full px-3.5 py-1.5 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
                  >
                    {item.name}
                  </a>
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
                className="bg-ink-900 z-50 mt-3 w-72 rounded-2xl border border-white/10 p-3 shadow-2xl shadow-black/40"
              >
                <ul className="flex flex-col">
                  {nav.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noreferrer' : undefined}
                        className="block rounded-xl px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/5"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
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
