
Cat = function(x, y, id) {
	this.elem = $("#"+id);
	this.elem.css({"top":x+"px", "left":y+"px"});
}

Cat.prototype.move = function(dx, dy) {
	this.elem.animate({"top":"+="+dy+"px", "left":"+="+dx+"px"}, 10);
}


$("#game").ready(function() {
	var cat1 = new Cat(50, 100, "cat-1");
	var cat2 = new Cat(350, 100, "cat-2");
	$(this).on("keydown", function(event) {
		var speed = 30;
		switch(event.key) {
			case "w":
				cat1.move(0,-speed);
				break;
			case "s":
				cat1.move(0,speed);
				break;
			case "a":
				cat1.move(-speed,0);
				break;
			case "d":
				cat1.move(speed,0);
				break;
		}
		switch(event.which) {
			case 38:
				cat2.move(0,-speed);
				break;
			case 40:
				cat2.move(0,speed);
				break;
			case 37:
				cat2.move(-speed,0);
				break;
			case 39:
				cat2.move(speed,0);
				break;
		}
	});
});