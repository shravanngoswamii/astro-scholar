---
title: '优化 Astro 构建'
description: '确保 Astro 站点快速构建和极速运行的技巧与窍门。'
pubDate: '2026-04-09'
authors:
  - shravan-goswami
toc: true
tags:
  - astro
  - performance
---

Astro 本身就非常快，但仍有一些方法可以进一步优化你的站点。

## 图片优化

使用 `astro:assets` 提供的 `<Image />` 组件，可以自动优化、调整大小并以 WebP 等现代格式提供图片。

## 预加载关键资源

预加载字体和关键 CSS 可以显著改善首次内容绘制（FCP）时间。
