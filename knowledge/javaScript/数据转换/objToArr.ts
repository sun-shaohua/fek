// 对象转为二维数组
const obj = {
    a: 111,
    b: 222,
    c: 333
}

// 1
const objToArr =(obj:Object)=>{
    return Object.entries(obj);
}
