// scope of var
/**
 * Scope essentially means where these variables are available for 
 * use. var declarations are globally scoped or function/locally scoped.
 * The scope is global when a var variable is declared outside a function. This means that any variable that is declared with var outside a function block is available for use in the whole window.
 *
 * var is function scoped when it is declared within a function. This means that it is available and can be accessed only within that function. 
 *  */ 

var greeter = "hey hi";
console.log(greeter); // global so accessible

function newFunction() {
    var hello = "Hello";
}
// console.log(hello); // local so not accessible
// ReferenceError: hello is not defined

// var variables can be re-declared and updated
var greeter1 = "hey hi";
var greeter1 = "say Hello instead";

var greeter2 = "hey hi";
    greeter2 = "say Hello instead";

console.log(greeter1); // global so accessible
console.log(greeter2); // global so accessible


/**
 * Hoisting of var
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. This means that if we do this:
 */
console.log(greeter3); // undefined
var greeter3 = "say hello!"

/**
 * it is interpreted as this:
    var greeter;
    console.log(greeter); // greeter is undefined
    greeter = "say hello"
 */


/***
 * Problem with var
 * There's a weakness that comes with  var. I'll use the example below to explain:
*/
var greeter4 = "hey hi";
var times = 4;
if (times > 3) {
    var greeter4 = "say Hello instead"; // redefined problem
}
console.log(greeter4) // "say Hello instead"
// it becomes a problem when you do not realize that a variable greeter has already been defined before
// This is why let and const are necessary.

// ============================== let ======================
/**
 * let is block scoped
 * A block is a chunk of code bounded by {}. A block lives in curly braces. Anything within curly braces is a block.
 * So a variable declared in a block with let  is only available for use within that block
*/

let greeting5 = "say hi";
let times5 = 4;
if(times5 > 3) {
    let hello5 = "say Hello instead";
    console.log(hello5);
}
// console.log(hello5);

/**
 * We see that using hello outside its block (the curly braces where it was defined) returns an error. This is because let variables are block scoped .
 */

// let can be updated but not re-declared.
// let can be updated within its scope. Unlike var, a let variable cannot be re-declared within its scope. So while this will work:
let greeting6 = "say Hi";
    greeting6 = "say Hello instead";

console.log(greeting6);

// However, if the same variable is defined in different scopes, there will be no error:
let greeting7 = "say Hi";
if (true) {
    let greeting7 = "say Hello instead";
    console.log(greeting7); // "say Hello instead"
}
console.log(greeting7); // "say Hi"
// Why is there no error? This is because both instances are treated as different variables since they have different scopes.

/**
 * Hoisting of let
 * Just like  var, let declarations are hoisted to the top. Unlike var which is initialized as undefined, the let keyword is not initialized. So if you try to use a let variable before declaration, you'll get a Reference Error.
 */

// ======================= const ===============================
/**
 * Variables declared with the const maintain constant values. const declarations share some similarities with let declarations.
 *
 * const declarations are block scoped
 * Like let declarations, const declarations can only be accessed within the block they were declared.
 * const cannot be updated or re-declared
*/

const greeting8 = "say Hi";
// greeting8 = "say Hello instead";// error: Assignment to constant variable. 

// Every const declaration, therefore, must be initialized at the time of declaration.


/**
 * This behavior is somehow different when it comes to objects declared
 *  with const. While a const object cannot be updated, the properties of 
 * this objects can be updated. Therefore, if we declare a const object as this:
 */

const greeting = {
    message: "say Hi",
    times: 4
}
greeting.message = "say Hello instead";

console.log(greeting.message);

/**
 * Hoisting of const
 * Just like let, const declarations are hoisted to the top but are not initialized.
 * var declarations are globally scoped or function scoped while let and const are block scoped.
 * var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.
 * They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let and const variables are not initialized.
 * While var and let can be declared without being initialized, const must be initialized during declaration. 
*/