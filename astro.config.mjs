import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import image from '@astrojs/image'

// https://astro.build/config
export default defineConfig({
  site: 'https://melkat.blog',
  integrations: [
    react(),
    tailwind({
      config: {
        path: './tailwind.config.cjs',
      },
    }),
    image(),
  ],
  legacy: {
    astroFlavoredMarkdown: true, // todo: remove this :)
  },
})
