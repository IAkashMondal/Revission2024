const http = require("http");
const fs = require("fs");

const PORT = 8090;
const dataPath = "./data/data.json";
let studentsData = [];

// Load initial data from file
fs.readFile(dataPath, "utf-8", (err, data) => {
  if (!err) {
    studentsData = JSON.parse(data);
  }
});

const server = http.createServer((req, res) => {
  const requestedUrl = req.url;
  const method = req.method;

  // Read operation
  if (method === "GET") {
    if (requestedUrl === "/") {
      res.end(
        "Welcome! This is the homepage of the basic server. Pages include reports on students and teachers."
      );
    } else if (requestedUrl === "/data") {
      // Return list of all students
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(studentsData));
    } else if (requestedUrl.startsWith("/data/")) {
      // Return a specific student by ID
      const studentId = parseInt(requestedUrl.split("/")[2]);
      const student = studentsData.find((s) => s.id === studentId);

      if (student) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(student));
      } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>Student not found</h1>");
      }
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>Page not found</h1>");
    }
  }

  // Create operation
  else if (method === "POST" && requestedUrl === "/data") {
    // Add a new student
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const newStudent = JSON.parse(body);
      newStudent.id = studentsData.length + 1; // Assign a unique ID
      studentsData.push(newStudent);

      fs.writeFile(dataPath, JSON.stringify(studentsData), (err) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/html" });
          res.end("Internal Server Error");
        } else {
          res.writeHead(201, { "Content-Type": "application/json" });
          res.end(JSON.stringify(newStudent));
        }
      });
    });
  }

  // Update operation
  else if (method === "PUT" && requestedUrl.startsWith("/data/")) {
    // Update an existing student
    const studentId = parseInt(requestedUrl.split("/")[2]);
    const updatedStudent = studentsData.find((s) => s.id === studentId);

    if (updatedStudent) {
      let body = "";

      req.on("data", (chunk) => {
        body += chunk;
      });

      req.on("end", () => {
        const newStudentData = JSON.parse(body);
        updatedStudent.name = newStudentData.name || updatedStudent.name;
        updatedStudent.age = newStudentData.age || updatedStudent.age;

        fs.writeFile(dataPath, JSON.stringify(studentsData), (err) => {
          if (err) {
            res.writeHead(500, { "Content-Type": "text/html" });
            res.end("Internal Server Error");
          } else {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(updatedStudent));
          }
        });
      });
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>Student not found</h1>");
    }
  }

  // Delete operation
  else if (method === "DELETE" && requestedUrl.startsWith("/data/")) {
    // Delete a student by ID
    const studentId = parseInt(requestedUrl.split("/")[2]);
    const deletedIndex = studentsData.findIndex((s) => s.id === studentId);

    if (deletedIndex !== -1) {
      const deletedStudent = studentsData.splice(deletedIndex, 1)[0];

      fs.writeFile(dataPath, JSON.stringify(studentsData), (err) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/html" });
          res.end("Internal Server Error");
        } else {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(deletedStudent));
        }
      });
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>Student not found</h1>");
    }
  }

  // Handle 404 for other routes
  else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>Page not found</h1>");
  }
});

server.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server running on port ${PORT}`);
  } else {
    console.log("Error in server listening", { err: err });
  }
});
