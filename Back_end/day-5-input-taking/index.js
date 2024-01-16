// Importing the 'fs' module for file system operations
const fs = require("fs");

// Retrieving command-line arguments
const input = process.argv;

// Defining boolean variables to check the command type [add/update/remove]
const InputAdd = input[2] === "add" || input[2] === "ADD" || input[2] === "Add";
const InputRemove =
  input[2] === "remove" || input[2] === "Remove" || input[2] === "REMOVE";
const InputUpdate =
  input[2] === "update" || input[2] === "UPDATE" || input[2] === "Update";

// Checking the command type to take action
if (InputAdd) {
  // If the command is 'add', write the specified data to the file, appending a newline
  fs.writeFileSync(input[3], input[4] + "\n");
} else if (InputUpdate) {
  // If the command is 'update', append the specified data to the file, also appending a newline
  fs.appendFileSync(input[3], input[4] + "\n");
} else if (InputRemove) {
  // If the command is 'remove', delete the specified file
  fs.unlinkSync(input[3]);
} else {
  // If the command is not recognized, print an error message
  console.log("Invalid command");
}
