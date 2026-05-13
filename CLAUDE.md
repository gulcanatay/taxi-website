# CLAUDE.md

## Project Overview

Single-page website for a **taxi service**. A modern, professional web presence to attract customers and provide essential information about the service. Optimized for SEO and fast load times.

## Tech Stack

- **Framework:** Astro (static site generation)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide
- **Package Manager:** pnpm

## Current Phase: Static Single-Page Site

Phase 1 focuses on building a single-page static website. Content is hardcoded. No CMS, CRM, or e-commerce integration.

### Sections

- **Header / Navigation** — Logo, nav links (anchor scroll), phone number CTA
- **Hero** — Headline, subtext, call-to-action (call now + WhatsApp)
- **Leistungen (Services)** — Airport transfers, city rides, long-distance, business transport
- **Uber uns (About)** — Company story, values, trust signals
- **Reservierung (Reservation)** — Reservation form (from, to, when, email) + contact info
- **Footer** — Links, legal (Impressum, Datenschutz), social media

### Future Phases

- Dynamic pricing calculator
- Customer reviews / testimonials integration
- Multi-language support (Turkish, English)
- Hosting setup (TBD)

## Folder Structure

```
src/
  components/         # Astro/HTML components
    sections/         # Page sections (Hero, Services, Fleet, Contact, etc.)
    layout/           # Header, Footer, Navigation
    ui/               # Small reusable UI elements (Button, Card, etc.)
  layouts/            # Astro page layouts
  pages/              # Astro pages (index.astro + legal pages)
  assets/             # Static assets (logos, images)
  config/             # Constants, site metadata, navigation config
  styles/             # Global styles
```

## Design Principles

- **Modern & professional** — clean layouts, trust-building design, strong CTAs
- **Mobile-first** — responsive design, works well on all devices
- **Accessible** — semantic HTML, proper contrast, keyboard navigation
- **Fast** — zero JS by default (Astro), optimized images, minimal bundle
- **SEO-optimized** — semantic HTML, meta tags, Open Graph, structured data, sitemap
- **Conversion-focused** — phone number and booking CTAs always visible

## SEO Strategy

- Semantic HTML5 elements (header, main, section, footer, nav)
- Meta title, description, and Open Graph tags
- Structured data (JSON-LD) for local business
- Sitemap generation via `@astrojs/sitemap`
- Fast load times (static HTML, no client JS unless needed)
- Proper heading hierarchy (single h1, logical h2/h3 structure)

## Language

- Primary language: **German**
- All UI text, labels, and content in German
- Prepare structure for future i18n (Turkish, English)

## Conventions

- Use `pnpm` for all package operations
- Prefer `.astro` components; only use framework components (React) if interactivity requires it
- Component files: PascalCase (e.g., `Header.astro`)
- Utility files: camelCase (e.g., `formatPhone.ts`)
- Keep components small and focused — extract when complexity grows
- Use Tailwind utility classes for styling
