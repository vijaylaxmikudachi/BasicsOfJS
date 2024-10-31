//Trailing commas
function sum(a, b, c,) {
    return a + b + c;
}

console.log(sum(1, 2, 3,));  // Output: 6

//SharedArraybuffer
let buffer = new SharedArrayBuffer(16);  // Create a buffer of 16 bytes
let uint8 = new Uint8Array(buffer);

uint8[0] = 42;
console.log(uint8[0]);  // Output: 42

//Atomics : The Atomics object provides atomic operations on shared memory locations.

let sharedBuffer = new SharedArrayBuffer(4);  // Create a shared buffer
let sharedArray = new Int32Array(sharedBuffer);

sharedArray[0] = 0;
console.log(Atomics.add(sharedArray, 0, 5));  // Output: 0 (initial value)
console.log(sharedArray[0]);  // Output: 5 (after addition)


let a =[1,2,3,4];
console.log(a.find(n => n%2==0));