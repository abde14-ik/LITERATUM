# LITERATUM — INPT Literature Club Template

> A dark-academia reading club site for INPT. Built with Next.js & Tailwind, ready for GitHub Pages.

**LITERATUM** frames our club as a quiet library: espresso backgrounds, parchment panels, Cinzel headings, and Cormorant Garamond body copy. Everything is localized (EN/FR) and ships as a static export.

## What’s inside

- **Prologue** — Club origin, rituals, and what we stand for.
- **The Inkwell** — Weekly prompts with local-only inscriptions (no backend).
- **Ex Libris** — Community Library shelves with curator tags.
- **The Lexicon** — Themes, genres, and motifs we revisit.
- **Epilogue** — Contact form (EmailJS-ready, optional).

## Tech Stack

- Next.js 14 (App Router) · TypeScript · Tailwind CSS 4
- Framer Motion · Lucide React
- Static export (`output: "export"`) for GitHub Pages (basePath/assetPrefix set to `/gdi` by default).

## Quickstart

```bash
npm install
npm run dev
# open http://localhost:3000/gdi
```

## Build & Deploy (GitHub Pages)

```bash
npm run build   # outputs ./out
```

Use the included GitHub Actions workflow. If your repo name differs from `gdi`, update `basePath` and `assetPrefix` in `next.config.ts` to your repo slug.

## Customize for INPT

Edit locales:
- `src/locales/en.ts`
- `src/locales/fr.ts`

Key sections to adapt:
- `hero`, `aboutClub` (Prologue), `inkwell`, `archives` / `library` (Ex Libris), `lexicon`, `contact`

Swap book covers and textures in `public/` with your own assets. Update `profile` in `src/constants/data.ts` for contact metadata (email is consumed by the form but hidden from placeholders by default).