'use client'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { PlusIcon } from '@heroicons/react/24/outline'
import { Container } from '../ui/container'
import { links } from '@/lib/links'

const faqs = [
  {
    q: 'How does PERSCOM use AI?',
    a: 'Three ways. The AI Organization Builder drafts your ranks, units, positions, and awards from a short description. Command Copilot finds members and drafts changes like promotions for you to approve — nothing is changed without your sign-off. And every organization gets an MCP server so you can ask Claude, ChatGPT, Gemini, Grok, or another MCP-compatible tool about your personnel.',
  },
  {
    q: 'Can AI change our records without us knowing?',
    a: 'No. Command Copilot only proposes changes; an administrator reviews and approves them, and every change is checked against that person’s permissions and recorded in the audit log. MCP connections are read-only.',
  },
  {
    q: 'What can a connected AI tool see?',
    a: 'Only what the signed-in member’s PERSCOM account can see. Each person connects with their own account and approves the access when signing in. Queries run against your organization’s isolated tenant.',
  },
  {
    q: 'Are the AI features included in the price?',
    a: 'Yes. Every subscription includes a monthly AI allowance for the Organization Builder and Command Copilot. Asking questions from your own AI tool over MCP uses that tool’s AI, so it doesn’t count against your PERSCOM allowance.',
  },
  {
    q: 'What kind of customer support is available?',
    a: 'Email support, a public Slack community, a comprehensive knowledge base, and full API reference. Our team responds quickly and we treat every report as a priority.',
  },
  {
    q: 'Where does the name PERSCOM come from?',
    a: 'In the military, "PERSCOM" stands for "Personnel Command" — a unit responsible for managing personnel. We borrowed the name; we are not affiliated with any military or government entity.',
  },
  {
    q: 'Can I integrate PERSCOM with the tools I already use?',
    a: 'Yes. We ship a full REST API, a PHP SDK, an MCP server for AI tools, OAuth 2.0 + OIDC, real-time webhooks, and embeddable widgets — so PERSCOM slots into the stack you already run.',
  },
  {
    q: 'Can I choose my own address?',
    a: 'Yes. Every organization picks its own perscom.io subdomain, and you can change it from your settings at any time.',
  },
  {
    q: 'Can I try PERSCOM before I subscribe?',
    a: 'Absolutely. Sign up and you get a 7-day free trial before billing begins. No credit card required to start. You can also explore the live demo without signing up.',
  },
  {
    q: 'What payment methods do you support?',
    a: 'We use Stripe, which supports all major credit/debit cards plus Apple Pay, Google Pay, and many local payment methods.',
  },
  {
    q: 'How secure is our data?',
    a: 'Each organization is its own isolated tenant. We use data encryption in transit and at rest, role-based access control, multi-factor authentication your organization can require, and full audit logging across the platform.',
  },
  {
    q: 'Who is PERSCOM designed for?',
    a: 'Organizations with a chain of command: military units, police, fire, EMS, search and rescue, and other public safety teams — anyone who tracks ranks, assignments, qualifications, and readiness.',
  },
  {
    q: 'Why should I subscribe?',
    a: 'Because managing personnel is complicated, and stitching together a CRM, a spreadsheet, a Discord bot, and a forum to fake it is exhausting. PERSCOM is everything you need in one product.',
  },
]

export function Faqs() {
  return (
    <section id="faq" className="bg-surface relative overflow-hidden py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-brand-400 text-sm font-semibold tracking-wider uppercase">FAQ</p>
            <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Questions, answered.
            </h2>
            <p className="mt-6 text-white/60">
              Still curious? Dig into the{' '}
              <a
                href={links.docs}
                target="_blank"
                rel="noreferrer"
                className="text-brand-400 decoration-brand-400/40 hover:decoration-brand-400 font-medium underline underline-offset-4"
              >
                documentation
              </a>{' '}
              or jump into the{' '}
              <a
                href={links.slack}
                target="_blank"
                rel="noreferrer"
                className="text-brand-400 decoration-brand-400/40 hover:decoration-brand-400 font-medium underline underline-offset-4"
              >
                Slack community
              </a>
              .
            </p>
          </div>
          <div className="lg:col-span-8">
            <ul className="divide-y divide-white/5 border-t border-b border-white/5">
              {faqs.map((f) => (
                <li key={f.q}>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <DisclosureButton className="group flex w-full items-center justify-between gap-6 py-6 text-left">
                          <span className="font-display text-lg font-medium text-white">{f.q}</span>
                          <span
                            className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-white/80 transition ${open ? 'border-brand-500/40 bg-brand-500/10 text-brand-300 rotate-45' : 'group-hover:bg-white/10'}`}
                          >
                            <PlusIcon className="h-4 w-4" />
                          </span>
                        </DisclosureButton>
                        <DisclosurePanel
                          transition
                          className="origin-top transition duration-300 ease-out data-[closed]:-translate-y-2 data-[closed]:opacity-0"
                        >
                          <p className="pr-16 pb-6 leading-relaxed text-white/60">{f.a}</p>
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
