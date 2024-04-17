// Destructing Explanation

//const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

// const [firstAnimals] = animals
// console.log(firstAnimals)

// const [firstAnimal] = animals
// const firstAnimal = animals[0]
// console.log(firstAnimal);

// const [firstAnimal, secondAnimal] = animals;
// console.log(secondAnimal)
// console.log(firstAnimal)

// const [firstAnimal, secondAnimal, fifthAnimal] = animals;
// console.log(fifthAnimal)


//Destructuring Object

// const person = {
//     firstName: 'Bilguun',
//     lastName: 'Zorigt',
//     email: 'techcircle@gmail.com',
//     password: 'password01',
//     username: 'techCircle',
//     create_at: 123456623, // create by date 
// }
// const { firstName, username } = person;
// console.log(username)


// const fruits = ['Apple', 'Banana', 'Cherry'];

// const [firstFruits: apl, secondFruits: bnn] = fruits;
// console.log(apl);
// console.log(bnn)


// const user = {
//     name: 'John Doe',
//     age: 30,
//     email: 'john@example.com'
// };

// const { name: nm, age: a } = user;
// console.log(nm, a)

// console.log(user.name, user.age)

// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [randomCar] = cars
// const [, otherRandomCar] = cars
// //Predict the output
// console.log(randomCar)
// console.log(otherRandomCar)

// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;
// //Predict the output
// console.log(password);
// console.log(hashedPassword);

// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [, first] = numbers; //2
// const [, , , second] = numbers; //5
// const [, , , , , , , , third] = numbers; //2
// //Predict the output
// console.log(first == second); //5
// console.log(first == third); //2

// const lastTest = {
//     key: 'value',
//     secondKey: [1, 5, 1, 8, 3, 3]
// }
// const { key } = lastTest;
// const { secondKey } = lastTest;
// const [, willThisWork] = secondKey;
// //Predict the output
// console.log(key) // value
// console.log(secondKey) // [1, 5, 1, 8, 3, 3 ]
// console.log(secondKey[0]) // 1
// console.log(willThisWork) // undefined