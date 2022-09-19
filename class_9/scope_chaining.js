// scope chaining

/**
*   Scope determines the accessibility (visibility) of variables.
    JavaScript has 3 types of scope:
    Block scope
    Function scope
    Global scope
*/

// ref: https://dev.to/tailine/scope-and-scope-chain-in-javascript-3478 
var b = 10; // global scoped
function a() {
    console.log(b); // can access
}

// by default access parent scope
// scope is current execution context memory space

var m = 10;
function n() {
    function c() {
        console.log(m); // can access cause m in n scope
    }
}

/**
 * when js code called 
 * first create call stack 
 * inside call stack -> create global execution context
 * global execution context memory and code component
 * 
 */
