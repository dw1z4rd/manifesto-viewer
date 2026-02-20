/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				serif: ['Crimson Text', 'Georgia', 'serif'],
				sans: ['Inter', 'system-ui', 'sans-serif']
			},
			colors: {
				paper: {
					bg: '#fafafa',
					text: '#1a1a1a',
					muted: '#4a5568',
					border: '#d1d5db'
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
