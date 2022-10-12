// async await
console.log('before');
// backend api call

// promise solution
// getUser(1)
// .then((user) => getRepository(user.gitHubUsername))
// .then((repository) => getCommit(repository[0]))
// .then((commits) => console.log(commits))
// .catch((err) => console.error(err));

// async and await approach
// write async code synchronous way that's why we user async await
// async wrapper
async function displayCommits () {
    // work synchronous way
    const user = await getUser(1); // wait for displayCommits call
    const repos = await getRepository(user.gitHubUsername); // wait for user
    const commits = await getCommit(repos[0]); // wait for repos
    console.log(commits);
}
displayCommits();
console.log('after');


// functions
function getUser(id) {
    // 1st api call - / getuser/:id
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from backend...');
            const data = {
                id: id,
                gitHubUsername: 'cseshahriar'
            }
            resolve(data);
        }, 20000);
    })
}

function getRepository(username) {
    if(!username) {

    }
}