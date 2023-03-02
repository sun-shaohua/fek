// “ababac” —— “ababa”
//“aaabbbcceeff” —— “aaabbb”
const changeStr1 = (str) => {
    const obj = {};
    const arrStr = str.split('');
    arrStr.forEach((item) => {
        if (obj[item]) {
            obj[item]++;
        } else {
            obj[item] = 1;
        }
    })
    const _obj = Object.values(obj).sort();
    const min = _obj[0];
    for (let key in obj) {
        if (obj[key] <= min) {
            str = str.replaceAll(key, '');
            break;
        }
    }
    return str;
}
const str = 'ababbbacccc';
console.log(changeStr1(str))

const changeStr2 = (str) => {
    // 进行排序，找到出现次数最少的char
    const obj = {};
    const arrStr = str.split('');
    arrStr.forEach((item) => {
        if (obj[item]) {
            obj[item]++;
        } else {
            obj[item] = 1;
        }
    })
    const _obj = Object.values(obj).sort();
    const min = _obj[0]; // 找出出现次数最少的char
    for (let key in obj) {
        if (obj[key] === min) {
            str = str.replaceAll(key, '');
            break;
        }
    }
    return str;
}
