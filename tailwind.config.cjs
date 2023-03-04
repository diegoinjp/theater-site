/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			maxWidth: {
				layout: "65rem",
			},
			colors: {
				main: {
					light: "hsl(252.5, 94.7%, 85.1%)",
					lighter: "hsl(252, 91.3%, 95.5%)",
					dark: "hsl(263.4, 50.3%, 42.2%)",
					darker: "hsl(263.5, 50.4%, 34.9%)"
				},
				back: {
					light: "hsl(250, 100%, 98.6%)",
					dark: "hsl(252, 47.4%, 11.2%)"
				}
			}
		},
	},
	plugins: [],
	darkMode: 'class'
}
