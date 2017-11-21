$.fn.clickToggle = function(a, b) {
    return this.each(function() {
        var clicked = false;
        $(this).click(function() {
            if (clicked) {
                clicked = false;
                return b.apply(this, arguments);
            }
            clicked = true;
            return a.apply(this, arguments);
        });
    });
};


$(document).ready(function(){
	
	// The most important buttons:
	
	$(".option1, .option2, .option3, .option4").hover(function() {
	$(this).css({"text-decoration":"underline"})
	}, function(){
	$(this).css({"text-decoration":"none"})
	});
	
    $('.option1').click(function() {

    $('.option1').data('clicked', !($(this).data('clicked')))

	if ($('.option1').data('clicked')) {
	$(".option1").css({"text-shadow":"none", "color":"#7cb3e9"});
	} else {
	$(".option1").css({"text-shadow":"2px 2px #2280dd", "color":"white"});
	}
	
    if ($('.option1').data('clicked') || $('.option2').data('clicked') || $('.option3').data('clicked') || $('.option4').data('clicked')) {
    $('.next').fadeIn(200);
    } else {
    $('.next').fadeOut(200);
    }
    });
	
	$('.option2').click(function() {
   
    $('.option2').data('clicked', !($(this).data('clicked')))
	
	if ($('.option2').data('clicked')) {
	$(".option2").css({"text-shadow":"none", "color":"#7cb3e9"});
	} else {
	$(".option2").css({"text-shadow":"2px 2px #2280dd", "color":"white"});
	}

    if ($('.option1').data('clicked') || $('.option2').data('clicked') || $('.option3').data('clicked') || $('.option4').data('clicked')) {
    $('.next').fadeIn(200);
    } else {
    $('.next').fadeOut(200);
    }
    });
	
	$('.option3').click(function() {
   
    $('.option3').data('clicked', !($(this).data('clicked')))
	
	if ($('.option3').data('clicked')) {
	$(".option3").css({"text-shadow":"none", "color":"#7cb3e9"});
	} else {
	$(".option3").css({"text-shadow":"2px 2px #2280dd", "color":"white"});
	}

    if ($('.option1').data('clicked') || $('.option2').data('clicked') || $('.option3').data('clicked') || $('.option4').data('clicked')) {
    $('.next').fadeIn(200);
    } else {
    $('.next').fadeOut(200);
    }
    });
	
	$('.option4').click(function() {
   
    $('.option4').data('clicked', !($(this).data('clicked')))
	
	if ($('.option4').data('clicked')) {
	$(".option4").css({"text-shadow":"none", "color":"#7cb3e9"});
	} else {
	$(".option4").css({"text-shadow":"2px 2px #2280dd", "color":"white"});
	}

    if ($('.option1').data('clicked') || $('.option2').data('clicked') || $('.option3').data('clicked') || $('.option4').data('clicked')) {
    $('.next').fadeIn(200);
    } else {
    $('.next').fadeOut(200);
    }
    });
	
	// In-the-middle buttons
	
	

	
	$(".next").hover(function() {
	$(this).css({"text-decoration":"underline"})
	}, function(){
	$(this).css({"text-decoration":"none"})
	});
	
	$(".next").click(function() {
	if ($('.option1').data('clicked') && !($('.option2').data('clicked')) && !($('.option3').data('clicked')) && !($('.option4').data('clicked'))) {
	Cookies.set('options', '1000');
	} else if ($('.option1').data('clicked') && $('.option2').data('clicked') && !($('.option3').data('clicked')) && !($('.option4').data('clicked'))) {
	Cookies.set('options', '1100');
	} else if ($('.option1').data('clicked') && !($('.option2').data('clicked')) && $('.option3').data('clicked') && !($('.option4').data('clicked'))) {
	Cookies.set('options', '1010');
	} else if ($('.option1').data('clicked') && !($('.option2').data('clicked')) && !($('.option3').data('clicked')) && $('.option4').data('clicked')) {
	Cookies.set('options', '1001');
	} else if ($('.option1').data('clicked') && $('.option2').data('clicked') && $('.option3').data('clicked') && !($('.option4').data('clicked'))) {
	Cookies.set('options', '1110');
	} else if ($('.option1').data('clicked') && $('.option2').data('clicked') && !($('.option3').data('clicked')) && $('.option4').data('clicked')) {
	Cookies.set('options', '1101');
	} else if ($('.option1').data('clicked') && !($('.option2').data('clicked')) && $('.option3').data('clicked') && $('.option4').data('clicked')) {
	Cookies.set('options', '1011');
	} else if (!($('.option1').data('clicked')) && $('.option2').data('clicked') && !($('.option3').data('clicked')) && !($('.option4').data('clicked'))) {
	Cookies.set('options', '0100');
	} else if (!($('.option1').data('clicked')) && $('.option2').data('clicked') && $('.option3').data('clicked') && !($('.option4').data('clicked'))) {
	Cookies.set('options', '0110');
	} else if (!($('.option1').data('clicked')) && $('.option2').data('clicked') && !($('.option3').data('clicked')) && $('.option4').data('clicked')) {
	Cookies.set('options', '0101');
	} else if (!($('.option1').data('clicked')) && $('.option2').data('clicked') && $('.option3').data('clicked') && $('.option4').data('clicked')) {
	Cookies.set('options', '0111');
	} else if (!($('.option1').data('clicked')) && !($('.option2').data('clicked')) && $('.option3').data('clicked') && !($('.option4').data('clicked'))) {
	Cookies.set('options', '0010');
	} else if (!($('.option1').data('clicked')) && !($('.option2').data('clicked')) && $('.option3').data('clicked') && $('.option4').data('clicked')) {
	Cookies.set('options', '0011');
	} else if (!($('.option1').data('clicked')) && !($('.option2').data('clicked')) && !($('.option3').data('clicked')) && $('.option4').data('clicked')) {
	Cookies.set('options', '0001');
	} else if ($('.option1').data('clicked') && $('.option2').data('clicked') && $('.option3').data('clicked') && $('.option4').data('clicked')) {
	Cookies.set('options', '1111');
	} else {
	alert('ERROR: no option selected');
	}
	});
	

	
	// less important buttons:

	$(".cta1, .cta2, .cta3, .cta4").hover(function() {
	$(this).css({"text-decoration":"underline"})
	}, function(){
	$(this).css({"text-decoration":"none"})
	});	
		
    $(".cta1").click(function(){
    $(".cta1").data('clicked', !($(this).data('clicked')))
	
	if ($('.cta1').data('clicked')) {
	$(this).css({"background-color":"rgb(81, 154, 226)", "color":"white"});
	} else {
	$(this).css({"background-color":"white", "color":"black"});
	}
	
	
	if ($('.cta2').data('clicked')) {
	$('.cta2').data('clicked', !($('.cta2').data('clicked')));
	} else {

	}
	
	if ($('.cta2').data('clicked')) {
	$(".cta2").css({"background-color":"rgb(81, 154, 226)", "color":"white"});
	} else {
	$(".cta2").css({"background-color":"white", "color":"black"});
	}
	
	
	if ($('.cta3').data('clicked')) {
	$('.cta3').data('clicked', !($('.cta3').data('clicked')));
	} else {

	}
	
	if ($('.cta3').data('clicked')) {
	$(".cta3").css({"background-color":"rgb(81, 154, 226)", "color":"white"});
	} else {
	$(".cta3").css({"background-color":"white", "color":"black"});
	}
	
	
	if ($('.cta4').data('clicked')) {
	$('.cta3').data('clicked', !($('.cta3').data('clicked')));
	} else {

	}
	
	if ($('.cta4').data('clicked')) {
	$(".cta4").css({"background-color":"rgb(81, 154, 226)", "color":"white"});
	} else {
	$(".cta4").css({"background-color":"white", "color":"black"});
	}
	
    $(".animation2, .animation3, .animation4").fadeOut(200);
	
    $(".animation1").delay(150).fadeToggle(200);
    });
	
	
    $(".cta2").click(function(){
    $(".cta2").data('clicked', !($(this).data('clicked')))
	
	if ($('.cta2').data('clicked')) {
	$(this).css({"background-color":"rgb(81, 154, 226)", "color":"white"});
	} else {
	$(this).css({"background-color":"white", "color":"black"});
	}
	
	
	if ($('.cta1').data('clicked')) {
	$('.cta1').data('clicked', !($('.cta1').data('clicked')));
	} else {

	}
	
	if ($('.cta1').data('clicked')) {
	$(".cta1").css({"background-color":"rgb(81, 154, 226)", "color":"white"});
	} else {
	$(".cta1").css({"background-color":"white", "color":"black"});
	}
	
	
	if ($('.cta3').data('clicked')) {
	$('.cta3').data('clicked', !($('.cta3').data('clicked')));
	} else {

	}
	
	if ($('.cta3').data('clicked')) {
	$(".cta3").css({"background-color":"rgb(81, 154, 226)", "color":"white"});
	} else {
	$(".cta3").css({"background-color":"white", "color":"black"});
	}
	
	
	if ($('.cta4').data('clicked')) {
	$('.cta4').data('clicked', !($('.cta4').data('clicked')));
	} else {

	}
	
	if ($('.cta4').data('clicked')) {
	$(".cta4").css({"background-color":"rgb(81, 154, 226)", "color":"white"});
	} else {
	$(".cta4").css({"background-color":"white", "color":"black"});
	}
	
    $(".animation1, .animation3, .animation4").fadeOut(200);
	
    $(".animation2").delay(150).fadeToggle(200);
    });
	
	
    $(".cta3").click(function(){
    $(".cta3").data('clicked', !($(this).data('clicked')))
	
	if ($('.cta3').data('clicked')) {
	$(this).css({"background-color":"rgb(81, 154, 226)", "color":"white"});
	} else {
	$(this).css({"background-color":"white", "color":"black"});
	}
	
	
	if ($('.cta1').data('clicked')) {
	$('.cta1').data('clicked', !($('.cta1').data('clicked')));
	} else {

	}
	
	if ($('.cta1').data('clicked')) {
	$(".cta1").css({"background-color":"rgb(81, 154, 226)", "color":"white"});
	} else {
	$(".cta1").css({"background-color":"white", "color":"black"});
	}
	
	
	if ($('.cta2').data('clicked')) {
	$('.cta2').data('clicked', !($('.cta2').data('clicked')));
	} else {

	}
	
	if ($('.cta2').data('clicked')) {
	$(".cta2").css({"background-color":"rgb(81, 154, 226)", "color":"white"});
	} else {
	$(".cta2").css({"background-color":"white", "color":"black"});
	}
	
	
	if ($('.cta4').data('clicked')) {
	$('.cta4').data('clicked', !($('.cta4').data('clicked')));
	} else {

	}
	
	if ($('.cta4').data('clicked')) {
	$(".cta4").css({"background-color":"rgb(81, 154, 226)", "color":"white"});
	} else {
	$(".cta4").css({"background-color":"white", "color":"black"});
	}
	
    $(".animation1, .animation2, .animation4").fadeOut(200);
	
    $(".animation3").delay(150).fadeToggle(200);
    });
	
	
    $(".cta4").click(function(){
    $(".cta4").data('clicked', !($(this).data('clicked')))
	
	if ($('.cta4').data('clicked')) {
	$(this).css({"background-color":"rgb(81, 154, 226)", "color":"white"});
	} else {
	$(this).css({"background-color":"white", "color":"black"});
	}
	
	if ($('.cta1').data('clicked')) {
	$('.cta1').data('clicked', !($('.cta1').data('clicked')));
	} else {

	}
	
	if ($('.cta1').data('clicked')) {
	$(".cta1").css({"background-color":"rgb(81, 154, 226)", "color":"white"});
	} else {
	$(".cta1").css({"background-color":"white", "color":"black"});
	}
	
	
	if ($('.cta2').data('clicked')) {
	$('.cta2').data('clicked', !($('.cta2').data('clicked')));
	} else {

	}
	
	if ($('.cta2').data('clicked')) {
	$(".cta2").css({"background-color":"rgb(81, 154, 226)", "color":"white"});
	} else {
	$(".cta2").css({"background-color":"white", "color":"black"});
	}
	
	
	if ($('.cta3').data('clicked')) {
	$('.cta3').data('clicked', !($('.cta3').data('clicked')));
	} else {

	}
	
	if ($('.cta3').data('clicked')) {
	$(".cta3").css({"background-color":"rgb(81, 154, 226)", "color":"white"});
	} else {
	$(".cta3").css({"background-color":"white", "color":"black"});
	}
	
    $(".animation1, .animation3, .animation2").fadeOut(200);
	
    $(".animation4").delay(150).fadeToggle(200);
    });
	
	
	$('#logo').hover(function() {
    $('#logo').css({'text-decoration':'underline'});
    }, function() { $('#logo').css({'text-decoration':'none'});
    });
});