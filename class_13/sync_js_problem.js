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