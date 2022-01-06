# mobx

>Mobx是通过透明的函数响应式编程使得状态管理变得简单和可扩展
>任何源自应用状态的东西都应该自动的获取。

![mobx](mobx.png);

## 概念与原则

>Mobx区分一下几个应用中的概念

### 1.State（状态）

状态是驱动应用的数据。通常有像代办事项这样的领域特定状态，还有像当前已选元素的视图状态，状态就像有数据的excel表格

### 2.Derviations(衍生)

任何源于状态并且不在会有任何进一步的互相作用的东西叫做衍生。衍生以多种形式存在

- 用户界面
- 衍生数据，比如剩下的待办事项的数量
- 后端集成，比如变化发送多后端服务器端

>Mobx分位两种衍生类型
>Computed values(计算值),他永远是纯函数从当前可观察状态中衍生出的值
>Reactions（反应），reactions是当状态改变时需要自动发生的副作用

黄金法则 ： 如果你想要创建一个基于当前状态的值就用conputed

### 3.Actions(动作)

动作是改变状态的代码。可以是用户操作事件，后端数据推送，预定事件。动作类似于用户在excel表格里输入一个新的值

### 原则

Mobx支持单向数据流，也就是动作（action）改变状态，而状态的改变会影响更新所有受影响的视图

![数据流动](action-state-view.png)

在状态改变时，所有衍生都会进行原子级的自动更新，因此永远不可能观察到中间值

### observable

用法 

- observable(value)
- @observable classProperty = value

Observable值可以时JS基本数据类型，引用类型，普通对象，类实例，数组和映射。
>使用@observable的属性，变成可观察的

```javaScript
improt {observable,computed}  from 'mobx';

class OrderLine{
    @observable price = 0;
    @observable amount =1;

    @computed get total(){
        return this.price * this.amount
    }
}
```

### autorun

使用autorun装饰器的

```javaScript
import {observable, autorun} from 'knowledge/mobx/mobx';

const value = observable(0);
const number = observable(100);

autorun(() => {
    console.log(value.get());
});

value.set(1);
value.set(2);
number.set(101);
```

输出的结果是 0 ， 1， 2
可以看出autorun是先执行一次，然后在autorun中所依赖state发生变化就继续执行

### computed

```javaScript
const number  =observable(10)
const plus = computed(()=> number.get()>0)
 autorun(()=>{
     console.log(plus.get());
 })
 number.set(19);
 number.set(-2);
 number.ser(2)
```

输出结果 true false true
