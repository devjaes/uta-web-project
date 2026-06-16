# UTA - Web Redesign (2023)

> Astro + React + Tailwind institutional landing redesign for the Technical University of Ambato (Universidad Técnica de Ambato). Static-first delivery with React islands. Deployed on Vercel.

## Overview

Modernized landing for UTA's public site. The information architecture covers the institution overview, undergraduate (`grado`) and graduate (`posgrado`) programs, faculties, and news. Built static-first with Astro routing; interactive sections (navigation, news carousel, story line) are React islands. PrimeReact powers a few complex UI primitives; Tailwind handles the design system. Vercel adapter is wired for SSR-on-demand where it helps.

## Stack

| Layer | Tech |
|---|---|
| Framework | Astro 3 |
| Islands | React 18 + TypeScript |
| Styles | Tailwind CSS 3 |
| UI primitives | PrimeReact + PrimeIcons |
| Images | `sharp` |
| Hosting | Vercel (`@astrojs/vercel`) |

## Highlights

- Static-first delivery for the institutional landing
- React islands for navigation, news section, and story line
- Dedicated routes for undergraduate and graduate program detail pages (`pages/grado/[id].astro`, `pages/posgrado/`)
- Faculty + program data driven from `src/data/*.json`
- Lighthouse 95+ on key pages
- Vercel adapter wired for production deploy

## Repo layout

```
src/
  assets/       # static images bundled by Astro
  components/   # mix of .astro + .tsx (React islands)
  data/         # facultades.json, maestrias.json, news.json
  layouts/
  pages/        # routes (index, grado, posgrado, news, …)
public/         # public images (heros, banners, logos)
```

## Local setup

```bash
yarn install
yarn dev          # astro dev
yarn build        # astro check && astro build
yarn preview      # astro preview
```

## Status

Earlier project (2023). Built as a landing redesign for UTA. Kept public for the career timeline.

## Portfolio

[Project entry on devjaes.dev](https://devjaes.dev/work/uta-web-app)
