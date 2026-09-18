# Happiness at Work — Art of Living BTM Layout

Corporate landing page for the Art of Living Happiness Program, built with [Astro](https://astro.build) + TypeScript. It builds to a static site: plain HTML, CSS, a little JS and optimised images.

## Editing the text

**Almost every change happens in one file: [`src/content/site.ts`](src/content/site.ts).**
Headlines, bullets, prices, steps, contact details, map link and photo captions are all there. Components only handle layout.

| To change… | Edit in `site.ts` |
|---|---|
| Phone / WhatsApp / email / address | `contact` |
| Top section text and bullets | `hero` |
| "The gap" cards | `gap.pillars` |
| Program details, format, follow-ups | `program` |
| Pricing (Option A / B) | `engage.options` |
| Form choices and the WhatsApp message greeting | `contactSection.form` |

## Run it locally

Needs Node.js 22.12 or newer.

```bash
npm install      # first time only
npm run dev      # preview at http://localhost:4321 (updates as you edit)
npm run build    # type-check + production build into dist/
npm run preview  # serve the built dist/ locally
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel: **Add New… → Project → Import** the repository.
3. Vercel detects **Astro** automatically. Keep the defaults (build: `npm run build`, output: `dist`) and click **Deploy**.

Every push to the main branch redeploys automatically. After the first deploy, set `site` in `astro.config.mjs` to your live URL so link previews on WhatsApp/LinkedIn show the photo.

## Project structure

```
src/
├─ content/site.ts          all copy, prices, contact details, photo list
├─ pages/index.astro        the page: puts the sections in order
├─ layouts/BaseLayout.astro <head>, fonts, meta tags, global styles
├─ components/
│  ├─ Nav.astro  Hero.astro  Gap.astro  Program.astro
│  ├─ Gallery.astro          photo collage + video + lightbox
│  ├─ Engage.astro           steps + pricing + audiences
│  │  └─ engage/Steps.astro, engage/PricingOptions.astro
│  ├─ Contact.astro
│  │  └─ contact/ContactDetails.astro, LeadForm.astro, LocationMap.astro
│  ├─ Footer.astro
│  └─ ui/SectionHeader.astro, ui/Icon.astro
├─ scripts/
│  ├─ whatsapp.ts           builds the pre-filled WhatsApp link
│  ├─ lead-form.ts          form submit → opens WhatsApp
│  └─ lightbox.ts           tap a photo to enlarge
├─ styles/tokens.css        colours, fonts, spacing (design tokens)
├─ styles/global.css        base styles, buttons, layout helpers
└─ assets/                  photos + logo (resized to WebP at build time)
public/
├─ media/                   centre video + poster (served as-is)
└─ favicon.png
```

Each component has its own `<style>` block, scoped to that component.

## How the contact form works

There's no backend. On submit, the form builds a WhatsApp "click to chat" link addressed to the centre's number, with the visitor's details pre-filled. Phones open the WhatsApp app. Computers open the WhatsApp desktop app, with a "Continue on WhatsApp Web" link for anyone who doesn't have it installed. The visitor presses **Send** and the message arrives on the centre's personal WhatsApp.
