// 算法
interface Tree {
    id: number,
    value: number,
    left?: Tree,
    right?: Tree
}

const data = {
    value: 1,
    id: 1,
    left: {
        value: 2,
        id: 2,
        left: {
            id: 4,
            value: 4
        }
    },
    right: {
        value: 3,
        id: 3
    }
}

function findMaxNode(tree: Tree) {
    let maxNode = tree;
    if (tree?.left) {
        const leftMax = findMaxNode(tree.left)
        if (leftMax.value > maxNode.value) {
            maxNode = leftMax
        }
    }
    if (tree?.right) {
        const rightMax = findMaxNode(tree.right);
        if (rightMax.value > maxNode.value) {
            maxNode = rightMax;
        }
    }
    return maxNode;
}
// 问题1：useEffect 和 useLayoutEffect的区别
// useEffect 和useLayoutEffect的执行过程
// useEffect是同步执行，useLayoutEffect是异步执行
// 当组件渲染时，useEffect组件的整个过程：
// 1.触发组件渲染（props改变|state改变，导致子节点重新渲染）
// 2.组件函数执行
// 3.组件函数呈现在屏幕上
// 4.useEffect执行
// useLayoutEffect的执行过程：
// 1.触发组件渲染
// 2.组件函数执行
// 3.useLayoutEffect函数执行
// 4.组件渲染到屏幕上


// 问题2： react的hooks为什么不能写在判断语句中
// React的Hooks不能写在判断语句中，因为Hooks是一种特殊的函数，它们必须在React函数组件的顶层调用，而不能在条件语句或者循环语句中调用。
// React的hooks维护着一个有序链表(单向链表)

// 问题3： react在16.0之后的的fiber架构
// schdule，reconcile,commit的流程是fiber架构
/*

1.react的钩子为什么不能写在判断里面
2.react的钩子的数据结构是（‘单向链表’），为什么
3.react的16.0做了什么
4.react-filber的架构设计以及工作流程
5.react的filter影响的生命周期
6.react17.0做了什么
7.react的钩子的闭包陷阱，以及为什么会出现这种情况
8.diff过程
9. key是干什么的
10.webpack4，5的区别，5主要做了什么优化
11.模块联邦的思路
12.webpack的优化，treeshaking
13,微前端使用模块联邦，有什么优点，缺点，有其他的方式实现吗
14.自己项目的架构
*/
