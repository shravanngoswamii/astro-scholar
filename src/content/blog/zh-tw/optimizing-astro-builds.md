---
title: '最佳化 Astro 建置'
description: '確保你的 Astro 網站快速建置並極速運行的技巧與訣竅。'
pubDate: '2026-04-09'
authors:
  - shravan-goswami
toc: true
tags:
  - astro
  - performance
---

Astro 本身就非常快速，但仍有一些方法可以進一步最佳化你的網站。

## 圖片最佳化

使用 `astro:assets` 提供的 `<Image />` 元件，可以自動最佳化、調整大小，並以 WebP 等現代格式提供圖片。

## 預載入關鍵資源

預載入字型和關鍵 CSS 可以顯著改善你的首次內容繪製（FCP）時間。
