// scope is execution context memory space
// scope have own memory environment and parent lexical environment
// lexical environment ?
var b = 10;
function a() {
    function c() {
        console.log(b);
    }
    c();
}
a();


/** c -> a -> global this scope chaining |
 *           c() execution context       | 
 *           ||
 *           a() execution context       |
 *            |                          
 *           global execution context    |
 *                                       |
 *  ============ call stack =============
 */












