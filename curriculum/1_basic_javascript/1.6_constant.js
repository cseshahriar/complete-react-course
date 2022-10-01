/**
 * const
 * Constants are block-scoped, much like variables declared using the let keyword.
 * The value of a constant can't be changed through reassignment
 * (i.e. by using the assignment operator), and it can't be redeclared 
 * (i.e. through a variable declaration). 
 * 
 * However, if a constant is an object or array its properties or items can be updated or removed.
 */

const number = 42;

// exception handling
try {
    number = 99; // TypeError: Assignment to constant variable.
} catch (e) {
    console.log(e);
}

console.log(number); // 42

// destructuring can also use fo constructor

const {name, age, designation} = {name: "shahriar", age: 25, designation: "Backend Developer"}
console.log(name); // shahriar

// block scoping
var myFav = 20;
if(myFav) {
    let myFav = 21;
    console.log(myFav); // 21
}
console.log(myFav); // 20


// cont in objects
// key can't change
// value can change'
const myObject = {key: 'value'};
myObject.key = "Other value";
console.log(myObject) // { key: 'Other value' }


// const in array
const myArray = [];
myArray.push('A')
myArray.push(5)
myArray.push(3)
console.log(myArray); // [ 'A', 5 , 3]
myArray.pop()
console.log(myArray); // [ 'A', 5 ]