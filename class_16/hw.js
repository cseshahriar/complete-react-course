
// HW
const users = [
    {firstName: 'John1', lastName: 'Doe', age: 21},
    {firstName: 'John2', lastName: 'Doe', age: 22},
    {firstName: 'John3', lastName: 'Doe', age: 30},
    {firstName: 'John4', lastName: 'Doe', age: 31},
    {firstName: 'John5', lastName: 'Doe', age: 32},
]
//  create an array that contains full name of each person who are older than 30
const filteredUsers = users.filter(
    ({firstName, lastName, age}) => age > 30
)
fullNames = filteredUsers.map(({firstName, lastName, age}) => {
    return {['fullName']: firstName + ' ' + lastName, ['age']: age}
});
console.log(fullNames)

// array.prototype.map()
