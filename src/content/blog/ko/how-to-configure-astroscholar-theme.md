---
title: 'AstroScholar 테마 설정 방법'
description: 'AstroScholar 테마를 설정하는 방법에 대한 종합 가이드입니다.'
pubDate: '2026-04-03'
authors:
  - shravan-goswami
toc: true
tags:
  - astro
  - tutorial
  - theme
---

AstroScholar 테마 설정은 간단합니다. 이 가이드에서는 `consts.ts` 설정, 내비게이션, 그리고 다양한 컬렉션에 콘텐츠를 추가하는 방법을 안내해 드리겠습니다.

## 시작하기

먼저 `npm install`을 실행하여 필요한 의존성이 설치되어 있는지 확인하세요.

그런 다음 `src/consts.ts` 파일을 열어 기본 사이트 제목, 설명, 소셜 링크를 수정합니다.

```ts
export const SITE_TITLE = 'My Academic Portfolio';
export const SITE_DESCRIPTION = 'The academic portfolio of John Doe.';
```

## 저자 추가하기

`src/content/data/authors.json` 파일에서 저자를 관리할 수 있습니다. 각 저자는 `id`, `name`을 필수로 가져야 하며, 선택적으로 `avatar`, `url`, `affiliation`을 추가할 수 있습니다.
