// array 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// remove end
numbers.pop(); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
console.log(numbers);


// remove from starting
numbers.shift()
console.log(numbers); // [2, 3, 4,  5, 6, 7, 8, 9, 10]

// remove from middle
// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.
// array.splice(index, howmany, item1, ....., itemX)
numbers.splice(3, 1,) // start el, how much
console.log(numbers); // [2, 3, 4,  6, 7, 8, 9, 10] 5 is removed

let another = numbers;
// numbers.length = 0;
// console.log(numbers); // []

// all remove
numbers.splice(0, numbers.length);
console.log(numbers); // []


// combine
let numbers1 = [1, 2, 3, 4, 5]
let another1 = [6, 7, 8, 10, 11];
let combine = numbers1.concat(another1)
console.log(combine);


console.log(another1); // [ 6, 7, 8, 10, 11 ]
const sliceData = another1.slice(0, 3);  // [ 6, 7, 8 ]
console.log(sliceData);

const copyNumbers = [...numbers1] // copy by spread
console.log(copyNumbers); // numbers1


// sorting
let nonSortnumbers = [1, 5, 10, 2, 3, 7, 4];
const manualSort = function(a, b) { // ascending order
    // a === b => 0
    if(a < b) return -1;
    if(a > b) return 1;
    return 0;
}
let sortedNumbers = nonSortnumbers.sort(manualSort); // callback function accept
console.log(sortedNumbers);


let courses = [
    {id:1 , name: 'reactjs'},
    {id:3 , name: 'nodejs'},
    {id:2 , name: 'angular'},
    {id:4 , name: 'js'},
];

const compare = (a, b) => {
    if(a.name < b.name) return -1;
    if(a.name > b.name) return 1;
    return 0;
}
let sorted_courses = courses.sort(compare)
console.log(sorted_courses);


// join
const nameStr = ['Md', 'Shahriar', 'Hosen']
const fullName = nameStr.join('-')
console.log(fullName);

// separate
const myArray = fullName.split("-"); // str method
console.log(myArray);

