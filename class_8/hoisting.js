/**
 * Hoisting
 * JavaScript Hoisting refers to the process whereby the interpreter appears to 
 * move the declaration of functions, variables or classes to the top of their scope, 
 * prior to execution of the code.
 * Hoisting allows functions to be safely used in code before they are declared.
 * Variable and class declarations are also hoisted, so they too can be referenced 
 * before they are declared. Note that doing so can lead to unexpected errors, 
 * and is not generally recommended.
 */

// Function hoisting
// One of the advantages of hoisting is that it lets you use a function before you declare it in your code.

catName("Tiger");

function catName(name) {
  console.log(`My cat's name is ${name}`);
}

// Variable hoisting
// Hoisting works with variables too, so you can use a variable in code before it is declared and/or initialized.
/**
 * However, JavaScript only hoists declarations, not initializations! This means that initialization doesn't happen until the associated line of code is executed, even if the variable was originally initialized then declared, or declared and initialized in the same line.
 * Until that point in the execution is reached the variable has its default initialization (undefined for a variable declared using var, otherwise uninitialized).
 */

// var hoisting
// Here we declare and then initialize the value of a var after using it. The 
// default initialization of the var is undefined.
console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
var num; // Declaration
num = 6; // Initialization
console.log(num); // Returns 6 after the line with initialization is executed.


// ref: https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
/**
 * Variables declared with let and const are also hoisted but, unlike var, 
 * are not initialized with a default value. An exception will be thrown if a 
 * variable declared with let or const is read before it is initialized.
 */
// console.log(num2); // Throws ReferenceError exception as the variable value is uninitialized
let num2 = 6; // Initialization

// hoisting: var, func can use before declare it's called hoisting