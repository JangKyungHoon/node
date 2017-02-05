var fs = require("fs");

var content = "result.txt 파일에 내용쓰기 예제.";

fs.writeFile("./output/result.txt", content, function(err, data) {
	if (err) {
		console.log("Error", err);
	}

	console.log("well done.");
});