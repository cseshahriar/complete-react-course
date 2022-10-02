// asynchronously javascript
console.log('before');
setTimeout(function() {
    console.log('reading data from backend...');
}, 2000);
console.log('after');

// task scheduler make a schedule for setTimeout function
// setTimeout is global execution context ar part
// but global execution context out from call stack
// so data lost

/**
* before
* after
* reading data from backend...
*/

// *** for asynchronous js: callbacks, promise, async/await

/**
*  task scheduler: 
*  start line 2, then 
*  setTimeout make a scheduler for callbacks
* only global context
* setTimeout ar callback not created context
*/

// asynchronous means nor sequentially 


// ================= callbacks is very important ==============================
// lecture 12 40"

// 1st api call - /getuser/:id
getUser(1, function(user) {
    console.log('User', user);

    getRepository(user.gitHubUsername, function(repository) {
        console.log('Repository', repository);
    })
});


// 2st api call - /getuser/:id
console.log('after');

function getUser(id, callback) {
    setTimeout(function() {
        console.log('Reading daa from backend...', id)// when back end done
        const data = {
            id: id,
            gitHubUsername: 'superizbal7'
        };
        callback(data); // return data
    }, 2000);
}

/**
 * before
 * after
 * after
 * reading data from backend...
 * Reading daa from backend... 1
 */


function getRepository(username, callback) {
    if(!username) {
        console.log('no user');
    } else {
        setTimeout(function() {
            console.log('calling github api', username);
            const data = ['repo 1', 'repo 2', 'repo 3'];
            callback(data);
        }, 2000);
    }   
}

/**
 * User { id: 1, gitHubUsername: 'superizbal7' }
 */