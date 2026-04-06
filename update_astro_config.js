const fs = require('fs');

let content = fs.readFileSync('astro.config.mjs', 'utf-8');

// Add remark-toc import if it doesn't exist
if (!content.includes('remark-toc')) {
  content = content.replace("import { defineConfig } from 'astro/config';", "import { defineConfig } from 'astro/config';\nimport remarkToc from 'remark-toc';");

  // Add remarkPlugins to markdown config
  const markdownConfig = `markdown: {
		remarkPlugins: [[remarkToc, { heading: 'Table of Contents' }]],
	},`;

  content = content.replace("build: {", `${markdownConfig}\n\tbuild: {`);
  fs.writeFileSync('astro.config.mjs', content);
}
