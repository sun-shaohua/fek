const arr = [1, 2, 3]

arr.forEach(i => {
    if (i === 2) {
        return;
    }
    console.log(i);
})
console.log(arr)
/*
forEach特征
1.便利的时候更加简洁，效率和for循环相同，不用关心集合下标的问题，减少了出错的概率。
2.没有返回值
3.不能使用break中断循环，不能使用return返回到外层函数
注意：
1.⚠️forEach() 对于空数组是不会执行回调函数的。
2.⚠️for可以用continue跳过循环中的一个迭代，forEach用continue会报错。
3.⚠️forEach() 需要用 return 跳过循环中的一个迭代，跳过之后会执行下一个迭代。
*/
