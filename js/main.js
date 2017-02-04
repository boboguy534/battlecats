
Cat = function(config) {
	this.defaults = {
		"speed": 30
	};

	config = $.extend({}, this.defaults, config);

	this.elem = $("#"+config.id);
	this.keys = config.keys;
	this.speed = config.speed;
	this.moveTo(config.x, config.y);
}
$.extend(Cat.prototype, {
	handleKeyboardEvent: function(event) {
		switch(event.which) {
			case this.keys.up:
				this.move(0, -this.speed);
				break;
			case this.keys.down:
				this.move(0, this.speed);
				break;
			case this.keys.left:
				this.move(-this.speed, 0);
				break;
			case this.keys.right:
				this.move(this.speed, 0);
				break;
		}
	},
	moveTo: function(x, y) {
		this.elem.css({"top":y+"px", "left":x+"px"});
	},
	move: function(dx, dy) {
		this.elem.animate({"top":"+="+dy+"px", "left":"+="+dx+"px"}, 10);
	}
});

$("#game").ready(function() {
	var cats = [
		new Cat({
			id: "cat-1",
			x: 50,
			y: 100,
			keys: { // wasd
				up: 87,
				down: 83,
				left: 65,
				right: 68
			}
		}),
		new Cat({
			id: "cat-2",
			x: 350,
			y: 100,
			keys: { // up down left right
				up: 38,
				down: 40,
				left: 37,
				right: 39
			}
		})
	];
	$(this).on("keydown", function(event) {
		for(i = 0; i < 2; i++) {
			cats[i].handleKeyboardEvent(event);
		}
	});
});