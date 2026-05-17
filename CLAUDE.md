# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## What this is

Public marketing site for PERSCOM (perscom.io) — a single long-scroll home page composed of ~14 sections, plus a small set of legal subpages. It is **not** the product app (that lives at app.perscom.io in a separate Laravel repo).

## Stack

Next.js 16 (App Router, RSC, Turbopack) · React 19 · TypeScript 5 (strict) · Tailwind CSS v4 (CSS-first `@theme` in `app/globals.css`, no `tailwind.config`) · Framer Motion · Headless UI + Heroicons · Inter + JetBrains Mono via `next/font/google`.

**Next.js 16 is newer than your training data.** Before touching routing, fetching, caching, metadata, params, or any framework API, consult `node_modules/next/dist/docs/` rather than recalling from memory.

## Commands

```bash
npm run dev           # next dev (Turbopack)
npm run build         # next build
npm run start         # serve production build
npm run lint          # eslint (flat config, eslint.config.mjs)
npm run format        # prettier --write .
npm run format:check  # prettier --check .
```

There is no test suite.

## Architecture

- **`app/page.tsx`** is the entire home page — it just composes `<Header />`, the section components in display order, and `<Footer />`. To reorder/add/remove a section, edit this file.
- **`app/layout.tsx`** wires up fonts (`--font-inter`, `--font-mono` CSS variables consumed by `globals.css`) and site-wide metadata. `color-scheme: dark` is fixed — the site is dark-only.
- **`app/legal/[slug]/page.tsx`** renders the four legal pages via GetTerms embed ids defined in `lib/legal.ts`. Slugs are constrained to the keys of `legal` there.
- **`components/sections/*`** — one file per home-page section. Each is self-contained and exports a named function matching the file (kebab-case file → PascalCase export).
- **`components/ui/{button,container,logo}.tsx`** — the only shared primitives. `<Container>` is the standard horizontal gutter wrapper (`max-w-7xl px-6 lg:px-8`). `<Button>` auto-detects external URLs and switches between `next/link` and `<a target="_blank">`; pass `href` always.
- **`components/motion/*`** — `<Reveal>` (scroll-in animation), `<Marquee>` (infinite scroll, uses the `animate-marquee` keyframe in globals.css), `<AbstractBackdrop>` (the radial brand glow + masked grid used behind hero-style sections).
- **`lib/links.ts`** — single source of truth for every external URL (app, docs, demo, Railway, GitHub, Slack). **Never hard-code an external URL in a component** — add it here.
- **`lib/legal.ts`** — legal page registry; adding a legal page means adding a key here.

## Design system (Tailwind v4 `@theme` in `app/globals.css`)

- **Palette is intentionally narrow:** `ink-*` (the dark neutrals, surface = `#090b0f` matching docs.perscom.io) and `brand-*` (the full blue scale anchored on `#2563eb`). **No other hues** — do not introduce green/red/amber/etc., even for status. Use opacity-modified white/blue.
- **Custom utilities** (defined as `@utility` in globals.css, not arbitrary class strings): `text-balance`, `bg-grid`, `bg-grid-dark`, `bg-dot`, `bg-radial-brand`, `bg-noise`, `mask-radial`. Prefer these over re-implementing inline.
- **Custom animations:** `animate-marquee`, `animate-blob`, `animate-shimmer` (keyframes in globals.css).
- **Fonts:** use `font-display` for headings, default sans for body, `font-mono` for code/keys.
- **Shadows:** `shadow-glow` (brand glow) and `shadow-ring` (subtle elevated card) are pre-defined tokens.

## Conventions

- **Filenames:** lowercase kebab-case for every component file. Exported component name is PascalCase.
- **Server components by default.** Add `'use client'` only when the component needs state, refs, browser APIs, or Framer Motion. Most sections are pure RSC.
- **Imports:** use the `@/*` path alias (configured in `tsconfig.json`) for cross-directory imports; relative imports are fine within the same folder.
- **Images:** use `next/image`. Screenshots in `public/screenshots/` are stored at native resolution — let `next/image` handle sizing/optimization, don't pre-resize.
- **Prettier:** no semicolons, single quotes, trailing commas, 100-col, `prettier-plugin-tailwindcss` reorders classes. Run `npm run format` before committing.
- **External links** (Button auto-handles this, but for raw `<a>`): always `target="_blank" rel="noreferrer"`.

## Adding a new home-page section

1. Create `components/sections/<name>.tsx`, export `function <Name>()`.
2. Wrap content in `<Container>` for consistent gutters; add an `id` on the outer `<section>` if it should be link-targetable.
3. Import and place it in `app/page.tsx` in the desired scroll order.
4. Keep it RSC unless animation/state forces `'use client'`.
