/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				"nunito-sans": ["Nunito Sans", "sans-serif"],
				nunito: ["Nunito", "serif"],
				montserrat: ["Montserrat", "sans-serif"],
				"fira-code": ["Fira Code", "serif"],
				inter: ["Inter", "sans-serif"],
				"dm-sans": ["DM Sans", "sans-serif"],
			}
		},
	},
	plugins: [
		require('tailwindcss-animated')
	],
}
