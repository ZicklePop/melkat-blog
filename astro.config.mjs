// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  devOptions: {
    hostname: '0.0.0.0',
    tailwindConfig: './tailwind.config.cjs',
  },
	buildOptions: {
		site: 'https://melkat.blog/',
	},
})

