// callback hell solve by promise
// then then chaining solve async await

// async await
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async operation 1');
        resolve(1);
    }, 100);
});


const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async operation 2');
        resolve(2);
    }, 100);
});

Promise.allSettled([p1, p2]) // all
    .then(result => console.log(result))
    .catch(err => console.error(err))
// one promise nor work then it will be no result


