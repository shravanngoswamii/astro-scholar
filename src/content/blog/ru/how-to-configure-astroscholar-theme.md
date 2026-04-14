---
title: 'Как настроить тему AstroScholar'
description: 'Подробное руководство по настройке темы AstroScholar.'
pubDate: '2026-04-03'
authors:
  - shravan-goswami
toc: true
tags:
  - astro
  - tutorial
  - theme
---

Настройка темы AstroScholar проста и понятна. В этом руководстве мы рассмотрим конфигурацию `consts.ts`, навигацию и добавление контента в различные коллекции.

## Начало работы

Прежде всего убедитесь, что все необходимые зависимости установлены, выполнив команду `npm install`.

Затем откройте файл `src/consts.ts` и измените заголовок сайта по умолчанию, описание и ссылки на социальные сети.

```ts
export const SITE_TITLE = 'My Academic Portfolio';
export const SITE_DESCRIPTION = 'The academic portfolio of John Doe.';
```

## Добавление авторов

Вы можете управлять авторами в файле `src/content/data/authors.json`. Каждый автор должен иметь поля `id`, `name`, а также опционально `avatar`, `url` и `affiliation`.
