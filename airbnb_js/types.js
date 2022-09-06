/**
types: Primitives
-----------------
string
number
boolean
null
undefined
symbol
bigint 

types: Complex
--------------
object
array
function
*/

// pass by value
const foo = 1
let bar = foo;
bar = 9;
console.log(foo, bar); // => 1, 9

// pass by reference
const foo2 = [1, 2];
const bar2 = foo2;
bar2[0] = 9;
console.log(foo2[0], bar2[0]);  // 9 9 
