# Smooth Code

Personal site for Bartosz Nowak — a single page with a hero, skills, career
timeline and contact section. Built with Next.js and CSS Modules, deployed as a
static export.

## Getting started

```bash
yarn install
yarn dev
```

The site runs at [http://localhost:3000](http://localhost:3000).

| Script       | Purpose                                         |
| ------------ | ----------------------------------------------- |
| `yarn dev`   | Development server                              |
| `yarn build` | Production build plus static export to `out/`   |
| `yarn lint`  | ESLint and Prettier, warnings treated as errors |

## Contact form

The form posts directly to whatever endpoint `NEXT_PUBLIC_FORM_ENDPOINT` points
at — any service that accepts a cross-origin `POST` works (Formspree, Basin,
Netlify Forms). Copy `.env.example` to `.env.local` and fill it in:

```bash
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/<your-form-id>
```

With the variable unset the form is not rendered at all, leaving just the email
and LinkedIn links, so the page never shows a control that silently discards
messages.

## Theming

Colours live in two files and nothing else needs to know about themes:

- `styles/palette.css` — raw colour primitives.
- `styles/theme.css` — semantic tokens (`--surface-raised`, `--text-muted`,
  `--accent`, …), each declared once with `light-dark()`.

Because the tokens resolve from `color-scheme`, the OS preference is honoured on
the first paint with no JavaScript. The header toggle only sets `color-scheme` on
the root element and stores the choice in `localStorage`; a small inline script
in `pages/_document.tsx` re-applies it before paint.

## Content

All copy that changes over time lives in `data/`:

- `data/portfolio.ts` — roles, newest first. `endDate: null` marks the current one.
- `data/skills.ts` — skills grouped by `tier` (`Expert`, `Advanced`, `Familiar`).

Technology icons are keyed by name in `components/icon/tech.ts`, so referencing
an icon that does not exist is a type error.
