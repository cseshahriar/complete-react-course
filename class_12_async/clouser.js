/**
 * What is a closure?
 * Closures are functions that refer to independent (free) variables. In other words, 
 * the function defined in the closure ‘remembers’ the environment in which it was created.
 *
 * Note: Free variables are variables that are neither locally declared nor passed as parameter.
*/

function numberGenerator() {
    // Local “free” variable that ends up within the closure
    var num = 1;

    function checkNumber() { 
      console.log(num);
    }

    num++;

    return checkNumber;
  }
  
  var number = numberGenerator();
  number(); // 2

/**
 * Example 2:
 * In this example we’ll demonstrate that a closure contains any and all local variables that were declared inside the outer enclosing function.
*/
function sayHello() {
  var say = function() { console.log(hello); }
  // local variable that ends up within the closure
  var hello = "Hello world";
  return say;
}

var sayHelloClosure = sayHello();
sayHelloClosure(); //Hello world

/**
 * Execution Context
 * Execution context is an abstract concept used by the ECMAScript
 *  specification to track the runtime evaluation of code. 
 * This can be the global context in which your code is first executed 
 * or when the flow of execution enters a function body.
 * 
 * At any point in time, there can only be one execution context running. That’s why JavaScript is “single threaded,” meaning only one command can be processed at a time.

  * Typically, browsers maintain this execution context using a “stack.” A stack is a Last In First Out (LIFO) data structure, meaning the last thing that you pushed onto the stack is the first thing that gets popped off it. (This is because we can only insert or delete elements at the top of the stack.)

  * The current or “running” execution context is always the top item in the stack. It gets popped off the top when the code in the running execution context has been completely evaluated, allowing the next top item to take over as running execution context.

  * Moreover, just because an execution context is running doesn’t mean that it has to finish running before a different execution context can run.

  * There are times when the running execution context is suspended and a different execution context becomes the running execution context. The suspended execution context might then at a later point pick back up where it left off.

  * Any time one execution context is replaced by another like this, a new execution context is created and pushed onto the stack, becoming the current execution context.
  * Lexical Environment: Used to resolve identifier references made by code within this execution context.
  * Variable Environment: Lexical Environment whose EnvironmentRecord holds bindings created by VariableStatements within this execution context.
 */


// ref: https://www.freecodecamp.org/news/lets-learn-javascript-closures-66feb44f6a44/