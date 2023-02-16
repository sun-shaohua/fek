class Promise{
    state ="pending";
    value = undefined;
    reason = undefined;
    onFulfilledCallback = [];
    onRejectedCallback =[];
    //promiseA+ executor
    constructor(execotr){
        const resolve=(value)=>{
         if(this.state === 'pending'){
             this.state = 'fulfilled';
             this.value = value;
             this.onFulfilledCallback.map((it)=>it())
         }
        }
        const reject=(reason)=>{
         if(this.state === 'pending'){
             this.state = 'rejected';
             this.reason = reason;
             this.onRejectedCallback.map(it=>it());
         }
        }
        execotr(resolve,reject);
    }

    then(onFulfilled,onRejected){
        return new Promise((resolve,reject)=>{
            if(this.state === 'fulfilled'){
                resolve(onFulfilled(this.value));
            }
            if(this.state === 'rejected'){
                reject(onRejected(this.reason))
            }
            if(this.state === 'pending'){
                this.onFulfilledCallback.push(()=>{
                    onFulfilled(this.value);
                });
                this.onRejectedCallback.push(()=>{
                    onRejected(this.reason);
                })
            }
        })
    }
}


function debounce (fun,delay){
    let timer;
    return  function(){
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(fun,delay)
    }
}
function throttle(fun,wait){
    let previous =0;
    return function(){
        const now = Date.now();
        if(now - previous > wait){
            fun.call(this,arguments);
            previous = now;
        }
    }
}
