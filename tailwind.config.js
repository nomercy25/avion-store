/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./**/*.html'],
	theme: {
		extend: {
			backgroundImage: {
				'chair-img': "url('../img/main-chair.png')",
			},
			fontFamily: {
				sans: ['Inter'],
				clash: ['Clash Display'],
				satoshi: ['Satoshi'],
			},
			container: {
				center: true,
				screens: {
					xs: '320px',
					sm: '480px',
					md: '768px',
					lg: '1024px',
					xl: '1440px',
				},
			},
		},
	},
	plugins: [],
}
