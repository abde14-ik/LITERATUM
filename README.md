# LITERATUM

> A Dark Academia Reading Club Template built with Next.js & Tailwind.

**LITERATUM** frames your club as a quiet library: espresso backgrounds, parchment surfaces, Cinzel headings, and Cormorant Garamond body copy. It ships as a static site ready for GitHub Pages.

## Features

- **Ex Libris** — A virtual bookshelf (Community Library) with curator tags and stacked shelves.
- **The Inkwell** — Weekly writing prompts with a parchment input and local-only inscriptions.
- **The Lexicon** — A thematic index of genres, traditions, and motifs.
- **Prologue** — Club origin and rituals.
- **Epilogue** — Contact form powered by EmailJS (optional).

## Tech Stack

- Next.js 14 (App Router) · TypeScript · Tailwind CSS 4
- Framer Motion · Lucide React
- Static export (`output: "export"`) for GitHub Pages (basePath/assetPrefix set to `/gdi` by default).

## Getting Started

```bash
npm install
npm run dev
# visit http://localhost:3000/gdi
```

## Production / GitHub Pages

```bash
npm run build    # emits static site to ./out
```

Deploy with the included GitHub Actions workflow. If your repo name is not `gdi`, update `basePath` and `assetPrefix` in `next.config.ts` to match your repo slug.

## Customize Content

Edit the locale files:
- `src/locales/en.ts`
- `src/locales/fr.ts`

Sections to update:
- `hero`, `aboutClub`, `inkwell`, `archives` / `library`, `lexicon`, `contact`

Swap book covers and textures in `public/` with your own assets.