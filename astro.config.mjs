import { defineConfig } from 'astro/config';
import { collections } from './src/content/config'; // Add this import

export default defineConfig({
  output: 'static',
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  // Add this if not present
  collections, // Registers the collections
});