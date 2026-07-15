# POP — Place Of People

A fluid, all-day bistro website built with **Next.js 15 (App Router)**,
**Tailwind CSS**, and **Framer Motion**. Static where it can be, interactive
where it counts, and **deployable to Cloudflare Pages** via the modern
`@opennextjs/cloudflare` adapter.

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

This project uses the **OpenNext Cloudflare adapter**
(`@opennextjs/cloudflare`), the modern successor to the deprecated
`@cloudflare/next-on-pages` (which is what was throwing
`no nodejs_compat compatibility flag set`):

```bash
# Preview locally with the Cloudflare runtime
npm run preview

# Deploy to Cloudflare Pages (builds first, then deploys to https://pop-bistro.pages.dev)
npm run deploy
```

### First-time setup (one-time only)

Before deploying the first time you need the project to exist in your Cloudflare
account:

```bash
npx wrangler login
npm run create:project       # creates `pop-bistro` in your Cloudflare account
```

### Connecting a GitHub repo to the Cloudflare dashboard (recommended for CI)

In the Pages dashboard → **Build configuration**:

- **Build command:** `npx opennextjs-cloudflare build`
- **Build output directory:** `.open-next/cloudflare`
- **Root directory:** `/`

That's it — no webhooks, no secrets beyond what you'd set for env vars.

## Cloudflare configuration highlights

- `wrangler.toml` is configured with `name = "pop-bistro"`, the
  `nodejs_compat` flag, and `pages_build_output_dir` so wrangler recognises
  the project.
- Builds run through `opennextjs-cloudflare build`, which produces the Worker
  bundle in `.open-next/cloudflare/` (committed via `open-next.config.ts`).
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
  layout.tsx            # fonts + metadata
  page.tsx              # top-level composition of the one-page site
  globals.css           # Tailwind layers, palette utilities, custom scrollbar
components/
  Header.tsx
  Preloader.tsx
  Hero.tsx
  IntroSection.tsx
  FeatureSection.tsx    # used for "Menu" and "The Space"
  CardGrid.tsx
  AboutSection.tsx
  ContactSection.tsx
  Footer.tsx
  NewsletterForm.tsx
  PopLogo.tsx           # inline SVG wordmark (stacked: POP / PLACE / OF / PEOPLE)
lib/
  siteConfig.ts         # copy, palette, nav, IG URL, hours, etc.
public/
  logo.svg              # POP wordmark (terracotta) — favicon + asset fallback
  logo-light.svg        # white variant for dark backgrounds
  favicon.svg           # 64x64 POP rounded badge, used as the browser tab icon
  hero.mp4              # drop the real hero clip here for the auto-playing hero
open-next.config.ts     # OpenNext Cloudflare build config (Cloudflare override)
wrangler.toml           # wrangler Pages config (pages_build_output_dir, flags)
.vercel, .open-next      # build output dirs (gitignored)
```

---

Built with the POP brief in mind — coffee → brunch → cocktails → connection.
