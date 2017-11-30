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
	
	$(".option1").mouseenter(function() {
	$(".option2, .option3, .option4").css({"text-decoration":"none"});
	$(this).css({"text-decoration":"underline"});
	$("#info2, #info3, #info4").fadeOut(200);
	$("#info1").delay(50).fadeIn(200);
	});
	
	$(".option2").mouseenter(function() {
	$(".option1, .option3, .option4").css({"text-decoration":"none"});
	$(this).css({"text-decoration":"underline"});
	$("#info1, #info3, #info4").fadeOut(200);
	$("#info2").delay(50).fadeIn(200);
	});
	
	$(".option3").mouseenter(function() {
	$(".option1, .option2, .option4").css({"text-decoration":"none"});
	$(this).css({"text-decoration":"underline"});
	$("#info1, #info2, #info4").fadeOut(200);
	$("#info3").delay(50).fadeIn(200);
	});
	
	$(".option4").mouseenter(function() {
	$(".option1, .option2, .option3").css({"text-decoration":"none"});
	$(this).css({"text-decoration":"underline"});
	$("#info1, #info2, #info3").fadeOut(200);
	$("#info4").delay(50).fadeIn(200);
	});
	
	
    $('.option1').click(function() {

    $('.option1').data('clicked', !($(this).data('clicked')))
	
    if ($('.option1').data('clicked') || $('.option2').data('clicked') || $('.option3').data('clicked') || $('.option4').data('clicked')) {
    $("#next-disc").fadeOut(100);
	$('#next').css({"color":"white","box-shadow":"4px 4px #cc6300;","cursor":"pointer"});
    } else {
	$("#next-disc").fadeIn(100);
    $('#next').css({"color":"#ffa34d","box-shadow":"1px 1px #cc6300;"});
    }
    });
	
	$('.option2').click(function() {
   
    $('.option2').data('clicked', !($(this).data('clicked')))

    if ($('.option1').data('clicked') || $('.option2').data('clicked') || $('.option3').data('clicked') || $('.option4').data('clicked')) {
    $('#next').fadeIn(200);
    } else {
    $('#next').fadeOut(200);
    }
    });
	
	$('.option3').click(function() {
   
    $('.option3').data('clicked', !($(this).data('clicked')))

    if ($('.option1').data('clicked') || $('.option2').data('clicked') || $('.option3').data('clicked') || $('.option4').data('clicked')) {
    $('#next').fadeIn(200);
    } else {
    $('#next').fadeOut(200);
    }
    });
	
	$('.option4').click(function() {
   
    $('.option4').data('clicked', !($(this).data('clicked')))

    if ($('.option1').data('clicked') || $('.option2').data('clicked') || $('.option3').data('clicked') || $('.option4').data('clicked')) {
    $('#next').fadeIn(200);
    } else {
    $('#next').fadeOut(200);
    }
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
	
	$("#next").click(function() {
	$
	});
	
});