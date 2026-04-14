---
title: 'AstroPaper 博客文章的动态 OG 图片生成'
description: '概述如何在 Astro 中生成动态 Open Graph 图片。'
pubDate: '2026-04-02'
authors:
  - simone-de-beauvoir
toc: true
tags:
  - astro
  - SEO
---

Open Graph 图片对于社交媒体分享至关重要。AstroScholar 可以自动为你生成这些图片！

## 工作原理

当博客文章的 frontmatter 中没有显式定义 `heroImage` 时，AstroScholar 会根据文章的标题和元数据自动生成一张动态图片。

这确保了每篇文章在 Twitter、LinkedIn 或 Facebook 等平台上分享时都能呈现出良好的视觉效果。
