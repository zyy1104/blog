---
title: 伪元素加角标、复习BFC
date: 2021-12-03
sidebar: auto
categories:
- 开发记录
author: 白熊
---

```
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style type="text/css">
			.card {
			      position: relative;
			      width: 300px;
			      height: 100px;
			      background-color: orange;
			      overflow: hidden;
			    }
			    .card::after {
			      content: '进行中';
			      position: absolute;
			      right: -28px;
			      top: 14px;
			      height: 20px;
			      width: 100px;
			      background-color: green;
			      transform: rotate(45deg);
			      text-align: center;
				  color: white;
			    }
		</style>
	</head>
	<body>
		<div class="card">
			
		</div>
	</body>
</html>

```
---

## Box：css布局的基本单位
Box 是 CSS 布局的对象和基本单位， 直观点来说，就是一个页面是由很多个 Box 组成的。元素的类型和 display 属性，决定了这个 Box 的类型。 不同类型的 Box， 会参与不同的 Formatting Context（一个决定如何渲染文档的容器），因此Box内的元素会以不同的方式渲染。让我们看看有哪些盒子：

block-level box:display 属性为 block, list-item, table 的元素，会生成 block-level box。并且参与 block fomatting context；
inline-level box:display 属性为 inline, inline-block, inline-table 的元素，会生成 inline-level box。并且参与 inline formatting context；
run-in box: css3 中才有， 这儿先不讲了。
Formatting Context
Formatting context 是 W3C CSS2.1 规范中的一个概念。它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。最常见的 Formatting context 有 Block fomatting context (简称BFC)和 Inline formatting context (简称IFC)。

> BFC是一个独立的布局环境，其中的元素布局是不受外界的影响，并且在一个BFC中，块盒与行盒（行盒由一行中所有的内联元素所组成）都会垂直的沿着其父元素的边框排列。

## BFC的布局规则
- 内部的Box会在垂直方向，一个接一个地放置。

- Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠。

- 每个盒子（块盒与行盒）的margin box的左边，与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。

- BFC的区域不会与float box重叠。

- BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。

- 计算BFC的高度时，浮动元素也参与计算。

## 如何创建BFC
- float的值不是none
- position的值不是static或者relative
- display的值是inline-block、table-cell、flex、table-caption或者inline-flex
- overflow的值不是visible

## BFC的作用
- 利用BFC避免margin重叠
- 自适应两栏布局
- 清除浮动


