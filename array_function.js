//Index of element
let fruits1 = ["apple", "banana", "orange"];
console.log(fruits1.indexOf("banana"));  // Output: 1
console.log(fruits1.indexOf("grape"));   // Output: -1

//Slicing array
let fruits2 = ["apple", "banana", "orange", "mango"];
let slicedFruits = fruits2.slice(1, 3);
console.log(slicedFruits);  // Output: ['banana', 'orange']

//Splicing
//Changes the contents of an array by removing or replacing elements.
let fruits3 = ["apple", "banana", "orange"];
fruits3.splice(1, 1, "grape");
console.log(fruits3);  // Output: ['apple', 'grape', 'orange'] (replaces 'banana' with 'grape')

//Sorting
let numbers = [3, 1, 4, 1, 5, 9];
numbers.sort();
console.log(numbers);  // Output: [1, 1, 3, 4, 5, 9]

//Reversing
let numbers1 = [1, 2, 3, 4, 5];
numbers1.reverse();
console.log(numbers1);  // Output: [5, 4, 3, 2, 1]
