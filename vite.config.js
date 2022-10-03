import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	server: {
		fs: {
			allow: ['./static']
		}
	},
	plugins: [sveltekit()]
};

export default config;
