---
title: 'Astro 빌드 최적화'
description: 'Astro 사이트를 빠르게 빌드하고 초고속으로 실행하기 위한 팁과 요령입니다.'
pubDate: '2026-04-09'
authors:
  - shravan-goswami
toc: true
tags:
  - astro
  - performance
---

Astro는 본질적으로 빠르지만, 사이트를 더욱 최적화할 수 있는 방법들이 있습니다.

## 이미지 최적화

`astro:assets`에서 제공하는 `<Image />` 컴포넌트를 사용하면 이미지를 자동으로 최적화하고, 크기를 조정하며, WebP와 같은 최신 포맷으로 제공할 수 있습니다.

## 중요 에셋 프리로딩

폰트와 중요 CSS를 프리로딩하면 First Contentful Paint(FCP)를 크게 개선할 수 있습니다.
