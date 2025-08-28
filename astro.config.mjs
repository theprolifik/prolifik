import { defineConfig } from 'astro/config';

// Remove any Cloudflare adapter import and reference
// If you have integrations like content collections, keep them

export default defineConfig({
  output: 'static', // Explicitly set to static
  // integrations: [yourOtherIntegrations()], // e.g., mdx(), tailwind()
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' }, // Use Sharp for build-time image optimization
  },
});