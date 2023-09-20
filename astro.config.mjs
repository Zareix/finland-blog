import { defineConfig, squooshImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import prefetch from '@astrojs/prefetch';

// https://astro.build/config
export default defineConfig({
  site: 'https://finlande.raphael-catarino.fr',
  integrations: [
    mdx(),
    prefetch({
      selector: "a[href^='/']",
    }),
    sitemap(),
    tailwind(),
  ],
  image: {
    service: squooshImageService(),
  },
});
