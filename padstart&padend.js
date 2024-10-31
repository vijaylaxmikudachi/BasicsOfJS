
//Start
let str = "123";
let paddedStr = str.padStart(6, "0");
console.log(paddedStr);  // Output: 000123

//End
let str1 = "123";
let paddedStr1 = str1.padEnd(6, "0");
console.log(paddedStr);  // Output: 123000

//No padding
let str2 = "12345";
console.log(str2.padStart(3, "0"));  // Output: "12345" (no padding, length is already >= 3)

