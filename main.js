var file = require("fs");

var content = file.readFileSync("package.json");

console.log(content.toString());