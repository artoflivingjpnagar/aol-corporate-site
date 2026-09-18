// @ts-check
import { defineConfig } from 'astro/config';

// Static site: `astro build` writes plain HTML/CSS/JS + optimised images to dist/.
// Vercel detects Astro automatically — no adapter or extra config needed.
export default defineConfig({
  // Set this to the live URL once deployed (used for canonical + social preview links).
  // site: 'https://your-domain.vercel.app',
  compressHTML: true,
});
