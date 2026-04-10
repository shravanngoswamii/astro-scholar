// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
	i18n: {
		locales: ["en", "hi", "ja"],
		defaultLocale: "en",
		fallback: {
			hi: "en",
			ja: "en"
		},
		routing: {
			prefixDefaultLocale: false,
			fallbackType: "rewrite"
		}
	},
	site: 'https://shravangoswami.com',
	base: process.env.BASE_PATH || '/astro-scholar',
	integrations: [
		mdx(),
		sitemap()
	],
	markdown: {
		shikiConfig: {
			themes: {
				light: 'github-light',
				dark: 'github-dark',
			},
		},
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex]
	},
	build: {
		inlineStylesheets: 'always',
	},
});