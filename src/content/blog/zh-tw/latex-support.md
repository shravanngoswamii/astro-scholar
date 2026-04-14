---
title: 'Astro Scholar 的 LaTeX 數學支援'
description: '展示使用 remark-math 和 rehype-katex 實現的全新 LaTeX 數學渲染功能。'
pubDate: '2026-04-04'
tags: ['LaTeX', 'Math', 'Features']
---

歡迎使用 Astro Scholar 全新的 LaTeX 數學支援功能！本文將展示在 Markdown 檔案中撰寫數學公式的各種方式。

## 行內數學

你可以用單個錢號符號包裹來輕鬆撰寫行內數學公式。例如，著名的質能等價公式為 $E = mc^2$。

以下是更多行內數學的範例：

* 圓的面積：$A = \pi r^2$
* 畢氏定理：$a^2 + b^2 = c^2$
* 一個簡單的極限：$\lim_{x \to 0} \frac{\sin x}{x} = 1$

## 區塊數學

對於較大或較複雜的方程式，你可以使用雙錢號包裹來建立區塊數學公式。這會將方程式置中並獨立顯示在一行上。

以下是一元二次方程式的求根公式：

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

### 微積分

讓我們來看一些微積分的範例：

**導數：**

$$
f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}
$$

**積分：**

$$
\int_{a}^{b} x^2 dx = \left[ \frac{x^3}{3} \right]_{a}^{b} = \frac{b^3 - a^3}{3}
$$

### 矩陣

你也可以渲染矩陣：

$$
\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix}
$$

### 求和與乘積

$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$

$$
\prod_{i=1}^{n} i = n!
$$

盡情享受在部落格文章中撰寫優美的數學公式吧！
