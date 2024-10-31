
//Cancatenation using Template literals

let firstName = "Vijaylaxmi";
let lastName = "R K";
let fullName = `I'm ${firstName} ${lastName}`;  // Template literal for concatenation
console.log(fullName);  // Output:I'm Vijaylaxmi R K


function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
  
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
  
    return count;
  }
  
  // Example usage
  console.log(countVowels("JavaScript is awesome")); // 7
  
  function removedu(str){
    
    return [...new Set(str)].join('');
  }

  console.log(removedu("aaadfghee"));


  function cap(str){
    return str.split(' ').map(word => word.charAt(0).toUpperCase()+word.slice(1));
  }

  console.log(cap("hello vijji"));

  function capL(str){
    return str.split(' ')
    .map(word =>  { if(word.length >0)
                    return word.slice(0,-1)+word.slice(-1).toUpperCase();
        return word.toUpperCase();
    }).join(' ');
  }
  console.log(capL("hello vijji"));

  function bubbleSort(array) {
    const n = array.length;
    let swapped;

    // Loop through the array multiple times
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            // Compare adjacent elements and swap if needed
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                swapped = true;
            }
        }
    } while (swapped);
}

// Example usage
const array = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(array);
console.log(array); // Output: [11, 12, 22, 25, 34, 64, 90]

