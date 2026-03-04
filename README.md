# Wejden Spire — Brand Proposal

Interactive multi-page brand proposal for the **Moodicament → Wejden Spire** rebrand. Built with React, TypeScript, Tailwind CSS v4, and Framer Motion.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
npm run preview
```

## Pages

| Route           | Description                                |
| --------------- | ------------------------------------------ |
| `/`             | Cover — hero, metrics, CTAs                |
| `/strategy`     | Strategic diagnosis & positioning (FR)     |
| `/identity`     | Colors, typography, UI components          |
| `/logo`         | Logo meaning, lockups, usage rules         |
| `/voice`        | Tone, word bank, messaging examples        |
| `/website`      | Site architecture, motion, wireframes      |
| `/deliverables` | Deliverables list, timeline, next steps    |
| `/arabic`       | Full Arabic RTL page                       |
| `/present`      | Full-screen presentation mode (10 slides)  |

### Presentation Mode

Navigate to `/present` or click the **Present** button in the header. Use:

- **Arrow keys** / **Page Up/Down** to navigate slides
- **Home** / **End** to jump to first/last slide
- **Escape** to return to the main site

## Project Structure

```
src/
├── components/
│   ├── layout/        # Header, Footer, Layout
│   ├── motion/        # Reveal, Stagger, ScrollProgress, Parallax
│   └── ui/            # Button, Card, SectionDivider, TrustChip, etc.
├── pages/             # All route pages
├── styles/
│   └── tokens.ts      # Design tokens (colors, typography, spacing, motion)
└── index.css          # Tailwind v4 theme + global styles
```

## Customization

### Swap Brand Assets

Replace the SVGs in `public/brand/`:

- `wejden-spire-logo.svg` — full lockup (English + Arabic text)
- `wejden-spire-icon.svg` — circle wave mark only

### Edit Copy

All page copy is inline in each page file under `src/pages/`. The content is primarily in **French** with Arabic key headings on the `/arabic` page.

### Design Tokens

Tokens live in two places:

1. **`src/styles/tokens.ts`** — JS tokens for use in components
2. **`src/index.css`** `@theme` block — CSS custom properties consumed by Tailwind

Key colors:

| Token     | Hex       | Role            |
| --------- | --------- | --------------- |
| `primary` | `#2F6BFF` | Primary Blue    |
| `green`   | `#2FBF71` | Wellbeing Green |
| `purple`  | `#7B61FF` | AI Purple       |
| `bg`      | `#F7F9FC` | Background      |
| `text`    | `#1A1D2E` | Dark Text       |

### Fonts

Loaded via Google Fonts in `index.html`:

- **Inter** (300–800) — English UI
- **IBM Plex Sans Arabic** (300–700) — Arabic text

## Tech Stack

- [Vite](https://vite.dev) — build tool
- [React 19](https://react.dev) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) — CSS-first configuration
- [Framer Motion](https://motion.dev) — animations
- [React Router v7](https://reactrouter.com) — client-side routing
