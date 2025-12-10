console.log("=====================Start of examples=============================");
//closure example
function outer() {
    let outerVar = "I'm in the outer scope!";
    function inner() {
        console.log(outerVar); 
        outerVar = "Updated"
    }
    return inner;  
}
const closure = outer(); 
console.log("Accessing outer variable through closure:");
console.log("First call:");
closure(); 
console.log("Second call:");
closure();
//callback example
function fetchData(callback) {
    setTimeout(() => {
        const data = "Sample Data";
        callback(data); 
    }, 1000);
}
console.log("Fetching data with callback:");
fetchData((data) => {
    console.log("Data received:", data);
});
//promise example
function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Sample Data from Promise";
            resolve(data); 
        }, 1000);
    });
}
console.log("Fetching data with Promise:");
fetchDataPromise()
    .then((data) => {
        console.log("Data received:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
//async/await example
async function fetchDataAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Sample Data from Async/Await";
            resolve(data);
        }, 1000);
    });
}
console.log("Fetching data with Async/Await:");
async function getData() {
    try {
        const data = await fetchDataAsync();
        console.log("Data received:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}
getData();

//module example
// Assuming this code is in a module file named 'module.js'
// export function greet(name) {
//     return `Hello, ${name}!`;
// }
// In another file, you would import and use it like this:
// import { greet } from './module.js';
// console.log(greet('World'));
// Since we cannot create multiple files here, the module example is commented out.
console.log("Module example is commented out since it requires multiple files.");
// Note: To see the output, run this code in a JavaScript environment that supports console logging, such as a web browser or Node.js.
console.log("=====================End of examples=============================");

