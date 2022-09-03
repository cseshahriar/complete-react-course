// loop
// for
// while loop
// do while 
// for in
// for of


for(let i=1; i <= 10; i++) {
    console.log(i);
}


let obj = {
    name: 'Shahriar', 
    age: 29,
}

for(let key in obj) {
    // console.log(key);
    console.log(obj[key]);
}

const info = {
    'name': 'Shahriar',
    'age': 29,
    'bloodGroups': 'B+',
    'isStudent': false,
    'skinColor': '#FFFFFF',

}
// bracket notation
let selection = 'address';
let value = 'Dhaka';
info[selection] = 'Dhaka';
console.log(info[selection]);


// dot notation
console.log(obj.name);

// object notation
console.log(obj['name']);


// ========= object copy ============


// ======================= class =======================
let radius = 5;
let x = 2;
let y = -3;

