// 手写promise

class Promise {
    state = 'pending';  // 状态有三种 pending｜fulfilled｜rejected
    value = undefined;  // promise成功返回的值
    reason = undefined; // promise失败返回的值
    onFulfilledCallback = [];  // 成功是一步执行函数集
    onRejectedCallback = []   //失败状态一步执行函数集
    constructor(executor) {
        const resolve = (value) => {
            if (this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = value;
                this.onFulfilledCallback.forEach(it => it());
            }
        }
        const reject = (reason) => {
            if (this.state === 'pending') {
                this.state = 'rejected';
                this.reason = reason;
                this.onRejectedCallback.forEach(it => it());
            }
        }
        executor(resolve, reject);
    }

    then(onFulfilled, onRejected) {
        return new Promise((resolve, reject) => {
            if (this.state === 'pending') {
                this.onRejectedCallback.push(() => {
                    onFulfilled(this.value);
                });
                this.onRejectedCallback.push(() => {
                    onRejected(this.reason);
                })
            }
            if (this.state === 'fulfilled') {
                resolve(onFulfilled(this.value))
            }
            if (this.state === 'rejected') {
                reject(onRejected(this.reason))
            }
        })
    }
}
