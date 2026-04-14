---
title: 'Markdown 展示：程式碼區塊、表格、清單等'
description: '這是學術作品集部落格的參考文章，展示了本 Astro 設定所支援的 Markdown 功能。'
pubDate: '2026-04-05'
updatedDate: 'Apr 07 2026'
authors:
  - shravan-goswami
  - friedrich-nietzsche
  - simone-de-beauvoir
toc: true
---

本文是 `Academic-Portfolio` 部落格的即時 Markdown 參考。如果你主要想查看程式碼區塊的呈現效果，可以直接跳到下方的「程式碼區塊」章節。

## 標題與行內格式

Markdown 支援**粗體文字**、*斜體文字*、***複合強調***、~~刪除線~~，以及行內程式碼如 `npm run build`。

標準行內連結可正常使用，例如 [Astro](https://astro.build/)，參考式連結在較長的文章中也很好用，例如 [Astro 文件][astro-docs]。裸網址如 https://docs.astro.build 在此設定中也會被渲染為連結。

## 引用區塊

> 當原始碼保持可讀性且渲染後的頁面易於瀏覽時，Markdown 的效果最好。
>
> 這使得它特別適合技術筆記、學術寫作、變更紀錄和教學文章。
>
> <cite>Academic Portfolio Markdown 展示</cite>

## 提示區塊

這些提示框使用 Markdown 中的輕量 HTML，當你需要比純 Markdown 更豐富的編輯介面時非常實用。

<div class="callout" data-callout="note">
  <p><strong>備註：</strong> 用於中性的補充說明、假設條件或不應過度干擾主要內容流的編輯筆記。</p>
</div>

<div class="callout" data-callout="info">
  <p><strong>資訊：</strong> 適合提供事實背景、參考資料或幫助讀者了解方向的快速實作細節。</p>
</div>

<div class="callout" data-callout="tip">
  <p><strong>小技巧：</strong> 適合捷徑、最佳實踐和能節省讀者時間的小建議。</p>
</div>

<div class="callout" data-callout="success">
  <p><strong>成功：</strong> 適用於確認訊息、完成結果或任務成功後的順利路徑指示。</p>
</div>

<div class="callout" data-callout="warning">
  <p><strong>警告：</strong> 當某些操作可能失敗、表現異常或需要讀者在繼續前特別注意時使用。</p>
</div>

<div class="callout" data-callout="danger">
  <p><strong>危險：</strong> 保留給破壞性操作、不可逆步驟或高風險錯誤。</p>
</div>

## 清單

### 無序與有序清單

- 在 `src/content/blog` 中撰寫文章內容。
- 加入標題，讓目錄有實用的錨點。
- 在瀏覽器中檢視渲染後的結果。

1. 撰寫文章的 frontmatter。
2. 加入範例 Markdown 區塊。
3. 建置網站並確認頁面正常渲染。

### 巢狀清單

- Markdown 也能處理巢狀結構。
  - 這對大綱很有用。
  - 在記錄含有子步驟的步驟時也很方便。
- 這裡的目標只是讓渲染結果容易檢查。

### 任務清單

- [x] 新增範例部落格文章
- [x] 包含圍欄式程式碼區塊
- [x] 包含 Markdown 表格
- [ ] 日後用正式文章替換佔位內容

## 表格

| 功能 | 範例 | 此處支援 |
| :-- | :-- | :-: |
| 行內程式碼 | `` `astro dev` `` | 是 |
| 程式碼圍欄 | ```` ```ts ```` | 是 |
| 任務清單 | `- [x] done` | 是 |
| 註腳 | `[^1]` | 是 |

## 圖片與水平線

下方的圖片使用標準 Markdown 圖片語法，引用了儲存庫中的本地素材：

![學術作品集佔位圖片](../../../assets/blog-placeholder-about.jpg)

---

## 程式碼區塊

以下範例方便你比較目前主題中不同圍欄式程式碼區塊的樣式。每個區塊左側都會顯示語言標籤，右上角則有複製按鈕。

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

## Markdown 中的 HTML

當你需要純 Markdown 無法清楚表達的內容時，也可以使用原始 HTML。

<details>
  <summary>可展開的備註</summary>
  <p>這對於揭露事項、常見問題區段或文章中的選擇性實作筆記非常有用。</p>
</details>

## 註腳

註腳適合用於引用、旁註或快速說明。[^1]

[^1]: 此範本使用 Astro 的 Markdown 處理管線，在此版本中預設支援 GitHub 風格的 Markdown 功能。

[astro-docs]: https://docs.astro.build
