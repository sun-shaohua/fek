class Promise {
    constructor(exector) {
        this.state = 'pending';
        this.value = undefined;
        this.reason = undefined;
        this.onFulFilledCallback = [];
        this.onRejectedCallback = [];
        const resolve = (value) => {
            if (this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = value;
                this.onFulFilledCallback.map(it => {
                    it()
                })
            }
        }
        const reject = (reason) => {
            if (this.state === 'pending') {
                this.state = 'rejected';
                this.reason = reason;
                this.onRejectedCallback.map(it => {
                    it()
                })
            }
        }
        exector(resolve, reject)
    }

    then(onFulFilled, onRejected) {
        return new Promise((resolve, reject) => {
            if (this.state === 'fulfilled') {
                resolve(onFulFilled(this.value));
            }
            if (this.state === 'rejected') {
                reject(onRejected(this.reason));
            }
            if (this.state === 'pending') {
                this.onFulFilledCallback.push(() => {
                    onFulFilled(this.value)
                });
                this.onRejectedCallback.push(() => {
                    onRejected(this.reason);
                })
            }
        })

    }
}
