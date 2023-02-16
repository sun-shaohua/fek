// 算法
// 数据结构 data = {key1:{ key2:{key3:1}}} 输入 key1.key2 return {keys3:1} default:'default'

function getValue(obj: Record<string, any>, keys: string, def: string = 'default') {
    if (!keys) return def;
    const arrKeys = keys.split('.');
    const value = arrKeys.reduce((pre, cur) => {
        return pre = obj[cur];
    }, obj)
    return value || def;
}

// typeScript
interface A {
    name: string;
    age: number;
    weight: number;
}

interface Z {
    name: string;
}

const B: Pick<A, 'name'> = {
    name: 'a'
}
const C: Partial<A> = {
    name: 'a',
    age: 1
}
const D: Omit<A, 'name'> = {
    age: 1,
    weight: 1
}
const F: Required<A> = {
    name: '1',
    age: 1, weight: 1
}
// exclude
type AA = number | string;
type BB = number
type CC = Exclude<AA, BB>;

type myname = { name: string };

interface my extends myname {
    age: number;
}

const a: my = {
    name: '1',
    age: 2
}

function type(bool: boolean): Promise<number> | number {
    if (bool) {
        return Promise.resolve(2)
    } else {
        return 2
    }
}
