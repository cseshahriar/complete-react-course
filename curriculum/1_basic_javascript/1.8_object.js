// reference data type
/**
 * Objects
 * Functions
 * Collections
 * Arrays
 * Dates
 * Other
 */

let object1 = {
    name: "Shahriar",
    age: 18,
};

let object2 = object1;
// updating object1
object1.age = 25;
console.log(object2); // { name: 'Shahriar', age: 25 }
console.log(object1); // { name: 'Shahriar', age: 25 }

let user = new Object(); // object constructor syntax
let user2 = {}; // object literal syntax


// literals and properties
let user3 = { // object
    name: "Shahriar", // key:value
    age: 25 
}

// a property has a key(also known as "name" or "identifier") before the color ":" and value to the right of it.
// in the user3 object , there are two properties
// 1. the first property name "name" and the value "John"
// 2. the seconds one has the name "age" and the value 30

console.log(user3.name); // Shahriar

// add a boolean property
user3.isAdmin = true;
console.log(user3); // { name: 'Shahriar', age: 25, isAdmin: true }

//set 
user3['lieksBird'] = true;

//get 
console.log(user3['lieksBird']);

// delete 
delete user3["lieksBird"]
console.log(user3['lieksBird']); // undefined

// create user by function
function makeUser(name, age) {
    return {
        name: name,
        age // shorthand
    }
}

let user4 = makeUser("Shahriar", 28)
console.log(user4.name);

// property exists check
let user5 = {};
console.log(user5.noSuchProperty === undefined) // true means "no such property"

console.log('key' in user5);