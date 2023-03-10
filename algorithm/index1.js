//多种方式实现斐波那契数列
// 数学上是以递归的形式定义的 fn = f(n-1) + f(n-2)
// 公式
function fib(n) {
    if (n < 0) {
        new Error('请输入一个大于0的整数');
    }
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2)
}

// 使用for循环
function fib1(n) {
    if (n < 0) {
        new Error('请输入一个大于0的整数');
    }
    if (n < 2) return n;
    let fib0 = 0, fib1 = 1, curFib = 0;
    for (let i = 0; i < n; i++) {
        curFib = fib0 + fib1;
        fib0 = fib1;
        fib1 = curFib;
    }
    return curFib;
}

// 使用递归
function fib2(n) {
    if (n < 0) throw new Error('请输入一个大于零的数');
    if (n < 2) return n;
    const fib = (n, fib0, fib1) => {
        if (n === 0) return fib0;
        return fib(n - 1, fib1, fib0 + fib1);
    }
    fib(n, 0, 1)
}

function _fib(n){
    if(n<0){
        new Error('请输入一个大于O的整数');
    }
    if(n < 2) return n;
    let fib0 =0,fib1=1,curFib =0;
    for(let i = 0;i<n;i++){
        curFib =fib0+fib1;
        fib0=fib1;
        fib1=curFib;
    }
    return curFib;
}

function _fib1(n){
    if(n<0) throw new Error('');
    if(n<2) return n;
    const fib =(n ,fib0,fib1)=>{
        if(n===0) return fib0;
        return  fib(n-1,fib1,fib0+fib1)
    }
    fib(n,0,1)
}
