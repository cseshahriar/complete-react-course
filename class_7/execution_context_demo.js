var x = 5;

function getData() {
    console.log('Hello World');
}
var test ='nothing';
getData();
// console.log(x)
console.log(getData);

// ============================== hoisting =====================
// Hoisting is JavaScript's default behavior of moving declarations to the top.
// In JavaScript, a variable can be declared after it has been used.
// In other words; a variable can be used before it has been declared.
console.log(a);  // undefined
helloWorld(); // Hello World

var a = 5;
function helloWorld() {
    console.log('Hello World');
}
