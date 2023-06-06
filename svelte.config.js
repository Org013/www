import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import rhExternalLinks from 'rehype-external-links';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx', '.md'],
	preprocess: [vitePreprocess(), mdsvex({
		rehypePlugins: [
			[rhExternalLinks, {
				target: '_blank',
				rel: ['nofollow', 'noopener', 'noreferrer'],
			}],
		],
		extensions: ['.svelte', '.svx', '.md'],
	})],
	kit: {
		adapter: adapter(),
	},
};

export default config;
