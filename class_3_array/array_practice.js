/**
 * What are array in javascript?
 * Array in javascript are the data type of used to store a list of values
 * JavaScript array objects can be stored in variables and dealt with in the
 *  same way you deal with any other data type. The difference is that we can
 *  access each value inside the list individually, and perform various activities,
 *  such as looping over it.
 */

let cars = ["bmw", "volvo", "honda"];
console.log(cars[0]);
console.log(cars[2]);
let len = cars.length;
console.log('cars length: ' + len);

// access last element
let last = cars[cars.length - 1];
console.log(last);

// loop over the array Items
cars.forEach((item, index) => {
    console.log(item, index);
})


// array methods
let list_of_numbers = [1,2,3,4,5, 6, 7, 8, 9, 10]
for(let x = 0; x < list_of_numbers.length; x++) {
    let y = list_of_numbers[x]
    console.log(y.toString(2)); // digit to binary
}

// add end of array
cars.push("Audi");
console.log(cars);

// add begriming of array
cars.unshift("Toyota")
console.log(cars);

// adding element to the middle of array
const arr = ['a', 'b', 'c'];
let start = 2;
let deleteCount = 0;
arr.splice(start, deleteCount, 'd')
console.log(arr);

// remove from last 
cars.pop()
console.log(cars);

// remove form first
cars.shift()
console.log(cars);

// slice  returns shallow copy, It takes in two parameters: begin and end
let cars2 = ["Toyota", "bmw", "volvo", "honda","Audi"];
console.log(cars2);
let cars3 = cars2.slice(1);
console.log(cars3);

let cars4 = cars.slice(0,4)

console.log(cars4);

// concat
let cars5 = ["bmw", "volvo", "honda"];
let bikes = ["yamaha", "suzuki", "royal enfield"];
let vehicles = cars5.concat(bikes);
console.log(vehicles);

// sort
let list_of_numbers2 = [3,2,6,1,5,4,8,7];
list_of_numbers2.sort(); // asc
console.log(list_of_numbers2);

// reverse 
list_of_numbers2.reverse() // desc
console.log(list_of_numbers2);


/*
* map
* The map() method is used to create a new array from an existing one by
* applying a function to each of the elements of the first array. It does not change the original array. 
*/

let num1 = [1, 2, 3, 4, 5];
let num2 = num1.map(item => {
    return item * 2
});
console.log(num2);


/**
 * filter
 * The filter() method takes each element from an array and applies a 
 * conditional statement against it. If this condition is true, the 
 * element gets pushed to the output array. If the condition is false, 
 * the element does not get pushed to the output array. 
 */
let num3 = num1.filter(value => {
    return value > 4;
});
console.log(num3);


/**    
 * reduce
 * The reduce() method reduces an array of values to just one value. The reduce
 * function is run on each element of the array to get the single output value.
 * This method does not reduce the original array.
*/
let num4 = num1.reduce((total, value) => {
    return total + value
});
console.log(num4);