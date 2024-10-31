
//Accessing Elements
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]);  // Output: apple
console.log(fruits[2]);  // Output: orange

//Adding and removing elemets
let fruits1 = ["apple", "banana"];
fruits.push("orange");
console.log(fruits1);  // Output: ['apple', 'banana', 'orange']

let fruits2 = ["apple", "banana", "orange"];
let removed = fruits2.pop();
console.log(fruits2);  // Output: ['apple', 'banana']
console.log(removed); // Output: orange

let fruits3 = ["banana", "orange"];
fruits3.unshift("apple");
console.log(fruits3);  // Output: ['apple', 'banana', 'orange']

let fruits4 = ["apple", "banana", "orange"];
let removed1 = fruits4.shift();
console.log(fruits4);  // Output: ['banana', 'orange']
console.log(removed1); // Output: apple

//Length
let fruits5 = ["apple", "banana", "orange"];
console.log(fruits5.length);  // Output: 3

//Iteration
let fruits6 = ["apple", "banana", "orange"];
fruits6.forEach(function(item, index) {
  console.log(index + ": " + item);
});
// Output:
// 0: apple
// 1: banana
// 2: orange
