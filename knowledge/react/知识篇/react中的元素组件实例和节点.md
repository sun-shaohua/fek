#### React中的元素，组件，实例，节点

##### 元素（Element）

- react元素是一个JavaScript对象，一个react元素和界面上的一部分Dom对应，描述这部分Dom的结构和渲染效果，一般我们用jsx语法创建，例如：
```tsx
<H1 className='element'>Hello,world</H1>
```
- Element是一个React元素，在编译环节，JSX语法会被编译成`React.createElement()`
```tsx
React.createElement('h1'
    , {
        className: 'element'
    },
    'Hello,world')
```
- 最终element的值将转化为浏览器可以识别的数据结构
```javascript
const element = {
    type:'h1',
    props:{
        className:'element',
        children:'Hello,world'
    }
}
```
- React中的元素可以分为两种，Dom类型的元素，组件类型的元素
```tsx
Button = <button>按钮</button>
```
      对于DOM类型的元素，因为和页面的DOM节点直接对应，所以React知道如何进行渲染。
   但是对于组件类型的元素，如buttonElement，React是无法直接知道应该把buttonElement渲染成哪种结构的页面DOM，这时就需要组件自身提供React能够识别的DOM节点信息，具体实现方式在介绍组件时会详细介绍。
      有了React 元素，我们应该如何使用它呢
   其实，绝大多数情况下，我们都不会直接使用React 元素，React 内部会自动根据React 元素，渲染出最终的页面DOM。更确切地说，React元素描述的是React虚拟DOM的结构，React会根据虚拟DOM渲染出页面的真实DOM。


###### 组件（Component）
react组件应该是大家最熟悉的概念。React组件思想，将界面拆分成一个个可以服用的模块，每个模块就是一个React组件。每个React应用有若干个组件组成，每个组件又可以由若干个简单的组件组成。
react组件和react元素关系密切，React组件最核心的是返回React元素。

##### 实例 (Instance）
这里的实例特指React组件的实例。React 组件是一个函数或类，实际工作时，发挥作用的是React组件的实例对象。只有组件实例化后，每一个组件实例才有了自己的props和state，才持有对它的DOM节点和子组件实例的引用。
在传统的面向对象的开发方式中，实例化的工作是由开发者自己手动完成的，但在React中，组件的实例化工作是由React自动完成的，组件实例也是直接由React管理的。换句话说，开发者完全不必关心组件实例的创建、更新和销毁。

##### 节点 (Node)
在使用PropTypes校验组件属性时，有这样一种类型：
```javascript
MyComponent.propTypes = {
optionalNode: PropTypes.node,
}
```
复制代码PropTypes.node又是什么类型呢？这表明optionalNode是一个React 节点。React 节点是指可以被React渲染的数据类型，包括数字、字符串、React 元素，或者是一个包含这些类型数据的数组。例如：
```javascript
// 数字类型的节点
function MyComponent(props) {
return 1;
}

// 字符串类型的节点
function MyComponent(props) {
return 'MyComponent';
}

// React元素类型的节点
function MyComponent(props) {
return <div>React Element</div>;
}

// 数组类型的节点，数组的元素只能是其他合法的React节点
function MyComponent(props) {
const element = <div>React Element</div>;
const arr = [1, 'MyComponent', element];
return arr;
}

// 错误，不是合法的React节点
function MyComponent(props) {
const obj = { a : 1}
return obj;
}

```
