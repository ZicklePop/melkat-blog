import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  site: "https://melkat.blog",
  integrations: [
    tailwind({
      config: {
        path: './tailwind.config.cjs',
      },
    }),
  ],
});
