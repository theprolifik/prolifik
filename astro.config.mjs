import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'static',  // If no SSR needed
  adapter: cloudflare(),
  // Remove if not using: integrations: [mdx(), sitemap()],
});
