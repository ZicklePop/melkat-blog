import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://melkat.blog",
	integrations: [
		tailwind({
			config: {
				path: "./tailwind.config.cjs",
			},
		}),
		sitemap(),
	],
	output: "static",
});
