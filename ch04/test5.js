var fs = require("fs");

// 동기
var data = fs.readFileSync("../README.md", "utf8");

console.log(data);