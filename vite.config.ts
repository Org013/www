import path from 'node:path';
import fs from 'node:fs';
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
			external: [
				...findPathsByExtention(path.join(__dirname, 'src'), '.svx').map((filePath) => {
					return {
						from: filePath,
						names: [
							`default as ${captalize(getFileName(filePath))}Svx`,
						],
						defaultImport: false,
					};
				}),
			],
			dirs: [
				'./src/**/*',
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
				'./src/**/*',
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

function findPathsByExtention(directory: string, extention: string): string[] {
	const file: string[] = [];
	const directoryFiles = fs.readdirSync(directory);

	for (const directoryFile of directoryFiles) {
		const filePath = path.join(directory, directoryFile);

		if (fs.statSync(filePath).isDirectory())
			file.push(...findPathsByExtention(filePath, extention));

		else if (path.extname(filePath) === extention)
			file.push(filePath);
	}

	return file;
}

function getFileName(filePath: string): string {
	return path.basename(filePath).replace(path.extname(filePath), '');
}

function captalize(string: string): string {
	return `${string[0].toUpperCase()}${string.substring(1, string.length)}`;
}
