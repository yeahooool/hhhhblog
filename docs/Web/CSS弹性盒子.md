---
sidebar_position: 6
---
# CSS 弹性盒子

[路条编程](https://www.icoderoad.com/)

<!-- TOC -->

- [CSS 弹性盒子](#css-弹性盒子)
  - [1. 使用 display: flex 定位盒子](#1-使用-display-flex-定位盒子)
  - [2. 在推文中添加弹性盒子布局](#2-在推文中添加弹性盒子布局)
  - [3. 使用 flex-direction 属性创建一个行/列](#3-使用-flex-direction-属性创建一个行列)
  - [4. 使用 justify-content 属性对齐元素](#4-使用-justify-content-属性对齐元素)
  - [5. 使用 align-items 属性对齐元素](#5-使用-align-items-属性对齐元素)
  - [6. 使用 flex-wrap 属性包裹一行或一列](#6-使用-flex-wrap-属性包裹一行或一列)
  - [7. 使用 flex-shrink 属性定义 flex 子元素的收缩规则](#7-使用-flex-shrink-属性定义-flex-子元素的收缩规则)
  - [8. 使用 flex-grow 属性定义 flex 子元素的增长系数](#8-使用-flex-grow-属性定义-flex-子元素的增长系数)
  - [9. 使用 flex-basis 属性设置元素的初始大小](#9-使用-flex-basis-属性设置元素的初始大小)
  - [10. 使用 flex 短方法属性](#10-使用-flex-短方法属性)
  - [11. 使用 order 属性重新排列子元素](#11-使用-order-属性重新排列子元素)
  - [12. 使用 align-self 属性调整单个子元素的对齐方式](#12-使用-align-self-属性调整单个子元素的对齐方式)

<!-- /TOC -->

<a id="markdown-1-使用-display-flex-定位盒子" name="1-使用-display-flex-定位盒子"></a>

## 1. 使用 display: flex 定位盒子

只要在一个元素的 CSS 中添加 `display: flex;`，就可以使用其它 `flex` 属性来构建响应式页面了。

<a id="markdown-2-在推文中添加弹性盒子布局" name="2-在推文中添加弹性盒子布局"></a>

## 2. 在推文中添加弹性盒子布局

<details>
<summary>展开代码</summary>

```
<style>
  body {
    font-family: Arial, sans-serif;
  }
  header {
    display: flex;
  }
  header .profile-thumbnail {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
  header .profile-name {

    margin-left: 10px;
    display: flex;

}
header .follow-btn {

    margin: 0 0 0 auto;
    display: flex;

}
header .follow-btn button {
border: 0;
border-radius: 3px;
padding: 5px;
}
header h3, header h4 {
display: flex;
margin: 0;
}
#inner p {
margin-bottom: 10px;
font-size: 20px;
}
#inner hr {
margin: 20px 0;
border-style: solid;
opacity: 0.1;
}
footer {
display: flex;
}
footer .stats {

    font-size: 15px;
    display: flex;

}
footer .stats strong {
font-size: 18px;
}
footer .stats .likes {
margin-left: 10px;
}
footer .cta {
margin-left: auto;
}
footer .cta button {
border: 0;
background: transparent;
}
</style>

<header>
  <img src="https://freecodecamp.s3.amazonaws.com/quincy-twitter-photo.jpg" alt="Quincy Larson's profile picture" class="profile-thumbnail">
  <div class="profile-name">
    <h3>Quincy Larson</h3>
    <h4>@ossia</h4>
  </div>
  <div class="follow-btn">
    <button>Follow</button>
  </div>
</header>
<div id="inner">
  <p>I meet so many people who are in search of that one trick that will help them work smart. Even if you work smart, you still have to work hard.</p>
  <span class="date">1:32 PM - 12 Jan 2018</span>
  <hr>
</div>
<footer>
  <div class="stats">
    <div class="Retweets">
      <strong>107</strong> Retweets
    </div>
    <div class="likes">
      <strong>431</strong> Likes
    </div>
  </div>
  <div class="cta">
    <button class="share-btn">Share</button>
    <button class="retweet-btn">Retweet</button>
    <button class="like-btn">Like</button>
  </div>
</footer>
```

</details>

<a id="markdown-3-使用-flex-direction-属性创建一个行列" name="3-使用-flex-direction-属性创建一个行列"></a>

## 3. 使用 flex-direction 属性创建一个行/列

给元素添加 `display: flex` 属性可以让它变成 flex 容器， 然后可以让元素的项目排列成行或列。 只要给父元素添加 `flex-direction` 属性，并把属性值设置为 `row` 或 `column`，即可横向排列或纵向排列它的所有子元素。 创建一行将使子项水平对齐，创建一列将使子项垂直对齐。

`flex-direction` 的其他可选值还有 `row-reverse` 和 `column-reverse`。

**注意：** `flex-direction` 的**默认值**为 `row`。

<a id="markdown-4-使用-justify-content-属性对齐元素" name="4-使用-justify-content-属性对齐元素"></a>

## 4. 使用 justify-content 属性对齐元素

flex 子元素有时不能充满整个 flex 容器， 所以我们经常需要告诉 CSS 以什么方式排列 flex 子元素，以及调整它们的间距。 可以通过 `justify-content` 属性的不同值来实现。 在介绍属性的可选值之前，我们要先理解一些重要术语。

[这里有一张来自 W3C 的有用的图片，说明了下面关于“行” flex 容器的概念。](https://www.w3.org/TR/css-flexbox-1/images/flex-direction-terms.svg)

如果把 flex 容器设为一个行，它的子元素会从左到右逐个排列； 如果把 flex 容器设为一个列，它的子元素会从上到下逐个排列。 子元素排列的方向被称为 **main axis（主轴）**。 对于行，主轴水平贯穿每一个项目； 对于列，主轴垂直贯穿每一个项目。

---

对于如何沿主轴线排放 flex 项目，有几种选择。 很常用的一种是 `justify-content: center`;：即 flex 子元素在 flex 容器中居中排列。 其他选择包括：

`flex-start`：从 flex 容器的起始位置开始排列项目。 对行来说是把项目移至左边， 对于列是把项目移至顶部。 如未设置 `justify-content` 的值，那么这就是**默认值**。<br />
`flex-end`：从 flex 容器的终止位置开始排列项目。 对行来说是把项目移至右边， 对于列是把项目移至底部。<br />
`space-between`：项目间保留一定间距地沿主轴居中排列。 第一个和最后一个项目被放置在容器边沿。 例如，在行中第一个项目会紧贴着容器左边，最后一个项目会紧贴着容器右边，然后其他项目均匀排布。 <br />
`space-around`：与 `space-between` 相似，但头尾两个项目不会紧贴容器边缘，所有项目之间的空间均匀排布。 <br />
`space-evenly`：在 flex 项目之间均匀分配空间，在 flex 容器的任一端都有一个完整的空间。

<a id="markdown-5-使用-align-items-属性对齐元素" name="5-使用-align-items-属性对齐元素"></a>

## 5. 使用 align-items 属性对齐元素

`align-items` 属性与 `justify-content` 类似。 回忆一下，`justify-content` 属性使 flex 子元素沿主轴排列。 行的主轴是水平线，列的主轴是垂直线。

Flex 容器中，与主轴垂直的叫做 **cross axis（交叉轴）**。 行的交叉轴是垂直的，列的交叉轴是水平的。

CSS 中的 `align-items` 属性用来定义 flex 子元素*沿交叉轴的对齐方式*。 对行来说，定义的是元素的上下对齐方式； 对列来说，是定义元素的左右对齐方式。

`align-items` 的可选值包括：

`flex-start`：从 flex 容器的起始位置开始对齐项目。 对行来说，把项目移至容器顶部； 对列来说，是把项目移至容器左边。<br />
`flex-end`：从 flex 容器的终止位置开始对齐项目。 对行来说，把项目移至容器底部； 对列来说，把项目移至容器右边。<br />
`center`：把项目居中放置。 对行来说，垂直居中（项目距离顶部和底部的距离相等）； 对列来说，水平居中（项目距离左边和右边的距离相等）。<br />
`stretch`：拉伸项目，填满 flex 容器。 例如，排成行的项目从容器顶部拉伸到底部。 如未设置 `align-items` 的值，那么这就是**默认值**。<br />
`baseline`：沿基线对齐。 基线是文本相关的概念，可以认为它是字母排列的下端基准线。

<a id="markdown-6-使用-flex-wrap-属性包裹一行或一列" name="6-使用-flex-wrap-属性包裹一行或一列"></a>

## 6. 使用 flex-wrap 属性包裹一行或一列

CSS flexbox 具有将 flex 容器拆分为多行（或列）的功能。 默认情况下，flex 容器会调整项目大小，把它们都塞到一起。 对于行来说，所有项目都会在一条直线上。

不过，使用 `flex-wrap` 属性可以使项目换行展示。 这意味着多出来的子元素会被移到新的行或列。 换行发生的断点由子元素和容器的大小决定。

换行方向的可选值有这些：

`nowrap`：**默认值**，不换行。 <br />
`wrap`：如果排列以行为基准，就将行从上往下排列；如果排列以列为基准，就将列从左往右排列。<br />
`wrap-reverse`：如果排列以行为基准，就将行从下往上排列；如果排列以列为基准，就将列从右往左排列。

---

<a id="markdown-7-使用-flex-shrink-属性定义-flex-子元素的收缩规则" name="7-使用-flex-shrink-属性定义-flex-子元素的收缩规则"></a>

## 7. 使用 flex-shrink 属性定义 flex 子元素的收缩规则

使用之后，如果 flex 容器太小，则子元素会自动缩小。 当容器的宽度小于里面所有子元素的宽度之和时，所有子元素都会自动压缩。

子元素的 `flex-shrink` 接受数值作为属性值。 数值越大，则该元素与其他元素相比会被压缩得更厉害。 比如，一个项目的 `flex-shrink` 属性值为 `1`，另一个项目的 `flex-shrink` 属性值为 `3`，那么后者相比前者会受到 `3` 倍压缩。

<a id="markdown-8-使用-flex-grow-属性定义-flex-子元素的增长系数" name="8-使用-flex-grow-属性定义-flex-子元素的增长系数"></a>

## 8. 使用 flex-grow 属性定义 flex 子元素的增长系数

与 `flex-shrink` 相对的是 `flex-grow`。`flex-shrink` 会在容器太小时对子元素作出调整。 相应地，`flex-grow` 会在容器太大时对子元素作出调整。

如果一个项目的 `flex-grow` 属性值为 `1`，另一个项目的 `flex-grow` 属性值为 `3`，那么值为 `3` 的一个会较另一个扩大 `3` 倍。

<a id="markdown-9-使用-flex-basis-属性设置元素的初始大小" name="9-使用-flex-basis-属性设置元素的初始大小"></a>

## 9. 使用 flex-basis 属性设置元素的初始大小

`flex-basis` 属性定义了在使用 CSS 的 `flex-shrink` 或 `flex-grow` 属性对元素进行调整前，元素的初始大小。

`flex-basis` 属性的单位与其他表示尺寸的属性的单位一致（`px`、`em`、`%` 等）。 如果值为 `auto`，则项目的尺寸随内容调整。

<a id="markdown-10-使用-flex-短方法属性" name="10-使用-flex-短方法属性"></a>

## 10. 使用 flex 短方法属性

上面几个 `flex` 属性有一个简写方式。 `flex-grow`、`flex-shrink` 和 `flex-basis` 属性可以在 `flex` 中一并设置。

例如，`flex: 1 0 10px;` 会把项目属性设为 `flex-grow: 1;`、`flex-shrink: 0;` 以及 `flex-basis: 10px;`。

属性的默认设置是 `flex: 0 1 auto;`。

<hr />

<a id="markdown-11-使用-order-属性重新排列子元素" name="11-使用-order-属性重新排列子元素"></a>

## 11. 使用 order 属性重新排列子元素

`order` 属性告诉 CSS flex 容器里子元素的顺序。 默认情况下，项目排列顺序与源 HTML 文件中顺序相同。 这个属性接受数字作为参数，可以使用负数。

<a id="markdown-12-使用-align-self-属性调整单个子元素的对齐方式" name="12-使用-align-self-属性调整单个子元素的对齐方式"></a>

## 12. 使用 align-self 属性调整单个子元素的对齐方式

flex 子项目的最后一个属性是 `align-self`。 这个属性允许你调整单个子元素自己的对齐方式，而不会影响到全部子元素。 因为 `float`、`clear` 和 `vertical-align` 等调整对齐方式的属性都不能应用于 flex 子元素，所以这个属性显得十分有用。

`align-self` 可设置的值与 `align-items` 的一样，并且它会覆盖 `align-items` 所设置的值。

---
