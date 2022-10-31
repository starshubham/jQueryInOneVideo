$(document).ready(function(){
	/* Jquery Form Focus Event */
	$('#sname,#sclass,#scountry').focus(function(){
		$(this).css('background-color','lime');
	});

	/* Jquery Form Blur Event */
	$('#sname,#sclass,#scountry').blur(function(){
		$(this).css('background-color','');
	});

	/* Jquery Form Change Event */
	$('#scountry').change(function(){A
		//$(this).css('background-color','pink');
		
		var a = $(this).val();
		$('#test').html(a);
	});

	/* Jquery Form Select Event */
	$('#sname,#sclass').select(function(){
		$(this).css('background-color','yellow');
	});

	/*Jquery Form submit Event*/    
	$('#sform').submit(function(){
		alert("Form Submitted");
	});
});