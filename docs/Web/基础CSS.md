---
sidebar_position: 1
---

# CSS 基础知识

[路条编程](https://www.icoderoad.com/)

<!-- TOC -->

- [CSS 基础知识](#css-基础知识)
  - [1. 更改文本颜色](#1-更改文本颜色)
  - [2. 使用元素选择器设置元素的样式](#2-使用元素选择器设置元素的样式)
    - [2.1. 使用 class 选择器创建元素的样式](#21-使用-class-选择器创建元素的样式)
    - [2.2. 更改元素字体大小](#22-更改元素字体大小)
    - [2.3. 更改元素的字体族名](#23-更改元素的字体族名)
  - [3. 引入谷歌字体](#3-引入谷歌字体)
    - [3.1. 字体降级](#31-字体降级)
  - [4. 调整元素宽度](#4-调整元素宽度)
  - [5. 元素周围添加边框](#5-元素周围添加边框)
  - [6. 添加圆角边框](#6-添加圆角边框)
  - [7. 给 div 元素添加背景色](#7-给-div-元素添加背景色)
  - [8. 设置元素的 id](#8-设置元素的-id)
    - [8.1. 使用 id 属性设置元素的样式](#81-使用-id-属性设置元素的样式)
  - [9. 调整元素的边距](#9-调整元素的边距)
  - [10. 使用属性选择器设置元素的样式](#10-使用属性选择器设置元素的样式)
  - [11. 理解绝对单位和相对单位](#11-理解绝对单位和相对单位)
  - [12. 给 HTML 的 body 元素添加样式](#12-给-html-的-body-元素添加样式)
  - [13. 样式的继承](#13-样式的继承)
  - [14. 样式中的优先级](#14-样式中的优先级)
    - [14.1. class 选择器的优先级高于继承样式](#141-class-选择器的优先级高于继承样式)
    - [14.2. ID 选择器优先级高于 Class 选择器](#142-id-选择器优先级高于-class-选择器)
    - [14.3. 内联样式的优先级高于 ID 选择器](#143-内联样式的优先级高于-id-选择器)
    - [14.4. Important 的优先级最高](#144-important-的优先级最高)
  - [15. 获得指定颜色的方式](#15-获得指定颜色的方式)
  - [16. 使用 CSS 变量一次更改多个元素](#16-使用-css-变量一次更改多个元素)
    - [16.1. 创建一个自定义的 CSS 变量](#161-创建一个自定义的-css-变量)
    - [16.2. 使用一个自定义的 CSS 变量](#162-使用一个自定义的-css-变量)
    - [16.3. 给 CSS 变量设置备用值](#163-给-css-变量设置备用值)
  - [17. 通过浏览器降级提高兼容性](#17-通过浏览器降级提高兼容性)
  - [18. 继承 CSS 变量](#18-继承-css-变量)
  - [19. 更改特定区域的变量](#19-更改特定区域的变量)
  - [20. 使用媒体查询更改变量](#20-使用媒体查询更改变量)

<!-- /TOC -->

<a id="markdown-1-更改文本颜色" name="1-更改文本颜色"></a>

## 1. 更改文本颜色

内联`style`声明，添加`color`属性，声明末尾添加`;`。

```
<h2 style="color: red;">text</h2>
```

<a id="markdown-2-使用元素选择器设置元素的样式" name="2-使用元素选择器设置元素的样式"></a>

## 2. 使用元素选择器设置元素的样式

代码顶部创建`style`声明区域。

```
<style>
    h2 {
        color: red;
    }
</style>
```

<a id="markdown-21-使用-class-选择器创建元素的样式" name="21-使用-class-选择器创建元素的样式"></a>

### 2.1. 使用 class 选择器创建元素的样式

在 CSS `style`元素里，**class**名以一个句点开头。class 具有可重用性，可用于各种 html 元素。一个元素上可以用多个 class。

```
<style>
    .red-text {
        color: red;
    }
</style>
...
...
<h2 class="red-text">text</h2>
<p class="red-text">text</p>
```

<a id="markdown-22-更改元素字体大小" name="22-更改元素字体大小"></a>

### 2.2. 更改元素字体大小

由`font-size`属性控制。

```
 p {
    font-size: 12px;
 }
```

<a id="markdown-23-更改元素的字体族名" name="23-更改元素的字体族名"></a>

### 2.3. 更改元素的字体族名

`font-family`

```
 p {
    font-family: sans-serif;
 }
```

<a id="markdown-3-引入谷歌字体" name="3-引入谷歌字体"></a>

## 3. 引入谷歌字体

要引入 Google Font，你需要从 Google Fonts 上复制字体的 URL，并粘贴到你的 HTML 里面。 此处引入 `Lobster` 字体。 因此，请复制以下代码段，并粘贴到代码编辑器顶部，即放到 `style` 标签之前。

```
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
    p {
        font-family: Lobster;
    }
</style>
```

字体名区分大小写，并且如果字体名含有空格，则在声明时需要用引号包起来。 例如，使用 `"Open Sans"` 字体需要添加引号，而 `Lobster` 则不需要。

<a id="markdown-31-字体降级" name="31-字体降级"></a>

### 3.1. 字体降级

在字体不可用的时候，你可以告诉浏览器通过“降级”去使用其他字体。

```
p {
        font-family: Lobster, sans-serif;
    }
```

<a id="markdown-4-调整元素宽度" name="4-调整元素宽度"></a>

## 4. 调整元素宽度

`width`

```
<style>
    .images {
        width: 100px;
    }
</style>
```

<a id="markdown-5-元素周围添加边框" name="5-元素周围添加边框"></a>

## 5. 元素周围添加边框

5px 的绿色实线边框

```
<style>
    .thick-green-border {
        border-width: 5px;
        border-color: green;
        border-style: solid
    }
</style>
```

<a id="markdown-6-添加圆角边框" name="6-添加圆角边框"></a>

## 6. 添加圆角边框

使用`border-radius`属性

```
    border-radius: 10px;
    <!-- 设置为圆形图片 -->
    border-radius: 50%;
```

<a id="markdown-7-给-div-元素添加背景色" name="7-给-div-元素添加背景色"></a>

## 7. 给 div 元素添加背景色

`background-color`

---

<a id="markdown-8-设置元素的-id" name="8-设置元素的-id"></a>

## 8. 设置元素的 id

每一个 html 元素都可以设置单独的`id`属性。

<a id="markdown-81-使用-id-属性设置元素的样式" name="81-使用-id-属性设置元素的样式"></a>

### 8.1. 使用 id 属性设置元素的样式

不过，`id` 不可以重复，它只能作用于一个元素上。 如果一个元素同时应用了 `class` 和 `id`，且两者设置的样式有冲突，会**优先应用 `id` 中所设置的样式**。

选择 `id` 为 `gr-back` 的元素，并设置它的背景颜色为绿色。 可以在 `style` 标签里这样写：

```
#gr-back {
    background: green;
}
```

注意在 `style` 标签里，声明 `class` 的时候必须在名字前插入 `.` 符号。 同样，在声明 `id` 的时候，也必须在名字前插入 `# `符号。

---

<a id="markdown-9-调整元素的边距" name="9-调整元素的边距"></a>

## 9. 调整元素的边距

1. 每个 HTML 元素所占有的矩形空间由这三个重要的属性来控制：内边距 `padding`、外边距 `margin` 、边框 `border` 。

2. `padding` 用来控制着元素内容与 `border` 之间的空隙大小。

3. 外边距 `margin` 用来控制元素的边框与其他元素之间的 `border` 距离。

4. CSS 允许你使用 `padding-top`、`padding-right`、`padding-bottom`、`padding-left` 属性来设置四个不同方向的 `padding` 值。(可以直接`padding:10px 5px 5px 10px；`对应顺时针标记四个方向)
5. CSS 允许你使用 `margin-top`、`margin-right`、`margin-bottom`、`margin-left` 属性来设置四个不同方向的 `margin` 值。(可以直接`margin:10px 5px 5px 10px；`对应顺时针标记四个方向)

---

<a id="markdown-10-使用属性选择器设置元素的样式" name="10-使用属性选择器设置元素的样式"></a>

## 10. 使用属性选择器设置元素的样式

使用 `[attr=value]` 属性选择器

```
[type='checkbox'] {
  margin: 20px 0px 20px 0px;
}
```

---

<a id="markdown-11-理解绝对单位和相对单位" name="11-理解绝对单位和相对单位"></a>

## 11. 理解绝对单位和相对单位

`px` 值，即像素。 像素是一个长度单位，它告诉浏览器应该如何调整元素的大小和位置。 其实除了 `px`，`CSS` 也有其他单位供我们使用。

单位长度的类型可以分成 2 种：相对和绝对。 绝对单位与长度的物理单位相关。 例如，`in` 和 `mm` 分别代表着英寸和毫米。 绝对长度单位会接近屏幕上的实际测量值，不过不同屏幕的分辨率会存在差异，这就可能会造成误差。

相对单位长度，比如 `em` 和 `rem`，它们的实际值会依赖其他长度的值而决定。 比如 `em` 的大小基于元素字体的字体大小。 如果使用它来设置 `font-size` 值，它的值会跟随父元素的 `font-size` 值来改变。

Note: 有些单位长度选项是相对视窗大小来改变值的， 这种设定符合响应式网页设计的原则。

---

<a id="markdown-12-给-html-的-body-元素添加样式" name="12-给-html-的-body-元素添加样式"></a>

## 12. 给 HTML 的 body 元素添加样式

```
body {
  background-color: black;
}
```

<a id="markdown-13-样式的继承" name="13-样式的继承"></a>

## 13. 样式的继承

设置 `body` 元素样式的方法跟设置其他 HTML 元素样式的方式一样，并且其他元素也会继承 `body` 中所设置的样式。
例如：`h1`里的样式继承自`body`。

```
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
</style>
<h1>Hello World!</h1>
```

<a id="markdown-14-样式中的优先级" name="14-样式中的优先级"></a>

## 14. 样式中的优先级

class 的样式中，`body` 中冲突的样式将被覆盖。

```
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
</style>
<h1 class="pink-text">Hello World!</h1>
```

<a id="markdown-141-class-选择器的优先级高于继承样式" name="141-class-选择器的优先级高于继承样式"></a>

### 14.1. class 选择器的优先级高于继承样式

创建一个 `blue-text` class，将元素的颜色设置为蓝色。 将它放在 `pink-text` class 下面。

将 `blue-text` class 应用于 h1 元素，会优先显示。

将多个 class 属性应用于一个 HTML 元素，需以空格来间隔这些属性，例如：

`class="class1 class2"`

注意： HTML 元素里应用的 class 的先后顺序无关紧要。

但是，在 `<style>` 标签里面声明的 class 顺序十分重要，之后的声明会覆盖之前的声明。 第二个声明的优先级始终高于第一个声明。 由于 `.blue-text` 是在后面声明的，所以它的样式会覆盖 `.pink-text` 里的样式。

```
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 class="pink-text blue-text">Hello World!</h1>
```

<a id="markdown-142-id-选择器优先级高于-class-选择器" name="142-id-选择器优先级高于-class-选择器"></a>

### 14.2. ID 选择器优先级高于 Class 选择器

我们来通过给 `h1` 元素添加 id 属性，覆盖 `pink-text` 和 `blue-text` 类，使 `h1` 元素变成橘色。

注意： 无论在 `pink-text` class 之前或者之后声明，id 选择器的优先级总是高于 class 选择器。

```
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
  #orange-text {
    color:orange;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text">Hello World!</h1>
```

<a id="markdown-143-内联样式的优先级高于-id-选择器" name="143-内联样式的优先级高于-id-选择器"></a>

### 14.3. 内联样式的优先级高于 ID 选择器

这里的 `h1` 元素的样式将被 `style="color: white"` 覆盖。

```
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>
```

<a id="markdown-144-important-的优先级最高" name="144-important-的优先级最高"></a>

### 14.4. Important 的优先级最高

声明添加关键词 `!important`

```
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink !important;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>
```

---

<a id="markdown-15-获得指定颜色的方式" name="15-获得指定颜色的方式"></a>

## 15. 获得指定颜色的方式

1. 十六进制编码：例如，`#000000` 代表黑色，同时也是最小的值。
2. 缩写的十六进制编码：例如，红色的 `#FF0000` 十六进制编码可以缩写成 `#F00`。
3. RBG:例如，白色的 `RBG` 值 ：`rgb(255, 255, 255)`

---

<a id="markdown-16-使用-css-变量一次更改多个元素" name="16-使用-css-变量一次更改多个元素"></a>

## 16. 使用 CSS 变量一次更改多个元素

```
<style>
  .penguin {

    /* 只修改这一行下面的代码 */
    --penguin-skin: gray;
    --penguin-belly: white;
    --penguin-beak: orange;
    /* 只修改这一行上面的代码 */

    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: 300px;
    height: 300px;
  }

  .penguin-top {
    top: 10%;
    left: 25%;
    background: var(--penguin-skin, gray);
    width: 50%;
    height: 45%;
    border-radius: 70% 70% 60% 60%;
  }

  .penguin-bottom {
    top: 40%;
    left: 23.5%;
    background: var(--penguin-skin, gray);
    width: 53%;
    height: 45%;
    border-radius: 70% 70% 100% 100%;
  }

  .right-hand {
    top: 0%;
    left: -5%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 120% 30%;
    transform: rotate(45deg);
    z-index: -1;
  }

  .left-hand {
    top: 0%;
    left: 75%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 30% 120%;
    transform: rotate(-45deg);
    z-index: -1;
  }

  .right-cheek {
    top: 15%;
    left: 35%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .left-cheek {
    top: 15%;
    left: 5%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .belly {
    top: 60%;
    left: 2.5%;
    background: var(--penguin-belly, white);
    width: 95%;
    height: 100%;
    border-radius: 120% 120% 100% 100%;
  }

  .right-feet {
    top: 85%;
    left: 60%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(-80deg);
    z-index: -2222;
  }

  .left-feet {
    top: 85%;
    left: 25%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(80deg);
    z-index: -2222;
  }

  .right-eye {
    top: 45%;
    left: 60%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .left-eye {
    top: 45%;
    left: 25%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .sparkle {
    top: 25%;
    left: 15%;
    background: white;
    width: 35%;
    height: 35%;
    border-radius: 50%;
  }

  .blush-right {
    top: 65%;
    left: 15%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .blush-left {
    top: 65%;
    left: 70%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-top {
    top: 60%;
    left: 40%;
    background: var(--penguin-beak, orange);
    width: 20%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-bottom {
    top: 65%;
    left: 42%;
    background: var(--penguin-beak, orange);
    width: 16%;
    height: 10%;
    border-radius: 50%;
  }

  body {
    background:#c6faf1;
  }

  .penguin * {
    position: absolute;
  }
</style>
<div class="penguin">
  <div class="penguin-bottom">
    <div class="right-hand"></div>
    <div class="left-hand"></div>
    <div class="right-feet"></div>
    <div class="left-feet"></div>
  </div>
  <div class="penguin-top">
    <div class="right-cheek"></div>
    <div class="left-cheek"></div>
    <div class="belly"></div>
    <div class="right-eye">
      <div class="sparkle"></div>
    </div>
    <div class="left-eye">
      <div class="sparkle"></div>
    </div>
    <div class="blush-right"></div>
    <div class="blush-left"></div>
    <div class="beak-top"></div>
    <div class="beak-bottom"></div>
  </div>
</div>
```

<a id="markdown-161-创建一个自定义的-css-变量" name="161-创建一个自定义的-css-变量"></a>

### 16.1. 创建一个自定义的 CSS 变量

为创建一个 CSS 变量，你只需要在变量名前添加**两个连字符号**，并为其赋值即可，例子如下：

```
--penguin-skin: gray;
```

<a id="markdown-162-使用一个自定义的-css-变量" name="162-使用一个自定义的-css-变量"></a>

### 16.2. 使用一个自定义的 CSS 变量

创建变量后，CSS 属性可以通过调用变量名来使用它对应的值。

```
background: var(--penguin-skin);
```

<a id="markdown-163-给-css-变量设置备用值" name="163-给-css-变量设置备用值"></a>

### 16.3. 给 CSS 变量设置备用值

使用变量来作为 CSS 属性值的时候，可以设置一个备用值来防止由于某些原因导致变量不生效的情况。

```
background: var(--penguin-skin, black);
```

如果你的变量没有赋值，这将会把背景设置为 `black`。 提示：这对调试代码也会很有帮助。

---

<a id="markdown-17-通过浏览器降级提高兼容性" name="17-通过浏览器降级提高兼容性"></a>

## 17. 通过浏览器降级提高兼容性

使用 CSS 时可能会遇到浏览器兼容性问题。 提供浏览器降级方案来避免潜在的问题会显得很重要。

当浏览器解析页面的 CSS 时，会自动忽视不能识别或者不支持的属性。 举个例子，如果使用 CSS 变量来指定站点的背景色，IE 浏览器由于不支持 CSS 变量而会忽略背景色。 此时，浏览器会尝试使用其它值。 但如果没有找到其它值，则会使用默认值，也就是没有背景色。

这意味着如果想提供浏览器降级方案，在声明之前提供另一个更宽泛的值即可。 这样老旧的浏览器会降级使用这个方案，新的浏览器会在后面的声明里覆盖降级方案。

---

例子使用 CSS 变量来定义 `.red-box` 的背景色。 现在，我们通过在现有的声明之前添加另一个 `background` 声明，并将它的值设置为 `red`，来提升浏览器的兼容性。

```
<style>
  :root {
    --red-color: red;
  }
  .red-box {
    background: red;  /* this is the browser fallback */
    background: var(--red-color);
    height: 200px;
    width:200px;
  }
</style>
<div class="red-box"></div>
```

---

<a id="markdown-18-继承-css-变量" name="18-继承-css-变量"></a>

## 18. 继承 CSS 变量

CSS 变量经常会定义在 `:root` 元素内，这样就可被所有选择器继承。

`:root` 是一个伪类选择器，它是一个能够匹配文档根元素的选择器，通常指的是 `html` 元素。 我们在 `:root` 里创建变量在全局都可用，即在任何选择器里都生效。

```
<style>
  :root {
    /* 只修改这一行下面的代码 */
    --penguin-belly: pink;
    /* 只修改这一行上面的代码 */
  }

  body {
    background: var(--penguin-belly, #c6faf1);
  }

  .penguin {
    --penguin-skin: gray;
    --penguin-beak: orange;
    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: 300px;
    height: 300px;
  }

  .right-cheek {
    top: 15%;
    left: 35%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .left-cheek {
    top: 15%;
    left: 5%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .belly {
    top: 60%;
    left: 2.5%;
    background: var(--penguin-belly, white);
    width: 95%;
    height: 100%;
    border-radius: 120% 120% 100% 100%;
  }

  .penguin-top {
    top: 10%;
    left: 25%;
    background: var(--penguin-skin, gray);
    width: 50%;
    height: 45%;
    border-radius: 70% 70% 60% 60%;
  }

  .penguin-bottom {
    top: 40%;
    left: 23.5%;
    background: var(--penguin-skin, gray);
    width: 53%;
    height: 45%;
    border-radius: 70% 70% 100% 100%;
  }

  .right-hand {
    top: 0%;
    left: -5%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 120% 30%;
    transform: rotate(45deg);
    z-index: -1;
  }

  .left-hand {
    top: 0%;
    left: 75%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 30% 120%;
    transform: rotate(-45deg);
    z-index: -1;
  }

  .right-feet {
    top: 85%;
    left: 60%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(-80deg);
    z-index: -2222;
  }

  .left-feet {
    top: 85%;
    left: 25%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(80deg);
    z-index: -2222;
  }

  .right-eye {
    top: 45%;
    left: 60%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .left-eye {
    top: 45%;
    left: 25%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .sparkle {
    top: 25%;
    left: 15%;
    background: white;
    width: 35%;
    height: 35%;
    border-radius: 50%;
  }

  .blush-right {
    top: 65%;
    left: 15%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .blush-left {
    top: 65%;
    left: 70%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-top {
    top: 60%;
    left: 40%;
    background: var(--penguin-beak, orange);
    width: 20%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-bottom {
    top: 65%;
    left: 42%;
    background: var(--penguin-beak, orange);
    width: 16%;
    height: 10%;
    border-radius: 50%;
  }

  .penguin * {
    position: absolute;
  }
</style>
<div class="penguin">
  <div class="penguin-bottom">
    <div class="right-hand"></div>
    <div class="left-hand"></div>
    <div class="right-feet"></div>
    <div class="left-feet"></div>
  </div>
  <div class="penguin-top">
    <div class="right-cheek"></div>
    <div class="left-cheek"></div>
    <div class="belly"></div>
    <div class="right-eye">
      <div class="sparkle"></div>
    </div>
    <div class="left-eye">
      <div class="sparkle"></div>
    </div>
    <div class="blush-right"></div>
    <div class="blush-left"></div>
    <div class="beak-top"></div>
    <div class="beak-bottom"></div>
  </div>
</div>
```

在 `:root` 选择器里定义变量 `--penguin-belly` 并设置它的属性值为 `pink`。 此时，你会发现变量被继承，所有使用该变量的子元素都会有粉色背景。

<a id="markdown-19-更改特定区域的变量" name="19-更改特定区域的变量"></a>

## 19. 更改特定区域的变量

当你在 `:root` 里创建变量时，这些变量的作用域是整个页面。

然后，你可以通过在一个特定的选择器中再次设置这些变量来重写这些变量。

---

例子中在 `penguin` class 里，重新设置 `--penguin-belly` 的值为 `white`。

```
<style>
  :root {
    --penguin-skin: gray;
    --penguin-belly: pink;
    --penguin-beak: orange;
  }

  body {
    background: var(--penguin-belly, #c6faf1);
  }

  .penguin {
    /* 只修改这一行下面的代码 */
    --penguin-belly: white;
    /* 只修改这一行上面的代码 */
    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: 300px;
    height: 300px;
  }

  .right-cheek {
    top: 15%;
    left: 35%;
    background: var(--penguin-belly, pink);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .left-cheek {
    top: 15%;
    left: 5%;
    background: var(--penguin-belly, pink);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .belly {
    top: 60%;
    left: 2.5%;
    background: var(--penguin-belly, pink);
    width: 95%;
    height: 100%;
    border-radius: 120% 120% 100% 100%;
  }

  .penguin-top {
    top: 10%;
    left: 25%;
    background: var(--penguin-skin, gray);
    width: 50%;
    height: 45%;
    border-radius: 70% 70% 60% 60%;
  }

  .penguin-bottom {
    top: 40%;
    left: 23.5%;
    background: var(--penguin-skin, gray);
    width: 53%;
    height: 45%;
    border-radius: 70% 70% 100% 100%;
  }

  .right-hand {
    top: 0%;
    left: -5%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 120% 30%;
    transform: rotate(45deg);
    z-index: -1;
  }

  .left-hand {
    top: 0%;
    left: 75%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 30% 120%;
    transform: rotate(-45deg);
    z-index: -1;
  }

  .right-feet {
    top: 85%;
    left: 60%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(-80deg);
    z-index: -2222;
  }

  .left-feet {
    top: 85%;
    left: 25%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(80deg);
    z-index: -2222;
  }

  .right-eye {
    top: 45%;
    left: 60%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .left-eye {
    top: 45%;
    left: 25%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .sparkle {
    top: 25%;
    left: 15%;
    background: white;
    width: 35%;
    height: 35%;
    border-radius: 50%;
  }

  .blush-right {
    top: 65%;
    left: 15%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .blush-left {
    top: 65%;
    left: 70%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-top {
    top: 60%;
    left: 40%;
    background: var(--penguin-beak, orange);
    width: 20%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-bottom {
    top: 65%;
    left: 42%;
    background: var(--penguin-beak, orange);
    width: 16%;
    height: 10%;
    border-radius: 50%;
  }

  .penguin * {
    position: absolute;
  }
</style>
<div class="penguin">
  <div class="penguin-bottom">
    <div class="right-hand"></div>
    <div class="left-hand"></div>
    <div class="right-feet"></div>
    <div class="left-feet"></div>
  </div>
  <div class="penguin-top">
    <div class="right-cheek"></div>
    <div class="left-cheek"></div>
    <div class="belly"></div>
    <div class="right-eye">
      <div class="sparkle"></div>
    </div>
    <div class="left-eye">
      <div class="sparkle"></div>
    </div>
    <div class="blush-right"></div>
    <div class="blush-left"></div>
    <div class="beak-top"></div>
    <div class="beak-bottom"></div>
  </div>
</div>
```

<a id="markdown-20-使用媒体查询更改变量" name="20-使用媒体查询更改变量"></a>

## 20. 使用媒体查询更改变量

CSS 变量可以简化媒体查询的定义方式。

例如，当屏幕小于或大于媒体查询所设置的值，只要我们更新变量的值，那么使用了此变量的元素样式就都会更改。

---

在媒体查询声明`@media`的 `:root` 选择器里，重定义 `--penguin-size` 的值为 `200px`。 同时，重新定义 `--penguin-skin` 的值为 `black`， 然后通过缩放页面来查看它们是否生效。

```
<style>
  :root {
    --penguin-size: 300px;
    --penguin-skin: gray;
    --penguin-belly: white;
    --penguin-beak: orange;
  }

  @media (max-width: 350px) {
    :root {
      /* 只修改这一行下面的代码 */
    --penguin-size: 200px;
    --penguin-skin: black;
      /* 只修改这一行上面的代码 */
    }
  }

  .penguin {
    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: var(--penguin-size, 300px);
    height: var(--penguin-size, 300px);
  }

  .right-cheek {
    top: 15%;
    left: 35%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .left-cheek {
    top: 15%;
    left: 5%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .belly {
    top: 60%;
    left: 2.5%;
    background: var(--penguin-belly, white);
    width: 95%;
    height: 100%;
    border-radius: 120% 120% 100% 100%;
  }

  .penguin-top {
    top: 10%;
    left: 25%;
    background: var(--penguin-skin, gray);
    width: 50%;
    height: 45%;
    border-radius: 70% 70% 60% 60%;
  }

  .penguin-bottom {
    top: 40%;
    left: 23.5%;
    background: var(--penguin-skin, gray);
    width: 53%;
    height: 45%;
    border-radius: 70% 70% 100% 100%;
  }

  .right-hand {
    top: 5%;
    left: 25%;
    background: var(--penguin-skin, black);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 120% 30%;
    transform: rotate(130deg);
    z-index: -1;
    animation-duration: 3s;
    animation-name: wave;
    animation-iteration-count: infinite;
    transform-origin:0% 0%;
    animation-timing-function: linear;
  }

  @keyframes wave {
      10% {
        transform: rotate(110deg);
      }
      20% {
        transform: rotate(130deg);
      }
      30% {
        transform: rotate(110deg);
      }
      40% {
        transform: rotate(130deg);
      }
    }

  .left-hand {
    top: 0%;
    left: 75%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 30% 120%;
    transform: rotate(-45deg);
    z-index: -1;
  }

  .right-feet {
    top: 85%;
    left: 60%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(-80deg);
    z-index: -2222;
  }

  .left-feet {
    top: 85%;
    left: 25%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(80deg);
    z-index: -2222;
  }

  .right-eye {
    top: 45%;
    left: 60%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .left-eye {
    top: 45%;
    left: 25%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .sparkle {
    top: 25%;
    left:-23%;
    background: white;
    width: 150%;
    height: 100%;
    border-radius: 50%;
  }

  .blush-right {
    top: 65%;
    left: 15%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .blush-left {
    top: 65%;
    left: 70%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-top {
    top: 60%;
    left: 40%;
    background: var(--penguin-beak, orange);
    width: 20%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-bottom {
    top: 65%;
    left: 42%;
    background: var(--penguin-beak, orange);
    width: 16%;
    height: 10%;
    border-radius: 50%;
  }

  body {
    background:#c6faf1;
  }

  .penguin * {
    position: absolute;
  }
</style>
<div class="penguin">
  <div class="penguin-bottom">
    <div class="right-hand"></div>
    <div class="left-hand"></div>
    <div class="right-feet"></div>
    <div class="left-feet"></div>
  </div>
  <div class="penguin-top">
    <div class="right-cheek"></div>
    <div class="left-cheek"></div>
    <div class="belly"></div>
    <div class="right-eye">
      <div class="sparkle"></div>
    </div>
    <div class="left-eye">
      <div class="sparkle"></div>
    </div>
    <div class="blush-right"></div>
    <div class="blush-left"></div>
    <div class="beak-top"></div>
    <div class="beak-bottom"></div>
  </div>
</div>
```
