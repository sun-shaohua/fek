## javaScript

### `object`对象取值方式

1. `Object.keys(obj)`返回一个对象中可枚举属性组成的数组。
2. `Object.values(obj)` 返回一个对象中可枚举属性的值组成的数组。
3. `Object`值的获取方式 `object[key]`| `object.key`。

### 判断 `null`,`undefine`和 `NAN`

  ```javascript
isNaN(x);
x === null;
typeof (x) === 'undefined';
```

### `TC39`是什么？包括哪些人？

一个推动 JavaScript 发展的委员会，由各个主流浏览器厂商的代表构成。

### `event.persist()`

我们在react中操作的DOM事件，获取到的事件对象，其实是react内部帮我们合成的。为了节约性能，会使用对象池，当一个合成事件对象被使用完毕，即同步代码实现完毕后，会再次调用并且将其属性全部设为Null，所以当我们异步访问或者打印时，显示的属性值已经是null值，解决方法：
按照报错提示的，加上event.persist()即可，它会将当前的合成事件对象从对象池抽离出来，这样他就不会再被调用并且其属性不会变为Null.

```javascript
const onChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.persist();
    getMarginReportId().then(() => {
        setPagination({
            page: 1,
            pageSize: 10
        });
        updateEvaluations(pagination, parametersInit);
        Dialog.close(event);
    });
};
```

### 冒泡事件和事件捕获

1.冒泡事件 事件按照从最特定的事件目标到最不特定的事件目标(document对象)的顺序触发。 2.事件捕获 事件从最不精确的对象(document 对象)开始触发，然后到最精确(也可以在窗口级别捕获事件，不过必须由开发人员特别指定)
如何阻止冒泡事件？ 1.event.stopPropagation()方法 这是阻止事件的冒泡方法，不让事件向documen上蔓延，但是默认事件任然会执行，当你掉用这个方法的时候，如果点击一个连接，这个连接仍然会被打开，
2.event.preventDefault()方法 这是阻止默认事件的方法，调用此方法是，连接不会被打开，但是会发生冒泡，冒泡会传递到上一层的父元素；

### 副作用

副作用是在计算结果的过程中，系统状态的一种变化，或者与外部世界进行的可观察的交互。 列举的一些副作用：
      更改文件系统
      往数据库插入记录
      发送一个http请求
      可变数据
      打印/log
      获取用户输入
      DOM查询
      访问系统状态

### 第一次使用元组遇到的问题

```javaScript
const [tuple,setTuple]= useState<[number,number]>([1,1])

onChange =()=>{
    const _tuple =[...tuple];
    _tuple[0]=2;
    setTuple(_tuple)
}
```

在使用onChange时，直接操作了useState，里面的数据时只读的，所以没有更改


### 防抖和节流的使用

#### 函数防抖（Debounce）

什么是防抖？
>在事件被触发n秒后在执行，如果在这n秒内又触发事件，则重新计算

生活中的实例：如果有人进电梯（触发事件），那么电梯在10秒后触发（执行监听事件），如果在此期间又有人进电梯（在10秒内在此触发事件），我们在等10秒在出发

##### 自定义防抖函数

使用闭包和setTimeout（）函数

```javaScript
const debounce =(fun ,delay)=>{
    let timer = 0;
    return ()=>{
        if(timer){
            clearTimeout(timer);
        }
       timer = setTimrout(fun,delay)
    }
}

//传进来的fun应该是立即执行函数，比如 ()=>{fun()}
```

### 函数节流（Throttle）

什么是函数节流？
>规定一个单位时间，在这个单位时间内，只有一次触发事件的回归函数执行，如果在同一个事件单位内某事件被触发多次，只有一次生效。

生活例子：函数节流就像开枪游戏的射速，就算一直按着鼠标设计，也只会在规定的射速内射出子弹

函数节流也使用了闭包和setTimeout（）

```javaScript
const throttle(fun,delay)=>{
    let timer;
    return ()=>{
        if (timer){
            return;
        }
        timer = setTimeout(()=>{
            fun();
            timer=null
        },delay)
    }
}
```
