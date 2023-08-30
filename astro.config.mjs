import { defineConfig, squooshImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://finlande.raphael-catarino.fr',
  integrations: [mdx(), sitemap(), tailwind()],
  image: {
    service: squooshImageService(),
  },
});
