//Destructuring obj-ES6
let obj1 = {
    fname : "Vijaylaxmi",
    lname : "R K",
    state : "Karnataka"
};
 
let {fname:fn,lname:ln} = obj1;

console.log(`${fn} ${ln}`);

const arr = [1, 2, 3, 4, 5];
const [one, two, three] = arr;
console.log(one); // 1
console.log(two); // 2
console.log(three); // 3

// To skip certain values
const [first,,,,last] = arr;
console.log(first); // 1
console.log(last); // 5

//obj literals
function add(address){
    let {city , state} = address;
    let newadd = {
        city,
        state,
        country : "India"
    }
    console.log(`${newadd.city} ${newadd.state} ${newadd.country}`);
}
add({city:`Banglore`,state:`Karnataka`});

//obj entries - ES8
const exampleObj = {a: 1, b: 2, c: 3, d:4};
console.log(Object.entries(exampleObj)); // [["a", 1], ["b", 2], ["c", 3], ["d", 4]];

// Usually used with for
for (const [key, value] of Object.entries(exampleObj)) {
	console.log(`key: ${key}, value: ${value}`);
}
// key: a, value: 1
// key: b, value: 2
// key: c, value: 3
// key: d, value: 4

//Values
console.log(Object.values(obj1));