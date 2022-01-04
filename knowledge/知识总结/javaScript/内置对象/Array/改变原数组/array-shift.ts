/*
array.shift()方法从数组中删除第一个元素，并返回该元素的值。
⚠️：改变原数组。
*/

//例子
const shiftArray =[1,2,3];
const firstElement = shiftArray.shift();
console.log('firstElement:'+firstElement); // firstElement:1;
 
console.log(shiftArray); //`[2,3]`


