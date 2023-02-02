console.log("\nProgram Started\n");

var fs = require("fs");
var data = fs.readFileSync('inputFile.txt');

console.log(data.toString());
console.log("\nProgram Ended");