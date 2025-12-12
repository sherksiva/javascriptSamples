console.log("=====================Start of examples=============================");
//closure example
console.log("1. Closure Example:");
function outer() {
    let outerVar = "I'm in the outer scope!";
    function inner() {
        console.log(outerVar); 
        outerVar = "I'm in the outer scope modified!";
    }
    return inner;  
}
const closure = outer(); 
console.log("Accessing outer variable through closure:");
console.log("First call:");
closure(); 
console.log("Second call:");
closure();
console.log("-----------------------------------");

console.log("2. Various Function Examples:");
// Sum of tow numbers example
function sum(a, b) {
    return a + b;
}
console.log("Sum of 5 and 10 is:", sum(5, 10));
console.log("-----------------------------------");
console.log("3. Finding Maximum Number Example:");
// find maxnumber example
function findMaxNumber(arr) {
    return Math.max(...arr);
}
console.log("Maximum number in [3, 5, 7, 2, 8] is:", findMaxNumber([3, 5, 7, 2, 8]));
console.log("-----------------------------------");
console.log("=========String and Array Manipulation Examples=========");
console.log("1. isPalindrome Checking Example:");
// ispalindrome example
function isPalindrome(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}
console.log("Is 'A man a plan a canal Panama' a palindrome?:", isPalindrome('A man a plan a canal Panama'));
console.log("-----------------------------------");
console.log("2. Reverse String Example:");
//reverse string example
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log("Reversed string of 'Hello World' is:", reverseString('Hello World'));
console.log("-----------------------------------");
console.log("/================Array and Number Manipulation Examples=================/");
console.log("1. Filter Even Numbers Example:");
//filter even numbers example
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log("Even numbers in [1, 2, 3, 4, 5, 6] are:", filterEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log("-----------------------------------");
console.log("2. Factorial Example:");
// factorial example
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log("Factorial of 5 is:", factorial(5));
console.log("-----------------------------------");
console.log("3. Fibonacci Example:");
// fibonacci example
function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("Fibonacci of 7 is:", fibonacci(7));
console.log("-----------------------------------");
console.log("4. Array Flattening Examples:");
// array flatten example
function flattenArray(arr) {
    return arr.reduce((flat, toFlatten) => {
        return flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten);
    }, []);
}
console.log("Flattened array of [1, [2, [3, 4], 5], 6] is:", flattenArray([1, [2, [3, 4], 5], 6]));
console.log("-----------------------------------");
console.log("5. Using arr.flat() Method Example:");
//array flatten example with sorted
function arrayflatexpample(arr) {
    return arr.flat(Infinity);
}
console.log("Flattened array arr.flat(Infinity) method of [1, [2, [3, 4], 5], 6] using flat is:", arrayflatexpample([1, [2, [3, 4], 5], 6]));
console.log("-----------------------------------");
console.log("6. Removing Duplicates Examples:");    
// remove duplicates example
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log("Array after removing duplicates from [1, 2, 2, 3, 4, 4, 5] is:", removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
console.log("-----------------------------------");
console.log("7. Finding Second Largest Number Example:");  
// find second largest number example
function findSecondLargest(arr) {
    const uniqueArr = [...new Set(arr)];
    uniqueArr.sort((a, b) => b - a);
    return uniqueArr[1];
}
console.log("Second largest number in [3, 5, 7, 2, 8] is:", findSecondLargest([3, 5, 7, 2, 8]));
console.log("-----------------------------------");
console.log("/=================Merging Sorted Arrays Examples==================/");
// merge two sorted arrays example
function mergeSortedArrays(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b);
}
console.log("Merged sorted array of [1, 3, 5] and [2, 4, 6] is:", mergeSortedArrays([1, 3, 5], [2, 4, 6]));
console.log("-----------------------------------");
console.log("/==================Prime Number Checking Examples==================/");
// check prime number example
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log("Is 11 a prime number?:", isPrime(11));
console.log("-----------------------------------");
console.log("/====================================Sum of Digits Example==================/");
console.log("Sum of given numbers in Array Example:");
function sumOfArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log("Sum of [1, 2, 3, 4, 5] is:", sumOfArray([1, 2, 3, 4, 5]));
console.log("-----------------------------------");
console.log("/=============callback, Promise, and Async/Await Examples================/");
console.log("Callback Example:");    
//callback example
function fetchData(callback) {
    setTimeout(() => {
        const data = "Sample Data";
        callback(data); 
    }, 1000);
}
fetchData((data) => {
    console.log("Fetching data with callback:");
    console.log("Data received:", data);
});
console.log("-----------------------------------");
console.log("Promise Example:");
//promise example
function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Sample Data from Promise";
            resolve(data); 
        }, 1000);
    });
}
fetchDataPromise()
    .then((data) => {
        console.log("Fetching data with Promise:");
        console.log("Data received:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
console.log("-----------------------------------");

console.log("Async/Await Example:");
//async/await example
async function fetchDataAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Sample Data from Async/Await";
            resolve(data);
        }, 1000);
    });
}

async function getData() {
    try {
        const data = await fetchDataAsync();
        console.log("Fetching data with Async/Await:");
        console.log("Data received:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}
getData();
console.log("-----------------------------------");
console.log("======================End of examples===============================");
// Note: To see the output, run this code in a JavaScript environment that supports console logging, such as a web browser or Node.js.


