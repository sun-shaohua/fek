//全局属性NaN的值表示不是一个数字（not a number）


//判断一个值是否是NaN

console.log(NaN === NaN);  //false

console.log(Number.NaN ===NaN); //false

console.log(isNaN(NaN)); //true
console.log(Number.isNaN(NaN)); //true

//通过以上要注意，判断一个值是否等于NaN，不能使用===，而是要使用isNaN或者Number.isNuN来判断

//isNaN和Number.isNaN的区别
const string_test = ''
isNaN(string_test); //true
Number.isNaN('aaa')  //false

