/*
array.join()方法将一个数组（或者类数组对象）的所有元素连成一个字符串并且返回这个字符串。
⚠️：如果数组只有一个项目的时候，将这个项目返回而不使用分割符号
*/
const elements = ['fire', 'air', 'water'];

console.log(elements.join());  //array.join()默认的是以'，'为分隔符
//"fire,air,water"
console.log(elements.join(''));
//"fireairwater"
console.log(elements.join('-'));
//"fire-air-water"
