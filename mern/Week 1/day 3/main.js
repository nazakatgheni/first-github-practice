//? Callback function


var exampleFunc = function (message) {
    console.log(message)
}

// exampleFunc("Hello World");

function parentFunc(callbackFunc) {
    callbackFunc("Its from parent function");
}
parentFunc(exampleFunc);

// Coffee order
function processOrder(callback) {
    console.log('Order placed. please wait...')

    setTimeout(() => {
        // console.log('Processing...')
        callback();
    }, 3000);
}

function pickUpOrder() {
    console.log('Order is ready.')
}

processOrder(pickUpOrder)

//? map()
let numbers = [1, 2, 3, 4, 5]
console.log(numbers[2])

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] * 2)
}

let newNumbers = numbers.map(function (nums) {
    return nums * 2;
})

console.log(newNumbers);

let newArrowNum = numbers.map(nums => nums * 2);
console.log(newArrowNum);

// Filter()

// let filterNums = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < filterNums.length; i++) {
//     if (filterNums[i] % 2 == 0) {
//         console.log(filterNums[i])
//     }
// }

// let evenNums = filterNums.filter(function (nums) {
//     return nums % 2 == 0;
// });
// console.log(evenNums)

//*Use the map() function to create a new array called prefixedNames that contains all the original names prefixed with "Mr./Ms.".
let names = ["Alice", "Bob", "Charlie", "Dana"];
let prefixedName = names.map(function (names) {
    return 'Mr./ms.' + names
});
console.log(prefixedName)

