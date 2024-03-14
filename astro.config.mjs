import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'
import db from '@astrojs/db'

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
    db(),
  ],
  output: 'hybrid',
  adapter: vercel({
    imageService: true,
  }),
})
