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

  // ref: https://www.freecodecamp.org/news/lets-learn-javascript-closures-66feb44f6a44/