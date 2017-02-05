var Users = [{name: "아이오아이", age: 19}, {name: "트와이스", age: 18}];

var add = function(a, b) {
	return a + b;
}

Users.push(add);

console.log(Users.length);
console.log(Users);
console.log(Users[2](15, 15));