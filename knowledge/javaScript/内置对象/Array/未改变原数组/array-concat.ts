/*
concat()方法用于合并两个或者多个数组。此方法不会改变现有数组，会返回一个新的数组。

⚠️：array.concat返回的新数字是一个浅拷贝
 */

const array1 = ['a', 'b', 'c']
const array2 = ['d', 'e', 'f']

const array3 = array1.concat(array2);
const array4 = array1.concat(array1);

console.log(array1);
console.log(array2);
console.log(array3);
console.log(array4);
