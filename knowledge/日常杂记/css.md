##css
###隐藏滑动条
```css
 ::-webkit-scrollbar { //滑动条隐藏
display: none;
}
```
###盒子模型

(1)CSS盒子模型也叫做框模型，具备内容(content)、填充(padding)、边框(border)、边界(margin)这些属性。在CSS中，每一个元素都被视为一个框，而每个框都有三个属性：

`border`:元素的边框(可能不可见)，用于将框的边缘与其他框分开;

`margin`：外边距，表示框的边缘与相邻框之间的距离，及相邻盒子的距离(可理解为，盒子摆放的时候的不能全部堆在一起，要留一定空隙保持通风，同时也为了方便取出);

`padding`:内边距，表示框内容和边框之间的空间(可理解为，怕盒子里装的东西(贵重的)损坏而添加的泡沫或者其它抗震的辅料)。

(2)盒模型的构成：

`盒模型= content(element) + border + padding+ margin`

如下图所示：

(3)两种盒模型

W3C标准 和 IE标准盒子模型

在这两种盒模型中width、height分别代表的值

1) 在W3C标准即标准盒模型中，width、height指的是content(element)元素内容的宽、高的大小;

2) 在IE标准盒子模型也称怪异盒模型中，width、height指的是content + border+ padding的大小。

     标准盒模型的优点：

     css样式中元素使用标准盒模型，width能直接表示出content内容的大小，不需计算。

     缺点：

     1)当给元素添加border和padding、margin时，width与height都要减去相应的值。

     2)当设置了margin时存在margin相关的问题。

    IE盒模型的优点：

    1)在网站设计稿中两处整个部分的宽高后直接把width与height的值设置成最外部的宽高，再根据设计稿直接加padding、margin、border，不用再修改width和height的值。

    2)在网站中的某部分制作鼠标悬停放大等动态变化的宽度时，把元素设置成怪异盒模型可以消除对相邻的元素位置的影响。

    缺点：存在兼容性问题

### 隐藏是否占位

不占位：display：none；
占位：visibility：hidden；
