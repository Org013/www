import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx', '.md'],
	preprocess: [vitePreprocess(), mdsvex({
		extensions: ['.svelte', '.svx', '.md'],
	})],
	kit: {
		adapter: adapter(),
		alias: {
			$assets: './src/assets',
		},
	},
};

export default config;
