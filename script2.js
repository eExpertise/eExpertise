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
	
	$("#option1, #option2, #option3, #option4").hover(function() {
	$(this).css({"text-decoration":"underline"})
	}, function(){
	$(this).css({"text-decoration":"none"})
	});
	
	$("#option1, #option2, #option3, #option4").clickToggle(
    function(){$(this).css({"color": "rgb(145, 191, 238)", "text-shadow":"none"});},
    function(){$(this).css({"color":"white", "text-shadow":"2px 2px #2280dd"});
	});
	
	// not animations
	
    $('#option1').click(function() {

    $(this).data('clicked', !($(this).data('clicked')))

    if ($('#option1').data('clicked') || $('#option2').data('clicked') || $('#option3').data('clicked') || $('#option4').data('clicked')) {
    $('.next').fadeIn(200);
    } else {
    $('.next').fadeOut(200);
    }
    });
	
	$('#option2').click(function() {
    
    $(this).data('clicked', !($(this).data('clicked')))

    if ($('#option1').data('clicked') || $('#option2').data('clicked') || $('#option3').data('clicked') || $('#option4').data('clicked')) {
    $('.next').fadeIn(200);
    } else {
    $('.next').fadeOut(200);
    }
    });
	
	$('#option3').click(function() {
    
    $(this).data('clicked', !($(this).data('clicked')))

    if ($('#option1').data('clicked') || $('#option2').data('clicked') || $('#option3').data('clicked') || $('#option4').data('clicked')) {
    $('.next').fadeIn(200);
    } else {
    $('.next').fadeOut(200);
    }
    });
	
	$('#option4').click(function() {
    $(this).data('clicked', !($(this).data('clicked')))

    if ($('#option1').data('clicked') || $('#option2').data('clicked') || $('#option3').data('clicked') || $('#option4').data('clicked')) {
    $('.next').fadeIn(200);
    } else {
    $('.next').fadeOut(200);
    }
    });
	
	// not animations
	
	// In the middle
	
	$(".next").hover(function() {
	$(this).css({"text-decoration":"underline"})
	}, function(){
	$(this).css({"text-decoration":"none"})
	});
	
	$(".next").click(function() {
	if ($('#option1').data('clicked') && !($('#option2').data('clicked')) && !($('#option3').data('clicked')) && !($('#option4').data('clicked'))) {
	Cookies.set('options', '1000');
	} else if ($('#option1').data('clicked') && $('#option2').data('clicked') && !($('#option3').data('clicked')) && !($('#option4').data('clicked'))) {
	Cookies.set('options', '1100');
	} else if ($('#option1').data('clicked') && !($('#option2').data('clicked')) && $('#option3').data('clicked') && !($('#option4').data('clicked'))) {
	Cookies.set('options', '1010');
	} else if ($('#option1').data('clicked') && !($('#option2').data('clicked')) && !($('#option3').data('clicked')) && $('#option4').data('clicked')) {
	Cookies.set('options', '1001');
	} else if ($('#option1').data('clicked') && $('#option2').data('clicked') && $('#option3').data('clicked') && !($('#option4').data('clicked'))) {
	Cookies.set('options', '1110');
	} else if ($('#option1').data('clicked') && $('#option2').data('clicked') && !($('#option3').data('clicked')) && $('#option4').data('clicked')) {
	Cookies.set('options', '1101');
	} else if ($('#option1').data('clicked') && !($('#option2').data('clicked')) && $('#option3').data('clicked') && $('#option4').data('clicked')) {
	Cookies.set('options', '1011');
	} else if (!($('#option1').data('clicked')) && $('#option2').data('clicked') && !($('#option3').data('clicked')) && !($('#option4').data('clicked'))) {
	Cookies.set('options', '0100');
	} else if (!($('#option1').data('clicked')) && $('#option2').data('clicked') && $('#option3').data('clicked') && !($('#option4').data('clicked'))) {
	Cookies.set('options', '0110');
	} else if (!($('#option1').data('clicked')) && $('#option2').data('clicked') && !($('#option3').data('clicked')) && $('#option4').data('clicked')) {
	Cookies.set('options', '0101');
	} else if (!($('#option1').data('clicked')) && $('#option2').data('clicked') && $('#option3').data('clicked') && $('#option4').data('clicked')) {
	Cookies.set('options', '0111');
	} else if (!($('#option1').data('clicked')) && !($('#option2').data('clicked')) && $('#option3').data('clicked') && !($('#option4').data('clicked'))) {
	Cookies.set('options', '0010');
	} else if (!($('#option1').data('clicked')) && !($('#option2').data('clicked')) && $('#option3').data('clicked') && $('#option4').data('clicked')) {
	Cookies.set('options', '0011');
	} else if (!($('#option1').data('clicked')) && !($('#option2').data('clicked')) && !($('#option3').data('clicked')) && $('#option4').data('clicked')) {
	Cookies.set('options', '0001');
	} else if ($('#option1').data('clicked') && $('#option2').data('clicked') && $('#option3').data('clicked') && $('#option4').data('clicked')) {
	Cookies.set('options', '1111');
	} else {
	alert('ERROR: option does not exit');
	}
	});
	
	// less important buttons:

	$(".cta1, .cta2, .cta3, .cta4").hover(function() {
	$(this).css({"text-decoration":"underline"})
	}, function(){
	$(this).css({"text-decoration":"none"})
	});	
		
    $(".cta1").click(function(){
    $(".animation2, .animation3, .animation4").fadeOut(150);
	
    $(".cta1").css({"background-color":"rgb(81, 154, 226)", "color":"white"});
    $(".animation1").delay(130).fadeToggle(150);
    });
	
	$(".cta2").click(function(){
	$(".animation1, .animation3, .animation4").fadeOut(150);
	
    $(".cta2").css({"background-color":"rgb(81, 154, 226)", "color":"white"});
    $(".animation2").delay(130).fadeToggle(150);
    });
	
	$(".cta3").click(function(){
    $(".animation1, .animation2, .animation4").fadeOut(150);
	
    $(".cta3").css({"background-color":"rgb(81, 154, 226)", "color":"white"});
    $(".animation3").delay(130).fadeToggle(150);
    });
	
	$(".cta4").click(function(){
	$(".animation1, .animation2, .animation3").fadeOut(150);
	
    $(".cta4").css({"background-color":"rgb(81, 154, 226)", "color":"white"});
    $(".animation4").delay(130).fadeToggle(150);
    });
});