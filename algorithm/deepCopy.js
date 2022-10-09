//深拷贝数据

// JSON.parse(JSON.stringify())的深拷贝会有几个问题
// 1，undefined,function类型的的key丢失
// 2.时间对象会变成字符串类型
// 3.RegExp定义的属性会变成 {}
// 4.NaN 类型会变成 null
// 5.循环引用问题

function myDeepCopy(data) {
    // 基本数据类型 string number bool null undefined symbol
    // 引用数据类型 object array date function
    if (data) {
        if (typeof data === 'function') {
            let tempFunc = data.bind();
            tempFunc.prototype = myDeepCopy(data.prototype);
            return tempFunc;
        }
        switch (Object.prototype.toString.call(data)) {
            case "[object String]":
                return data.toString();
            case "[object Number]":
                return Number(data.toString());
            case "[object Boolean]":
                return Boolean(data.toString());
            case"[object Date]":
                return new Date(data.getTime());
            case"[object Array]":
                let arr = [];
                for (let i = 0; i < data.length; i++) {
                    arr[i] = myDeepCopy(data[i])
                }
                return arr;
            case"[object Object]":
                let obj = {};
                for (const key in data) {
                    obj[key] = myDeepCopy(data[key])
                }
                return obj;
        }
    }
    return data;
}

// loadsh里面有一个深拷贝的方式
//import {cloneDeep} from 'loadsh';
