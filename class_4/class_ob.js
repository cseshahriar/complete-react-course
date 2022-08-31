// ================ object can take ay data ===================

// ========== object ==========
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
// ============== factory function ================
