// looping in javascript
// ============= for =============
for(let i =1; i<= 10; i++) {
    console.log(i)
}

// ============= while =============
let i = 1;
while(i <= 10) {
    console.log(i);
    i++;
}

// do while

// ============== for in for object ===============
let obj = {
    name: "Shahriar",
    age: 29
}

for(let key in obj) {
    console.log(key)
}

// ============== for of for array =============
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
for(let i of cars) {
    console.log(i);
}
