import Image from "next/image";
import {
  KeyIcon,
  CodeBracketSquareIcon,
  GlobeAltIcon,
  PuzzlePieceIcon,
  CommandLineIcon,
  ShieldCheckIcon,
  CubeIcon,
  FingerPrintIcon,
} from "@heroicons/react/24/outline";
import { Container } from "../ui/container";
import { Reveal } from "../motion/reveal";

const pillars = [
  {
    icon: CodeBracketSquareIcon,
    name: "REST API",
    detail:
      "A first-class HTTP API covering every resource — users, records, units, awards, forms — with pagination, filtering, and includes.",
    tag: "v1",
  },
  {
    icon: KeyIcon,
    name: "OAuth 2.0",
    detail:
      "All four grants supported: Authorization Code, Implicit, Client Credentials, and Password — managed in-app with scopes.",
    tag: "4 grants",
  },
  {
    icon: FingerPrintIcon,
    name: "OpenID Connect",
    detail:
      "Use PERSCOM as an identity provider. Discovery endpoint, ID tokens, JWKS — log into any compliant client.",
    tag: "OIDC",
  },
  {
    icon: ShieldCheckIcon,
    name: "SSO with signed JWT",
    detail:
      "Drop a tenant-signed JWT into any external app to sign members in seamlessly. Forum, wiki, custom site — pick your battle.",
    tag: "Signed JWT",
  },
  {
    icon: GlobeAltIcon,
    name: "Webhooks",
    detail:
      "Outbound HTTP events on every record change, with secret-based signing and Twig-templated payloads.",
    tag: "Signed",
  },
  {
    icon: PuzzlePieceIcon,
    name: "Embeddable widgets",
    detail:
      "Drop your roster, awards shadowbox, calendar, or recruitment form onto any external website with a single script tag.",
    tag: "<script>",
  },
  {
    icon: CubeIcon,
    name: "Public SDKs",
    detail:
      "Official PHP SDK with first-class types — and an OpenAPI spec to generate clients for any language you need.",
    tag: "PHP",
  },
  {
    icon: CommandLineIcon,
    name: "API keys & scopes",
    detail:
      "Scoped, expirable API keys with live request metrics. Rotate, revoke, and audit usage from inside the app.",
    tag: "Scoped",
  },
];

export function Integrations() {
  return (
    <section
      id="integrations"
      className="relative overflow-hidden bg-surface py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-30 mask-radial"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/4 -z-10 h-[32rem] w-[32rem] rounded-full bg-brand-600/15 blur-3xl"
      />

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wider text-brand-400 uppercase">
            Integrations & APIs
          </p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            A platform, not a silo.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/60">
            PERSCOM is the back end you&apos;d build yourself if you had the time. Connect
            your forum, your wiki, your bot, your single sign-on — and ship the rest of
            your stack on top.
          </p>
        </div>

        {/* Grid of pillars */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 0.04}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div
                aria-hidden
                className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-brand-500/20 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
              />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04]">
                    <p.icon className="h-5 w-5 text-brand-300" />
                  </div>
                  <span className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] tracking-wide text-white/60 uppercase">
                    {p.tag}
                  </span>
                </div>
                <h3 className="mt-4 font-medium text-white">{p.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                  {p.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Spotlight strip — API live metrics + OAuth client config */}
        <div className="mt-20 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900/60 p-2 shadow-[var(--shadow-ring)]">
            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/screenshots/api-keys.png"
                alt="API keys with live request metrics"
                width={3600}
                height={1902}
                className="w-full"
              />
            </div>
            <div className="px-4 py-5">
              <p className="text-sm font-medium text-white">
                Live API request metrics
              </p>
              <p className="mt-1 text-sm text-white/55">
                Watch usage in real time, scope keys per integration, and rotate without
                downtime.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900/60 p-2 shadow-[var(--shadow-ring)]">
            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/screenshots/client-create.png"
                alt="OAuth client creation"
                width={3600}
                height={1902}
                className="w-full"
              />
            </div>
            <div className="px-4 py-5">
              <p className="text-sm font-medium text-white">
                Manage OAuth clients in-app
              </p>
              <p className="mt-1 text-sm text-white/55">
                Auth Code, Implicit, Client Credentials, Password — pick the grant, set
                scopes, ship.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Code-style sample for engineers */}
        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-900/80 shadow-[var(--shadow-ring)]">
            <div className="flex items-center gap-2 border-b border-white/5 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              <span className="ml-3 font-mono text-xs text-white/40">
                composer require perscom/perscom-php
              </span>
            </div>
            <pre className="overflow-x-auto px-5 py-5 font-mono text-[13px] leading-relaxed text-white/80">
{`use Perscom\\PerscomConnection;

$perscom = new PerscomConnection('your-api-key', 'your-perscom-id');

`}<span className="text-white/40">// Promote a member</span>{`
$perscom->users()->update(42, [
    `}<span className="text-brand-300">'rank_id'</span>{` => `}<span className="text-brand-300">7</span>{`,
]);

`}<span className="text-white/40">// Pull this month&apos;s training records</span>{`
$perscom->trainingRecords()->all([
    `}<span className="text-brand-300">'filter'</span>{` => [`}<span className="text-brand-300">'created_at:gte'</span>{` => `}<span className="text-brand-300">'2026-05-01'</span>{`],
    `}<span className="text-brand-300">'include'</span>{` => `}<span className="text-brand-300">'user,competencies,credentials'</span>{`,
]);
`}
            </pre>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
