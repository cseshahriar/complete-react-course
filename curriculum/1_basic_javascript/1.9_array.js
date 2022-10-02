/**
 * The Array object, as with arrays in other programming languages,
 * enables storing a collection of multiple items under a single variable name,
 * and has members for performing common array operations.
 */


// creating an array
const fruits = ['Apple', 'Banana'];

console.log(fruits);
console.log(fruits.length);

const fruits2 = new Array('Apple', 'Banana');
console.log(fruits2);
console.log(fruits2.length);

const fruits3 = 'Apple, Banana'.split(', ');
console.log(fruits3);

// array to str
const fruitString = fruits.join(', ');
console.log(fruitString);

// access an array items by its index 
console.log(fruits[0]);

console.log(fruits[1]);

// last
console.log(fruits[fruits.length - 1]); // undefined
console.log(fruits[99]);

// find index
console.log(fruits.indexOf('Banana')); // 1

// includes
console.log(fruits.includes('Banana')); // true
console.log(fruits.includes('Cherry')); // false

// append
fruits.push("Orange")
console.log(fruits);
fruits.unshift("papaya") // add first

// remove last
fruits.pop()
console.log(fruits);

// remove multiple
fruits.push("Orange")
fruits.splice(-2)
console.log(fruits); // ['papaya', 'Apple' ]

// remove first item
fruits.shift()
console.log(fruits);  // ['Apple'] 

// remove multiple
fruits.splice(0, 1) // start, delete count
console.log(fruits);  // [] 

// remove a single item
fruits.push("Orange")
fruits.push("Banana")
fruits.splice(fruits.indexOf('Banana'), 1)
console.log(fruits);

// replace multiple items
const fruits_another = ['Apple', 'Banana', 'Strawberry'];
const start = -2
const deleteCount = 2
fruits_another.splice(start, deleteCount, 'Mango', 'Cherry')
console.log(fruits_another);

// iterate over an array
for(const fruit of fruits) {
    console.log(fruit);
}

// call a function
fruits.forEach((item, index, array) => {
    console.log(index, item);
});

// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array