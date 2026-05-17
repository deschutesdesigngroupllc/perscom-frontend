# Sections

One file = one home-page section. Composed in order by `app/page.tsx`.

## Rules

- **Default to a server component.** Only add `'use client'` if the section needs state, refs, `useEffect`, Framer Motion, or other browser APIs. Look at `faqs.tsx` (accordion → client) vs `hero.tsx` (static → server) for the split.
- Wrap content in `<Container>` from `@/components/ui/container` for consistent horizontal gutters. Do not re-roll `max-w-7xl px-6 lg:px-8`.
- Outer element is `<section>` with an `id` (used for in-page anchor links from header/footer).
- Use existing palette only — `ink-*`, `brand-*`, white/black with opacity. No new hues.
- Use existing custom utilities (`bg-grid`, `bg-radial-brand`, `mask-radial`, `text-balance`, etc.) rather than reinventing them inline. See `app/globals.css` for the full list.
- External URLs come from `@/lib/links` — never hard-code.
- For CTAs use `<Button>` from `@/components/ui/button` — it picks `next/link` vs `<a target="_blank">` automatically based on the href.
- For scroll-in animation, wrap the inner content in `<Reveal>` from `@/components/motion/reveal` (this will force the parent to be a client component — that's fine when animation is the point).
- For the radial-brand glow + masked grid backdrop used behind hero-like sections, drop in `<AbstractBackdrop />`.

## Adding a section

1. Create `<name>.tsx` here, export `function <Name>()`.
2. Add it to the JSX of `app/page.tsx` in the position you want it to render.
3. If it should be reachable from the header nav, also wire up the anchor there.
