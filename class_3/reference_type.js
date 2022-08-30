// Data Type || Reference

// Object 
// Array
// Function

// object 
let info = {
    "name": "Shahriar",
    "age": 29,
    "bloodGroup": "B+",
    "isMarried": true

} // {} object letterers

// dot notation or object notation
console.log(typeof info);
console.log(info);

info.address = "Dhaka";
console.log(info);
console.log(info.bloodGroup);

// bracket notation
let key = 'phone';
let value = "01710835653";
info[key] = value;
console.log(info);


// array(object)
let selectColors = ['red', 'blue', 'green', 'yellow']
console.log(typeof selectColors);
console.log(selectColors);
console.log(selectColors[1]);
console.log(selectColors.length);


// arithmetics operators
let num1 = 5;
let num2 = 5;

// function
function sum(a, b) {
    return a + b;
}
console.log(sum(4, 5));

function weatherStatus(temperature) {
    return temperature >= 25 ? console.log('Warm') : console.log('Cool');  // ternary
}
weatherStatus(20)

console.log(true && false);
console.log(true || false);


