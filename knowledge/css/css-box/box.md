# css box(盒子模型)

>在css中，所有的元素被一个个的盒子（box）包围着，在css中我们广泛地使用两种盒子，块级盒子和内联盒子

## 盒子模型的各个部分

- content box 这个区域显示内容，大小通过设置width和height
- padding box 包括在内容区域外部的空白区域，大小通过padding相关的属性设置
- border box 边框盒包括内容和内边距，通常border相关的属性设置
- margin box 这个设置盒子外边的区域，是盒子和其他元素之前的空白区域，通常使用margin相关的属性设置

![css-box](box-model.png)

注意：标准盒子模型和IE盒子模型的区别在于定义盒子的宽高是有哪些部分组成

标准盒子模型和代替（IE）盒子模型
>标准盒子模型的宽 = 350px +50px + 10px，高 = 150px + 50px + 10px
>代替盒子模型宽 = 350px ， 高 = 150px
>即标准盒子模型的宽高 = box-content + box-padding + box-border ; 代替盒子模型的box-content = width/height - 2*margin - 2*padding

```css
.box{
    width:350px;
    height:150px;
    margin:25px;
    padding:25px;
    border:5px solid black;
}
```

注意：css里面写的height在标准盒子模型中是指box-content，在代替盒子模型中是box-content+box-padding+box-border
