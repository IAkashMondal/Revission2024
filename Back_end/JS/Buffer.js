 // Creating a buffer with a size of 10 bytes
const buffer = Buffer.alloc(10);
 // Writing data into the buffer
buffer.write("Hello");
 // Reading from the buffer
console.log(buffer.toString()); // Outputs: Hello
