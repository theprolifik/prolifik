import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.prolifik.one',  // Add this line
  output: 'static',
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  // Any other existing configs
});