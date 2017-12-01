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
	$("#info2, #info3, #info4").fadeOut(20);
	$("#info1").delay(50).fadeIn(200);
	});
	
	$(".option2").mouseenter(function() {
	$(".option1, .option3, .option4").css({"text-decoration":"none"});
	$(this).css({"text-decoration":"underline"});
	$("#info1, #info3, #info4").fadeOut(20);
	$("#info2").delay(50).fadeIn(200);
	});
	
	$(".option3").mouseenter(function() {
	$(".option1, .option2, .option4").css({"text-decoration":"none"});
	$(this).css({"text-decoration":"underline"});
	$("#info1, #info2, #info4").fadeOut(20);
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
	
	if ($(".option1").data('clicked')) {
	$(this).css({"text-shadow":"none", "color":"#7cb3e9"});
	} else {
	$(this).css({"text-shadow":"2px 2px #2280dd", "color":"white"});
	}
	
    if ($('.option1').data('clicked') || $('.option2').data('clicked') || $('.option3').data('clicked') || $('.option4').data('clicked')) {
    $("#next-disc").animate({opacity:"0"});
	$('#next').css({"color":"white","box-shadow":"4px 4px #cc6300","cursor":"pointer"});
    } else {
	$("#next-disc").animate({opacity:"1"});
    $('#next').css({"color":"#ffa34d","box-shadow":"1px 1px #cc6300"});
    }
	
	if ($(".option1").data('clicked')) {
	$("#info-disc1").fadeIn(200);
	} else {
	$("#info-disc1").fadeOut(200);
	}
    });
	
	$('.option2').click(function() {
   
    $('.option2').data('clicked', !($(this).data('clicked')))
	
	if ($(".option2").data('clicked')) {
	$(this).css({"text-shadow":"none", "color":"#7cb3e9"});
	} else {
	$(this).css({"text-shadow":"2px 2px #2280dd", "color":"white"});
	}

    if ($('.option1').data('clicked') || $('.option2').data('clicked') || $('.option3').data('clicked') || $('.option4').data('clicked')) {
    $("#next-disc").animate({opacity:"0"});
	$('#next').css({"color":"white","box-shadow":"4px 4px #cc6300","cursor":"pointer"});
    } else {
	$("#next-disc").animate({opacity:"1"});
    $('#next').css({"color":"#ffa34d","box-shadow":"1px 1px #cc6300"});
    }
	
	if ($(".option2").data('clicked')) {
	$("#info-disc2").fadeIn(200);
	} else {
	$("#info-disc2").fadeOut(200);
	}
    });
	
	$('.option3').click(function() {
   
    $('.option3').data('clicked', !($(this).data('clicked')))
	
	if ($(".option3").data('clicked')) {
	$(this).css({"text-shadow":"none", "color":"#7cb3e9"});
	} else {
	$(this).css({"text-shadow":"2px 2px #2280dd", "color":"white"});
	}

    if ($('.option1').data('clicked') || $('.option2').data('clicked') || $('.option3').data('clicked') || $('.option4').data('clicked')) {
    $("#next-disc").animate({opacity:"0"});
	$('#next').css({"color":"white","box-shadow":"4px 4px #cc6300","cursor":"pointer"});
    } else {
	$("#next-disc").animate({opacity:"1"});
    $('#next').css({"color":"#ffa34d","box-shadow":"1px 1px #cc6300"});
    }
	
	if ($(".option3").data('clicked')) {
	$("#info-disc3").fadeIn(200);
	} else {
	$("#info-disc3").fadeOut(200);
	}
    });
	
	$('.option4').click(function() {
   
    $('.option4').data('clicked', !($(this).data('clicked')))
	
	if ($(".option4").data('clicked')) {
	$(this).css({"text-shadow":"none", "color":"#7cb3e9"});
	} else {
	$(this).css({"text-shadow":"2px 2px #2280dd", "color":"white"});
	}

    if ($('.option1').data('clicked') || $('.option2').data('clicked') || $('.option3').data('clicked') || $('.option4').data('clicked')) {
    $("#next-disc").animate({opacity:"0"});
	$('#next').css({"color":"white","box-shadow":"4px 4px #cc6300","cursor":"pointer"});
    } else {
	$("#next-disc").animate({opacity:"1"});
    $('#next').css({"color":"#ffa34d","box-shadow":"1px 1px #cc6300"});
    }
	
	if ($(".option4").data('clicked')) {
	$("#info-disc4").fadeIn(200);
	} else {
	$("#info-disc4").fadeOut(200);
	}
    });
	
	$("#next").click(function() {
	if ($('.option1').data('clicked') && !($('.option2').data('clicked')) && !($('.option3').data('clicked')) && !($('.option4').data('clicked'))) {
	Cookies.set('options', '1000');
	alert("1000");
	} else if ($('.option1').data('clicked') && $('.option2').data('clicked') && !($('.option3').data('clicked')) && !($('.option4').data('clicked'))) {
	Cookies.set('options', '1100');
	alert("1100");
	} else if ($('.option1').data('clicked') && !($('.option2').data('clicked')) && $('.option3').data('clicked') && !($('.option4').data('clicked'))) {
	Cookies.set('options', '1010');
	alert("1010");
	} else if ($('.option1').data('clicked') && !($('.option2').data('clicked')) && !($('.option3').data('clicked')) && $('.option4').data('clicked')) {
	Cookies.set('options', '1001');
	alert("1001");
	} else if ($('.option1').data('clicked') && $('.option2').data('clicked') && $('.option3').data('clicked') && !($('.option4').data('clicked'))) {
	Cookies.set('options', '1110');
	alert("1110");
	} else if ($('.option1').data('clicked') && $('.option2').data('clicked') && !($('.option3').data('clicked')) && $('.option4').data('clicked')) {
	Cookies.set('options', '1101');
	alert("1101");
	} else if ($('.option1').data('clicked') && !($('.option2').data('clicked')) && $('.option3').data('clicked') && $('.option4').data('clicked')) {
	Cookies.set('options', '1011');
	alert("1011");
	} else if (!($('.option1').data('clicked')) && $('.option2').data('clicked') && !($('.option3').data('clicked')) && !($('.option4').data('clicked'))) {
	Cookies.set('options', '0100');
	alert("0100");
	} else if (!($('.option1').data('clicked')) && $('.option2').data('clicked') && $('.option3').data('clicked') && !($('.option4').data('clicked'))) {
	Cookies.set('options', '0110');
	alert("0110");
	} else if (!($('.option1').data('clicked')) && $('.option2').data('clicked') && !($('.option3').data('clicked')) && $('.option4').data('clicked')) {
	Cookies.set('options', '0101');
	alert("0101");
	} else if (!($('.option1').data('clicked')) && $('.option2').data('clicked') && $('.option3').data('clicked') && $('.option4').data('clicked')) {
	Cookies.set('options', '0111');
	alert("0111");
	} else if (!($('.option1').data('clicked')) && !($('.option2').data('clicked')) && $('.option3').data('clicked') && !($('.option4').data('clicked'))) {
	Cookies.set('options', '0010');
	alert("0010");
	} else if (!($('.option1').data('clicked')) && !($('.option2').data('clicked')) && $('.option3').data('clicked') && $('.option4').data('clicked')) {
	Cookies.set('options', '0011');
	alert("0011");
	} else if (!($('.option1').data('clicked')) && !($('.option2').data('clicked')) && !($('.option3').data('clicked')) && $('.option4').data('clicked')) {
	Cookies.set('options', '0001');
	alert("0001");
	} else if ($('.option1').data('clicked') && $('.option2').data('clicked') && $('.option3').data('clicked') && $('.option4').data('clicked')) {
	Cookies.set('options', '1111');
	alert("1111");
	} else {
	event.preventDefault();
	alert('ERROR: No options selected. you pick an option by clicking on either HARDWARE, DESIGN, SOFTWARE and/or GAMING.');
	}
	});
	
	$("#next").click(function() {
	$
	});
	
});