//该全局isFinite()函数用来判断传入的参数是否是一个有限数值（finite number）. 在必要情况下，传输会首先转化成一个数值。


function div(x:number){
    if(isFinite(100/x)){
        return 'number is not infinity';
    }
    return 'number is infinity';
}

console.log(div(0)); //'number is infinity'

console.log(div(1)); //'number is not infinity'

