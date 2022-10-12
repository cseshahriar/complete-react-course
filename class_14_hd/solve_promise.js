getCustomer()
    .then((customer) => {
        console.log(customer);

        // get movies
        getTopMovies()
            .then((movies)=> {
                console.log(movies);

                // if customer is premium
                if(customer.isPremium) {
                    // send email
                    sendEmail(customer.email)
                        .then ((movies) => {
                            console.log(movies)
                        })
                }
        })
    })
 
function getCustomer(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const customer = {
                id: 1,
                name: 'Shahriar',
                isPremium: true,
                email: 'shosen@gmail.com'
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