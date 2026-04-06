const fs = require('fs');
const path = require('path');

const blogDir = 'src/content/blog';
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));

for (const file of files) {
  const filePath = path.join(blogDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Find where frontmatter ends
  const frontmatterEndMatch = content.match(/---\n([\s\S]*?)---\n/);

  if (frontmatterEndMatch) {
    const frontmatterBlock = frontmatterEndMatch[0];
    const restOfContent = content.slice(frontmatterBlock.length);

    // Only add if not already there
    if (!restOfContent.trimStart().startsWith('## Table of Contents')) {
      const newContent = frontmatterBlock + '\n## Table of Contents\n\n' + restOfContent;
      fs.writeFileSync(filePath, newContent);
      console.log(`Added TOC heading to ${file}`);
    }
  }
}
