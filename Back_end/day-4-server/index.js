// Importing required modules
const http = require("http");
require("dotenv").config(); // environment variables from .env file
const data = require("./data.js"); // Import data from data.js file

// Define the port to be used, [ environment variable\default to 6060]
const PORT = process.env.PORT || 6060;

// Createing an HTTP server------------------>
http
  .createServer((req, res) => {
    // Set the response header to indicate JSON content
    res.writeHead(200, { "Content-Type": "application/json" });

    // Write JSON data to the response
    res.write(JSON.stringify(data));

    // End the response
    res.end();
  })
  .listen(PORT, (err) => {
    // Handle server start-up errors
    if (err) throw err;
    else {
      // Log a message when the server has started successfully
      console.log(`Day-4 Server started on PORT: ${PORT} ------------------>`);
    }
  });
