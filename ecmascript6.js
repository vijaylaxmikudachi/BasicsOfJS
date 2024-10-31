//Map and Set
const map = new Map();
map.set("name", "Alice");
map.set("age", 25);

console.log(map.get("name"));  // Output: Alice
console.log(map.has("age"));   // Output: true

const set = new Set([1, 2, 3, 3, 4]);

console.log(set);  // Output: Set { 1, 2, 3, 4 } (duplicates are removed)
set.add(5);
console.log(set);  // Output: Set { 1, 2, 3, 4, 5 }

//Symbols
const sym1 = Symbol('identifier');
const sym2 = Symbol('identifier');

console.log(sym1 === sym2);  // Output: false (symbols are unique)
