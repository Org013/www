import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetUno,
	presetWebFonts,
	transformerDirectives,
	transformerVariantGroup,
} from 'unocss';
import extractorSvelte from '@unocss/extractor-svelte';

export default defineConfig({
	include: [
		/\.svelte/,
		/\.svelte\?svelte/,
		/\.svx/,
		/\.svx\?svx/,
		/.[tj]sx?$/,
	],
	presets: [
		presetUno(),
		presetAttributify(),
		presetIcons({
			collections: {
				solar: () => import('@iconify-json/solar/icons.json').then(i => i.default as any),
				spinners: () => import('@iconify-json/svg-spinners/icons.json').then(i => i.default as any),
			},
		}),
		presetWebFonts({
			fonts: {
				poppins: {
					name: 'Poppins',
					provider: 'bunny',
				},
				sans: [{
					name: 'Cal Sans',
					provider: 'none',
				}],
			},
		}),
	],
	transformers: [
		transformerDirectives(),
		transformerVariantGroup(),
	],
	extractors: [
		extractorSvelte(),
	],
});
