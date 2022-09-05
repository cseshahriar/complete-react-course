// array
// add new elements
// finding
// remove
// splitting
// combine

const numbers = [1, 2, 3, 4, 1, 5, 6]; // object array

// add end of array
numbers.push(7)
console.log(numbers);

// remove from last
numbers.pop()
console.log(numbers);

// add beginning elements
numbers.unshift(0)
console.log(numbers);


// add middle of elements
// numbers.splice(2, 1); // delete item, how much, 
numbers.splice(2, 1, 70, 80); // start, end,  elements 70,80
console.log(numbers);

numbers.splice(2, 0, 70, 80); // start, end,  elements 70,80
console.log(numbers);

numbers.splice(2, 0, 3); // 3 replace for 2
console.log(numbers);


// find [0,  1, 3, 70, 80, 70, 80, 3,  4,  5, 6]
for(let i in numbers) {
    if(numbers[i] == 4) {
        console.log(i);       
    }
}


let flag = 0;
for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] === 1) flag = 1;
}

if(flag === 1) {
    console.log('true');
    
} else {
    console.log('false');   
}

// find by builtin
console.log(numbers.indexOf(1, 3)); // 9
/**
 * [
   0,  1, 3, 70, 80,
  70, 80, 3,  4,  1,
   5,  6
]
*/
console.log(numbers.indexOf(4)); // search index, form elements
console.log(numbers.indexOf(1));
console.log(numbers.lastIndexOf(1));

console.log(numbers.includes(1)); // true
console.log(numbers.includes(10)); // false mane nai

const info = [
    {
        name: 'shahriar', 
        id: 1
    },
    {
        name: 'joy', 
        id: 2
    }
]

console.log(info.indexOf({name: 'shahriar', id: 1})); // -1


const dataLogic = function(info) {
    // if(info.name === 'joy') {
        //     return true;
        // } else {
            //     return false;
            // }
    return info.name === 'shahriar';
}
const isInfoAvailable = info.find(dataLogic);
console.log(isInfoAvailable);
