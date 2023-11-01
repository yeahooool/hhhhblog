---
sidebar_position: 7
---
# CSS 网格

[路条编程](https://www.icoderoad.com/)

<!-- TOC -->

- [CSS 网格](#css-网格)
  - [1. 创建 CSS 网格](#1-创建-css-网格)
  - [2. 使用 grid-template-columns 添加多列](#2-使用-grid-template-columns-添加多列)
  - [3. 使用 grid-template-rows 添加多行](#3-使用-grid-template-rows-添加多行)
  - [4. 使用 CSS 网格单位来更改列和行的大小](#4-使用-css-网格单位来更改列和行的大小)
  - [5. 使用 grid-column-gap 创建多列之间的间距](#5-使用-grid-column-gap-创建多列之间的间距)
  - [6. 使用 grid-row-gap 创建多行之间的间距](#6-使用-grid-row-gap-创建多行之间的间距)
  - [7. 使用 grid-gap 为网格添加间距](#7-使用-grid-gap-为网格添加间距)
  - [8. 使用 grid-column 来控制空间大小](#8-使用-grid-column-来控制空间大小)
  - [9. 使用 grid-row 来控制空间大小](#9-使用-grid-row-来控制空间大小)
  - [10. 使用 justify-self 水平对齐项目](#10-使用-justify-self-水平对齐项目)
  - [11. 使用 align-self 垂直对齐项目](#11-使用-align-self-垂直对齐项目)
  - [12. 使用 justify-items 水平对齐所有项目](#12-使用-justify-items-水平对齐所有项目)
  - [13. 使用 align-items 垂直对齐所有项目](#13-使用-align-items-垂直对齐所有项目)
  - [14. 将网格划分为区域模板](#14-将网格划分为区域模板)
    - [14.1. 使用 grid-area 属性将项目放置在网格区域中](#141-使用-grid-area-属性将项目放置在网格区域中)
    - [14.2. 使用 grid-area 创建区域模板](#142-使用-grid-area-创建区域模板)
  - [15. 使用 repeat 函数减少重复](#15-使用-repeat-函数减少重复)
  - [16. 使用 minmax 函数限制项目大小](#16-使用-minmax-函数限制项目大小)
  - [17. 使用 auto-fill 创建弹性布局](#17-使用-auto-fill-创建弹性布局)
  - [18. 使用 auto-fit 创建弹性布局](#18-使用-auto-fit-创建弹性布局)
  - [19. 使用媒体查询创建响应式布局](#19-使用媒体查询创建响应式布局)
  - [20. 在网格中创建网格](#20-在网格中创建网格)

<!-- /TOC -->

<a id="markdown-1-创建-css-网格" name="1-创建-css-网格"></a>

## 1. 创建 CSS 网格

通过将属性 `display` 的值设为 `grid`，HTML 元素就可以变为网格容器。 通过前面的操作，你可以对该容器使用与 CSS 网格（CSS Grid）相关的属性。

**注意：** 在 CSS 网格中，父元素称为容器（container），它的子元素称为项（items）。

<a id="markdown-2-使用-grid-template-columns-添加多列" name="2-使用-grid-template-columns-添加多列"></a>

## 2. 使用 grid-template-columns 添加多列

简单地添加一个网格元素并不会有任何明显的效果。 你还需要明确网格的结构。 在一个网格容器中使用 `grid-template-columns` 属性可以添加一些列，示例如下：

```
.container {
  display: grid;
  grid-template-columns: 50px 50px;
}
```

上面的代码会在网格容器中添加两列，宽度均为 50px。 `grid-template-columns` 属性值的个数表示网格的列数，每个值表示相应的列宽度。

<a id="markdown-3-使用-grid-template-rows-添加多行" name="3-使用-grid-template-rows-添加多行"></a>

## 3. 使用 grid-template-rows 添加多行

使用 `grid-template-rows` 属性手动调整网格行数。

<a id="markdown-4-使用-css-网格单位来更改列和行的大小" name="4-使用-css-网格单位来更改列和行的大小"></a>

## 4. 使用 CSS 网格单位来更改列和行的大小

在 CSS 网格中，可以使用绝对单位（如 `px`）或相对单位（如 `em`）来定义行或列的大小。 下面的单位也可以使用：

`fr`：设置列或行占剩余空间的比例，

`auto`：设置列宽或行高自动等于它的内容的宽度或高度，

`%`：将列或行调整为它的容器宽度或高度的百分比，

以下代码：

```
grid-template-columns: auto 50px 10% 2fr 1fr;
```

这段代码添加了五个列。 第一列的宽与它的内容宽度相等；第二列宽 50px；第三列宽是它容器的 10%；最后两列，将剩余的宽度平均分成三份，第四列占两份，第五列占一份。

---

<a id="markdown-5-使用-grid-column-gap-创建多列之间的间距" name="5-使用-grid-column-gap-创建多列之间的间距"></a>

## 5. 使用 grid-column-gap 创建多列之间的间距

如果需要在列与列之间添加一些间距，我们可以使用 `grid-column-gap`：

```
grid-column-gap: 10px;
```

这会为我们创建的所有列之间都添加 10px 的空白间距。

<a id="markdown-6-使用-grid-row-gap-创建多行之间的间距" name="6-使用-grid-row-gap-创建多行之间的间距"></a>

## 6. 使用 grid-row-gap 创建多行之间的间距

`grid-row-gap` 设置行间距。

<a id="markdown-7-使用-grid-gap-为网格添加间距" name="7-使用-grid-gap-为网格添加间距"></a>

## 7. 使用 grid-gap 为网格添加间距

`grid-gap` 属性是前两个挑战中出现的 `grid-row-gap` 和 `grid-column-gap` 的简写属性，它更方便使用。 如果 `grid-gap` 只有一个值，那么这个值表示行与行之间、列与列之间的间距均为这个值。 如果有两个值，那么第一个值表示行间距，第二个值表示列间距。

---

<a id="markdown-8-使用-grid-column-来控制空间大小" name="8-使用-grid-column-来控制空间大小"></a>

## 8. 使用 grid-column 来控制空间大小

要设置一个网格项占据几列，你可以使用 `grid-column` 属性加上网格线条的编号来定义网格项开始和结束的位置。

示例如下：

```
grid-column: 1 / 3;
```

这会让网格项从左侧第一条线开始到第三条线结束，占用两列。

<a id="markdown-9-使用-grid-row-来控制空间大小" name="9-使用-grid-row-来控制空间大小"></a>

## 9. 使用 grid-row 来控制空间大小

和设置一个网格项占用多列类似，你也可以设置它占用多行。 你可以使用 `grid-row` 属性来定义一个网格项开始和结束的水平线。

---

<a id="markdown-10-使用-justify-self-水平对齐项目" name="10-使用-justify-self-水平对齐项目"></a>

## 10. 使用 justify-self 水平对齐项目

在 CSS 网格中，每个网格项的内容分别位于被称为 _单元格（cell）_ 的框内。 你可以使用网格项的 `justify-self` 属性，设置其内容的位置在单元格内沿水平轴的对齐方式。 **默认**情况下，这个属性的值是 `stretch`，这将使内容占满整个单元格的宽度。 该 CSS 网格属性也可以使用其他的值：

`start`：使内容在单元格左侧对齐，

`center`：使内容在单元格居中对齐，

`end`：使内容在单元格右侧对齐，

<a id="markdown-11-使用-align-self-垂直对齐项目" name="11-使用-align-self-垂直对齐项目"></a>

## 11. 使用 align-self 垂直对齐项目

属性值同 `justify-self`。

<a id="markdown-12-使用-justify-items-水平对齐所有项目" name="12-使用-justify-items-水平对齐所有项目"></a>

## 12. 使用 justify-items 水平对齐所有项目

对网格容器使用 `justify-items` 使 CSS 网格中的网格项一次性沿水平轴对齐。

<a id="markdown-13-使用-align-items-垂直对齐所有项目" name="13-使用-align-items-垂直对齐所有项目"></a>

## 13. 使用 align-items 垂直对齐所有项目

对网格容器使用 `align-items` 属性可以让网格中所有的网格项沿竖直方向对齐。

---

<a id="markdown-14-将网格划分为区域模板" name="14-将网格划分为区域模板"></a>

## 14. 将网格划分为区域模板

你可以将网格中的一些单元格组合成一个区域（area），并为该区域指定一个自定义名称。 可以通过给容器加上 `grid-template-areas` 来实现：

```
grid-template-areas:
"header header header"
"advert content content"
"footer footer footer";
```

上面的代码将网格单元格分成四个区域：`header`、`advert`、`content` 和 `footer`。 每个单词代表一个单元格，每对引号代表一行。

<a id="markdown-141-使用-grid-area-属性将项目放置在网格区域中" name="141-使用-grid-area-属性将项目放置在网格区域中"></a>

### 14.1. 使用 grid-area 属性将项目放置在网格区域中

在为网格添加区域模板后，可以通过引用你所定义的区域的名称，将元素放入相应的区域。 为此，你需要对网格项使用 `grid-area`：

```
.item1 {
grid-area: header;
}
```

这样，class 为 `item1` 的网格项就被放到了 `header` 区域里。 在这种情况下，该项目将使用整个顶行，因为该整行被命名为 `header` 区域。

<a id="markdown-142-使用-grid-area-创建区域模板" name="142-使用-grid-area-创建区域模板"></a>

### 14.2. 使用 grid-area 创建区域模板

如果网格中没有定义区域模板，你也可以像这样为它添加一个模板：

```
item1 { grid-area: 1/1/2/4; }
```

上例中数字代表这些值：

```
grid-area: horizontal line to start at / vertical line to start at / horizontal line to end at / vertical line to end at;
```

因此，示例中的网格项将占用第 1 条水平网格线（起始）和第 2 条水平网格线（终止）之间的行，及第 1 条垂直网格线（起始）和第 4 条垂直网格线（终止）之间的列。

<a id="markdown-15-使用-repeat-函数减少重复" name="15-使用-repeat-函数减少重复"></a>

## 15. 使用 repeat 函数减少重复

使用 `grid-template-columns` 或 `grid-template-rows` 定义网格结构时，你需要为添加的每一行或每一列都输入一个值。

如果一个网格共有 100 行且每行高度相同， 那我们就需要输入 100 个值，这显然不太实际。 为此，更好的方式是使用 `repeat` 方法指定行或列的重复次数，后面加上逗号以及需要重复的值。

以下为添加 100 行网格的例子，每行高度均为 `50px`：

```
grid-template-rows: repeat(100, 50px);
```

你还可以用 `repeat` 方法重复多个值，并在定义网格结构时与其他值一起使用。 比如：

```
grid-template-columns: repeat(2, 1fr 50px) 20px;
```

效果相当于：

```
grid-template-columns: 1fr 50px 1fr 50px 20px;
```

**注意：** `1fr 50px` 重复了两次，后面跟着 `20px`。

<a id="markdown-16-使用-minmax-函数限制项目大小" name="16-使用-minmax-函数限制项目大小"></a>

## 16. 使用 minmax 函数限制项目大小

此外，内置函数 `minmax` 也可用于设置 `grid-template-columns` 和 `grid-template-rows` 的值。 它的作用是在网格容器改变大小时限制网格项的大小。 为此，你需要指定网格项允许的尺寸范围。 例如：

```
grid-template-columns: 100px minmax(50px, 200px);
```

在上面的代码中，我们通过 `grid-template-columns` 添加了两列，第一列宽度为 `100px`，第二列宽度最小值是 `50px`，最大值是 `200px`。

<a id="markdown-17-使用-auto-fill-创建弹性布局" name="17-使用-auto-fill-创建弹性布局"></a>

## 17. 使用 auto-fill 创建弹性布局

`repeat` 方法带有一个名为自动填充（auto-fill）的功能。 它的功能是根据容器的大小，尽可能多地放入指定大小的行或列。 你可以通过结合 `auto-fill` 和 `minmax` 来更灵活地布局。

```
repeat(auto-fill, minmax(60px, 1fr));
```

上面的代码效果是这样：首先，列的宽度会随容器大小改变。其次，只要容器宽度不足以插入一个宽为 60px 的列，当前行的所有列就都会一直拉伸。请自己调整宽度，动手试一下就不难理解了。 <br />
**注意：** 如果容器宽度不足以将所有网格项放在同一行，余下的网格项将会移至新的一行。

<a id="markdown-18-使用-auto-fit-创建弹性布局" name="18-使用-auto-fit-创建弹性布局"></a>

## 18. 使用 auto-fit 创建弹性布局

`auto-fit` 效果几乎和 `auto-fill` 一样。 不同点仅在于，当容器的大小大于各网格项之和时，`auto-fill` 会持续地在一端放入空行或空列，这样就会使所有网格项挤到另一边；而 `auto-fit` 则不会在一端放入空行或空列，而是会将所有网格项拉伸至合适的大小。

**注意：** 如果容器宽度不足以将所有网格项放在同一行，余下的网格项将会移至新的一行。

<details>
<summary>展开代码</summary>

```
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

.container {
font-size: 40px;
min-height: 100px;
width: 100%;
background: LightGray;
display: grid;
/_ 只修改这一行下面的代码 _/

    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));

    /* 只修改这一行上面的代码 */
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;

}

.container2 {
font-size: 40px;
min-height: 100px;
width: 100%;
background: Silver;
display: grid;
/_ 只修改这一行下面的代码 _/

    grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));

    /* 只修改这一行上面的代码 */
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;

}
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
<div class="container2">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
```

</details>

---

<a id="markdown-19-使用媒体查询创建响应式布局" name="19-使用媒体查询创建响应式布局"></a>

## 19. 使用媒体查询创建响应式布局

将 CSS 网格与使用媒体查询结合使用，如使用媒体查询重新排列网格区域、更改网格尺寸以及重新排列网格项位置，我们可以让制作出的网站更具响应性。

<a id="markdown-20-在网格中创建网格" name="20-在网格中创建网格"></a>

## 20. 在网格中创建网格

将元素转换为网格只会影响其子元素（即直接后代元素，英文为 direct descendants。意思是一个元素的所有后代元素中，父级元素为该元素的所有元素）。 因此，如果我们把某个子元素设置为网格，就会得到一个嵌套的网格。

例如，如果我们设置 class 为 `item3` 的元素的 `display` 和 `grid-template-columns` 属性，就会得到一个嵌套的网格。使类为 `item3` 元素转换为有两列且宽度为 `auto` 和 `1fr` 的网格。

<details>
<summary>展开代码</summary>

```
<style>
  .container {
    font-size: 1.5em;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr auto;
    grid-gap: 10px;
    grid-template-areas:
      "advert header"
      "advert content"
      "advert footer";
  }
  .item1 {
    background: LightSkyBlue;
    grid-area: header;
  }

  .item2 {
    background: LightSalmon;
    grid-area: advert;
  }

  .item3 {
    background: PaleTurquoise;
    grid-area: content;
    /* 只修改这一行下面的代码 */
    grid-template-columns: auto 1fr;
    display: grid;
    /* 只修改这一行上面的代码 */
  }

  .item4 {
    background: lightpink;
    grid-area: footer;
  }

  .itemOne {
    background: PaleGreen;
  }

  .itemTwo {
    background: BlanchedAlmond;
  }

</style>

<div class="container">
  <div class="item1">header</div>
  <div class="item2">advert</div>
  <div class="item3">
    <div class="itemOne">paragraph1</div>
    <div class="itemTwo">paragraph2</div>
  </div>
  <div class="item4">footer</div>
</div>
```

</details>
