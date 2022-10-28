// array filter
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = numbers.filter((currentElement, index, array) => {
    return currentElement > 4;
});
console.log(result); // return new array [ 5, 6, 7, 8, 9, 10 ]
console.log(numbers); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]