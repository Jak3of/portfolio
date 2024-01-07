/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			'yanone': ['yanone', 'fallbackFont'],
			'titilium': ['titilium', 'fallbackFont'],
			'finger': ['finger', 'fallbackFont']
		}
	},
	plugins: [],
}
