// import colors from colors module
const colors = require("colors");

// set a them for colors and bagckground
colors.setTheme({
  custom: ["red", "bgWhite"],
});

console.log("Pagake.json 1".red);
console.log("Pagake.json 2".yellow);
console.log("Pagake.json 3".green);

// passing a parameters 'customs" to get the them of it
console.log("Pagake.json 4".custom);
