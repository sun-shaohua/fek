//1.全局环境下，this指向window，即浏览器环境中
console.log(this === window);
//2.函数独立调用，this指向window
function foo(){
    console.log(this === window)
}
foo();
//3.被嵌套的函数独立调用时，this指向window
const obj ={
    a:2,
    foo: function (){
        console.log(this) // 指向obj
        function test(){
            console.log(this) // 指向window
        }
        test()
    }
}
obj.foo();
// 上面代码虽然test()函数被嵌套在obj.foo()函数中，但test()函数是独立调用，而不是方法调用。所以this默认绑定到window

//IIFE立即执行函数实际是函数声明后立即调用执行，内部的this指向了window
const obj1 ={
    a:2,
    foo:function (){
        (function test(){
            console.log(this)
        }())
    }
}
obj1.foo();
// this的定义
// this是运行时绑定的，不是在编写时绑定的。
// this的绑定与函数的声明，位置没有关系。
// 函数在调用时，会创建一个执行上下文，this 就是这个执行上下文中的一个属性，在函数执行的时候可以用到 this。所以 this 是在函数调用的时候确定绑定关系的，也就是运行时。
//总结出来大概就一句话：
// this 就是一个对象，this 是在函数被调用时发生的绑定，它指向什么完全取决于函数在哪里被调用。

