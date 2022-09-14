// ============== Array ================ 
let selectedColors = ["red", "blue", "green", "yellow"] // object
console.log(typeof selectedColors);
console.log(selectedColors[2]);

// array length 
console.log(selectedColors.length);


// arithmetics operators
console.log(2 ** 2);


// function
function sum(a, b) {
    return a + b;
}

console.log(sum(1, 2));

function weatherStatus(temp) {
    return temp >= 25 ? console.log('Warm') : console.log('Cool'); // ternary   
}

let and = ( true && true)
let or = ( true || false)

console.log(and, or);
