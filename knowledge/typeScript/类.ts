/*类
* 1.传统的javaScript是通过函数和原型的继承来创建复用的组件，ECMAScript2015之后，可以使用基于类开发
* 2.typeScript可以直接基于类进行开发，并且编译后的javaScript可以在所有的主流浏览器和平台运行*/

//例1

class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet() {
        return "hello ," + this.greeting;
    }
}

// 例2,通过继承来扩展现有的类

class Animal {
    name: string;
    color: string;

    constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
    }

    move(distance: number = 0) {
        console.log(`this animal move ${distance}`)
    }
}

class Cat extends Animal {
    age: number;

    constructor(name: string, color: string, age: number) {
        super(name, color);
        this.age = age;
    }
}

const animal = new Animal('xiaoming', 'black');
const cat = new Cat('xiaomao', 'orange', 12);

/*public,private,protected修饰符
* 1.public 公共的，在实例中也可以访问
* 2.private 私有的，只能在类里面访问的到，可以使用get，set方法来获取或者修改，不能在派生类中访问的到
* 3.protected 受保护的 与private相似，但是可以在派生类中访问*/

class Person {
    public name: string;
    private age: number;
    protected sex: number;

    setAge(age: number) {
        this.age = age;
    }

    getAge(): number {
        return this.age
    }
}

class Child extends Person {
    public color: string;
    private height: number;
    protected address: string;

    getHeight(): number {
        return this.height;
    }

    setHeight(height: number): void {
        this.height = height;
    }

    getSex(): number {
        return this.sex;
    }
}

const child = new Child();
child.color = 'red';
child.setHeight(180);
child.name = 'xm';

// child.sex child.height 像这些手受保护的属性（protected,private），在实例中是拿不到的，可以通过get，set方法进行操作

abstract class P {
    eat(food: string): void {}
}
