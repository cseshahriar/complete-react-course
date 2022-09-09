const info = [
    {id: 1, name: 'Shahriar'},
    {id: 2, name: 'Salpin'},
]


const isInfoAvailable = info.find(
    // callback function
    function(info) {
        return info.name = 'shahriar';
    }
);
console.log(isInfoAvailable);
// function can be store a variable
function find(callback) {}
let callbacks = function(callback) { 
}
    

// ==================== arrow function ===================
var callbacks2 = (info) => console.log('Drawing');

const sunFunc = (a, b) => {
    return a + b;
}
const isInfoAvailable2 = info.find(info => info.name === 'shahriar');
console.log(isInfoAvailable2);
