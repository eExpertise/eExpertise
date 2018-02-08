
	$(document).ready(function(){
		$("#header-opt").width();
		var typed = new Typed("#header-typed", {
			strings: ["Learn How To Build A PC", "Learn How To Design A Website", "Learn How To Optimize Gaming performance", "Computer Tips And Lectures Within Your Preferred Expertise"],
			typeSpeed: 50,
			backSpeed: 30
		});

		var distance = $('#scroll-point').offset().top,
		$window = $(window);

		$window.scroll(function() {
			if ( $window.scrollTop() >= distance ) {
				$("#bar").animate({backgroundColor:"rgb(68, 157, 245)"}, 200);
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