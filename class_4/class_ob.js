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