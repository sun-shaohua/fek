/*自ECMAScript2015之后，出现了一个新的原生类型symbol，是通过Symbol构造函数构建的*/
// 示例
// 你可实现一个自定义的instanceof 行为，例如：

class MyArray {
    static [Symbol.hasInstance](instance:any) {
        return Array.isArray(instance);
    }
}
console.log([] instanceof MyArray); // true

class myNUmber{
    static  [Symbol.hasInstance](instance:any){
        return Number.isInteger(instance)
    }
}
