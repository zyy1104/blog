---
title: Grid布局记录
date: 2021-12-01
sidebar: auto
categories:
- 学习记录
author: 白熊
---

# 一、Grid概述
Grid 布局与 Flex 布局有一定的相似性，都可以指定容器内部多个项目的位置。但是，它们也存在重大区别。

Flex 布局是轴线布局，只能指定"项目"针对轴线的位置，可以看作是一维布局。Grid 布局则是将容器划分成"行"和"列"，产生单元格，然后指定"项目所在"的单元格，可以看作是二维布局。Grid 布局远比 Flex 布局强大。

# 二、基本概念
## 2.1 容器和项目
采用网格布局的区域，称为"容器"（container）。容器内部采用网格定位的子元素，称为"项目"（item）。
## 2.2 行和列
容器里面的水平区域称为"行"（row），垂直区域称为"列"（column）。
## 2.3 单元格
行和列的交叉区域，称为"单元格"（cell）。

正常情况下，n行和m列会产生n x m个单元格。比如，3行3列会产生9个单元格。
## 2.4 网格线
划分网格的线，称为"网格线"（grid line）。水平网格线划分出行，垂直网格线划分出列。

正常情况下，n行有n + 1根水平网格线，m列有m + 1根垂直网格线，比如三行就有四根水平网格线。
# 三、容器属性
## 3.1 display
display: grid指定一个容器采用网格布局。
默认情况下，容器元素都是块级元素，但也可以设成行内元素（display: inline-grid）



> 注意，设为网格布局以后，容器子元素（项目）的float、display: inline-block、display: table-cell、vertical-align和column-*等设置都将失效。

## 3.2 grid-template-rows, grid-template-columns, grid-template
grid-template-columns属性定义每一列的列宽，grid-template-rows属性定义每一行的行高。

```
display: grid;
grid-template-rows: 100px 100px 100px;
grid-template-columns: 33.33% 33.33% 33.33%;

- 1 repeat
repeat()函数，简化重复的值。

grid-template-rows: repeat(3, 33.33%);
grid-template-rows: repeat(3, 100px);
grid-template-rows: repeat(3, 10px 20px 30px);

- 2 auto-fill
有时，单元格的大小是固定的，但是容器的大小不确定。如果希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用auto-fill关键字表示自动填充。
grid-template-columns: repeat(auto-fill, 100px);

- 3 fr关键字
为了方便表示比例关系，网格布局提供了fr关键字（fraction 的缩写，意为"片段"）。如果两列的宽度分别为1fr和2fr，就表示后者是前者的两倍。

grid-template-rows: 1fr 2fr;

fr可以与绝对长度的单位结合使用，这时会非常方便。

grid-template-rows: 10px 1fr 2fr;

思考：用来做自适应布局。
- 4 minmax()
minmax()函数产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。

grid-template-columns: 1fr 1fr minmax(100px, 1fr);

- 5 auto关键字
auto关键字表示由浏览器自己决定长度。

grid-template-columns: 100px auto 100px;

- 6 网格线的名称
grid-template-columns属性和grid-template-rows属性里面，还可以使用方括号，指定每一根网格线的名字，方便以后的引用。
网格布局允许同一根线有多个名字，比如[fifth-line row-5]。

grid-template-columns: [c1] 10px [c2] 10px [c3 c-3]

- 7 布局实例
两栏布局
display: grid;
grid-template-columns: 30% 70%;

空间居中布局
display: grid;
place-items: center;

三明治布局
display: grid;
grid-template-rows: auto 1fr auto;
// grid-template-rows: auto minmax(100px, 1fr) auto;


圣杯布局
display: grid;
grid-template: auto 1fr auto / auto 1fr auto;

```
## 3.3 grid-row-gap, grid-column-gap, gird-gap
grid-row-gap属性设置行与行的间隔（行间距），grid-column-gap属性设置列与列的间隔（列间距）。

grid-row-gap: 10px;
grid-column-gap: 10px;

grid-gap: 10px 10px;
grid-gap: 10px;

> 根据最新标准，上面三个属性名的grid-前缀已经删除，grid-column-gap和grid-row-gap写成column-gap和row-gap，grid-gap写成gap。

row-gap: 10px;
column-gap: 10px;
gap: 10px 10px;
gap: 10px;

## 3.4 grid-template-areas属性
网格布局允许指定"区域"（area），一个区域由单个或多个单元格组成。grid-template-areas属性用于定义区域。

grid-template-areas: 'a b c'
                     'd e f'
                     'g h i';

如果某些区域不需要利用，则使用"点"（.）表示。中间一列为点，表示没有用到该单元格，或者该单元格不属于任何区域。

grid-template-areas: 'a · c'
                     'd · f'
                     'g · i';


> 注意，区域的命名会影响到网格线。每个区域的起始网格线，会自动命名为区域名-start，终止网格线自动命名为区域名-end。

> 比如，区域名为header，则起始位置的水平网格线和垂直网格线叫做header-start，终止位置的水平网格线和垂直网格线叫做header-end。


## 3.5 grid-auto-flow 属性
划分网格以后，容器的子元素会按照顺序，自动放置在每一个网格。默认的放置顺序是"先行后列"，即先填满第一行，再开始放入第二行。

grid-auto-flow: row; // 先行后列
grid-auto-flow: column; // 先列后行

grid-auto-flow: row dense; // 先行后列，空的会被补齐
gird-auto-flow: column dense; // 先列后行，空的会被补齐

## 3.6 justify-items, align-items, place-items 属性
justify-items属性设置单元格内容的水平位置（左中右），align-items属性设置单元格内容的垂直位置（上中下）。

.container {
    justify-items: start | end | center | stretch;
    align-items: start | end | center | stretch;
}

place-items属性是align-items属性和justify-items属性的合并简写形式。如果省略第二个值，则浏览器认为与第一个值相等。
place-items: <align-items> <justify-items>;

## 3.7 justify-content, align-content, place-content 属性
justify-content属性是整个内容区域在容器里面的水平位置（左中右），align-content属性是整个内容区域的垂直位置（上中下）。

.container {
    justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
    align-content: start | end | center | stretch | space-around | space-between | space-evenly;
}
space-evenly: 项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔。

place-content属性是align-content属性和justify-content属性的合并简写形式。如果省略第二个值，浏览器就会假定第二个值等于第一个值。
place-content: <align-content> <justify-content>

## 3.8 grid-auto-columns, grid-auto-rows
grid-auto-columns属性和grid-auto-rows属性用来设置，浏览器自动创建的多余网格的列宽和行高。它们的写法与grid-template-columns和grid-template-rows完全相同。如果不指定这两个属性，浏览器完全根据单元格内容的大小，决定新增网格的列宽和行高。

## 3.9 grid-template, grid属性
grid-template属性是grid-template-columns、grid-template-rows和grid-template-areas这三个属性的合并简写形式。

grid属性是grid-template-rows、grid-template-columns、grid-template-areas、 grid-auto-rows、grid-auto-columns、grid-auto-flow这六个属性的合并简写形式。

> 从易读易写的角度考虑，还是建议不要合并属性，所以这里就不详细介绍这两个属性了。

# 四、项目属性
## 4.1 grid-row-start, grid-row-end, grid-column-start, grid-column-end 属性
项目的位置是可以指定的，具体方法就是指定项目的四个边框，分别定位在哪根网格线。
grid-column-start属性：左边框所在的垂直网格线
grid-column-end属性：右边框所在的垂直网格线
grid-row-start属性：上边框所在的水平网格线
grid-row-end属性：下边框所在的水平网格线

.item1 {
    grid-column-start: 1;
    grid-column-end: 4;

    // 这四个属性的值，除了指定为第几个网格线，还可以指定为网格线的名字。
    
    grid-row-start: header-satrt;
    grid-row-end: header-end;
    
    // 这四个属性的值还可以使用span关键字，表示"跨越"，即左右边框（上下边框）之间跨越多少个网格。
    grid-row-start: span 2;
    
    // 使用这四个属性，如果产生了项目的重叠，则使用z-index属性指定项目的重叠顺序。

}

## 4.2 grid-column, grid-row 属性
grid-column属性是grid-column-start和grid-column-end的合并简写形式，grid-row属性是grid-row-start属性和grid-row-end的合并简写形式。

.item1 {
    grid-column: 1 / 4;
    grid-row: header-start / header-end;
}

## 4.3 grid-area 属性
grid-area属性指定项目放在哪一个区域。

grid-area属性还可用作grid-row-start、grid-column-start、grid-row-end、grid-column-end的合并简写形式，直接指定项目的位置。

grid-area: <row-start> / <column-start> / <row-end> / <column-end>;

## 4.4 justify-self, align-self, place-self 属性
justify-self属性设置单元格内容的水平位置（左中右），跟justify-items属性的用法完全一致，但只作用于单个项目。

align-self属性设置单元格内容的垂直位置（上中下），跟align-items属性的用法完全一致，也是只作用于单个项目。

.item {
    justify-self: start | end | stretch | center;

    // place-self: center;
}

place-self属性是align-self属性和justify-self属性的合并简写形式。
