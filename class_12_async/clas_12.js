// Asynchronous JS

console.log('before');
//backend api call

getUser(1, function(user) {
console.log('User', user);

getRepository(user.gitHubUsername, function(repository) {
console.log('Repository', repository);
})

});

console.log('after');

function getUser(id, callback) {
// 1st api call - /getuser/:id
setTimeout(function() {
console.log('Reading a user from backend...', id);
const data = {
id: id,
gitHubUsername: 'superiqbal7'
};
callback(data);
}, 2000);
}

function getRepository(username, callback) {
    if(!username) {
        console.log('No username specified, thus /getrepository api failed');
    } else {
        // 2nd api call - /getrepository
        setTimeout(function() {
        console.log('Calling GitHub API...', username);
        const data = ['repo 1', 'repo 2', 'repo 3'];
        callback(data);
        }, 2000)
    }
} 

// hw: repository commits

// 3rd api call - /commit

function commit(repo, callback) {
    return {
        commit1: 'some data',
        commit2: 'some data',
    }
} 