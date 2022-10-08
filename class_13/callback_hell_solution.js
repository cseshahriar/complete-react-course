console.log('Before');
// backend api call

function getUser(id, callback) {
    // 1st api call
    // promise can data hold callback not
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('Reading a user from backend ...', id);
            const data = {
                id: id,
                gitHubUsername: 'cseshahriar',
            };
            resolve(data);
        }, 2000);
    });
};


function getRepository(username, callback) {
    if(!username) {
        console.log('No username specified, thus /getRepository api failed'); 
    } else {
        // 2nd api call -/getrepository
        return new Promise((resolve, reject) => {
            setTimeout(function() {
                console.log('Calling Github api ....', username);
                const data = ['repo 1', 'repo 2', 'repo 3'];
                resolve(data);
            }, 2000)
        })
    }
}

function getCommit(repository) {
   if(!repository) {
    console.log('No repository specified thus /getrepository api failed');
   } else {
        return new Promise((resolve, reject) => {
            setTimeout(function() {
                console.log('Calling Github API for commits...', repository);
                const data = ['commit 1', 'commit 2', 'commit 3'];
                resolve(data);
            }, 2000);
        });
   }
}

function displayCommits() {
    console.log(commits);
}
console.log('after');
