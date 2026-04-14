<h1 align="center">Astro Scholar</h1>

<p align="center">
	A clean, modern Astro portfolio template for researchers, professors, students, and academic teams.
</p>

## Lighthouse

<p align="center">
	<img src=".github/lighthouse-score.png" alt="Lighthouse score showing 100 across all categories" width="900" />
</p>

## Why This Template

Most portfolio templates look generic.
This one is built for academic storytelling:

- Blog posts for ideas, notes, and essays
- Project pages for research work
- Publications section from BibTeX
- Team and author profiles
- Search and generated OG images

Built with Astro for speed, static output, and straightforward deployment.

## What You Get

- Astro + MDX content workflow
- Blog with table of contents and reading-friendly layout
- Projects and publications pages
- Team page and author data model
- RSS feed and sitemap generation
- Search indexing via Pagefind
- GitHub Pages deployment workflow
- PR preview deployment workflow

## Quick Start

1. Clone the repository.
2. Install dependencies.
3. Run the dev server.

```bash
npm install
npm run dev
```

Then open http://localhost:4321/astro-scholar

## Commands

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Build production site |
| `npm run preview` | Preview production build |
| `npm run astro -- <command>` | Run Astro CLI commands |

## Customization Guide

Update these files first:

- `src/consts.ts`: site title and global constants
- `src/data/authors.json`: author profiles
- `src/data/projects.json`: project entries
- `src/data/publications.bib`: publication list
- `src/content/blog/*.md`: blog posts
- `src/styles/global.css`: theme and typography

Layout and components:

- `src/layouts/BlogPost.astro`: post layout
- `src/components/Header.astro`: top navigation
- `src/components/Footer.astro`: footer

## Deployment

This repo is ready for GitHub Pages.

- `main` branch deploys via `.github/workflows/website-deploy.yml`
- Pull requests deploy preview sites via `.github/workflows/preview.yml`

Base path is configured in `astro.config.mjs`:

- default: `/astro-scholar`
- PR preview: `/astro-scholar/pr-previews/<PR_NUMBER>`

## Project Structure

```text
src/
	components/      Reusable UI components
	content/blog/    Markdown blog content
	data/            Authors, projects, publications
	layouts/         Page layouts
	pages/           Route files
	styles/          Global styles
	utils/           Utility helpers
public/
	fonts/           Webfonts and static assets
```

## Internationalization (i18n)

The site supports multiple languages out of the box. Currently available: **English** (default), **Hindi**, **Japanese**, **Korean**, **Simplified Chinese**, **Traditional Chinese**, **Russian**, and **Greek**. For languages not natively supported, a Google Translate fallback is available.

### How It Works

- **Astro's built-in i18n routing** handles URL prefixes (`/hi/`, `/ja/`) with fallback rewrite to English
- **UI text** is translated via dictionary keys in `src/i18n/ui.ts`
- **Blog posts** live in locale subfolders: `src/content/blog/hi/`, `src/content/blog/ja/`
- **About page** has separate locale files with translated prose: `src/pages/hi/about.astro`
- **Data-driven pages** (publications, projects, team, tags, archive) use the fallback rewrite and render translated UI text automatically

### Adding a New Language

Example: adding Portuguese (`pt`).

1. **Add locale to config** (`astro.config.mjs`):
   ```js
   i18n: {
     locales: ["en", "hi", "ja", "ko", "zh-cn", "zh-tw", "ru", "el", "pt"],
     fallback: { ..., pt: "en" },
   }
   ```

2. **Add language entry** (`src/i18n/ui.ts`):
   ```ts
   export const languages = {
     ..., pt: 'Português',
   };
   ```

3. **Add all translation keys** in `ui.ts` under a new `ko: { ... }` block. Copy the English keys and translate each value.

4. **Create translated about page**: `src/pages/pt/about.astro`

5. **Create blog route pages**:
   - `src/pages/pt/blog/[...page].astro` (copy from `hi/blog/[...page].astro`, change `'hi/'` to `'pt/'`)
   - `src/pages/pt/blog/[...slug].astro` (copy from `hi/blog/[...slug].astro`, change `'hi/'` to `'pt/'`)

6. **Translate blog posts**: Create `src/content/blog/pt/` with translated `.md` files (same filenames as English)

7. **Build and test**: `npm run build && npm run preview`

### Translating a Blog Post

1. Copy the English post from `src/content/blog/my-post.md`
2. Place it at `src/content/blog/{locale}/my-post.md` (e.g. `src/content/blog/hi/my-post.md`)
3. Translate the `title` and `description` in frontmatter
4. Keep `pubDate`, `authors`, `tags`, `heroImage` the same
5. Translate the body content

### AI Prompt for Generating Translations

Use this prompt with Claude, ChatGPT, or any AI assistant to generate translations:

```
I need to translate content for an academic portfolio website (Astro Scholar).
Target language: [LANGUAGE NAME]

## Task 1: UI Strings
Translate each value below naturally for an academic website.
Keep translations concise for navigation labels.

[Paste the English keys from src/i18n/ui.ts]

## Task 2: Blog Post
Translate this blog post to [LANGUAGE NAME].
- Translate the title and description in frontmatter
- Keep pubDate, authors, tags, heroImage unchanged
- For technical content: translate explanatory text but keep code blocks,
  LaTeX formulas, and technical terms (HTML, CSS, Astro, etc.) in English
- For prose content: translate everything naturally

[Paste the blog post content]

## Task 3: About Page
Translate this biography to [LANGUAGE NAME] for an academic portfolio:

[Paste the about page content]
```

### Google Translate Fallback

For languages not natively supported, click the globe icon in the header and select "Translate". This loads Google Translate on-demand to translate the page into any language. Native translations (Hindi, Japanese) always take priority for better quality and SEO.

## Community

- Contributing guide: [.github/CONTRIBUTING.md](.github/CONTRIBUTING.md)
- Code of conduct: [.github/CODE_OF_CONDUCT.md](.github/CODE_OF_CONDUCT.md)
- Security policy: [.github/SECURITY.md](.github/SECURITY.md)
- Pull request template: [.github/pull_request_template.md](.github/pull_request_template.md)

## Feedback & Suggestions

If you have any suggestions/feedback, you can contact me via [my email](contact@shravangoswami.com). Alternatively, feel free to open an issue if you find bugs or want to request new features.

## License

Licensed under the MIT [LICENSE](LICENSE), Copyright © 2026
