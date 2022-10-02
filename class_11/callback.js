// closures are functions self scope and parent lexical scope bind

// closure take variable reference
function x() {
    var name = "shahriar";
    
    // second execution
    setTimeout(function () {
        console.log(name);
    }, 5000);

    console.log("hello there"); // first execution
}

x()
// hello there
// shahriar
