// promise.all
// all所有的promise成功之后返回所有的成功值，有一个失败就返回失败的原因

function PromiseAll(arr) {
    const result = [];
    let count = 0;
    return new Promise((resolve, reject) => {
        arr.forEach((it, index) => {
            it.then(res => {
                result[index] = res;
                count++;
                if (count === arr.length) {
                    resolve(result);
                }
            }, reason => reject(reason))
        })
    })
}
