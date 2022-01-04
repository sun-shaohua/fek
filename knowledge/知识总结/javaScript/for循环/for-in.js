const obj = {a: 1, b: 2, c: 3};

for (const objKey in obj) {
    console.log('obj.' + objKey + '=' + obj[objKey]);
}
/*
for-in以任意顺序遍历一个对象的可枚举属性，除了Symbol类型。
 ⚠️for-in不建议迭代一个关注索引顺序的Array，遍历数组可以使用for-of或者forEach
*/
