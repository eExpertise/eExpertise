
	$(document).ready(function(){
		
		$(document).scroll(function() { 
	   if($(window).scrollTop() === 0) {
		 $("#bar").animate({backgroundColor:"transparent"}, 300);
	   } else {
	   $("#bar").animate({backgroundColor:"rgb(68, 157, 245)"}, 300);
	   }
	});
	
	$('#header-head').delay(400).fadeIn(500);

	$("#menu").click(function(){
		$("#slide-bar").animate({width:"100%"});
		$("#menu2").delay(280).fadeIn(150);
	});

	$("#closebtn").click(function() {
		$("#slide-bar").animate({width:"0"});
		$("#menu2").fadeOut(150);
	});

	$("#arrow").click(function() {
		$('html, body').animate({
			scrollTop: $("#arr-scroll").offset().top
		}, 1200);
	});

	});