var Person = {};

Person["age"] = 19;
Person["name"] = "아이오아이";
Person.add = function(a, b) {
	return a + b;
}

console.log("결과 : %d", Person.add(5, 5));