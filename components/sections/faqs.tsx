"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Container } from "../ui/container";
import { links } from "@/lib/links";

const faqs = [
  {
    q: "What kind of customer support is available?",
    a: "Email support, a public Slack community, a comprehensive knowledge base, and full API reference. Our team responds quickly and we treat every report as a priority.",
  },
  {
    q: "Where does the name PERSCOM come from?",
    a: 'In the military, "PERSCOM" stands for "Personnel Command" — a unit responsible for managing personnel. We borrowed the name; we are not affiliated with any military or government entity.',
  },
  {
    q: "Can I integrate PERSCOM with the tools I already use?",
    a: "Yes. We ship a full REST API, CLI, OAuth 2.0 + OIDC providers, real-time webhooks, and embeddable widgets — so PERSCOM slots into the stack you already run.",
  },
  {
    q: "Can I use my own custom domain?",
    a: "Yes. On the Professional plan you can route your account to any subdomain or apex domain you control.",
  },
  {
    q: "Can I try PERSCOM before I subscribe?",
    a: "Absolutely. Sign up and you get a 7-day free trial before billing begins. No credit card required to start.",
  },
  {
    q: "What payment methods do you support?",
    a: "We use Stripe, which supports all major credit/debit cards plus Apple Pay, Google Pay, and many local payment methods.",
  },
  {
    q: "How secure is our data?",
    a: "Each organization is its own isolated tenant. We use data encryption in transit and at rest, role-based access control, optional MFA, and full audit logging across the platform.",
  },
  {
    q: "Who is PERSCOM designed for?",
    a: "Paramilitary and rigid-hierarchy organizations: law enforcement agencies, military units, EMS, fire, search and rescue, and similar public safety teams.",
  },
  {
    q: "Why should I subscribe?",
    a: "Because managing personnel is complicated, and stitching together a CRM, a spreadsheet, a Discord bot, and a forum to fake it is exhausting. PERSCOM is everything you need in one product.",
  },
];

export function Faqs() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-surface py-24 sm:py-32"
    >
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold tracking-wider text-brand-400 uppercase">
              FAQ
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Questions, answered.
            </h2>
            <p className="mt-6 text-white/60">
              Still curious? Dig into the{" "}
              <a
                href={links.docs}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-brand-400 underline decoration-brand-400/40 underline-offset-4 hover:decoration-brand-400"
              >
                documentation
              </a>{" "}
              or jump into the{" "}
              <a
                href={links.slack}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-brand-400 underline decoration-brand-400/40 underline-offset-4 hover:decoration-brand-400"
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
                          <span className="font-display text-lg font-medium text-white">
                            {f.q}
                          </span>
                          <span
                            className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-white/80 transition ${open ? "rotate-45 border-brand-500/40 bg-brand-500/10 text-brand-300" : "group-hover:bg-white/10"}`}
                          >
                            <PlusIcon className="h-4 w-4" />
                          </span>
                        </DisclosureButton>
                        <DisclosurePanel
                          transition
                          className="origin-top transition duration-300 ease-out data-[closed]:-translate-y-2 data-[closed]:opacity-0"
                        >
                          <p className="pb-6 pr-16 text-white/60 leading-relaxed">
                            {f.a}
                          </p>
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
  );
}
