/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./**/*.html'],
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
		},
		extend: {
			backgroundImage: {
				'chair-img': "url('../img/main-chair.png')",
			},
			screens: {
				sm: '480px',
			},
			fontFamily: {
				sans: ['Inter'],
				clash: ['Clash Display'],
				satoshi: ['Satoshi'],
			},
			container: {
				center: true,
			},
		},
	},
	plugins: [],
}
