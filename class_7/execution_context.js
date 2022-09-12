// who to work javascript
// execution context
    // Everything in js happens inside execution context
    // 1. memory allocation (first execution is called global execution context)
    // 2. execution


var n = 2;

function square(num) {
    var ans = num * num;
    return ans
}

var squareOfTwo = square(2);
var squareOfFour = square(4);

// ======================== when code run ================ 
//  1. first create execution context

/**
 * 
 * Execution context(global)
 * ====== Memory component/Variable environment ====== code component/thread of execution =========
 *  n: undefined                      ====== 
 *  function: square(num) {            ======
 *      var ans = num * num;          ======
 *      return ans                    ======
 *  }                                 ====== 
 *  squareOfTwo: undefined            ====== 
 *  squareOfFour: undefined           ====== 
 *                                    ====== 
 *                                    ====== 
 *                                    ====== 
 *                                    ====== 
 *                                    ====== 
 */

/**    2. code execution (line by line)
* value assignment
* ====== Memory component/Variable environment ====== code component/thread of execution =========
*    n: 2                             ====== n <- 2
*    func if not call, then no touch  ====== execution context/sub creation if function call
*    squareOfTwo: when call function  ====== memory =========== code ========================= 
*    create another execution context ====== num: undefined ====== num: 2
*                                     ====== ans: undefined ====== ans: 4
*                                     ======  num: 2 ======
*                                     ======  ans: 4 ======
*    ---                              ======  ======
*/

// javascript single threaded synchronization(ordered) language

// call stack(LIFO)
// A call stack is a mechanism for an interpreter (like the JavaScript interpreter 
// in a web browser) to keep track of its place in a script that calls multiple functions

