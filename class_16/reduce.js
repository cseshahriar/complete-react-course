// reduce
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = numbers.reduce((prev, current) => {
    sum = prev + current;
    return sum;
});
console.log(result);