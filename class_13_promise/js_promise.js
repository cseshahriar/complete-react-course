/**
 * The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
 * promise use alter callback
 * promise are useful when something take long time for example api call
 * promise better than callback 

 * Promise Object Properties
 * A JavaScript Promise object can be:
 *  Pending
 *  Fulfilled
 *  Rejected
 *  The Promise object supports two properties: state and result.
 */

let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if(a == 2) {
        // resolve immediately
        resolve('success');
    } else {
        // reject immediately
        reject('fail')
    }
})

// resolve call
p.then((message) => {
    console.log('This is in the then '+ message);
}).catch((err) => {
    console.log('This is in the catch '+ err);
})

watchTutorialCallback((message) => {
    console.log('Succcess: ' + message);
}, (err) =>{
    console.log();
})
// ref: https://www.youtube.com/watch?v=DHvZLI7Db8E