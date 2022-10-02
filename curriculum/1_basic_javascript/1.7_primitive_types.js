/**
 * In JavaScript, a primitive (primitive value, primitive data type) is data 
 * that is not an object and has no methods or properties.
 * 
 *  There are 7 primitive data types:
 * string
 * number
 * bigint
 * boolean
 * undefined
 * symbol
 * null
 * 
 * All primitives are immutable/অপরিবর্তনীয়; that is, they cannot be altered.
 * The variable may be reassigned to a new value, but the existing value can not be changed
 *  that objects, arrays, and functions can be altered.
 * The language does not offer utilities to mutate primitive values.
 */


/**
* In any computer programming language, a string is a sequence of characters used to represent text.
* In JavaScript, a String is one of the primitive values and the String object is a wrapper around a String primitive.
*/

let single = 'single-quoted';
let double = "double-quoted";
let backticks = `backticks`;

let guestList = `Guests:
* john
*Pete
*Marry`;

console.log(guestList);

let str = "Hello";

// first character
console.log(str[0]); // H

// last 
console.log(str[str.length - 1]); // o
console.log(str.at(1)); // e

console.log(str[-2]); // Undefined

for(let char of str) {
    console.log(char + '\n');
}

// ================== str methods ==================

// str upper
console.log(str.toUpperCase());

// str lower
console.log(str[0].toLowerCase());
console.log(str.toLowerCase());


// searching for a substring
let str2 = "Widget with id";
console.log(str2.indexOf('Widget')); // 0 found at the beginning
console.log(str2.indexOf('widget')); // -1 not
console.log(str2.indexOf('id')); // 1 found at position 1
console.log(str2.indexOf('id', 2)); // search position at 2


let str3 = 'As sly as a fox, as strong as an ox';
let target = 'as';
let pos = 0;
while(true) {
    let foundPos = str3.indexOf(target, pos);
    if(foundPos === -1) break;

    console.log(`Found at ${foundPos}`);
    pos = foundPos + 1; // continue the search from the nex position
}


// includes, startsWith, endsWith

// match
console.log("Widget with id".includes("Widget")); // true
console.log("Widget with id".includes("Buy")); // false

console.log("Widget".startsWith("Wid")); // true
console.log("Widget".endsWith("get")); // true


// getting substring
let str4 = "stringify";
console.log(str4.slice(0, 5)); // strin
console.log(str4.slice(0, 1)); // s
console.log(str4.slice(2)); // s
console.log(str4.slice(-4, -1)); // s

console.log(str4.substring(2,6)); // ring
// ref: https://developer.mozilla.org/en-US/docs/Glossary/Primitive

// compare
console.log('a' > 'Z'); // true

console.log("Z".codePointAt(0)); // 90
console.log("z".codePointAt(0)); // 90
