// ================ object can take ay data ===================

// ========== object literals method ==========
const circle = { // object literals {}
    radius: 5, // property
    location: {  // property
        x: 3,
        y: -3
    },
    draw: function() {  // method
        console.log('Drawing');
    },
    move: function() {  // method
        console.log("Moving");
    }
}
circle.draw();
circle.move();

// ============== factory function method ================
function createCircle(radius, location) {
    return {
        radius: radius, // property
        location: location, // property
        draw: function() {  // method
            console.log('Drawing');
        },
        move: function() {  // method
            console.log("Moving");
        }
    }  // return object
}

const circle1 = createCircle(5, {x: 2, y:-3});
const circle2 = createCircle(5, {x: 2, y:-3});
console.log(circle1);

// ======================== function constructor ===========
function CreateCircle(radius, location) {
    // this refers parent, so this refers CreateCircle
    this.radius = radius;  // this means this class
    this.location = location;
    this.draw = function() {  // method
        console.log('Drawing');
    },
    this.move = function() {  // method
        console.log("Moving");
    }
}
const circle3 = new CreateCircle(5, {x:5, y:-3})
console.log(circle3)
console.log(circle3.radius)
console.log(CreateCircle.length)
// 1.08"


// object cloning 

// pass by value if origin change latest not change
console.log('\n\npass by value');
let x = 10
let y = x; // pass by value
console.log(x, y); // 10 10
x = 15;
console.log(x, y); // 15 10


// pass by value
console.log('\n\npass by value');

let number = 10; // Primitive type so pass by value 
function increment(number) {
    number++;
}
increment(number)
console.log(number); // 10
