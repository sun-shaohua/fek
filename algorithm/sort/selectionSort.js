// 选择排序
// 每次找到最大或者最小的值放在数组的开始吧，依次查找
function selectionSort(arr) {
    const len = arr.length;
    let temp, minIndex;
    for (let i = 0; i < len - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp
    }
    return arr;
}

const arr = [1, 3, 4, 2, 7, 6, 5];
selectionSort(arr);
console.log(arr);
