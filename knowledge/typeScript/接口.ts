/*
* Interface
* typeScript的核心原则之一：对值所具有的结构进行类型检查，被称为"鸭式辩型法"或者"结构性子类型化"
* 在typeScript中，接口的作用是为这些类型命名和你的代码和第三方定义契约*/

// 可选类型 ？
interface Person {
    name: string;
    age?: string;
}

//只读类型 readonly
/*只读类型只能在创建的时候进行修改，之后不能修改*/
interface Child {
    readonly   name: string;
    readonly  age: number;
}

// 类类型
interface Time {
    currentTime: Date;
}

// 继承类型

interface Animal {
    name:string;
    age:number;
}

interface Dog extends Animal{
   color:string
}
const dog :Dog = {
    name:'xiaoming',
    age:1,
    color:'white'
}
