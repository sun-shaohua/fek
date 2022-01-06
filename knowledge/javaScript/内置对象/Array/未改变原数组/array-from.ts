/*
array.from()方法对于一个类似数组或者可迭代对象创建一个新的，浅拷贝的数组实例。
不改变原数组
 */
console.log(Array.from('foo')) //['f','o','o']
console.log(Array.from([1, 2, 3], x => x * 2));
