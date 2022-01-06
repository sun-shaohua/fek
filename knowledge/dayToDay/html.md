### html

## 什么是HTML？

> html是超文本标记型语言

## 元素

> 包括了块级元素和行内元素,还可以通过 `display:inline-block`转化为行内块元素

### 块级元素

```html

<address></address><!--联系方式信息-->
<article></article><!--文章内容-->
<aside></aside><!--伴随内容-->
<blockquote></blockquote><!--块引用-->
<div></div><!--文档分区-->
<ul></ul><!--无序列表-->
<p></p><!--行-->
<hr/><!--水平分割线-->
<h1-6></h1-6><!--标题-->
<pre></pre><!--预格式化文本-->
<table></table><!--表格-->
<header></header><!--区段头或页头-->
```

### 行内元素

```html

<button></button>
<span></span>
<img src="" alt=""/>
<input type="text"/>
<select name="" id=""></select>
<textarea name="" id="" cols="30" rows="10"></textarea>
<br>
```

## HTML标签按照功能分类

### 主根元素

```html

<html></html><!--<html>元素表示HTML文档的根（顶级元素）,所以也被称为根元素。所以其他元素必须是此元素的后代-->
```

### 文档元素数据

```html

<base href="./" target="_blank"><!--<base>标签是用于指定一个文档包含的所有url的根url。一份文档里面也只能有一个<base>标签。-->
<head>
    <base href="" target="_blank"/>
    <title>{'测试'}</title><!--title标签定义标题,显示在Browser的标题栏或者标签页。只包含文本，如果有标签将会被忽略。-->
    <meta charset="UTF-8" name="关键词" content="文档的主要内容"><!--meta标签可以指定页面的编码，以及页面的元信息（meta-information）,主要是针对搜索引擎和更新频度的描述和关键字。-->
    <link rel="stylesheet" href="ccs路径"><!--link标签可以引入外部css文件-->
    <link rel="icon" href="icon路径"><!--link标签可以定义icon，href可以是绝对路径或者是相对路径-->
    <script src="引入javaScript文件"/><!--script标签可以引入javaScript文件-->
    <style>
        /*在这里面可以写该html的css*/
    </style>
</head><!---->
```
###分区根元素
```html
<body></body><!--body标签表示文档的内容。可以通过document.body属性来访问文档的body元素的脚本。-->
```
###内容分区
```html
<address>
    <a href="mailto:jim@rock.com">jim@rock.com</a><br><!--address元素主要是提供个人或者组织的联系信息。-->
    <a href="tel:+13115552368">(311) 555-2368</a>
</address>
<article></article><!--article元素表示文档，页面，应用或者网站中独立结构，其意在成为可独立分配的或者可服用的结构。-->
<aside></aside><!--aside元素表示一个和其余的页面内容几乎没有关系的部分，通常表现为侧边栏或者注释框。-->
<header></header><!---->
<footer></footer><!--footer元素表示最近一个章节内容或者根节点元素的页脚。一个页脚通常包含该文章的内容，版权数据，或者是和文章相关的链接。-->
<h1></h1><!--h1-h6呈现6个不同程度级别的标题。-->
<main></main><!--main元素呈现了文档body或者是应用的主体部分。-->
<nav></nav>
<section></section><!--section元素表示一个包含在HTML文档中的独立部分，它没有更具体的语义元素来表示，一般来说会有包含一个标题。-->
```
