// Use const for all of your references; avoid using var

// bad
var a = 1;
var b = 2;

// good 
const c = 1;
const d = 2;

// If you must reassign references, use let instead of var.
// let is block-scoped rather than function-scoped like var

// bad 
var count1 = 1;
if (true) {
    count1 += 1;
}

// good 
let count2 = 1;
if (true) {
    count2 += 1;
}

// Note that both let and const are block-scoped, whereas var is function-scoped.
{
    let x = 1;
    const y = 2;
    var z = 1;
}
// console.log(x); // ReferenceError
// console.log(y); // ReferenceError
console.log(z); // Prints 1