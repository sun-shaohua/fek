// 合并二维有序数组成一维有序数组，归并排序的思路
// 数据：[[1,2,3],[2,4,6],[1,2,3,4,5]]


//合并数组
function mergeArr(arr1, arr2) {
    let i = 0, j = 0, arr = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr[i] < arr2[j]) {
            arr.push(arr[i]);
            i++;
        } else {
            arr.push(arr2[j]);
            j++
        }
    }
    if (i < arr1.length) {
        return arr.concat(arr1.slice(i))
    } else {
        return arr.concat(arr2.slice(j))
    }
}

//将二维数组转换为一维数组
//思路： 将二维数组合并成两个数组，利用递归
function sortArr(arr) {
    const len = arr.length;
    if (len <= 1) {
        return arr[0]
    }
    const mid = Math.floor(len / 2);
    const left = sortArr(arr.slice(0, mid));
    const right = sortArr(arr.slice(mid, len));
    return mergeArr(left, right);
}

const arr = [[1,2,3],[2,4,6],[1,2,3,4,5]];
sortArr(arr);
