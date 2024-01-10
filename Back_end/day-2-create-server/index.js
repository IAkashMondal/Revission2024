// Import the http module
const http = require("http");

// Define the server port
const port = 8080;

// Create an HTTP server and handle requests
http.createServer((req, res) => {
    // Write the response header
    res.writeHead(200, { "Content-Type": "text/html" });

    // Write the response body
    res.write("<h1> Welcome to the 1st Basic server </h1>");

    // End the response
    res.end();
  }).listen(port, () => {
    // Log a message when the server has started
    console.log(`Server started at port: ${port}`);
  });
