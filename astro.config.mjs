import { defineConfig } from 'astro/config'
import image from '@astrojs/image'
import netlify from '@astrojs/netlify/functions'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://melkat.blog',
  integrations: [
    tailwind({
      config: {
        path: './tailwind.config.cjs',
      },
    }),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    sitemap(),
  ],
  output: 'server',
  adapter: netlify(),
})
