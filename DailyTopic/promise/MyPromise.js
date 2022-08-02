class MyPromise {
    // promiseA+  executor
    constructor(executor) {
        this.state = 'pending';
        this.value = undefined;
        this.reason = undefined;
        this.onFulfilledCallback = [];
        this.onRejectedCallback = [];
        const resolve = (value) => {
            // 如果then的回调函数onFulfilled, onRejected为函数的话, 需要
            // 在 promise 执行结束前其不可被调用,当 promise 执行结束后其必须被调用
            // 其调用次数不可超过一次
            // 只有在执行环境堆栈仅包含平台代码时才可被调用
            if (this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = value;
                this.onFulfilledCallback.map(it => {
                    it();
                })
            }
        }
        const reject = (reason) => {
            // 如果then的回调函数onFulfilled, onRejected为函数的话, 需要
            // 在 promise 执行结束前其不可被调用,当 promise 执行结束后其必须被调用
            // 其调用次数不可超过一次
            // 只有在执行环境堆栈仅包含平台代码时才可被调用
            if (this.state === 'pending') {
                this.state = 'rejected';
                this.reason = reason;
                this.onRejectedCallback.map(it => {
                    it();
                })
            }
        }

        executor(resolve, reject);
    }

    //onFulfilled 成功时被调用
    // onRejected 失败时被调用
    // 1.then函数执行时promise的函数的状态改变为fulfilled，rejected才能执行
    // 2.then应该返回一个promise对象；
    then(onFulfilled, onRejected) {
        const promise = new Promise((resolve, reject) => {
            if (this.state === 'fulfilled') {
                resolve(onFulfilled(this.value));
            }
            if (this.state === 'rejected') {
                reject(onRejected(this.reason));

            }
            if (this.state === 'pending') {
                this.onFulfilledCallback.push(() => {
                    onFulfilled(this.value);
                });
                this.onRejectedCallback.push(() => {
                    onRejected(this.reason);
                })
            }
        })
        return promise;
    }
}
