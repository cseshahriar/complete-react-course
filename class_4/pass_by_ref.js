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


// ==============  shallow copy ===============
const car = { // car properties can be changed for reference type when its const
    color: 'red',
    brand: 'BWD',
    size: {
        length: 10, 
        width: 5
    }
}
const secondCar = car; // shallow copy / অগভীর অনুলিপি
car.wheel = 4
car.type = "sedan"

secondCar.body = 'something';

console.log(car);

/* {
  color: 'red',
  brand: 'BWD',
  wheel: 4,
  type: 'sedan',
  body: 'something'
}*/

console.log(secondCar);
/* 
{
  color: 'red',
  brand: 'BWD',
  wheel: 4,
  type: 'sedan',
  body: 'something'
}
*/

// ============ shallow copy solution deep copy =============
// const thirdCar = {};
// for(let i in car) {
//     thirdCar[i] = car[i]
// }
const thirdCar = Object.assign({}, car);
thirdCar.any = "anything";
console.log(thirdCar);


