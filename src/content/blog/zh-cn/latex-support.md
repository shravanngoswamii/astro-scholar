---
title: 'Astro Scholar 中的 LaTeX 数学公式支持'
description: '演示使用 remark-math 和 rehype-katex 实现的全新 LaTeX 数学公式渲染功能。'
pubDate: '2026-04-04'
tags: ['LaTeX', 'Math', 'Features']
---

欢迎使用 Astro Scholar 全新的 LaTeX 数学公式支持功能！本文将演示在 Markdown 文件中编写数学方程式的各种方法。

## 行内公式

你可以用单个美元符号包裹行内数学公式。例如，著名的质能等价公式 $E = mc^2$。

以下是更多行内公式示例：

* 圆的面积：$A = \pi r^2$
* 勾股定理：$a^2 + b^2 = c^2$
* 一个简单的极限：$\lim_{x \to 0} \frac{\sin x}{x} = 1$

## 块级公式

对于较大或更复杂的方程式，可以使用双美元符号包裹块级公式。公式将独占一行并居中显示。

以下是一元二次方程求根公式：

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

### 微积分

来看一些微积分的例子：

**导数：**

$$
f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}
$$

**积分：**

$$
\int_{a}^{b} x^2 dx = \left[ \frac{x^3}{3} \right]_{a}^{b} = \frac{b^3 - a^3}{3}
$$

### 矩阵

你还可以渲染矩阵：

$$
\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix}
$$

### 求和与连乘

$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$

$$
\prod_{i=1}^{n} i = n!
$$

尽情在你的博客文章中书写优美的数学公式吧！
