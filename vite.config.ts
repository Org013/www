import path from 'node:path';
import fs from 'node:fs';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import AutoImport from 'unplugin-auto-import/vite';
import SvelteImport from 'unplugin-svelte-components/vite';
import UnoCss from 'unocss/vite';
import svg from '@poppanator/sveltekit-svg';

export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [
		SvelteImport({
			include: [
				/\.svelte/,
				/\.svelte\?svelte/,
			],
			external: [
				...findPathsByExtension(path.join(__dirname, 'src'), '.svx').map((filePath) => {
					return {
						from: filePath,
						names: [
							`default as ${capitalize(getFileName(filePath))}Svx`,
						],
						defaultImport: false,
					};
				}),
				...findPathsByExtension(path.join(__dirname, 'src'), '.md').map((filePath) => {
					return {
						from: filePath,
						names: [
							`default as ${capitalize(getFileName(filePath))}Md`,
						],
						defaultImport: false,
					};
				}),
				...findPathsByExtension(path.join(__dirname, 'src'), '.svg').map((filePath) => {
					return {
						from: filePath,
						names: [
							`default as ${getFileName(filePath).split('-').map(s => capitalize(s)).join('')}Svg`,
						],
						defaultImport: false,
					};
				}),
			],
			dirs: [
				'./src/**/*',
			],
			importPathTransform: (importPath) => {
				if (path.extname(importPath) === '.svg')
					return `${importPath}?component`;
				if (getFileName(importPath).startsWith('+'))
					return '';
				else return importPath;
			},
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
		svg(),
		sveltekit(),
	],
});

function findPathsByExtension(directory: string, extension: string): string[] {
	const file: string[] = [];
	const directoryFiles = fs.readdirSync(directory);

	for (const directoryFile of directoryFiles) {
		const filePath = path.join(directory, directoryFile);

		if (fs.statSync(filePath).isDirectory())
			file.push(...findPathsByExtension(filePath, extension));

		else if (path.extname(filePath) === extension)
			file.push(filePath);
	}

	return file;
}

function getFileName(filePath: string): string {
	return path.basename(filePath).replace(path.extname(filePath), '');
}

function capitalize(string: string): string {
	return `${string[0].toUpperCase()}${string.substring(1, string.length)}`;
}
