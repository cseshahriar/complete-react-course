// array 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// remove end
numbers.pop(); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
console.log(numbers);


// remove from starting
numbers.shift()
console.log(numbers); // [2, 3, 4,  5, 6, 7, 8, 9, 10]

// remove from middle
// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.
// array.splice(index, howmany, item1, ....., itemX)
numbers.splice(3, 1,) // start el, how much
console.log(numbers); // [2, 3, 4,  6, 7, 8, 9, 10] 5 is removed

