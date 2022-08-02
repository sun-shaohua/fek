// partial 将泛型里面的所有属性变成可选属性
// type Partial<T> ={[key in keyof T]?: T[key]}
interface Person {
    name: string;
    age: number
    height: string;
    happy: string
}

type _Person = Partial<Person>;

const person: Person = {
    name: 'xiaoming',
    age: 11,
    happy: 'song',
    height: '178'
}
const _person: _Person = {
    name: 'xiaohua'
}
//record 将key中的所有属性传换成T类型
// type Record<keys in extends keyof any,T> ={key in keys : T}
const record: Record<string, number> = {
    name: 1,
    age: 2,
    sex: 3
}

// pick 把T中的K提取出来生成新的键值对
// Pick<T , K extends keyof T> =  { key in K : T[key]}
interface Animal {
    color: string;
    age: number;
    sex: string;
    weight: string;
}

type _Animal = Pick<Animal, 'color' | 'sex'>

// exclude  在T类型中，去除T类型和U类型的交集
// Exclude<T,U> = T extends U ? never : T

// 适用于键值对对象中，去除T中包含K的键值对
// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>

//将T中的所有属性变成必须的
//type Required<T> = { [P in keyof T]-?: T[P] }
