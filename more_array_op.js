//Mapping an array
let numbers = [1, 2, 3, 4];
let squares = numbers.map(function(num) {
  return num * num;
});
console.log(squares);  // Output: [1, 4, 9, 16]

//Filtering
let numbers1 = [1, 2, 3, 4, 5];
let evenNumbers = numbers1.filter(function(num) {
  return num % 2 === 0;//True or false
});
console.log(evenNumbers);  // Output: [2, 4]

//Reducing
let numbers2 = [1, 2, 3, 4, 5];
let sum = numbers2.reduce(function(total, num) {
  return total + num;
}, 0);
console.log(sum);  // Output: 15

//Includes
let fruits = ["apple", "banana", "orange"];
console.log(fruits.includes("banana"));  // Output: true
console.log(fruits.includes("grape"));   // Output: false

//Finding
let numbers3 = [1, 2, 3, 4, 5];
let firstEven = numbers3.find(function(num) {
  return num % 2 === 0;
});
console.log(firstEven);  // Output: 2

//reduce
let a = [1,2,3,5,8];
let t = a.reduce((acc,n) => acc+n,0);
console.log(t);

