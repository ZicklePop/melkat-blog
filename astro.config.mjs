import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  site: 'https://melkat.blog',
  integrations: [
    tailwind({
      config: {
        path: './tailwind.config.cjs',
      },
    }),
    sitemap(),
  ],
  adapter: vercel(),
})
