function Hero(name, damage) {
	this.name = name;
	this.damage = damage;
}

Hero.prototype.attack = function() {
	console.log(this.name, "공격 데미지", this.damage);
}

var ironMan = new Hero("아이언맨", 500);
var superMan = new Hero("슈퍼맨", 1000);

ironMan.attack();
superMan.attack();