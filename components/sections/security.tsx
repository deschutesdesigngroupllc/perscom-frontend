import {
  LockClosedIcon,
  ShieldCheckIcon,
  ServerStackIcon,
  KeyIcon,
  ClipboardDocumentListIcon,
  CloudArrowUpIcon,
} from "@heroicons/react/24/outline";
import { Container } from "../ui/container";

const pillars = [
  {
    icon: ServerStackIcon,
    title: "Isolated tenants",
    detail:
      "Every organization runs in its own database, isolated by design. No noisy neighbors, no cross-tenant leakage — ever.",
  },
  {
    icon: LockClosedIcon,
    title: "Encrypted in transit & at rest",
    detail:
      "TLS 1.2+ end-to-end. AES-256 at rest. Secrets and tokens stored encrypted with rotation built into the platform.",
  },
  {
    icon: ShieldCheckIcon,
    title: "MFA & SSO",
    detail:
      "TOTP-based multi-factor authentication for every account. SSO via OAuth 2.0 / OIDC for orgs that need centralized identity.",
  },
  {
    icon: KeyIcon,
    title: "Role-based access control",
    detail:
      "Granular permissions per role, per page, per record type. Decide who sees what — down to the field level — and audit it.",
  },
  {
    icon: ClipboardDocumentListIcon,
    title: "Full audit log",
    detail:
      "Every record change, every login, every API call — captured, timestamped, and queryable. Compliance work, done.",
  },
  {
    icon: CloudArrowUpIcon,
    title: "Automated backups",
    detail:
      "Daily encrypted backups with point-in-time recovery. Disaster-readiness baked in, not bolted on.",
  },
];

export function Security() {
  return (
    <section
      id="security"
      className="relative overflow-hidden bg-ink-950 py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-40 mask-radial"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 -z-10 h-[32rem] w-[32rem] rounded-full bg-brand-600/15 blur-3xl"
      />

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wider text-brand-400 uppercase">
            Security & Compliance
          </p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            Built for the data you can&apos;t afford to lose.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/60">
            Personnel records are sensitive. PERSCOM treats them that way — with the
            isolation, encryption, access controls, and audit trail your organization
            (and its members) deserve.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div
                aria-hidden
                className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-brand-500/15 blur-2xl opacity-0 transition-opacity group-hover:opacity-100"
              />
              <div className="relative">
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04]">
                  <p.icon className="h-5 w-5 text-brand-300" />
                </div>
                <h3 className="mt-5 font-medium text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {p.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
