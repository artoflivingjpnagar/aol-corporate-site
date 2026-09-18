// @ts-check
import { defineConfig } from 'astro/config';

// Static site: `astro build` writes plain HTML/CSS/JS + optimised images to dist/.
// Vercel detects Astro automatically — no adapter or extra config needed.
export default defineConfig({
  // Live URL: used to build full links for social previews (WhatsApp / LinkedIn cards).
  // Update this if the site moves to a custom domain.
  site: 'https://aol-corp.vercel.app',
  compressHTML: true,
});
