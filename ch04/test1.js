var url = require("url");

var curURL = url.parse("http://music.naver.com/listen/top100.nhn?query=haha&domain=TOTAL&duration=1h");
var curStr = url.format(curURL);

console.log("주소 문자열 : ", curStr);
console.dir(curURL);

var queryString = require("querystring");
var param = queryString.parse(curURL);

console.log("param.query", param.query);
console.log("queryString.stringify", queryString.stringify(param));