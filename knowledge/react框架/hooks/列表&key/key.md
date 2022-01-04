# 列表&key

## map( )处理处理数组，是的数组的每一项翻倍，然后得到一个新的列表，打印如下

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((it, key, arr) => {
    it * 2
})
console.log(doubled)
```

在React中将数组转化为元素的方式，与map()处理数据的方式很相似，只是return的为html

## 通过map()渲染组件

下面通过map( )方法来遍历numbers数组。将数组中的每一个元素变成li标签。

```javascript
const number=[1,2,3,4,5];
const listitems =numbers.map((it)=>{
    <li>{it}</li>
})
```

之后再把listItems插入到ul元素里main，渲染dom

```javascript
ReactDOM.render(<ul>{listitems}</ul>,document.getElementById('root'))
```

## 这样写的问题

运行这段代码后，将会看到一个警告`a key should be provided for list items`，意思是在创建元素是，必须包含一个特殊的属性`key`

## 解决办法(通过index来代表key值，有不太合理的地方)

在遍历数组的时候，以下标做为`key`来解决当前问题

```javascript
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number,index) =>
    <li key={index}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}
const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

## key的作用

>key可以帮助React识别哪些元素改变了，比如添加，删除操作。因此你应该给数组的每一个元素赋予一个确定的标识。

>一个元素的key最好是这个元素列表独一无二的字符串。一般情况下可以使用数据的id做为key。

>在元素没有id时,万不得已的情况下可以使用元素的索引index做为key

使用index做为key出现问题的例子:
1.<https://jsbin.com/wohima/edit?html,css,js,output>
2.<https://www.jianshu.com/p/c74624223986>
