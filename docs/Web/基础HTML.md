---
sidebar_position: 0
---

# HTML 基础知识

[编程学习](https://www.icoderoad.com/)

<!-- TOC -->

- [HTML 基础知识](#html-基础知识)
  - [1. 标题](#1-标题)
  - [2. 段落](#2-段落)
  - [3. 添加注释](#3-添加注释)
  - [4. 给网站添加图片](#4-给网站添加图片)
  - [5. 用 a 实现网页间的跳转](#5-用-a-实现网页间的跳转)
  - [6. 用 a 实现网页内部跳转](#6-用-a-实现网页内部跳转)
  - [7. 用 # 号来创建链接占位符](#7-用--号来创建链接占位符)
  - [8. 给图片添加链接](#8-给图片添加链接)
  - [9. 创建一个无序列表](#9-创建一个无序列表)
  - [10. 创建一个有序列表](#10-创建一个有序列表)
  - [11. 创建一个输入框](#11-创建一个输入框)
    - [11.1. 给输入框添加占位符文本](#111-给输入框添加占位符文本)
    - [11.2. 创建一个表单](#112-创建一个表单)
    - [11.3. 给表单添加提交按钮](#113-给表单添加提交按钮)
  - [12. 创建一组单选按钮](#12-创建一组单选按钮)
  - [13. 创建一组复选框](#13-创建一组复选框)
  - [14. 使用单选框和复选框的 value 属性](#14-使用单选框和复选框的-value-属性)
  - [15. 给单选按钮和复选框添加默认选中项](#15-给单选按钮和复选框添加默认选中项)
  - [16. div 元素嵌套](#16-div-元素嵌套)
  - [17. 声明 HTML 的文档类型](#17-声明-html-的文档类型)
  - [18. 定义 HTML 文档的 head 和 body](#18-定义-html-文档的-head-和-body)

<!-- /TOC -->

<a id="markdown-1-标题" name="1-标题"></a>

## 1. 标题

```
<h1>一级标题</h1>
<h2>二级标题</h2>
<h3>三级标题</h3>
<h4>四级标题</h4>
<h5>五级标题</h5>
<h6>六级标题</h6>
```

---

<a id="markdown-2-段落" name="2-段落"></a>

## 2. 段落

```
<p>段落内容</p>
```

<a id="markdown-3-添加注释" name="3-添加注释"></a>

## 3. 添加注释

注释的开始标记是 `<!--`，结束标记是 `-->`。

---

<a id="markdown-4-给网站添加图片" name="4-给网站添加图片"></a>

## 4. 给网站添加图片

所有的 `img` 元素 必须 有 `alt` 属性。 `alt` 的属性值有两个作用，第一个作用是让屏幕阅读器可以知晓图片的内容，这会对网页的可访问性有很大提升；另一个作用是当图片无法加载时，页面需要显示的替代文本。 注意：无结束标签

```
<img src="https://github.com/yeahooool/yeahooool.github.io/blob/master/images/avatar.jpg" alt="avatar">
```

<a id="markdown-5-用-a-实现网页间的跳转" name="5-用-a-实现网页间的跳转"></a>

## 5. 用 a 实现网页间的跳转

`a` (anchor) 需要一个 `href` 属性指向跳转的目的地。 同时，它还应有内容。例如
<a href="https://yeahooool.github.io/">this links to myblog</a>

```
<a href="https://yeahooool.github.io/">this links to myblog</a>
```

从锚点标签中添加 `target="_blank"` 属性，会导致链接文档在新窗口标签中打开。
<a href="https://yeahooool.github.io/" target="_blank">this links to myblog</a>

```
<a href="https://yeahooool.github.io/" target="_blank">this links to myblog</a>
```

<a id="markdown-6-用-a-实现网页内部跳转" name="6-用-a-实现网页内部跳转"></a>

## 6. 用 a 实现网页内部跳转

`a`元素也可以用于创建内部链接，跳转到网页内的各个不同部分。

要创建内部链接，你需要将链接的 `href` 属性值设置为一个哈希符号 `#` 加上你想内部链接到的元素的 `id`，通常是在网页下方的元素。 然后你需要将相同的 `id` 属性添加到你链接到的元素中。 `id` 是描述网页元素的一个属性，它的值在整个页面中唯一。
<a href="#footer">Jump to bottom</a>

```
<a href="#footer">Jump to bottom</a>
...
<div id="footer">Jump to bottom</div>
```

当用户点击 `Jump to bottom` 链接时，他们将被带到带有 `Jump to bottom` 标题元素的网页部分。

<a id="markdown-7-用--号来创建链接占位符" name="7-用--号来创建链接占位符"></a>

## 7. 用 # 号来创建链接占位符

有时你想为网站添加一个 `a` 元素，但还不确定要将它链接到哪里。

```
href="#"
```

<a id="markdown-8-给图片添加链接" name="8-给图片添加链接"></a>

## 8. 给图片添加链接

你可以通过把元素嵌套进 `a` 里使其变成一个链接。

```
<p>Click here to view more <a href="#"><img src="url" alt="text"></a>.</p>
```

---

<a id="markdown-9-创建一个无序列表" name="9-创建一个无序列表"></a>

## 9. 创建一个无序列表

无序列表以 `<ul>` 开始，中间包含一个或多个 `<li>` 元素， 最后以 `</ul>` 结束。

- 1
- 2
- 3

```
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

<a id="markdown-10-创建一个有序列表" name="10-创建一个有序列表"></a>

## 10. 创建一个有序列表

有序列表以 `<ol>` 开始，中间包含一个或多个 `<li>` 元素。 最后以 `</ol>` 结束。

1. 第一条
2. 第二条
3. 第三条

```
<ol>
  <li>第一条</li>
  <li>第二条</li>
  <li>第三条</li>
</ol>
```

---

<a id="markdown-11-创建一个输入框" name="11-创建一个输入框"></a>

## 11. 创建一个输入框

`input` 输入框可以让你轻松获得用户的输入。<br /> 注意： `input` 输入框是没有结束标签的。<br />

<input type="text" />

```
<input type="text">
```

<a id="markdown-111-给输入框添加占位符文本" name="111-给输入框添加占位符文本"></a>

### 11.1. 给输入框添加占位符文本

占位符文本用户在 `input` 输入框中输入任何东西前的预定义文本。<br />

<input type="text" placeholder="this is placeholder text" />

```
<input type="text" placeholder="this is placeholder text">
```

<a id="markdown-112-创建一个表单" name="112-创建一个表单"></a>

### 11.2. 创建一个表单

我们可以只通过 HTML 来实现发送数据给服务器的表单， 只需要给 `form` 元素添加 `action` 属性即可。

```
<form action="url-where-you-want-to-submit-form-data">
  <input>
</form>
```

<a id="markdown-113-给表单添加提交按钮" name="113-给表单添加提交按钮"></a>

### 11.3. 给表单添加提交按钮

让我们来给表单添加一个 `submit`（提交）按钮。 点击提交按钮时，表单中的数据将会被发送到 `action` 属性指定的 URL 上。<br />

<form action="#">
  <input type="text" placeholder="this is placeholder text" />
  <button type="submit">Submit</button>
</form>

```
<form action="#">
  <input type="text" placeholder="this is placeholder text">
  <button type="submit">Submit</button>
</form>
```

如果你想把文本输入框设置为必填项，在 `input` 元素中加上 `required` 属性就可以了，例如：<br />`<input type="text" required>`

<a id="markdown-12-创建一组单选按钮" name="12-创建一组单选按钮"></a>

## 12. 创建一组单选按钮

radio buttons（单选按钮）就好比单项选择题，正确答案只有一个。

单选按钮是 `input` 选择框的一种类型。

每一个单选按钮都应该嵌套在它自己的 `label`（标签）元素中。 这样，我们相当于给 `input` 元素和包裹它的 `label` 元素建立起了对应关系。

所有关联的单选按钮应该拥有**相同**的 `name` 属性。 创建一组单选按钮，选中其中一个按钮，其他按钮即显示为未选中，以确保用户只提供一个答案。<br />

<label for="first">
<input id="first" type="radio" name="first-two" />First
</label>
<label for="two">
<input id="two" type="radio" name="first-two" />Two
</label>

```
<label for="first">
<input id="first" type="radio" name="first-two">First
</label>

<label for="two">
<input id="two" type="radio" name="first-two">Two
</label>
```

<a id="markdown-13-创建一组复选框" name="13-创建一组复选框"></a>

## 13. 创建一组复选框

checkboxes（复选框）就好比多项选择题，正确答案有多个。<br />

<label for="first">
<input id="first" type="checkbox" name="first-two" />First
</label>
<label for="two">
<input id="two" type="checkbox" name="first-two" />Two
</label>

```
<label for="first">
<input id="first" type="checkbox" name="first-two">First
</label>

<label for="two">
<input id="two" type="checkbox" name="first-two">Two
</label>
```

<a id="markdown-14-使用单选框和复选框的-value-属性" name="14-使用单选框和复选框的-value-属性"></a>

## 14. 使用单选框和复选框的 value 属性

提交表单时，所选项的值会发送给服务端。 `radio` 和 `checkbox` 的 `value` 属性值决定了发送到服务端的实际内容。

```
<label for="first">
<input id="first" type="radio" name="first-two" value="first">First
</label>
```

表单数据会包含：`first-two=indoor`。 也就是所选项的 `name` 和 `value` 属性值。  
如果没有指明 `value` 属性值，则会使用默认值做为表单数据提交，也就是 `on`。 在这种情况下，如果用户选中 "first" 选项然后提交表单，表单数据则会包含 `first-two=on`。 这样的表单数据看起来不够直观，因此最好将 `value` 属性值设置为一些有意义的内容。

<a id="markdown-15-给单选按钮和复选框添加默认选中项" name="15-给单选按钮和复选框添加默认选中项"></a>

## 15. 给单选按钮和复选框添加默认选中项

用 `checked` 属性把第一个复选框和单选按钮都设置为默认选中。

为此，只需将单词 `checked` 添加到 `input` 元素的内部 <br />
<label for="first">
<input id="first" type="checkbox" name="first-two" />First
</label>
<label for="two">
<input id="two" type="checkbox" name="first-two" checked />Two
</label>

```
<label for="first">
<input id="first" type="checkbox" name="first-two">First
</label>

<label for="two">
<input id="two" type="checkbox" name="first-two" checked>Two
</label>
```

---

<a id="markdown-16-div-元素嵌套" name="16-div-元素嵌套"></a>

## 16. div 元素嵌套

`div` 元素也叫内容划分元素，是一个包裹其他元素的通用容器。

```
<div>
    <p></p>
    ...
    <ul></ul>
        <li></li>
</div>
```

---

<a id="markdown-17-声明-html-的文档类型" name="17-声明-html-的文档类型"></a>

## 17. 声明 HTML 的文档类型

你可以通过 `<!DOCTYPE ...>` 来告诉浏览器页面上使用的 HTML 版本，"`...`" 部分就是版本号。 `<!DOCTYPE html>` 对应的就是 HTML5。

所有的 HTML 代码都必须位于 html 标签中。 其中 `<html>` 位于 `<!DOCTYPE html>` 之后，`</html>` 位于网页的结尾。

```
<!DOCTYPE html>
<html>
...
</html>
```

<a id="markdown-18-定义-html-文档的-head-和-body" name="18-定义-html-文档的-head-和-body"></a>

## 18. 定义 HTML 文档的 head 和 body

网页的描述应放入 `head` 标签， 网页的内容（向用户展示的）则应放入 `body` 标签。<br />
比如 `link`、`meta`、`title` 和 `style` 都应放入 `head` 标签。

```
<!DOCTYPE html>
<html>
  <head>
   <meta charset="utf-8">
   <title>Example title</title>
  </head>
  <body>
    <div>
    </div>
  </body>
</html>
```

- `<meta>` 标签提供了 HTML 文档的元数据。元数据不会显示在客户端，但是会被浏览器解析。<br />
  META 元素通常用于([详情参考](https://www.runoob.com/tags/tag-meta.html)):
  1. 指定网页的描述，
  2. 关键词，
  3. 文件的最后修改时间，
  4. 作者及其他元数据。

* `charset` 属性：这个属性声明了文档的字符编码。如果使用了这个属性，其值必须是与 ASCII 大小写无关的"`utf-8`"
