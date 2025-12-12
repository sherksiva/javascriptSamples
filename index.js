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
console.log("Finding Maximum Number Example:");
// find maxnumber example
function findMaxNumber(arr) {
    return Math.max(...arr);
}
console.log("Maximum number in [3, 5, 7, 2, 8] is:", findMaxNumber([3, 5, 7, 2, 8]));
console.log("-----------------------------------");
console.log("String and Array Manipulation Examples:");
console.log("isPalindrome Checking Example:");
// ispalindrome example
function isPalindrome(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}
console.log("Is 'A man a plan a canal Panama' a palindrome?:", isPalindrome('A man a plan a canal Panama'));
console.log("-----------------------------------");
console.log("Reverse String Example:");
//reverse string example
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log("Reversed string of 'Hello World' is:", reverseString('Hello World'));
console.log("-----------------------------------");
console.log("Array and Number Manipulation Examples:");
console.log("Filter Even Numbers Example:");
//filter even numbers example
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log("Even numbers in [1, 2, 3, 4, 5, 6] are:", filterEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log("-----------------------------------");
console.log("Factorial Example:");
// factorial example
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log("Factorial of 5 is:", factorial(5));
console.log("-----------------------------------");
console.log("Fibonacci Example:");
// fibonacci example
function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("Fibonacci of 7 is:", fibonacci(7));
console.log("-----------------------------------");
console.log("Array Flattening Examples:");
// array flatten example
function flattenArray(arr) {
    return arr.reduce((flat, toFlatten) => {
        return flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten);
    }, []);
}
console.log("Flattened array of [1, [2, [3, 4], 5], 6] is:", flattenArray([1, [2, [3, 4], 5], 6]));
console.log("-----------------------------------");
console.log("Using arr.flat() Method Example:");
//array flatten example with sorted
function arrayflatexpample(arr) {
    return arr.flat(Infinity);
}
console.log("Flattened array arr.flat(Infinity) method of [1, [2, [3, 4], 5], 6] using flat is:", arrayflatexpample([1, [2, [3, 4], 5], 6]));
console.log("-----------------------------------");
console.log("Removing Duplicates Examples:");    
// remove duplicates example
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log("Array after removing duplicates from [1, 2, 2, 3, 4, 4, 5] is:", removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
console.log("-----------------------------------");
console.log("Finding Second Largest Number Example:");  
// find second largest number example
function findSecondLargest(arr) {
    const uniqueArr = [...new Set(arr)];
    uniqueArr.sort((a, b) => b - a);
    return uniqueArr[1];
}
console.log("Second largest number in [3, 5, 7, 2, 8] is:", findSecondLargest([3, 5, 7, 2, 8]));
console.log("-----------------------------------");
console.log("Merging Sorted Arrays Examples:");
// merge two sorted arrays example
function mergeSortedArrays(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b);
}
console.log("Merged sorted array of [1, 3, 5] and [2, 4, 6] is:", mergeSortedArrays([1, 3, 5], [2, 4, 6]));
console.log("-----------------------------------");
console.log("Prime Number Checking Examples:");
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
// binary search example
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
console.log("Index of 5 in [1, 2, 3, 4, 5, 6] is:", binarySearch([1, 2, 3, 4, 5, 6], 5));
// bubble sort example
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

console.log("Sorted array of [64, 34, 25, 12, 22, 11, 90] is:", bubbleSort([64, 34, 25, 12, 22, 11, 90]));
// insertion sort example
function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}
console.log("Sorted array of [12, 11, 13, 5, 6] is:", insertionSort([12, 11, 13, 5, 6]));
// selection sort example
function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
    return arr;
}
console.log("Sorted array of [64, 25, 12, 22, 11] is:", selectionSort([64, 25, 12, 22, 11]));
// merge sort example
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}
console.log("Sorted array [Merge sort] of [38, 27, 43, 3, 9, 82, 10] is:", mergeSort([38, 27, 43, 3, 9, 82, 10]));
// quick sort example
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log("Sorted array of [QuickSort method] - [10, 7, 8, 9, 1, 5] is:", quickSort([10, 7, 8, 9, 1, 5]));
// heap sort example
function heapSort(arr) {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }
    return arr;
}
function heapify(arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}
console.log("Sorted array [heap sort] of [12, 11, 13, 5, 6, 7] is:", heapSort([12, 11, 13, 5, 6, 7]));
// shell sort example
function shellSort(arr) {
    const n = arr.length;
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i++) {
            const temp = arr[i];
            let j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }
            arr[j] = temp;
        }
    }
    return arr;
}
console.log("Sorted array [shell sort] of [12, 34, 54, 2, 3] is:", shellSort([12, 34, 54, 2, 3]));
// counting sort example
function countingSort(arr, max) {
    const count = new Array(max + 1).fill(0);
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }
    let sortedIndex = 0;
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            arr[sortedIndex++] = i;
            count[i]--;
        }
    }
    return arr;
}
console.log("Sorted array [counting sort] of [4, 2, 2, 8, 3, 3, 1] is:", countingSort([4, 2, 2, 8, 3, 3, 1], 8));
console.log("-----------------------------------");
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


