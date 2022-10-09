// 字符串出现的不重复最长长度
function longestSubString(s) {
    const arr = [...s];
    let res = 1;
    const result = arr.reduce((pre, cur, index) => {
        if (index === 0) {
            return cur;
        } else {
            if (pre.indexOf(cur) < 0) {
                return pre + cur
            } else if (pre.length > res) {
                res = pre.length;
                return pre.slice(pre.indexOf(cur), pre.length);
            } else {
                return pre.slice(pre.indexOf(cur), pre.length);
            }
        }
    }, '');
    if (result.length > res) {
        res = result.length;
    }
    return res;
}
