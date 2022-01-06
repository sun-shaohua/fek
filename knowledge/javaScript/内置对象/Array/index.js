/*
Array用于构造数组的全局对象。
* */

//  常见的数组操作如下：

let array = new Array(3) //通过构造函数创建指定长度的数组

let array1 = new Array();          //创建一个空数组

let array2 = new Array(['1', '2']) //创建一个指定数组内容的数组

let array3 = [];                   //通过字面量创建空数组


//通过索引来访问数组元素
{
    let array = ['a', 'b', 'c'];
    const a = array[0];  //'a'
}

//数组的遍历
{
    let fruits = ['apple', 'banana'];
    fruits.forEach(function (it, index, array) {
        console.log(it, index);
    })
}
//数组末尾添加元素
{
    let fruits = ['apple', 'banana'];
    const newFruits = fruits.push('orange')
}
//删除数组末尾的元素
{
    let fruits = ['apple', 'banana'];
    const newFruits = fruits.pop();
}
//删除数组头部的元素
{
    let fruits = ['apple', 'banana'];
    const newFruits = fruits.shift();
}
//添加在数组头部的元素
{
    let fruits = ['apple', 'banana']
    const newFruits = fruits.unshift('orange');
}
//查找某个元素的下标索引
{
    let fruits=['apple','banana'];
    const index =fruits.indexOf('apple');
}
