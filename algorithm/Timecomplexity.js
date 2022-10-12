// 时间复杂度（Time complexity）是一个函数，定性的描述该算法的运行时间，
// 这是一个代表算法输入值的字符串的长度的函数. 时间复杂度常用大O表述，不包括这个函数的低阶项和首项系数。

//例子1：
function test(n) {
    for (let i = 0; i < n; i++) {
        console.log('1');
        console.log('2');
        console.log('3');
    }
}

/*
* 时间规模：T(n) =  3n
* 时间复杂度：O(n)*/

//例子2：
function test2(n) {
    for (let i = 0; i < n; i * 2) {
        console.log(1);
        console.log(2)
    }
}

/*
* 时间规模：T(n) = 5logn
* 时间复杂度：O(logn)*/

//例子3
function test3(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            console.log(2)
        }
        console.log(1)
    }
}

/*
* 时间规模：T（n） = 0.5n^2 + 0.5n
* 时间复杂度：O（n^2）*/
