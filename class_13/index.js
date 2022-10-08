// promise: hold actual result
// state: pending, fulfilled, rejected
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve(1);
        reject(new Error('Error occurred'));
    }, 2000)
})

p.
then(
    (result) => console.log(result)
)
.catch(
    (reject) => console.log(reject)
)