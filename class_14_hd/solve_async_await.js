async function sentMoviesToUser() {
    // work synchronous way
    const customer = await getCustomer(1);
    const movies = await getTopMovies(); // wait for customer

    // if customer is premium
    if(customer.isPremium) {
        // send email
        sendEmail(customer.email, movies)
        .then((response) => {
            console.log(
                `The email has ben sent to ${response.to} with subject ${response.subject} body ${response.text}`
            )
        })
    }
}
sentMoviesToUser();

 
function getCustomer(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const customer = {
                id: 1,
                name: 'Shahriar',
                isPremium: true,
                email: 'shosen@me.com'
            }
            resolve(customer);
        }, 4000);
    })
}

  
function getTopMovies() {
    // return top movies of the week
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const topOfTheWeekMovies = [
                'Top Gun: Maverick',
                'The Lord of the Rings: The Return of the King',
                'Inception',
                'The Godfather'
            ];
            resolve(topOfTheWeekMovies)
        }, 3000)
    })
}

  
function sendEmail(movies) {
    // send email for customer
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(movies)
        })
    })
}


function sendEmail(email, movies) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const mail = {
                to: email,
                subject: 'Top of the week movies',
                text: 'Movie Name: ' + movies.toString(),
            }
            resolve(mail);
        }, 2000)
    })
}