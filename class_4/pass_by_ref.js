// pass by reference
// object pass by reference
let number = {
    value: 10
};
function increment(number) {
    number.value++;  // reference change
}
increment(number)
console.log(number); // { value: 11 }
