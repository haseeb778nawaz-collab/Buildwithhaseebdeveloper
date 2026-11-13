# BuildWithHaseeb — Digital Studio Website

A responsive, multi-page React + Vite + TypeScript website for BuildWithHaseeb. The visual system has been updated to a dark cinematic agency direction inspired by the supplied reference screenshot.

## Requirements
- Node.js 18+
- npm

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Visual direction
- Deep evergreen / near-black backgrounds with emerald accents and champagne-gold highlights.
- Oversized typography, glass-style dashboard panels, subtle grid/orb effects, and responsive layouts.
- Main theme tokens are defined at the end of `src/styles.css`.

## Routes
- `/` Home
- `/about` About
- `/services` Services
- `/ai-lead-conversion-system` Interactive lead conversion demo
- `/technology` Technology
- `/work` Selected work and filters
- `/contact` Contact
- `/privacy` Privacy policy starter
- `/terms` Terms starter

## Configuration and honest limitations
- The lead conversion dashboard is a local React-state simulation. It is not connected to GoHighLevel, an AI model, SMS, email, WhatsApp, or a live calendar. Reset restores the original sample records.
- The contact form validates required fields and prepares a `mailto:` message. It does not submit to a server or store enquiries. Configure a backend/form provider before treating it as a production lead channel.
- Calendly opens the supplied real scheduling URL in a new tab. No fake booking calendar is included.
- Only the two supplied live demo URLs are linked. Other portfolio entries are labelled as concepts/portfolio explorations.
- No testimonials, client logos, awards, metrics, or business outcomes have been fabricated.
- The founder portrait and brand mark are intentional placeholders because no original logo or founder photograph was supplied with the brief. Replace the text mark with the existing logo asset and portrait placeholder with the approved founder photo before launch.
- Legal pages are starter copy and should be reviewed for actual business practices and applicable jurisdiction.

## Content updates
Edit `src/data/site.ts` to update services, projects, technologies, and contact links. Projects are data-driven and automatically appear in the portfolio filters. Add real project URLs only after verifying them.

## SEO
Base metadata is in `index.html`; sitemap and robots files are in `public/`. Update canonical/social metadata and sitemap domain when deploying to a different domain. Add per-route metadata/structured data before production launch.

## Deployment
Build with `npm run build` and deploy the generated `dist/` directory to Vercel, Netlify, or another static host. Configure SPA fallback/rewrite to `index.html` so deep routes resolve correctly.
