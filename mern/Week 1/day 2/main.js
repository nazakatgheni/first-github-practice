// function declaration

// function greet(firstName, lastName) {
//     console.log("Hello ", first + " " + lastName)
// }

// greet();

//Arrow Function and Anonymous Function

// //?Anonymous Function
// const sayHello = function (firstName) {
//     console.log("Hello" + firstName)
// }
// sayHello("Bill");

// //? Arrow Function

// const sayHello = () => {
//     console.log('Hello')
// }
// sayHello()

// const sayHello = firstName => {
//     console.log('Hello Arrow ' + firstName)
// }
// sayHello('Bill')

// const sayHello = firstName => console.log(`Hello ${firstName}`)
// sayHello("Nazuk")

// const sayHello = () => 'Hello'
// console.log(sayHello())
//                         it's same as next code
// function greet() {
//     return 'Hello'
// }

// const sayHello = (firstName) => 'Hello'${ firstName };
// console.log(sayHello(Maria))
// Same as above
// function greet(firstName) {
//     return 'Hello' + firstName;
// }


// Return object
// const sayHello = () => ({ msg: "Hello" });


// function greet(name) {
//     return "Hello, " + name + "!";
// }

// const greet01 = name => `Hello ${name} !`;

// function add(a, b) {
//     return a + b;
// }

// const addValue = (a, b) => a + b;

// const square = function (x) {
//     return x * x;
// };

// const square01 = x => x * x;



// const userProfile = {
//     name: "Jane Doe",
//     email: "jane.doe@example.com",
//     age: 28,
//     country: "USA"
// };

const { name: JD, email: jdecom, age: aa, country: usa } = userProfile01;

console.log(name)

const userProfile01 = () => JD, jdecoml, aa, usa; 