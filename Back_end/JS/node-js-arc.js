// Log statement 1
console.log("console no: 1 ");

// Set a timeout for 2 seconds
setTimeout(() => {
  // Log statement 2 after the timeout
  console.log("console no: 2");
}, 2000);

// Set a timeout for 0 milliseconds (effectively, it will be executed as soon as possible)
setTimeout(() => {
  // Log statement 3 after the timeout (will be executed after the current stack is empty)
  console.log("console no: 3");
}, 0);

// Log statement 4
console.log("console no: 4");

//output=> 1,4,3,2
