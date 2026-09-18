# Ariel Silva — Portfolio

Personal portfolio and engineering showcase built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com).

Live site: [https://alwexis.is-a.dev](https://alwexis.is-a.dev)

---

## ⚡ Tech Stack

- **Framework**: [Astro 5](https://astro.build/) (Static Site Generation)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@theme` CSS tokens and `@tailwindcss/vite`
- **Content**: Astro Content Collections (`astro:content`) with type-safe Zod validation
- **Typography**: Geist Sans & JetBrains Mono
- **SEO & Search**: `@astrojs/sitemap`, OpenGraph metadata, `robots.txt`, and [`llms.txt`](https://llmstxt.org)

---

## 📁 Project Structure

```text
.
├── public/
│   ├── cv/                    # Downloadable CV files (Spanish & English)
│   ├── favicon.svg            # Site favicon
│   ├── fonts/                 # Local Geist font files
│   ├── llms.txt               # LLM-friendly portfolio summary (llmstxt.org)
│   └── robots.txt             # Crawler rules and sitemap location
├── src/
│   ├── components/            # Modular Astro UI components
│   │   ├── CV.astro           # Resume section and download links
│   │   ├── Experience.astro   # Professional experience timeline
│   │   ├── ExperienceCard.astro # Individual experience entry card
│   │   ├── Footer.astro       # Site footer and copyright
│   │   ├── Gallery.astro      # Image carousel for project previews
│   │   ├── Header.astro       # Navigation bar and dark/light mode toggle
│   │   ├── Hero.astro         # Bio, social links, and introduction
│   │   ├── Markdown.astro     # Secure lightweight inline markdown parser
│   │   ├── Projects.astro     # Featured projects section
│   │   └── WorkCard.astro     # Project showcase card
│   ├── content/               # Data files (JSON content collections)
│   │   ├── experience/        # Work experience entries (Lexy, Masterbase, CITT)
│   │   └── works/             # Project entries (SignAI, Moonie, Bruma, etc.)
│   ├── data/
│   │   └── constants.ts       # Social links, navigation items, CV metadata
│   ├── layouts/
│   │   └── Layout.astro       # Base HTML document, head meta, fonts, theme script
│   ├── pages/
│   │   ├── index.astro        # Homepage
│   │   └── work.astro         # Complete work and project archive
│   ├── styles/
│   │   └── global.css         # Tailwind v4 configuration, @theme palette, base styles
│   ├── types/
│   │   └── index.ts           # TypeScript interfaces for collections and UI props
│   └── content.config.ts      # Zod schemas for content collections
├── astro.config.mjs           # Astro configuration with sitemap & Tailwind Vite plugin
├── package.json
└── tsconfig.json
```

---

## 🧞 Getting Started

All commands are run from the root of the project using `pnpm`:

### Prerequisites

- Node.js `>=22.12.0`
- pnpm `>=9.0.0`

### Installation

```sh
pnpm install
```

### Development

Start the local development server at `http://localhost:4321`:

```sh
pnpm dev
```

### Build

Build the production-ready static site to `./dist/`:

```sh
pnpm build
```

This also generates the canonical `sitemap-index.xml` and `sitemap-0.xml` in `./dist/`.

### Preview

Preview the production build locally:

```sh
pnpm preview
```

---

## 🎨 Design System & Theme

The project follows an **Editorial Grayscale** design language. All colors are defined as semantic tokens under `@theme` in `src/styles/global.css`:

- Canvas: `--color-canvas-light` (`#fafafa`) / `--color-canvas-dark` (`#0a0a0a`)
- Surfaces: `--color-surface-dark` (`#141414`)
- Borders: `--color-border-dark` (`#262626`)
- Typography: `--color-primary-light` (`#171717`), `--color-primary-dark` (`#f5f5f5`), `--color-body-light` (`#525252`), `--color-body-dark` (`#a3a3a3`)
- Code & Accents: `--color-code-light` (`#262626`), `--color-code-dark` (`#d4d4d4`)

---

## 📄 License

MIT © [Ariel Silva](https://github.com/alwexis)
