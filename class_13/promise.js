const statusVal = true;

console.log('task 1');

// promise definition
const p = new Promise((resolve, reject) => {
    setTimeout(function() {
        if(statusVal) {
            resolve('task 2'); // kep promise
        } else {
            reject('failed');
        }
    }, 2000);
});

// promise call
p
.then((value) => console.log(value))
.catch((err) => console.log(err))

console.log('task 3');

/**
 * task 1
 * task 3
 * task 2
 */