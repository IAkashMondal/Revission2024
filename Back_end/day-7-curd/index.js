const http = require("http");
const fs = require("fs");
// server running on a port
const PORT = 8090;
const server = http.createServer((req, res) => {
  // initializing req.url to get url
  const requestedUrl = req.url;

  // if server is "/" = 'homepage"
  if (requestedUrl === "/") {
    res.end(
      "Welcome! This is the homepage of the basic server. Pages include reports on students and teachers."
    );
  }
  // if server is "/data" = "data page"
  else if (requestedUrl === "/data") {
    // Use asynchronous readFile to get/read data
    fs.readFile("./data/data.json", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("Internal Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(data);
      }
    });
  }
  // if server is "/reports" = "reports page"
  else if (requestedUrl === "/reports") {
    res.writeHead(200, { "Content-Type": "text/html" }).end("<h1>Reports</h1>");
  }
  // handle 404 for other routes
  else {
    res
      .writeHead(404, { "Content-Type": "text/html" })
      .end("<h1>Page not found</h1>");
  }
});

server.listen(PORT, (err) => {
  // handling error
  if (!err) {
    console.log(`Server running on port ${PORT}`);
  } else {
    console.log("Error in server listening", { err: err });
  }
});

//url where we fetch data https://jsonplaceholder.typicode.com/users
//benchmark software autocannon
// in cmd npx autocannon http://localhost:8090/data
// diff between nmp vs npx , in npx x stansd for execute we dont have to install the app we can use it with out installing
