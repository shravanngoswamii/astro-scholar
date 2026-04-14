---
title: 'Markdown 功能展示：代码块、表格、列表及更多'
description: '学术作品集博客的 Markdown 参考文章，展示本 Astro 配置所支持的各种 Markdown 功能。'
pubDate: '2026-04-05'
updatedDate: 'Apr 07 2026'
authors:
  - shravan-goswami
  - friedrich-nietzsche
  - simone-de-beauvoir
toc: true
---

本文是 `Academic-Portfolio` 博客的 Markdown 实时参考。如果你主要想查看代码块的显示效果，可以直接跳转到下方的"代码块"部分。

## 标题与行内格式

Markdown 支持 **粗体文本**、*斜体文本*、***组合强调***、~~删除线~~，以及行内代码如 `npm run build`。

标准行内链接可以正常使用，例如 [Astro](https://astro.build/)，引用式链接在较长的文章中也很好用，例如 [Astro 文档][astro-docs]。裸链接如 https://docs.astro.build 在本配置中也会被渲染为可点击的链接。

## 引用块

> Markdown 的优势在于源文件保持可读性，渲染后的页面也便于浏览。
>
> 这使得它特别适用于技术笔记、学术写作、变更日志和教程。
>
> <cite>Academic Portfolio Markdown 展示</cite>

## 提示块

这些提示块使用了 Markdown 中的轻量级 HTML，当你需要比纯 Markdown 更丰富的编辑界面时，这种方式非常好用。

<div class="callout" data-callout="note">
  <p><strong>注意：</strong> 用于中性的附加说明、前提假设或不应过多打断正文的编辑备注。</p>
</div>

<div class="callout" data-callout="info">
  <p><strong>信息：</strong> 适合提供事实背景、参考资料或帮助读者快速了解实现细节。</p>
</div>

<div class="callout" data-callout="tip">
  <p><strong>提示：</strong> 适合分享快捷方式、最佳实践和节省读者时间的小技巧。</p>
</div>

<div class="callout" data-callout="success">
  <p><strong>成功：</strong> 用于确认信息、已完成的结果或任务成功后的操作指南。</p>
</div>

<div class="callout" data-callout="warning">
  <p><strong>警告：</strong> 当某些操作可能失败、出现意外行为或需要读者格外注意时使用。</p>
</div>

<div class="callout" data-callout="danger">
  <p><strong>危险：</strong> 仅用于破坏性操作、不可逆步骤或高风险错误。</p>
</div>

## 列表

### 无序列表和有序列表

- 在 `src/content/blog` 中撰写文章内容。
- 添加标题，使目录生成有用的锚点。
- 在浏览器中查看渲染输出。

1. 编写文章的 frontmatter。
2. 添加示例 Markdown 块。
3. 构建站点并确认页面渲染正常。

### 嵌套列表

- Markdown 还可以处理嵌套结构。
  - 这对于大纲很有用。
  - 在记录带有子步骤的操作时也很方便。
- 这里的目的只是为了方便检查渲染效果。

### 任务列表

- [x] 添加示例博客文章
- [x] 包含围栏代码块
- [x] 包含 Markdown 表格
- [ ] 稍后用真实文章替换占位内容

## 表格

| 功能 | 示例 | 此处是否支持 |
| :-- | :-- | :-: |
| 行内代码 | `` `astro dev` `` | 是 |
| 代码围栏 | ```` ```ts ```` | 是 |
| 任务列表 | `- [x] done` | 是 |
| 脚注 | `[^1]` | 是 |

## 图片与水平线

下面的图片使用了标准的 Markdown 图片语法，引用了仓库中的本地资源：

![学术作品集占位图片](../../../assets/blog-placeholder-about.jpg)

---

## 代码块

以下示例方便你比较当前主题中不同围栏代码块的样式。每个代码块左侧显示语言标签，右上角有复制按钮。

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
- 浏览器默认样式可能难以阅读。
+ 模板感知的排版样式使展示更容易审阅。
```

## Markdown 中的 HTML

当 Markdown 本身无法清晰表达时，你也可以使用原始 HTML。

<details>
  <summary>可展开的注释</summary>
  <p>这对于文章中的披露信息、常见问题解答或可选的实现说明非常有用。</p>
</details>

## 脚注

脚注便于添加引用、旁注或简短说明。[^1]

[^1]: 本模板使用 Astro 的 Markdown 管道，当前版本默认支持 GitHub 风格的 Markdown 功能。

[astro-docs]: https://docs.astro.build
