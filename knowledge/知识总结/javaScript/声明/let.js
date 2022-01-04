/*
let声明一个块级作用域的本地变量，并且可选的将其初始化一个值；

1.在同一作用域里面不得重复声明。
2.使用let声明，存在暂时死区，就是在作用域内，必须在执行let声明之后使用变量，否则会报错。
3.在全局作用域下使用var声明的变量会挂载在windows对象上，而使用let，const声明的变量并不会挂载在windows上面

*/


let x = 111;
if (x > 1) {
    console.log(x)
}

function scopeExample(){
    var y = 'test';
    console.log('作用域内'+y);
}
scopeExample();
console.log('y'); //Err:ESLint: 'y' is not defined.(no-undef)
