/*
array.every()测试一个数组的所有元素是否能通过一个指定函数的测试。并返回一个布尔值。

⚠️：如果收到的是一个空数组，此方法在一切情况下都会返回true
 */


function isBigEnough(element, index, array) {
    return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
