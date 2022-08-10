// 交叉类型 &

// 交叉类型的功能类似于接口继承
// 用于组合多个类型为一个类型（常用于对象类型）
// 案例如下

interface Person {
    name: string
}

interface People {
    sex: string
}

type PersonMan = Person & People

// 这里就相当于 type PersonMan  = {name: string, sex: string }

// 实例对象：
let obj: PersonMan = {
    name: '小丑',
    sex: '男'
}

// 交叉类型和接口继承之间的区别
// 相同 => 都可以实现对象类型的组合
// 不同
interface Ia {
    fn: (value: number) => string
}

interface Ib {
    fn: (value: string) => string
}

// 如上 我们写两个接口
// 都有相同的方法 但是方法的参数不同
// 这时候 如果我们用extends继承
// 则会出现下面的效果
//
// 但是如果我们用交叉类型

type Ic = Ia & Ib
let c: Ic = {
    fn(value: number | string) {
        return ''
    }
}


//联合类型 ｜
// 如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员。

// 类型别名 type
type Num = number;
const a: Num = 1;



