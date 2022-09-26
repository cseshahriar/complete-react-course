const { log } = require("async");

// asynchronously javascript
console.log('before');


// 1st api call - /getuser/:id
getUser(1, function(user) {
    console.log('User', user);
});

// 2st api call - /getuser/:id

console.log('after');

function getUser(id, callback) {
    setTimeout(function() {
        console.log('Reading daa from backend...', id)
        const data = {
            id: id,
            gitHubUsername: 'superizbal7'
        };
        callback(data);
    }, 2000);
}


function getRepository(username, callback) {
    if(!username) {
        console.log('no user');
    } else {
        setTimeout(function() {
            console.log('calling github api', username);
            const daa = ['repo 1', 'repo 2', 'repo 3'];
            callback(data);
        }, 2000);
    }
   
}