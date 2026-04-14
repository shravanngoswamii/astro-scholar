---
title: 'AstroPaper 部落格文章的動態 OG 圖片生成'
description: '概述如何在 Astro 中生成動態 Open Graph 圖片。'
pubDate: '2026-04-02'
authors:
  - simone-de-beauvoir
toc: true
tags:
  - astro
  - SEO
---

Open Graph 圖片對於社群媒體分享至關重要。AstroScholar 可以自動為你生成這些圖片！

## 運作原理

當部落格文章的 frontmatter 中沒有明確定義 `heroImage` 時，AstroScholar 會自動根據文章的標題和中繼資料動態生成一張圖片。

這確保了每一篇文章在 Twitter、LinkedIn 或 Facebook 等平台上分享時都能呈現出色的外觀。
