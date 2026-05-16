import Image from "next/image";
import {
  CodeBracketIcon,
  CommandLineIcon,
  CubeTransparentIcon,
  ServerStackIcon,
  ArrowDownTrayIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { Container } from "../ui/container";
import { Reveal } from "../motion/reveal";
import { links } from "@/lib/links";

const reasons = [
  {
    icon: ServerStackIcon,
    title: "Your infrastructure, your rules",
    detail:
      "Run PERSCOM on hardware you control. Pick the region, set the backup policy, define the SLA — it&apos;s your stack.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Sensitive data stays put",
    detail:
      "Members&apos; PII never leaves your tenant. Useful for orgs with data-residency obligations or strict legal review.",
  },
  {
    icon: CodeBracketIcon,
    title: "Fork and extend",
    detail:
      "Open Laravel codebase. Add custom routes, custom models, internal tooling — PERSCOM is yours to bend.",
  },
  {
    icon: CubeTransparentIcon,
    title: "One-click on Railway",
    detail:
      "Click the button, sign in to Railway, set a few env vars. Database, queue, and app all provisioned for you.",
  },
];

const stack = [
  "Laravel 13",
  "PHP 8.4",
  "MySQL",
  "Redis",
  "Horizon",
  "Passport",
  "Filament",
  "Stripe",
];

export function SelfHost() {
  return (
    <section
      id="hosting"
      className="relative overflow-hidden bg-ink-950 py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-40 mask-radial"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-1/3 -z-10 h-[32rem] w-[32rem] rounded-full bg-brand-600/15 blur-3xl"
      />

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wider text-brand-400 uppercase">
            Open & self-hostable
          </p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            Run it on your own hardware.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/60">
            PERSCOM is an open Laravel application. Use the hosted SaaS — or deploy your
            own instance to Railway in a couple of minutes, no DevOps required.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={links.railway}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center transition hover:-translate-y-0.5"
              aria-label="Deploy on Railway"
            >
              <Image
                src="/railway-button.svg"
                alt="Deploy on Railway"
                width={183}
                height={40}
                className="h-10 w-auto"
              />
            </a>
            <a
              href={links.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-white/80 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              View on GitHub
            </a>
          </div>
        </div>

        {/* Reasons grid */}
        <div className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <Reveal
              key={r.title}
              delay={i * 0.05}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div
                aria-hidden
                className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-brand-500/15 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
              />
              <div className="relative">
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04]">
                  <r.icon className="h-5 w-5 text-brand-300" />
                </div>
                <h3 className="mt-5 font-medium text-white">{r.title}</h3>
                <p
                  className="mt-2 text-sm leading-relaxed text-white/60"
                  dangerouslySetInnerHTML={{ __html: r.detail }}
                />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Stack + quick-start terminal */}
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              <p className="text-xs font-semibold tracking-wider text-white/40 uppercase">
                Runs on
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-brand-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-white/55">
                Standard Laravel stack. If your ops team can run a Laravel app, they can
                run PERSCOM. The Railway template provisions MySQL, Redis, Horizon
                workers, and the app container in one go.
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  href={links.railwayDocs}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-300 hover:text-brand-200"
                >
                  <ArrowDownTrayIcon className="h-4 w-4" />
                  Deployment guide
                </a>
                <a
                  href={links.docs}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-white/60 hover:text-white"
                >
                  Full docs
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-900/80 shadow-[var(--shadow-ring)]">
              <div className="flex items-center gap-2 border-b border-white/5 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                <span className="ml-3 inline-flex items-center gap-1.5 font-mono text-xs text-white/40">
                  <CommandLineIcon className="h-3.5 w-3.5" />
                  ~/perscom-app
                </span>
              </div>
              <pre className="overflow-x-auto px-5 py-5 font-mono text-[13px] leading-relaxed text-white/80">
{`# 1. Clone your fork
git clone https://github.com/deschutesdesigngroupllc/perscom-app
cd perscom-app

# 2. Install dependencies
composer install
npm install && npm run build

# 3. Configure environment
cp .env.example .env
php artisan key:generate

# 4. Run the migrations
php artisan migrate --seed

# 5. Boot it
php artisan serve
`}
              </pre>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
