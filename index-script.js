
	$(document).ready(function(){
		$("#header-opt").width();
		$('#header-head').delay(400).fadeIn(500);

		$(document).scroll(function() { 
		   if($(window).scrollTop() === 0) {
			    $("#bar").animate({backgroundColor:"transparent"}, 300);
		   } else {
				$("#bar").animate({backgroundColor:"rgb(68, 157, 245)"}, 300);
		   }
		});

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

		$("#header-opt").click(function() {
			event.preventDefault();
			$(this).animate({backgroundColor:"white", color:"black"}, 200, function() {window.location = "opt"; });
		});

		$("#header-opt").hover(function() {
		if ($(document).width() <= 600) {
		} else {
			$(this).stop().animate({backgroundColor:"white", color:"black"}, 200);
		}
		}, function() {
		if ($(document).width() <= 600) {
		} else {
			$(this).stop().animate({backgroundColor:"rgba(0, 0, 0, 0)", color:"white"}, 200);
		}
		});
		
		$("#arrow, .opt2").hover(function() {
			$(this).stop().animate({backgroundColor:"#6eb3f7"}, 100);
		}, function() {
			$(this).stop().animate({backgroundColor:"rgb(68, 157, 245)"}, 100);
		});
		
		$(".link").hover(function() {
			$(this).addClass('hover');
		}, function() {
			$(this).removeClass('hover');
		});
		
		$("#logo-container").hover(function() {
			$(this).addClass('hover');
		}, function() {
			$(this).removeClass('hover');
		});
	});