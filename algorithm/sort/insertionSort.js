//插入排序
function insertionSort(arr) {
    const len = arr.length;
    if (len < 2) return arr;
    let pre, curVal;
    for (let i = 1; i < len; i++) {
        pre = i - 1;
        curVal = arr[i];
        while (pre >= 0 && arr[pre] > arr[pre + 1]) {
            arr[pre + 1] = arr[pre];
            pre--;
        }
        arr[pre + 1] = curVal;
    }
    return arr;
}
