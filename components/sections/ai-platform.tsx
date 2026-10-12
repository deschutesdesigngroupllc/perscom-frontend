import {
  SparklesIcon,
  CommandLineIcon,
  CpuChipIcon,
  CheckIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  EyeIcon,
} from '@heroicons/react/24/outline'
import { Container } from '../ui/container'

const pillars = [
  {
    id: 'ai-builder',
    icon: SparklesIcon,
    eyebrow: 'AI Organization Builder',
    title: 'Describe your unit. PERSCOM builds it.',
    description:
      'Tell PERSCOM who you are in a sentence or two — or start from a Military, Fire Service, or Law Enforcement preset — and it drafts your ranks, units, positions, awards, qualifications, and statuses. Review and edit everything before a single record is created.',
    points: [
      'Ready in minutes, not days',
      'Grow an existing org the same way',
      'Import & export blueprints',
    ],
  },
  {
    id: 'ai-copilot',
    icon: CommandLineIcon,
    eyebrow: 'Command Copilot',
    title: 'Ask for the outcome. Approve the change.',
    description:
      '"Promote everyone in 2nd Platoon who finished BCT and has 30 days in grade." Copilot finds the right members, drafts the records, and waits for you. Nothing changes until you approve — and every change is checked against your permissions.',
    points: [
      'Human-in-the-loop by design',
      'Respects roles & permissions',
      'Fires the same notifications & automations',
    ],
  },
  {
    id: 'ai-mcp',
    icon: CpuChipIcon,
    eyebrow: 'Bring your own AI',
    title: 'Your roster, inside your AI assistant.',
    description:
      'Every organization gets its own MCP server. Connect Claude, ChatGPT, Gemini, Grok, or any MCP-compatible tool with your PERSCOM sign-in and ask questions about your personnel in plain English — no exports, no spreadsheets.',
    points: [
      'Read-only & permission-aware',
      'Signs in with your PERSCOM account',
      'Uses your AI, not your PERSCOM allowance',
    ],
  },
]

const guarantees = [
  { icon: EyeIcon, label: 'Read-only: your AI can look, never change' },
  { icon: ShieldCheckIcon, label: 'Scoped to each member’s permissions' },
  { icon: LockClosedIcon, label: 'Isolated per organization' },
]

export function AiPlatform() {
  return (
    <section id="ai" className="bg-ink-950 relative overflow-hidden py-24 text-white sm:py-32">
      <div
        aria-hidden
        className="bg-grid mask-radial pointer-events-none absolute inset-0 -z-10 opacity-40"
      />
      <div
        aria-hidden
        className="bg-brand-600/25 pointer-events-none absolute -top-40 left-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full blur-3xl"
      />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-brand-400 text-sm font-semibold tracking-wider uppercase">
            AI-powered personnel management
          </p>
          <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
            An AI teammate for{' '}
            <span className="from-brand-400 to-brand-700 bg-gradient-to-r bg-clip-text text-transparent">
              every part of your org
            </span>
            .
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-balance text-white/60">
            PERSCOM puts AI where personnel work actually happens — standing up your structure,
            handling the admin, and answering questions about your people — while you stay in
            command of every decision.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.eyebrow}
              id={pillar.id}
              className="group relative flex scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div
                aria-hidden
                className="bg-brand-500/15 absolute -top-20 -right-20 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
              />
              <div className="relative flex flex-1 flex-col">
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04]">
                  <pillar.icon className="text-brand-300 h-5 w-5" />
                </div>
                <p className="text-brand-300 mt-5 text-xs font-semibold tracking-wider uppercase">
                  {pillar.eyebrow}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-balance text-white">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{pillar.description}</p>
                <ul className="mt-6 space-y-2 border-t border-white/10 pt-5">
                  {pillar.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-white/75">
                      <CheckIcon className="text-brand-400 mt-0.5 h-4 w-4 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="text-brand-400 text-sm font-semibold tracking-wider uppercase">
              PERSCOM MCP server
            </p>
            <h3 className="font-display mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Ask your AI about your personnel.
            </h3>
            <p className="mt-5 text-base leading-relaxed text-white/60">
              Paste your organization&apos;s MCP URL into Claude, ChatGPT, Gemini, Grok, Cursor, or
              VS Code and sign in with PERSCOM. Your AI can search members, records, units, awards,
              events, and more — always read-only, always limited to what your account can see.
            </p>
            <ul className="mt-8 space-y-3">
              {guarantees.map((g) => (
                <li key={g.label} className="flex items-center gap-3 text-sm text-white/80">
                  <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/[0.04]">
                    <g.icon className="text-brand-300 h-4 w-4" />
                  </span>
                  {g.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <McpConversation />
          </div>
        </div>
      </Container>
    </section>
  )
}

function McpConversation() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="from-brand-600/25 via-brand-400/10 to-brand-700/25 absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br blur-2xl"
      />
      <div className="bg-ink-900/80 overflow-hidden rounded-2xl border border-white/10 shadow-[var(--shadow-ring)] backdrop-blur-md">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="ml-3 text-xs text-white/45">Your AI assistant</span>
          </div>
          <span className="border-brand-400/30 bg-brand-500/15 text-brand-200 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[11px]">
            <span className="bg-brand-400 h-1.5 w-1.5 rounded-full" />
            perscom · connected
          </span>
        </div>

        <div className="space-y-5 p-5 text-sm sm:p-6">
          <div className="flex justify-end">
            <p className="bg-brand-600 max-w-[85%] rounded-2xl rounded-br-md px-4 py-2.5 text-white">
              Who in Alpha Company was promoted in the last 90 days, and is anyone&apos;s
              qualification about to lapse?
            </p>
          </div>

          <div className="space-y-2 font-mono text-[11px] text-white/45">
            {[
              'rank-records · Alpha Company · last 90 days',
              'qualification-records · expires_at < 30d',
            ].map((args) => (
              <p key={args} className="flex flex-wrap gap-x-2">
                <span className="text-brand-300 shrink-0">↳ search_resource</span>
                <span>{args}</span>
              </p>
            ))}
          </div>

          <div className="max-w-[92%] space-y-3 rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white/80">
            <p>
              <span className="font-semibold text-white">Three</span> Alpha Company members were
              promoted in the last 90 days:
            </p>
            <ul className="space-y-1.5">
              {[
                ['Gilbert Kilback', 'SGT → SSG'],
                ['Mekhi Gaylord', 'SPC → SGT'],
                ['Katrina Tremblay', 'PFC → SPC'],
              ].map(([name, next]) => (
                <li key={name} className="flex items-center justify-between gap-3">
                  <span className="text-white">{name}</span>
                  <span className="border-brand-400/30 bg-brand-500/15 text-brand-200 rounded-md border px-2 py-0.5 font-mono text-[11px]">
                    {next}
                  </span>
                </li>
              ))}
            </ul>
            <p>
              Heads up: <span className="font-semibold text-white">SSG Felicia Shields</span>&apos;s
              Combat Lifesaver qualification expires in 12 days.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
