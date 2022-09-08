// 二维数组转化为对象
const arr: Array<[string, number]> = [
    ['a', 1],
    ['b', 2],
    ['c', 3]
]

const arrToObj = (arr: Array<[string, number]>) => {
    return arr.reduce((obj, [key, value]) => (obj[key] = value,obj), {})
}
