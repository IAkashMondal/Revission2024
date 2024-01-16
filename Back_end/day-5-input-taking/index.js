const fs = require("fs");

// Retrieving command-line arguments
const input = process.argv;

// Convert the command to lowercase for case-insensitive comparison
const lowerCaseCommand = input[2].toLowerCase();

// Checking the command type
const InputAdd = lowerCaseCommand === "add";
const InputRemove = lowerCaseCommand === "remove";
const InputUpdate = lowerCaseCommand === "newdata";

// Handling different commands
if (InputAdd) {
  // If the command is 'add', creating a new file ton add data if the file didn't exits but if exits the it will delete all data and set the file to null
  fs.writeFileSync(input[3], input[4] + "\n");
} else if (InputUpdate) {
  // If the command is 'update', append the specified data to the file, also appending a newline
  fs.appendFileSync(input[3], input[4] + "\n");
} else if (InputRemove) {
  // If the command is 'remove', delete the specified file
  fs.unlinkSync(input[3]);
} else {
  console.log("Invalid command");
}
