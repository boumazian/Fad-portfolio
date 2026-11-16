# Fadoua Boumazian — Portfolio

Personal portfolio of **Fadoua Boumazian**, Full-Stack Cloud Developer based in Meknès, Morocco.

**Live:** https://fad-bo.netlify.app

![Portfolio preview](https://fad-bo.netlify.app/opengraph-image)

## Features

- **Pages:** home (hero, experience, skills, projects, contact), About, Education & Certifications, Hobbies
- **Featured case study** for proprietary work, and project cards with GitHub / Live Demo links
- **Dark & light themes** from a single set of CSS design tokens; follows the OS preference, remembers the visitor's choice and never flashes the wrong theme
- **Accessible:** WCAG AA text contrast in both themes, labelled controls, keyboard focus styles, 44px touch targets, `prefers-reduced-motion` support
- **SEO:** per-page titles and descriptions, canonical URLs, Open Graph / Twitter cards with a generated preview image, `robots.txt` and `sitemap.xml`
- **Performance:** statically pre-rendered pages, `next/image` for responsive WebP images, only the fonts that are used
- **Contact form** powered by [Formspree](https://formspree.io), with an email fallback

## Tech stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · lucide-react · Netlify

## Project structure

```
src/
├── app/
│   ├── layout.tsx            # root layout, metadata, theme tokens + no-flash theme script
│   ├── page.tsx              # home page sections
│   ├── aboutme/ education/ hobbies/
│   ├── icon.tsx, apple-icon.tsx, opengraph-image.tsx   # generated at build time
│   └── robots.ts, sitemap.ts
├── components/               # hero, experience, projects, contact, navbar, footer…
│   └── ui/                   # cards (project, featured project, skills, education, hobbies)
├── context/ThemeContext.tsx  # theme toggle state
└── lib/site.ts               # site URL, title, email and social links (single source of truth)
```

### Updating content

| What | Where |
| --- | --- |
| Site URL, title, email, social links | `src/lib/site.ts` |
| Work experience | `src/components/experience.tsx` |
| Projects (featured + cards) | `src/components/project.tsx` |
| Skills | `src/components/ui/skilscard.tsx` |
| Education & certifications | `src/components/formation.tsx` |
| Colors (both themes) | `THEME_CSS` in `src/app/layout.tsx` |
| Resume | `public/bo-cv.pdf` |

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

## Deployment

Deployed on **Netlify** from the `main` branch. Old URLs (`/formation`, `/hobbiesForm`) permanently redirect to `/education` and `/hobbies` (see `next.config.ts`).

## Contact

Use the contact form on the [live site](https://fad-bo.netlify.app/#contact) or connect on [LinkedIn](https://www.linkedin.com/in/fadoua-boumazian-6656a8298/).
