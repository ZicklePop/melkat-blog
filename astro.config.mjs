// @ts-check
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig(
  /** @type {import('astro').AstroUserConfig} */
  {
    devOptions: {
      hostname: '0.0.0.0',
    },
    buildOptions: {
      site: 'https://melkat.blog/',
    },
    integrations: [
      tailwind({
        config: {
          path: './tailwind.config.cjs',
        },
      }),
    ],
  }
)