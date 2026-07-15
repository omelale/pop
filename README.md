# POP — Place Of People

A fluid, all-day bistro website built with **Next.js 14 (App Router)**,
**Tailwind CSS**, and **Framer Motion**. Static where it can be, interactive
where it counts, and **deployable to Cloudflare Pages**.

---

## Quick start

```bash
npm install
npm run dev
```

Visit <http://localhost:3000> and the site will live-reload as you edit.

## Build for production

```bash
npm run build
```

That produces a standard Next.js build; the Cloudflare Pages build is separate
(see below).

## Deploy to Cloudflare Pages

This project uses `@cloudflare/next-on-pages`:

```bash
# Builds and outputs a Worker-compatible build
npm run pages:build

# Preview locally with the Cloudflare runtime
npm run preview

# Deploy to Cloudflare Pages
npm run deploy
```

Or deploy from your terminal in one shot:

```bash
npm run deploy
```

Before the first deploy, make sure you're authenticated with Wrangler:

```bash
npx wrangler login
```

## Cloudflare configuration highlights

- `wrangler.toml` is configured with `name = "popbistro"` and the
  `nodejs_compat` flag.
- Interactive pieces (`Header`, `Preloader`, animated sections, the
  newsletter form) are marked `"use client"`.
- Most sections are still **Server Components** — closer to the edge, fewer
  bytes over the wire.
- No Node-only APIs (`fs`, `child_process`, …) at request time — safe for
  Edge.

## Where to edit copy & links

Almost all visible copy, the Instagram URL, and nav links are centralized in
`/lib/siteConfig.ts`. Edit once, reflect everywhere.

## Brand assets

Drop the final logo lockup at `/public/logo.png` (or `/public/logo.svg`). All
`<img src="/logo.png" ...>` tags already include a text fallback (`<span>`
styled in the Fraunces display serif) so the site works until the real asset
is in place.

Replace the placeholder poster/background images with real photography when
they're supplied. The hero video source is `/public/hero.mp4` — add the real
clip there for the auto-playing hero.

## Typography

- **Display / headings**: `Fraunces` (Google Fonts, weights 600–900).
- **Body / nav / buttons**: `Inter`.

Both are loaded via `next/font/google` and bound to the utility classes
`.heading-display` and the `body` base style.

## Accessibility

- `prefers-reduced-motion` disables the hero video, all parallax / magnetic
  animations, and card-scale-on-hover — leaving simple opacity fades only.
- Decorative images use empty `alt`; meaningful images have descriptive alt
  text.
- The header is a real `<nav>` landmark; the mobile menu is announced via
  `aria-expanded`.
- The preloader is `aria-hidden` and self-dismisses — it never traps tab focus
  or blocks the page.

## File overview

```
app/
  layout.tsx          # fonts + metadata
  page.tsx            # top-level composition of the one-page site
  globals.css         # Tailwind layers, palette utilities, custom scrollbar
components/
  Header.tsx
  Preloader.tsx
  Hero.tsx
  IntroSection.tsx
  FeatureSection.tsx  # used for "Menu" and "The Space"
  CardGrid.tsx
  AboutSection.tsx
  ContactSection.tsx
  Footer.tsx
  NewsletterForm.tsx
  PopLogo.tsx         # inline SVG wordmark fallback
lib/
  siteConfig.ts       # copy, palette, nav, IG URL, hours, etc.
public/
  logo.png            # drop final lockup here
  hero.mp4            # drop final hero clip here
```

---

Built with the POP brief in mind — coffee → brunch → cocktails → connection.
