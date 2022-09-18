const numbers = [12, 25, 37, 39];

// reduce
numbers.map(num => num * 2);
numbers.filter(num => num > 20);
numbers.find(num => num > 23);

// array summation
const total = numbers.reduce( (sum, num) => {
        console.log(sum, num);
        return sum + num
    }, 0
)
console.log(total.toString());

// object summation
const friends = [
    {name: 'rashed', money: 12},
    {name: 'rashed1', money: 25},
    {name: 'rashed2', money: 40},
    {name: 'rashed3', money: 45}
];

const total2 = friends.reduce((sum, friend) => {
    return sum + friend.money;
}, 0)
console.log(total2);


