/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				serif: ['Crimson Text', 'Georgia', 'Baskerville', 'serif'],
				sans: ['Inter', 'system-ui', 'sans-serif'],
				mono: ['IBM Plex Mono', 'Courier New', 'monospace']
			},
			colors: {
				academic: {
					cream: '#faf9f6',
					paper: '#fffef9',
					ink: '#1a1614',
					muted: '#5a5654',
					accent: '#2d4a6d',
					'accent-light': '#4a6fa5',
					border: '#d8d3cc'
				}
			},
			typography: {
				DEFAULT: {
					css: {
						'--tw-prose-body': '#1a1614',
						'--tw-prose-headings': '#1a1614',
						'--tw-prose-links': '#2d4a6d',
						'--tw-prose-bold': '#1a1614',
						'--tw-prose-quotes': '#5a5654'
					}
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
