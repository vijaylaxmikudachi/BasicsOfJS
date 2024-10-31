//Rest
//Parameters are passed
var sum = (...array) => {
    let rs = 0;
    for(let i = 0; i < array.length; i++){
        rs += array[i];
    }
    return rs;
};
console.log(sum(1,2,3,4));

const person = { name: "John", age: 30, job: "Developer" };

// Extract 'name' and 'age', and collect the rest in 'rest'
const { name, ...rest } = person;

console.log(name);  // Output: John
console.log(rest);  // Output: { age: 30, job: 'Developer' }
console.log(sum(10,20,30,40));


//Spread
let ex = [1,2,3,4];
let ex1 =[...ex]; //copying data
ex1.push(8); //pushing the data
console.log(ex1);

const person1 = { name: "John", age: 30 };
const job = { job: "Developer" };

// Merge objects
const employee = { ...person1, ...job };
console.log(employee);  // Output: { name: 'John', age: 30, job: 'Developer' }
