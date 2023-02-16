const arr = [1, [2, 3]];

// 正则
function flatArr(arr) {
    const res = JSON.stringify(arr).replace(/\[|\]/g, '')
    return JSON.parse('[' + res + ']');
}

// 数组自带方法
arr.flat()

// 递归
function flatArr1(arr) {
    const array = [];
    const fn = (arr) => {
        for (let item in arr) {
            if (Array.isArray(item)) {
                fn(item);
            } else {
                array.push(item);
            }
        }
    }
    return array;
}

// 使用reduce
const flatArr2 = (arr) => {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flatArr2(cur) : cur)
    }, [])
}
