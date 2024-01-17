// Asynchronous Function Example

// Example 1: Using a simple asynchronous function with setTimeout

// Global variables
let a = 10;
let b = 10;

// Asynchronous function
const result = () => {
  setTimeout(() => {
    b = 20; // Modifying the global variable 'b' after a 2-second delay
  }, 2000);
};

result(); // Calling the asynchronous function

console.log("a+b", a + b); // This will log the initial value of a+b, not considering the asynchronous modification

// Example 2: Handling asynchronous operations using Promises

// Global variables
let x = 10;
let y = 10;

// Asynchronous operation wrapped in a Promise
const ancResult = new Promise((resolve, reject) => {
  setTimeout(() => {
    y = 20; // Modifying the global variable 'y' after a 2-second delay
    resolve(y); // Resolving the Promise with the updated value of 'y'
  }, 2000);
});

// Using Promise's 'then' method to handle the resolved value
ancResult.then((newValuey) => {
  console.log("x+y", x + newValuey); // Logging the result of x + newValuey after the asynchronous operation is complete
});
