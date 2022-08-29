/*
4 Ways to Declare a JavaScript Variable
Using var
Using let
Using const
Using nothing
*/

// What are Variables?
// Variables are containers for storing data (storing data values).
var person_name = "shahriar";
console.log("name ", person_name);

/*
When to Use JavaScript var?
    Always declare JavaScript variables with var,let, or const.
    The var keyword is used in all JavaScript code from 1995 to 2015.
    The let and const keywords were added to JavaScript in 2015.

    If you want your code to run in older browser, you must use var.

    When to Use JavaScript const?
        If you want a general rule: always declare variables with const.
        If you think the value of the variable can change, use let.
        In this example, price1, price2, and total, are variables:
/* */
let person = "John Doe", carName = "Volvo", price = 200;


/**
* JavaScript types
The set of types in the JavaScript language consists of primitive values and objects.
Primitive values (immutable datum represented directly at the lowest level of the language)

Boolean type
Null type
Undefined type
Number type
String type
Symbol type
Objects (collections of properties)
*/


// cameCase
// snake_case
// PascalCase

var firstName = "Shahriar"
var lastName = "Hosen"

const interestRate = 5.5;
console.log(typeof interestRate);

// let is global scope !
// variable type var, let, const

// string
myName = "Shahriar"

// number (it, float, double)
// Boolean (true, false)
// null
// undefined
// symbol

// number literals
let age = 28;

// string literals
let name = "Shahriar"

// boolean literals
let isMarried = True

// null
let selectProduct = null; // null is a value
let selectColor = null; // '' rakbona future initialize korbo

// undefined
let message = undefined;
let data; // undefined mane kono kicho define kora hoy nai


// reference type 
// object
// array
// function