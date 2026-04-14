---
title: '如何設定 AstroScholar 主題'
description: 'AstroScholar 主題設定的完整指南。'
pubDate: '2026-04-03'
authors:
  - shravan-goswami
toc: true
tags:
  - astro
  - tutorial
  - theme
---

設定 AstroScholar 主題非常簡單。在本指南中，我們將逐步介紹 `consts.ts` 的設定、導覽列配置，以及如何向各個內容集合中新增內容。

## 開始使用

首先，執行 `npm install` 確保已安裝所有必要的相依套件。

然後，開啟 `src/consts.ts` 並修改預設的網站標題、描述和社群連結。

```ts
export const SITE_TITLE = 'My Academic Portfolio';
export const SITE_DESCRIPTION = 'The academic portfolio of John Doe.';
```

## 新增作者

你可以在 `src/content/data/authors.json` 檔案中管理作者資訊。每位作者應包含 `id`、`name`，以及可選的 `avatar`、`url` 和 `affiliation` 欄位。
