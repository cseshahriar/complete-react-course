// =============== synchronous js execution line by line =============
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



// ==================== blocking problem solution with asynchronous js ========
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
// so asynchronously event are not our control, we can solve with callback



// ================================== callback =========================== 
console.log('callback \n\n');

const takeOrder3 = (customer, callback) => {
    console.log(`Take order for ${customer}`);
    callback(customer);
};

const processedOrder3 = (customer, callback) => {
    console.log(`Processed order for ${customer}`);

    setTimeout(() => {
        console.log('cooking completed');
        console.log(`order processed for ${customer}`);
        callback(customer);
    }, 3000);   
};


const completeOrder3 = (customer) => {
    console.log(`completed order for ${customer}`);
}


// func call
takeOrder3('Shahriar', (customer) => {
    // takeOrder after process return a callback processedOrder3
    processedOrder3(customer, (customer) => {
        // process order after process return a callback completeOrder3
        completeOrder3(customer);
    });
});
console.log('Hello');

/**
 * Take order for Shahriar
 * Processed order for Shahriar
 * Hello
 * cooking completed
 * order processed for Shahriar
 * completed order for Shahriar
*/

// callback hell problem // nested problem not readable, solve with promise



// ======================== promise =====================================
const hasMeeting = false;

// promise created, promise hold value
const meeting = new Promise((resolve, reject) => {
    // do stuff
    if(!hasMeeting) {
        const meetingDetails = {
            name: 'Technical Meeting',
            location: 'Google  Meet',
            time: '10.:00 PM'
        }
        resolve(meetingDetails);
    } else {
        reject(new Error('Meeting already scheduled!'));
    }
});

// promise chaining
const addToCalender = (meetingDetails) => {
    // promise object received and return another promise object
    const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
    return Promise.resolve(calender);
}

// promise call
console.log('promise \n\n');

meeting
    .then(addToCalender) // first call addToCalender function and return a promise object
    .then( // if resolve call then
        (response) => { // receive first promise object
            console.log(
               JSON.stringify(response) // "Technical Meeting has been scheduled on Google  Meet at 10.:00 P
            )
        }
    )
    .catch( // if reject call catch
        (err) => {
            console.log(err)
        }
    );

// first resolve addToCalender
// then resolve meeting
// it's called promise chaining
// so promise problem all data are not one then


// =========== promise problem solve =====================
console.log("\n\n")

const promise1 = Promise.resolve(`Promise 1 resolved`)

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Promise 2 resolved`);
    }, 2000);
});

// result is separate
// promise1.then(response => console.log(response));
// promise2.then(response => console.log(response));

// result one response
Promise.all([promise1, promise2])
    .then(
        response => {
            console.log(response); // [ 'Promise 1 resolved', 'Promise 2 resolved' ]
        }
    )
// multiple promise result at a time: [ 'Promise 1 resolved', 'Promise 2 resolved' ]


// promise problem: then, then, then, then, then, then, then, then, then

// =================== async await ============================================
