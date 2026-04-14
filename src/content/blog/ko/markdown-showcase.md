---
title: '마크다운 쇼케이스: 코드 블록, 표, 목록 등'
description: '이 Astro 설정에서 지원하는 마크다운 기능을 시연하는 Academic Portfolio 블로그의 레퍼런스 게시물입니다.'
pubDate: '2026-04-05'
updatedDate: 'Apr 07 2026'
authors:
  - shravan-goswami
  - friedrich-nietzsche
  - simone-de-beauvoir
toc: true
---

이 게시물은 `Academic-Portfolio` 블로그를 위한 실시간 마크다운 레퍼런스입니다. 코드 블록이 어떻게 보이는지 주로 확인하고 싶으시다면, 아래의 "코드 블록" 섹션으로 바로 이동하세요.

## 제목과 인라인 서식

마크다운은 **굵은 텍스트**, *기울임 텍스트*, ***결합된 강조***, ~~취소선~~, 그리고 `npm run build`와 같은 인라인 코드를 지원합니다.

표준 인라인 링크가 작동합니다. 예를 들어 [Astro](https://astro.build/)와 같이 사용할 수 있으며, 참조 스타일 링크도 긴 글에서 잘 작동합니다. 예를 들면 [Astro 문서][astro-docs]와 같습니다. https://docs.astro.build 와 같은 일반 URL도 이 설정에서 링크로 렌더링됩니다.

## 인용 블록

> 마크다운은 소스가 읽기 쉽고 렌더링된 페이지가 보기 좋을 때 가장 잘 작동합니다.
>
> 이러한 특성 덕분에 기술 노트, 학술 글쓰기, 변경 로그, 튜토리얼에 특히 유용합니다.
>
> <cite>Academic Portfolio 마크다운 쇼케이스</cite>

## 콜아웃 블록

이 콜아웃들은 마크다운 안에서 경량 HTML을 사용하며, 일반 마크다운이 제공하는 것보다 더 풍부한 편집 UI가 필요할 때 유용합니다.

<div class="callout" data-callout="note">
  <p><strong>참고:</strong> 본문 흐름을 크게 방해하지 않아야 하는 중립적인 부가 정보, 전제 조건, 또는 편집 메모에 사용하세요.</p>
</div>

<div class="callout" data-callout="info">
  <p><strong>정보:</strong> 사실적인 맥락, 참고 자료, 또는 독자가 방향을 잡는 데 도움이 되는 간단한 구현 세부 사항에 적합합니다.</p>
</div>

<div class="callout" data-callout="tip">
  <p><strong>팁:</strong> 단축키, 모범 사례, 독자의 시간을 절약해 주는 편의 제안에 이상적입니다.</p>
</div>

<div class="callout" data-callout="success">
  <p><strong>성공:</strong> 확인, 완료된 결과, 또는 작업이 성공한 후의 정상 경로 안내에 유용합니다.</p>
</div>

<div class="callout" data-callout="warning">
  <p><strong>경고:</strong> 실패할 수 있거나, 예상치 못한 동작을 하거나, 독자가 계속하기 전에 추가 주의가 필요한 경우에 사용하세요.</p>
</div>

<div class="callout" data-callout="danger">
  <p><strong>위험:</strong> 파괴적인 작업, 되돌릴 수 없는 단계, 또는 고위험 실수에 대해 사용하세요.</p>
</div>

## 목록

### 비순서 및 순서 목록

- `src/content/blog`에서 게시물 콘텐츠를 작성합니다.
- 목차에 유용한 앵커가 생기도록 제목을 추가합니다.
- 브라우저에서 렌더링된 출력을 검토합니다.

1. 글의 frontmatter를 작성합니다.
2. 샘플 마크다운 블록을 추가합니다.
3. 사이트를 빌드하고 페이지가 깔끔하게 렌더링되는지 확인합니다.

### 중첩 목록

- 마크다운은 중첩 구조도 처리할 수 있습니다.
  - 이것은 개요 작성에 유용합니다.
  - 하위 항목이 있는 단계를 문서화할 때도 도움이 됩니다.
- 여기서의 목표는 단순히 렌더링을 검사하기 쉽게 만드는 것입니다.

### 작업 목록

- [x] 샘플 블로그 게시물 추가
- [x] 펜스 코드 블록 포함
- [x] 마크다운 표 포함
- [ ] 나중에 플레이스홀더 콘텐츠를 실제 글로 교체

## 표

| 기능 | 예시 | 여기서 지원 |
| :-- | :-- | :-: |
| 인라인 코드 | `` `astro dev` `` | 예 |
| 코드 펜스 | ```` ```ts ```` | 예 |
| 작업 목록 | `- [x] done` | 예 |
| 각주 | `[^1]` | 예 |

## 이미지와 수평선

아래 이미지는 저장소의 로컬 에셋을 사용하는 표준 마크다운 이미지 구문입니다:

![Academic portfolio 플레이스홀더 이미지](../../../assets/blog-placeholder-about.jpg)

---

## 코드 블록

다음 예시들을 통해 현재 테마에서 다양한 펜스 코드 블록 스타일을 쉽게 비교할 수 있습니다. 각 블록은 왼쪽에 언어 표시가, 오른쪽 상단에 복사 버튼이 표시됩니다.

```bash
npm install
npm run dev
npm run build
```

```ts
type Publication = {
  title: string;
  year: number;
  tags: string[];
};

const recentPublications = (items: Publication[]) =>
  items.filter((item) => item.year >= 2024);
```

```astro
---
const highlights = ['Markdown', 'Shiki code blocks', 'Generated TOC'];
---

<ul>
  {highlights.map((item) => <li>{item}</li>)}
</ul>
```

```diff
- Browser defaults can be hard to scan.
+ Template-aware prose styles make the showcase easier to review.
```

## 마크다운 안의 HTML

일반 마크다운만으로는 깔끔하게 표현할 수 없는 것이 필요할 때 원시 HTML도 사용할 수 있습니다.

<details>
  <summary>펼쳐서 보기</summary>
  <p>이것은 게시물 내에서 공개 사항, FAQ 섹션, 또는 선택적 구현 메모에 유용합니다.</p>
</details>

## 각주

각주는 인용, 부가 설명, 또는 간단한 명확화에 유용합니다.[^1]

[^1]: 이 템플릿은 Astro의 마크다운 파이프라인을 사용하고 있으며, 이 버전에서는 기본적으로 GitHub 스타일 마크다운 기능을 지원합니다.

[astro-docs]: https://docs.astro.build
