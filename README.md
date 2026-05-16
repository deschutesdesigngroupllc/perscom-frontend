# PERSCOM Marketing Site

Public marketing site for **[PERSCOM](https://perscom.io)** — the personnel command system built for high-performing, mission-critical organizations (police, fire, EMS, military, paramilitary).

Production: [perscom.io](https://perscom.io)
Product app: [app.perscom.io](https://app.perscom.io)
Docs: [docs.perscom.io](https://docs.perscom.io)

---

## Stack

- **[Next.js 16](https://nextjs.org)** (App Router, Turbopack, RSC)
- **[React 19](https://react.dev)**
- **[TypeScript 5](https://www.typescriptlang.org)**
- **[Tailwind CSS v4](https://tailwindcss.com)** (CSS-first `@theme`)
- **[Framer Motion](https://www.framer.com/motion/)** for choreographed transitions
- **[Headless UI](https://headlessui.com)** + **[Heroicons](https://heroicons.com)**
- **Inter** + **JetBrains Mono** via `next/font/google` — same type stack as the docs

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Project layout

```
app/
  layout.tsx              # fonts, metadata, root layout
  page.tsx                # home — composes every section
  globals.css             # Tailwind v4 @theme tokens + utilities
  legal/[slug]/page.tsx   # legal pages (Terms, Privacy, Cookies, AUP)
  sitemap.ts, robots.ts

components/
  layout/                 # header, footer
  sections/               # home-page sections (hero, features, etc.)
  ui/                     # button, container, logo
  motion/                 # reveal, marquee, abstract-backdrop

lib/
  links.ts                # canonical external URLs
  legal.ts                # legal page metadata + GetTerms embed ids

public/
  screenshots/            # product screenshots used on the marketing pages
  avatars/                # social-proof avatars in the hero
  logos/                  # tech-stack marks in the logo cloud
  railway-logo.svg        # real Railway brand mark
  railway-button.svg      # official "Deploy on Railway" button
  logo.svg, icon.svg      # PERSCOM brand assets
```

## Sections (in order)

1. **Hero** — headline, eyebrow, dual CTAs, social proof, dashboard screenshot with 8 floating activity tags
2. **Logo cloud** — tech-stack strip (Laravel, React, AWS, Docker, etc.)
3. **Primary features (bento)** — Roster · Ranks · Records
4. **Personnel record** — full profile screenshot + all 7 record types + 6 profile facets
5. **Secondary features** — Messaging wizard · Form field editor · Events & RSVP
6. **Automations** — 3 action types, 10+ trigger pills, screenshot
7. **Lives in Discord** — realistic Discord embed mockup (HTML/Tailwind)
8. **Integrations** — REST API, OAuth 2.0 (4 grants), OIDC, JWT SSO, Webhooks, Widgets, PHP SDK, scoped keys + PHP code sample
9. **Security** — 6 compliance pillars (tenant isolation, encryption, MFA, RBAC, audit log, backups)
10. **Self-host** — one-click Railway deploy + quick-start terminal
11. **Pricing** — single plan, monthly/yearly toggle
12. **FAQ** — accordion
13. **CTA**
14. **Footer**

## Design system

CSS-first Tailwind v4 with brand tokens defined in `app/globals.css`:

- **Surface:** `#090b0f` (matches docs.perscom.io dark)
- **Brand:** `#2563EB` (blue-600) + the full blue scale, **no other hues**
- **Type:** Inter (display + body), JetBrains Mono (code)
- **Backdrops:** `<AbstractBackdrop />` — radial brand glow + subtle grid pattern, masked

## Conventions

- Lowercase, kebab-case filenames for all components
- Server components by default; `"use client"` only when state, refs, or animations require it
- All external URLs in `lib/links.ts` — never hard-code
- Screenshots sized to native resolution (e.g. `3600×1902`) with `next/image` handling the optimization

## Deployment

This site is designed to deploy to **[Vercel](https://vercel.com)** with zero configuration.

The product itself (the Laravel app) is open-source and self-hostable on **Railway** — see [deschutesdesigngroupllc/perscom-app](https://github.com/deschutesdesigngroupllc/perscom-app).

## License

© Deschutes Design Group LLC. All rights reserved.
