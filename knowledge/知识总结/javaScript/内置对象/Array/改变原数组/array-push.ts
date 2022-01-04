/*
array.push()方法将添加一个或者多个元素到数组末尾，并返回数组新长度。

修改原数组
*/

const animals = ['pig', 'goat', 'sheep'];

const count = animals.push('cow');
console.log(count);// 4
console.log(animals)// ['pig','goat','sheep','cow']
