class A {
    static a = 1;
    static b = 1;

    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    getA(){
      return  this.a
    }
}

class B extends A {
    static c = 1;

    constructor(a,b) {
        super(a,b)
    }
}
const c = new B(2,2);
