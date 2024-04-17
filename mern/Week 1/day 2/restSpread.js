// ...

const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

const [firstAn, secondAn, ...restAnimals] = animals;

console.log(restAnimals);
console.log(firstAn);
console.log(secondAn);

//spread operator
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
const allNums = [...nums1, ...nums2, ...animals];
console.log(allNums)

const obj1 = {
    student: '01',
    studentId: 123245
}
const obj2 = {
    student: '02',
    studentId: 123456
}

const allStudents = { ...obj1, ...obj2 }
console.log(allStudents)

