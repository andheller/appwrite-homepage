const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',

	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'ui-sans-serif', 'system-ui']
			},
			colors: {
				primary: '#f02e65',
				primary_light: '#f54b7b'
			}
		}
	},

	plugins: []
};

module.exports = config;
