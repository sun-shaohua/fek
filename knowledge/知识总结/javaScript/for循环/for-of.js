const array = ['a', 'b', 'c'];
for (const string of array) {
    console.log(string);
}
/*
for-of在可迭代对象上创建迭代循环
可迭代对象包括：array，map，set，string，typeArray，argument
*/

//typeArray实例
let iterable = new Uint8Array([0x00, 0xff]);
for (let value of iterable) {
    console.log(value);
}
//argument实例
(function () {
        for (let argument of arguments) {
            console.log(argument);
        }
    }
)(1, 2, 3)
