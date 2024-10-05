import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			animation: {
				"fade-in": "fade-in 300ms cubic-bezier(0, 0, 0.2, 1)",
				"single-ping": "single-ping 1s cubic-bezier(0, 0, 0.2, 1)",
				"single-spin": "single-spin 500ms cubic-bezier(0, 0, 0.2, 1)",
				"single-wobble": "single-wobble 1s cubic-bezier(0, 0, 0.2, 1)",
				"slide-up": "slide-up 300ms cubic-bezier(0, 0, 0.2, 1)",
				trace: "trace 1s ease-in",
			},
			aspectRatio: {
				sd: "4 / 3",
			},
			backgroundImage: {
				"gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
				"conic-rainbow":
					"conic-gradient(from 33deg, oklch(70.19% 0.192 234.14), oklch(66.31% 0.3018 359.72), oklch(64.33% 0.2941 26.26), oklch(81.22% 0.2579 130.72), oklch(70.19% 0.192 234.14))",
				"linear-blues":
					"linear-gradient(-45deg, oklch(66.31% 0.3018 359.72), oklch(70.19% 0.192 234.14))",
				"linear-greens":
					"linear-gradient(-45deg, oklch(70.19% 0.192 234.14), oklch(81.22% 0.2579 130.72))",
				"linear-reds":
					"linear-gradient(45deg, oklch(66.31% 0.3018 359.72), oklch(64.33% 0.2941 26.26))",
			},
			backgroundSize: {
				"2x": "200% 200%",
				"3x": "300% 300%",
			},
			boxShadow: ({ theme }: { theme: (i: string) => string }) => ({
				outer:
					"inset 0 0 5px oklch(0 0 0 / .2), 0 2px 10px oklch(0 0 0 / .1), 0 20px 25px -5px oklch(0 0 0 / .05), 0 8px 10px -5px oklch(60% 0 0 / .3)",
				inner:
					"inset 0 3px 1px 0 oklch(100% 0 0 / .8), inset 0 -10px 10px 0 oklch(0 0 0 / .1), 0 0 10px oklch(0 0 0 / .2)",
				dot: `inset 0 1px 3px oklch(100% 0 0 / .3), inset 0 -1px 3px oklch(0 0 0 / .25), 0 2px 10px ${theme(
					"shadowColor",
				)}`,
			}),
			colors: {
				"hot-pink": {
					50: "oklch(97% 0.0229 347.63 / <alpha-value>)",
					100: "oklch(94.58% 0.0449 344.96 / <alpha-value>)",
					200: "oklch(89.53% 0.0899 345.99 / <alpha-value>)",
					300: "oklch(81.67% 0.1635 348.84 / <alpha-value>)",
					400: "oklch(69.79% 0.2831 355.63 / <alpha-value>)",
					500: "oklch(66.31% 0.3018 359.72 / <alpha-value>)",
					600: "oklch(60.71% 0.2743 7.34 / <alpha-value>)",
					700: "oklch(54.22% 0.2436 10.93 / <alpha-value>)",
					800: "oklch(47.14% 0.2118 10.6 / <alpha-value>)",
					900: "oklch(41.66% 0.1876 8.95 / <alpha-value>)",
				},
				persimmon: {
					50: "oklch(96.91% 0.0196 17.42 / <alpha-value>)",
					100: "oklch(93.43% 0.0427 17.76 / <alpha-value>)",
					200: "oklch(87.93% 0.0833 18.45 / <alpha-value>)",
					300: "oklch(80.15% 0.1459 19.86 / <alpha-value>)",
					400: "oklch(68.46% 0.259 24.28 / <alpha-value>)",
					500: "oklch(64.33% 0.2941 26.26 / <alpha-value>)",
					600: "oklch(58.82% 0.27 28.06 / <alpha-value>)",
					700: "oklch(51.61% 0.237 28.23 / <alpha-value>)",
					800: "oklch(45.22% 0.2074 27.78 / <alpha-value>)",
					900: "oklch(40.04% 0.1832 26.62 / <alpha-value>)",
				},
				cerulean: {
					50: "oklch(97.71% 0.013 236.62 / <alpha-value>)",
					100: "oklch(95.34% 0.0284 232.97 / <alpha-value>)",
					200: "oklch(90.53% 0.0635 228.11 / <alpha-value>)",
					300: "oklch(83.41% 0.1151 227.98 / <alpha-value>)",
					400: "oklch(76.78% 0.1602 229.65 / <alpha-value>)",
					500: "oklch(70.19% 0.192 234.14 / <alpha-value>)",
					600: "oklch(64.12% 0.1898 239.60 / <alpha-value>)",
					700: "oklch(51.08% 0.1514 240.79 / <alpha-value>)",
					800: "oklch(45.15% 0.1305 238.64 / <alpha-value>)",
					900: "oklch(39.96% 0.1151 238.14 / <alpha-value>)",
				},
				limeade: {
					50: "oklch(98.87% 0.0361 117.59 / <alpha-value>)",
					100: "oklch(97.44% 0.0789 120.74 / <alpha-value>)",
					200: "oklch(95.32% 0.1481 123.12 / <alpha-value>)",
					300: "oklch(92.81% 0.2304 126.09 / <alpha-value>)",
					400: "oklch(89.01% 0.2732 128.28 / <alpha-value>)",
					500: "oklch(81.22% 0.2579 130.72 / <alpha-value>)",
					600: "oklch(64.79% 0.2085 131.4 / <alpha-value>)",
					700: "oklch(55.89% 0.1788 131.45 / <alpha-value>)",
					800: "oklch(47.43% 0.1492 130.6 / <alpha-value>)",
					900: "oklch(42.01% 0.1327 130.98 / <alpha-value>)",
				},
			},
			fontFamily: {
				cartridge: [
					"Cartridge",
					"ui-rounded",
					"Hiragino Maru Gothic ProN",
					"Quicksand",
					"Comfortaa",
					"Manjari",
					"Arial Rounded MT",
					"Arial Rounded MT Bold",
					"Calibri",
					"source-sans-pro",
					"sans-serif",
				],
				"system-ui": ["system-ui", "sans-serif"],
				transitional: [
					"Charter",
					"Bitstream Charter",
					"Sitka Text",
					"Cambria",
					"serif",
				],
				"old-style": [
					"Iowan Old Style",
					"Palatino Linotype",
					"URW Palladio L",
					"P052",
					"serif",
				],
				humanist: [
					"Seravek",
					"Gill Sans Nova",
					"Ubuntu",
					"Calibri",
					"DejaVu Sans",
					"source-sans-pro",
					"sans-serif",
				],
				"geometric-humanist": [
					"Avenir",
					"Montserrat",
					"Corbel",
					"URW Gothic",
					"source-sans-pro",
					"sans-serif",
				],
				"classical-humanist": [
					"Optima",
					"Candara",
					"Noto Sans",
					"source-sans-pro",
					"sans-serif",
				],
				"neo-grotesque": [
					"Inter",
					"Roboto",
					"Helvetica Neue",
					"Arial Nova",
					"Nimbus Sans",
					"Arial",
					"sans-serif",
				],
				"monospace-slab-serif": ["Nimbus Mono PS", "Courier New", "monospace"],
				"monospace-code": [
					"ui-monospace",
					"Cascadia Code",
					"Source Code Pro",
					"Menlo",
					"Consolas",
					"DejaVu Sans Mono",
					"monospace",
				],
				industrial: [
					"Bahnschrift",
					"DIN Alternate",
					"Franklin Gothic Medium",
					"Nimbus Sans Narrow",
					"sans-serif-condensed",
					"sans-serif",
				],
				"rounded-sans": [
					"ui-rounded",
					"Hiragino Maru Gothic ProN",
					"Quicksand",
					"Comfortaa",
					"Manjari",
					"Arial Rounded MT",
					"Arial Rounded MT Bold",
					"Calibri",
					"source-sans-pro",
					"sans-serif",
				],
				"slab-serif": [
					"Rockwell",
					"Rockwell Nova",
					"Roboto Slab",
					"DejaVu Serif",
					"Sitka Small",
					"serif",
				],
				antique: [
					"Superclarendon",
					"Bookman Old Style",
					"URW Bookman",
					"URW Bookman L",
					"Georgia Pro",
					"Georgia",
					"serif",
				],
				didone: [
					"Didot",
					"Bodoni MT",
					"Noto Serif Display",
					"URW Palladio L",
					"P052",
					"Sylfaen",
					"serif",
				],
				handwritten: [
					"Segoe Print",
					"Bradley Hand",
					"Chilanka",
					"TSCu_Comic",
					"casual",
					"cursive",
				],
			},
			keyframes: {
				"fade-in": {
					"0%": {
						opacity: "0",
					},
					"100%": {
						opacity: "1",
					},
				},
				"single-ping": {
					"0%, 100%": { transform: "scale(1)", opacity: "1" },
					"75%": { transform: "scale(2)", opacity: "0" },
					"76%": { transform: "scale(1)", opacity: "0" },
				},
				"single-spin": {
					"50%": {
						transform: "scaleX(0)",
					},
				},
				"single-wobble": {
					"0%, 100%": {
						transform: "rotate(0deg)",
					},
					"25%, 75%": {
						transform: "rotate(-20deg)",
					},
					"50%": {
						transform: "rotate(20deg)",
					},
				},
				"slide-up": {
					"0%": {
						transform: "scale(.5) translateY(200%)",
						opacity: "0",
					},
					"100%": {
						transform: "scale(1)",
						opacity: "1",
					},
				},
				trace: {
					"0%": {
						strokeDasharray: "16",
						strokeDashoffset: "16",
					},
					"100%": {
						strokeDasharray: "16",
						strokeDashoffset: "0",
					},
				},
			},
			textShadow: {
				blue: "0 0 10px oklch(70.2% 0.192 234.1 / .3)",
				green: "0 0 10px oklch(81.2% 0.2579 130.7 / .3)",
				red: "0 0 10px oklch(64.33% 0.2908 26.26 / .2)",
				pink: "0 0 10px oklch(66.3% 0.3018 359.7 / .3)",
				light: "0 0 0 oklch(100% 0 0 / .6)",
				dark: "0 0 0 oklch(0 0 0 / .3)",
			},
			transitionTimingFunction: {
				"bounce-on-end": "cubic-bezier(0, 0, .5, 1.75)",
			},
			typography: () => ({
				melkat: {
					css: {
						"--tw-prose-links": "oklch(51.08% 0.1514 240.79)",
						"--tw-prose-invert-links": "oklch(64.12% 0.1898 239.60)",
					},
				},
			}),
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		plugin(({ matchUtilities, theme }) => {
			matchUtilities(
				{
					"text-shadow": (value) => ({
						textShadow: value,
					}),
				},
				{ values: theme("textShadow") },
			);
		}),
	],
};

export default config;
