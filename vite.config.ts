import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import AutoImport from 'unplugin-auto-import/vite';
import SvelteImport from 'unplugin-svelte-components/vite';
import UnoCss from 'unocss/vite';

export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [
		SvelteImport({
			include: [
				/^(?!.*\/\+).*svelte/,

			],
			dirs: [
				'./src/lib',
			],
			dts: './src/lib/components.d.ts',
		}),
		AutoImport({
			include: [
				/\.svelte/,
				/\.svelte\?svelte/,
				/.[tj]sx?$/,
			],
			imports: [
				'svelte',
				'svelte/animate',
				'svelte/easing',
				'svelte/motion',
				'svelte/store',
				'svelte/transition',
			],
			dirs: [
				'./src/lib',
			],
			dts: './src/lib/imports.d.ts',
			eslintrc: {
				enabled: true,
				filepath: './.eslintrc-auto-import.json',
				globalsPropValue: true,
			},
		}),
		UnoCss(),
		sveltekit(),
	],
});
