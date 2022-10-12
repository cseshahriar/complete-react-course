/** 
 * hw: solve by promise and async and await
 * 1. get customer by id
 * 2. check customer isPremium show top movies of the week and mail the movies the customer, top move from api call
 * 
 */
getCustomer(1, (customer) => {
    console.log('customer: ', customer);
    if (customer.isPremium) {
      console.log('Top Movies: ', movies);
      sendEmail(customer.email, movies, () => {
        console.log('Email sent...');
      })
    }
});
  

function getCustomer(id, callback) {
    // return customer by id
    setTimeout(() => {
        callback({
        id: 1,
        name: 'Iqbal',
        isPremium: true,
        email: 'email'
        });
    }, 4000);
}
  
function getTopMovies(callback) {
    // return top movies of the week
    setTimeout(() => {
        callback(['movie1', 'movie2']);
    }, 3000)
}
  
function sendEmail(email, movies, callback) {
    // send email for customer
    setTimeout(() => {
        callback();
    })
}