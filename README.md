# Zee Fashion

> A polished, responsive marketing website for a Lagos-based institutional garment manufacturer—built to turn school, medical, and corporate uniform enquiries into quote requests.

**Zee Fashion** presents a premium garment brand with a clear service catalogue, visual portfolio, credibility-focused content, and a single conversion path: **Request a Quote**.

## Why this project stands out

- **Conversion-led UX** — every primary call-to-action directs visitors to one quote workflow, avoiding competing contact journeys.
- **Strong brand system** — a tailored navy, gold, and cream palette, paired with Inter and Playfair Display, creates an editorial fashion identity that remains legible and consistent across pages.
- **Responsive by design** — navigation, layouts, grids, galleries, and call-to-action sections adapt from mobile screens to desktop.
- **Thoughtful interaction design** — Framer Motion provides page transitions, animated gallery filtering/lightbox behaviour, hover states, and a subtle hero treatment without overwhelming the content.
- **Maintainable component structure** — reusable layout, UI, home-section, and service components keep shared behaviour and visual language in one place.

## Features

- Responsive sticky navbar with desktop service dropdown and mobile navigation drawer
- Dedicated quote-request page with client-side validation and submission feedback
- Service pages for school uniforms, medical and laboratory attire, and embroidery/branding
- Filterable portfolio gallery with an image lightbox
- Animated homepage with service overview, trust signals, gallery preview, and conversion CTAs
- Floating WhatsApp enquiry shortcut
- Shared footer, scroll-to-top behaviour, and consistent route transitions

## Tech stack

| Area | Tools |
| --- | --- |
| UI | React 18, TypeScript |
| Build tooling | Vite 5 |
| Styling | Tailwind CSS |
| Routing | React Router DOM |
| Motion | Framer Motion |
| Icons | Lucide React |
| Code quality | ESLint |

## Getting started

### Prerequisites

- Node.js 18 or later
- npm 9 or later

### Install and run

```bash
git clone <your-repository-url>
npm install
npm run dev
```

Vite will show the local URL in the terminal—typically `http://localhost:5173`.

### Available commands

```bash
npm run dev      # Start the development server
npm run build    # Generate a production build
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint across the project
```

## Application structure

```text
src/
├── components/
│   ├── home/       # Homepage sections: hero, services, gallery, CTA
│   ├── layout/     # Navbar, footer, page layout, scroll behaviour
│   └── ui/         # Shared Button and WhatsApp components
├── pages/
│   ├── services/   # Service-specific landing pages
│   ├── QuotePage.tsx
│   ├── GalleryPage.tsx
│   ├── AboutPage.tsx
│   └── WhySchoolsPage.tsx
├── App.tsx         # Router and animated route configuration
├── index.css       # Global styles and Tailwind layers
└── index.tsx       # Application entry point
```

## Routes

| Path | Purpose |
| --- | --- |
| `/` | Homepage and primary brand experience |
| `/about` | Brand story and mission |
| `/quote` | Quote-request form and business contact details |
| `/gallery` | Filterable garment portfolio |
| `/why-schools` | Value proposition for educational institutions |
| `/services/school-uniforms` | School uniform service |
| `/services/medical-wears` | Medical and laboratory attire service |
| `/services/embroidery` | Embroidery and branding service |

## Design and implementation notes

### Single conversion journey

The former generic contact path was intentionally consolidated into `/quote`. This gives prospective clients one clear next step regardless of where they enter the site, which reduces decision friction and makes future lead tracking simpler.

### Brand tokens

The reusable colour and typography tokens live in `tailwind.config.js`. This makes the visual system easy to extend without scattering hard-coded brand decisions throughout JSX.

### Images

The project uses remote Unsplash images for its current editorial imagery. The medical-uniform image source is shared consistently across the service page and gallery to prevent broken or mismatched visual references.

### Quote form behaviour

The quote form currently demonstrates the complete front-end experience: required fields, client-side state management, a loading state, and a success confirmation. To collect real leads, replace the simulated submission handler in `src/pages/QuotePage.tsx` with an API endpoint, form service, or server action.

## Future enhancements

- Connect the quote form to a secure backend and send notification emails
- Replace placeholder phone, WhatsApp, and social-media links with live business accounts
- Add image optimisation and self-hosted production assets
- Introduce analytics for quote funnel performance
- Add automated component and end-to-end tests


---

Built with a focus on clear brand storytelling, practical conversion design, and a maintainable modern React front end.
