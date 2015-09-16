
$(document).ready(function() {// Ready Function, its just what you do when you use jquery			
	//this block makes each gallery circle have a cmy outline, grey out and have the artist name over
	//the top when the mouse is over the circle
	$(".event-highlight")
		.hover(function () {
			$(this).css("visibility","visible");
	            }, function () {
	              $(this).css("visibility","hidden");
	    });
	//this block highlights the gallery circles associated with the event name when the mouse hovers
	//over the event name.
	//For this function to work the class selector of the div with the event-highlight class needs to
	//
	$(".event-name")
		.hover( function() {
			var x = this.innerHTML
			var y = this.parentNode.parentNode.id;
			var splitx = x.split(" ");
			$("." + splitx[0] + y).css("visibility","visible");
			//log("." + splitx[0] + y);
			}, function() {
				var x = this.innerHTML
				var y = this.parentNode.parentNode.id;
				var splitx = x.split(" ");
				$("." + splitx[0] + y).css("visibility","hidden");
				}
				);
				
	//			
    //function log(msg) {
    //setTimeout(function() {
    //    throw new Error(msg);
    //}, 0);
	//}
});	//
