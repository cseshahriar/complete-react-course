// synchronous js execution line by line
// js synchronous problem: execution stop
const processOrder = (customer) => {
    console.log('Processing order for customer 1');

    var currentTime = new Date().getTime();
    while(
        currentTime + 3000 >= new Date().getTime()
    );

    console.log('order processed for customer 1');
}


console.log('take order for customer 1');
processOrder(); // block after code execution
console.log('completed order for customer 1');

/**
 * take order for customer 1
 * 
 * Processing order for customer 1
 * order processed for customer 1
 * 
 * completed order for customer 1
 */


// blocking problem solution with asynchronous js
const processedOrder2 = (customer) => {
    console.log('2 Processing order for customer 1');

    // setTimeout call back argument func after 3 seconds
    setTimeout(() => {
        console.log('2 cooking completed');
    }, 3000);

    console.log('2 order processed for customer 1');  
} 

console.log('2 take order for customer 1');
processedOrder2()
console.log('2 completed order for customer 1');

/**
 * take order for customer 1
 * 
 * Processing order for customer 1
 * order processed for customer 1
 * 
 * completed order for customer 1 // not blocking
 * 
 * cooking completed
*/

// callback queue
