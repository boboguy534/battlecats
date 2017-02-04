$("#game").ready(function() {
	$(this).on("keydown", function(event) {
		switch(event.key) {
			case "w":
				$("#cat").animate({"top":"-=10px"});
				break;
			case "s":
				$("#cat").animate({"top":"+=10px"});
				break;
			case "a":
				$("#cat").animate({"left":"-=10px"});
				break;
			case "d":
				$("#cat").animate({"left":"+=10px"});
				break;
		}
	});
});