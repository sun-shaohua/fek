// 归并排序
function mergeSort(arr) {
    const len = arr.length;
    if (len <= 1) return arr;
    const mid = Math.floor(len / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid, len));
    return merge(left, right)
}

function merge(left, right) {
    let i = 0, j = 0, arr = [];
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            arr.push(left[i]);
            i++;
        } else {
            arr.push(right[j]);
            j++;
        }
    }
    if (i < left.length) {
        arr.concat(left.slice(i, left.length));
    } else {
        arr.concat(right.slice(j, right.length));
    }
    return arr;
}
