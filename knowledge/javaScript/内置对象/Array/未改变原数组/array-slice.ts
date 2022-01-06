//array.slice()方法由begin和end决定远数组的浅拷贝（包括start，并不包括end）。 
//比改变原数组。
//与之相对还有一个array.splice()的方法，使用时改变原数组。

const sliceArray = ['a','b','c'];

const _sliceArray =sliceArray.slice(0,2);  //['a','b']

const __sliceArray =sliceArray.slice(0); //['a','b','c']

console.log(sliceArray); //['a','b','c']
