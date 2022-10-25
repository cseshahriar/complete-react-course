/**
 * map:The map() method creates a new array populated with the results of calling
 *  a provided function on every element in the calling array.
 */

const arr  = [1, 2, 3, 4, 5];

// pass a function to map
const map1 = arr.map(x => x * 2);
console.log(map1);  // [ 2, 4, 6, 8, 10 ]

// Callback function map(callbackFn)
// syntax  map((element, index, array) => { /* … */ })
// Inline callback function map(function(element, index, array) { /* … */ }, thisArg)

// sqrt
const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));
console.log(roots); // 1, 2 ,3
console.log(numbers); // 1, 4 , 9

// Using map to reformat objects in an array
const kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
  ];
const reFormatArray = kvArray.map(
    ({key, value}) => ({[key]: value})
);
console.log(reFormatArray)