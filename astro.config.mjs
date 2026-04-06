// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import remarkToc from 'remark-toc';

// https://astro.build/config
export default defineConfig({
	site: 'https://shravangoswami.com',
	base: process.env.BASE_PATH || '/Academic-Portfolio',
	integrations: [mdx(), sitemap()],
	markdown: {
		remarkPlugins: [[remarkToc, { heading: 'Table of Contents' }]],
	},
	build: {
		inlineStylesheets: 'always',
	},
});
