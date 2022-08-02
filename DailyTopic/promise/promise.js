// promise实现原理
// 用于异步函数

/*
* 基本语法
* 1.创建promise对象
* 2.使用promise对象*/

const promise = new Promise((resolve, reject) => {
    // promise的三个状态 ： pending ,fulfilled,rejected
    // resolve 成功的时候调用的函数, 将promise的状态从pending转化为fulfilled
    // reject 失败的时候调用的函数   将promise的状态从pending转化为rejected
    setTimeout(() => {
        resolve(500)
    }, 100)
});

promise.then((res) => {
    console.log(res)
});

const a = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 0)
})
const b = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2)
    })
})

const c  = Promise.all([a,b]);
c.then((res)=>{
    console.log(res)
});
const d = Promise.race([a,b]);
d.then((res)=>{
    console.log(res)
})

