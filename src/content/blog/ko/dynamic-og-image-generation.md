---
title: 'AstroPaper 블로그 게시물의 동적 OG 이미지 생성'
description: 'Astro에서 동적 Open Graph 이미지를 생성하는 방법에 대한 개요입니다.'
pubDate: '2026-04-02'
authors:
  - simone-de-beauvoir
toc: true
tags:
  - astro
  - SEO
---

Open Graph 이미지는 소셜 미디어 공유에 매우 중요합니다. AstroScholar는 이러한 이미지를 자동으로 생성해 줍니다!

## 작동 원리

블로그 게시물의 frontmatter에 `heroImage`가 명시적으로 정의되어 있지 않은 경우, AstroScholar는 게시물의 제목과 메타데이터를 기반으로 이미지를 동적으로 생성하는 방식으로 대체합니다.

이를 통해 모든 게시물이 Twitter, LinkedIn, Facebook과 같은 플랫폼에서 공유될 때 훌륭하게 표시됩니다.
