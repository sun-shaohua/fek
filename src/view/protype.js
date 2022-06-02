function Person(){
    name:'a'
}
Person.prototype.setName = function(name){
 this.name = name;
}

const person =new Person();
person.setName('aaa');
console.log(person.name);
console.log(person)
console.log(person._proto_ )