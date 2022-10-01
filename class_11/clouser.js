// closure 
// closure take variable reference


function x() {
    // for(var i = 1; i <= 5; i++) {
    for(let i = 1; i <= 5; i++) {
        setTimeout(
            function() { // callback
                console.log(i);
        }, 1000)
    }

    console.log('Hello world');
}

x()
/**
 * if use var
 * x() called
 * 1 second after print a value of 
 * 
 * for call i = 1
 * hen call setTimeout function
 * setTimeout function create execution context
 * take reference of i
 * setTimeout function register callback function
 * print the value of i
 * 
 * for call i = 2
 * repeat
 * 
 * for call i = 6
 * 
 * print hello world
 * print i or 6 // i ref
 * print i or 6
 * print i or 6
 * print i or 6
 * print i or 6
 * 
 * every execution context take reference of i
 */

// var func/local scope if inside function
// let, const block scope

// self scope and lexical scope bind that's closures

// if let create block and increment i 