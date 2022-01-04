const arr = [1, 2, 3]
let newArr = arr.map(i => {
    console.log(i);
    return i += 1;
})
console.log(arr)
console.log(newArr)


/*
特性：
1.map不改变原数组但是会 返回新数组
2.可以使用break中断循环，可以使用return返回到外层函数
*/
