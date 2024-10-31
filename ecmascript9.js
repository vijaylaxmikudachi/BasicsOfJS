//.finally()

let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Success!"), 1000);
});

promise
    .then(result => {
        console.log(result);  // Output: Success!
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log("Promise finished, whether resolved or rejected.");
    });

//RregExp
// . using /s
const regex = /hello.world/s;  // The 's' flag enables dotAll mode
console.log(regex.test("hello\nworld"));  // Output: true

//matched groups
const dateRegex = /(?<day>\d{2})-(?<month>\d{2})-(?<year>\d{4})/;
const result = dateRegex.exec("15-09-2023");

console.log(result.groups);  // Output: { day: '15', month: '09', year: '2023' }
console.log(result.groups.day);  // Output: 15

//LookBehind
const str = "JavaScript is great";
const regex1 = /(?<=Java)Script/;  // Matches 'Script' only if preceded by 'Java'

console.log(regex1.test(str));  // Output: true

//**--- */
//flat() - Flattens nested arrays up to the specified depth.
let arr = [1, [2, [3, [4]]]];
console.log(arr.flat(3));  // Output: [1, 2, 3, [4]]

//flatMap() - Maps each element using a mapping function, then flattens the result.
let arr1 = [1, 2, 3];
let result1 = arr1.flatMap(x => [x, x * 2]);
console.log(result1);  // Output: [1, 2, 2, 4, 3, 6]


