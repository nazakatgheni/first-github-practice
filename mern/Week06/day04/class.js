// Encapsulation, Abstraction, Inheritance, Polymorphism.
// public, private,protected -- access modifier
// this class is encapsulation
class Human {

    // The constructor method is a special method of a class for creating and initializing an object instance of that class.
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // methods
    sayHello() {
        console.log(`Hello,I'm ${this.name}`)
    }
};

// instance of Hum class
const bill = new Human('Bilguun', 27);
// console.log(bill)
// console.log(bill.name)
bill.sayHello();

const maria = new Human('Maria,34')
maria.sayHello();

//create Student class
// Inheritance -- extends keyword
class Student extends Human {
    constructor(name, age, currentStack) {
        // super means comes from parents
        super(name, age);
        this.currentStack = currentStack;
    };

    // overwriting
    // polymorphism -- this is the rule, we have to add new value at the end
    sayHello() {
        console.log(`Hello,I'm ${this.name} and I'm studying ${this.currentStack}`)
    }
}

const nazuk = new Student('Nazuk', 21, 'MERN');
nazuk.sayHello()

const nazakat = new Student('Nazakat', 23, 'MERN');
nazakat.sayHello()