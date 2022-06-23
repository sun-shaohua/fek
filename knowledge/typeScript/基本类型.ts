// boolean
let isDone: boolean = true;
// number
let decLiteral = 1;
// string
let myName: string = 'xiaoming';
// array
let arr: Array<number | string> = [1, '1'];
// tuple 元组
let tuple: [number, string] = [1, '1']
// 联合类型
let text: number | string = 1;

// enum
enum Color {
    pink,
    green,
    black
}

// any
//1在对现有代码进行改写的时候，any类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查。 你可能认为 Object有相似的作用，就像它在其它语言中那样。
// 但是 Object类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法：
//2当你只知道一部分数据的类型时，any类型也是有用的。 比如，你有一个数组，它包含了不同的类型的数据

// void
// 从某种程度上将void和any是相反的，它表示没有任何类型，当函数没有返回值的时候使用void
// 声明一个void的变量只能给它赋予null或者undefined
function testVoid(): void {
    console.log('void')
}

let _void: void = undefined
// let __void: void = null 这里的null好像不太行

// null和undefined
// null，undefined 是所有类型的子集
let _null: null = null
// let __null :null  =undefined
let _undefined: undefined = undefined;
// let __undefined :undefined = null;

// never
// never类型表示的是那些永不存在的值的类型。
// 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
// never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。

// never存在无法达到的终点
function error(message: string): never {
    throw new Error(message)
}

// object
// object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
