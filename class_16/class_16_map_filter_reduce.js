/** 
 * The map() method creates a new array populated with the results of calling a 
 * provided function on every element in the calling array
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * */

const arr = [2, 4, 6, 1, 3]

// 2x
function double(number) {
    return number * 2;
}
// const doubleArray = arr.map(double) // map return new array
const doubleArray = arr.map((x) => {
    return x * 2;
}) // map return new array
console.log(doubleArray)  // [ 4, 8, 12, 2, 6 ]

const roots = arr.map((num) => Math.sqrt(num));


// ============ filter ============
const filterArr = arr.filter((x) => x > 3)
console.log(filterArr)  // [ 4, 6 ]



// =========== reduce =====================
arrSum = arr.reduce((initial, current) => {
   return initial + current
}, 0)
console.log(arrSum) // 16

// find max
function findMax(arr) {
    let max = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

arrMax = arr.reduce((max, current) => {
    if(current > max) {
        max = current;
    }
    return max;
 }, 0)
 console.log(arrMax) // 16

// HW: 
const users = [
    {firstName: 'John1', lastName: 'Doe', age: 21},
    {firstName: 'John2', lastName: 'Doe', age: 22},
    {firstName: 'John3', lastName: 'Doe', age: 30},
    {firstName: 'John4', lastName: 'Doe', age: 31},
    {firstName: 'John5', lastName: 'Doe', age: 32},
]
//  create an array that contains full name of each person who are older than 30
const fullNames = users.filter(
    (x) => {
        x.age > 30
    }
)
console.log(fullNames)
