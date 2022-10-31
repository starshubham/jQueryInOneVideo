$(document).ready(function(){
	/* Jquery scroll Events */

	/*$(window).scroll(function(){
		console.log("You are scrolling");
	});*/

	$('#box').scroll(function(){
		console.log("You are scrolling");
	});

	/* Jquery Resize Events */
	$(window).resize(function(){
		console.log("You are resizing Window");
	});

	/* Jquery Load Events */
	$(window).load(function(){
		alert("You are loading Window");
	});

	/* Jquery Unload Events */
	$(window).unload(function(){
		alert("You are unloading Window");
	});

});