//concatenation

let firstName = "Vijaylaxmi";
let lastName = "RK";
let fullName = firstName + " " + lastName;  // Concatenation using '+'
console.log(fullName);  // Output: Vijaylaxmi RK


//Length
let str = "Hello, World!";
console.log(str.length);  // Output: 13

//Accsesing charecter
let str1 = "JavaScript";
console.log(str1[0]);  // Output: J
console.log(str1.charAt(4));  // Output: S (using charAt() method)

//Substring 
let str2 = "JavaScript";
console.log(str2.substring(0, 4));  // Output: Java (substring from index 0 to 3)
console.log(str2.slice(4));  // Output: Script (slice from index 4 to the end)

//String replace
let str3 = "Hello, World!";
let newStr = str3.replace("World", "JavaScript");
console.log(newStr);  // Output: Hello, JavaScript!

//Case
let str4 = "Hello, World!";
console.log(str4.toUpperCase());  // Output: HELLO, WORLD!
console.log(str4.toLowerCase());  // Output: hello, world!

//Trim
let str5 = "   Hello, World!   ";
console.log(str5.trim());  // Output: Hello, World! (without extra spaces)

//Spilt
let str6 = "apple,banana,orange";
let fruits = str6.split(",");
console.log(fruits);  // Output: ['apple', 'banana', 'orange']

//Find Substring
let str7 = "Hello, JavaScript!";
console.log(str7.includes("JavaScript"));  // Output: true
console.log(str7.indexOf("JavaScript"));  // Output: 7 (index where "JavaScript" starts)
console.log(str7.startsWith("Hello"));  // Output: true

//Default space is added
let str8 = "Hello";
console.log(str8.padStart(10));  // Output: "     Hello" (5 spaces added at the start)
console.log(str8.padEnd(10));    // Output: "Hello     " (5 spaces added at the end)




