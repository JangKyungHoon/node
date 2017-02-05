var fs = require("fs");

// 비동기
var data = fs.readFile("../README.md", "utf8", function(err, data) {
	console.log(data);
});

console.log("read");