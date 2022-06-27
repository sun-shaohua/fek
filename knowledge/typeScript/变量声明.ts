/*
* Var声明
* var作用域（函数作用域）*/

//例1
function f(): Function {
    var a: number = 10;
    return function g(): number {
        var b: number = a + 1;
        return b;
    }
}

var g = f();
g(); // returns 11;

//例2
function h(): number {
    var a: number = 1;

    a = 2;
    var b: number = g();
    a = 3;

    return b;

    function g(): number {
        return a;
    }
}

h(); // returns 2

//例3
for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100 * i);
}
// 10*10
// 例4
for (var i = 0; i < 10; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i);
        }, 100 * i);
    })(i)
}
// 1,2,3...,9,10


/*
* Let 声明
* 块级作用域*/

/*
const 声明
* 块级作用域*/

/*解构*/
/*展开*/
