---
title: '如何配置 AstroScholar 主题'
description: '关于配置 AstroScholar 主题的全面指南。'
pubDate: '2026-04-03'
authors:
  - shravan-goswami
toc: true
tags:
  - astro
  - tutorial
  - theme
---

配置 AstroScholar 主题非常简单。在本指南中，我们将逐步介绍 `consts.ts` 配置、导航设置以及如何向各个内容集合中添加内容。

## 快速开始

首先，运行 `npm install` 确保已安装所有必要的依赖项。

然后，打开 `src/consts.ts`，修改默认的站点标题、描述和社交链接。

```ts
export const SITE_TITLE = 'My Academic Portfolio';
export const SITE_DESCRIPTION = 'The academic portfolio of John Doe.';
```

## 添加作者

你可以在 `src/content/data/authors.json` 文件中管理作者信息。每位作者应包含 `id`、`name`，以及可选的 `avatar`、`url` 和 `affiliation` 字段。
