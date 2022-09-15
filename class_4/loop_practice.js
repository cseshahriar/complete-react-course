// for loop(for array)
for( let i = 0; i < 10; i++ ) {
    console.log('Hello world\n');
}

let numbers = [1, 2, 3, 4, 5];
number_sum = 0;
for( let i = 0; i < numbers.length; i++ ) {
    number_sum += numbers[i];
}
console.log(number_sum);


// for in loop(for object)
let person_info = {
    firstName: 'Shahriar',
    lastName: 'Hosen',
}
for(x in person_info) {
    console.log(person_info[x]);
}


// for of loop
let array1 =["Shahriar", "Hosen", 28];
for(let el in array1) {
    console.log(el);
}

// while
let x = 1;
while(x <= 5) {
    console.log('Hello World');
    x++;
}

// do while
do{
    console.log(x  + " ");
    x++;   
} while(x < 10);