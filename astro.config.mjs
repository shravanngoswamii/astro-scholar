// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://shravangoswami.com',
	base: process.env.BASE_PATH || '/Academic-Portfolio',
	integrations: [mdx(), sitemap()],
	build: {
		inlineStylesheets: 'always',
	},
});