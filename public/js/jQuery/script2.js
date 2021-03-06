
$(document).ready(function(){
	$(document).width();
	
	$(".option1").mouseenter(function() {
		if ($(document).width() <= 608) {
			$("#height1").height();
			var infoHeight1 = $("#height1").height();
			$("#option-container2, #option-container3, #option-container4").animate({marginBottom:"22px"}, 300);
			$("#option-container1").animate({marginBottom: infoHeight1 + 40}, 300);
		} else if ($(document).width() <= 906) {
			$("#height1").height();
			var infoHeight1 = $("#height1").height();
			$("#option-container4, #option-container3").animate({marginBottom:"22px"}, 300);
			$("#option-container1").animate({marginBottom: infoHeight1 + 80}, 300);
		} else if ($(document).width() <= 1204) {
			$("#height1").height();
			var infoHeight1 = $("#height1").height();
			$("#option-container4").animate({marginBottom:"22px"}, 100);
			$("#option-container1").animate({marginBottom: infoHeight1 + 80}, 300);
		} else {
			$("#height1").height();
			var infoHeight1 = $("#height1").height();
			$(".option-container").animate({marginBottom:"22px"}, 100);
			$("#option-container1").animate({marginBottom: infoHeight1 + 40}, 300);
		}
			$(".option2, .option3, .option4").css({"text-decoration":"none"});
			$(this).css({"text-decoration":"underline"});
			$("#info2, #info3, #info4").stop().animate({opacity:"0"}, 150);
			$("#info1").stop().animate({opacity:"1"}, 250);
	});
	
	$(".option2").mouseenter(function() {
		if ($(document).width() <= 608) {
			$("#height2").height();
			var infoHeight2 = $("#height2").height();
			$("#option-container1, #option-container3, #option-container4").animate({marginBottom:"22px"}, 300);
			$("#option-container2").animate({marginBottom: infoHeight2 + 40}, 300);
		} else if ($(document).width() <= 906) {
			$("#height2").height();
			var infoHeight2 = $("#height2").height();
			$("#option-container4, #option-container3").animate({marginBottom:"22px"}, 300);
			$("#option-container2").animate({marginBottom: infoHeight2 + 80}, 300);
		} else if ($(document).width() <= 1204) {
			$("#height2").height();
			var infoHeight2 = $("#height2").height();
			$("#option-container4").animate({marginBottom:"22px"}, 300);
			$("#option-container2").animate({marginBottom: infoHeight2 + 80}, 300);
		} else {
			$("#height2").height();
			var infoHeight2 = $("#height2").height();
			$(".option-container").animate({marginBottom:"22px"}, 300);
			$("#option-container2").animate({marginBottom: infoHeight2 + 40}, 300);
		}
		$(".option1, .option3, .option4").css({"text-decoration":"none"});
		$(this).css({"text-decoration":"underline"});
		$("#info1, #info3, #info4").stop().animate({opacity:"0"}, 150);
		$("#info2").stop().animate({opacity:"1"}, 250);
	});
	
	$(".option3").mouseenter(function() {
		if ($(document).width() <= 608) {
			$("#height3").height();
			var infoHeight3 = $("#height3").height();
			$("#option-container2, #option-container1, #option-container4").animate({marginBottom:"22px"}, 300);
			$("#option-container3").animate({marginBottom: infoHeight3 + 40}, 300);
		} else if ($(document).width() <= 906) {
			$("#height3").height();
			var infoHeight3 = $("#height3").height();
			$("#option-container1, #option-container2").animate({marginBottom:"22px"}, 300);
			$("#option-container3").animate({marginBottom: infoHeight3 + 80}, 300);
		} else if ($(document).width() <= 1204) {
			$("#height3").height();
			var infoHeight3 = $("#height3").height();
			$("#option-container4").animate({marginBottom:"22px"}, 300);
			$("#option-container3").animate({marginBottom: infoHeight3 + 80}, 300);
		} else {
			$("#height3").height();
			var infoHeight3 = $("#height3").height();
			$("#option-container1, #option-container2, #option-container4").animate({marginBottom:"22px"}, 300);
			$("#option-container3").animate({marginBottom: infoHeight3 + 40}, 300);
		}
		$(".option1, .option2, .option4").css({"text-decoration":"none"});
		$(this).css({"text-decoration":"underline"});
		$("#info1, #info2, #info4").stop().animate({opacity:"0"}, 150);
		$("#info3").stop().animate({opacity:"1"}, 250);
	});
	
	$(".option4").mouseenter(function() {
		if ($(document).width() <= 608) {
			$("#height4").height();
			var infoHeight4 = $("#height4").height();
			$("#option-container1, #option-container2, #option-container3").animate({marginBottom:"22px"}, 300);
			$("#option-container4").animate({marginBottom: infoHeight4 + 40}, 300);
		} else if ($(document).width() <= 906) {
			$("#height4").height();
			var infoHeight4 = $("#height4").height();
			$("#option-container1, #option-container2").animate({marginBottom:"22px"}, 300);
			$("#option-container4").animate({marginBottom: infoHeight4 + 80}, 300);
		} else if ($(document).width() <= 1204) {
			$("#height4").height();
			var infoHeight4 = $("#height4").height();
			$("#option-container1, #option-container2, #option-container3").animate({marginBottom:"22px"}, 300);
		} else {
			$("#height4").height();
			var infoHeight4 = $("#height4").height();
			$("#option-container1, #option-container2, #option-container3").animate({marginBottom:"22px"}, 300);
			$("#option-container4").animate({marginBottom: infoHeight4 + 40}, 300);
		}
		$(".option1, .option2, .option3").css({"text-decoration":"none"});
		$(this).css({"text-decoration":"underline"});
		$("#info1, #info2, #info3").stop().animate({opacity:"0"}, 150);
		$("#info4").stop().animate({opacity:"1"}, 250);
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
			$('#next').css({"color":"white","box-shadow":"4px 4px #e66f00","cursor":"pointer"});
		} else {
			$("#next-disc").animate({opacity:"1"});
			$('#next').css({"color":"#ffa34d","box-shadow":"1px 1px #e66f00"});
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
			$('#next').css({"color":"white","box-shadow":"4px 4px #e66f00","cursor":"pointer"});
		} else {
			$("#next-disc").animate({opacity:"1"});
			$('#next').css({"color":"#ffa34d","box-shadow":"1px 1px #e66f00"});
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
			$('#next').css({"color":"white","box-shadow":"4px 4px #e66f00","cursor":"pointer"});
		} else {
			$("#next-disc").animate({opacity:"1"});
			$('#next').css({"color":"#ffa34d","box-shadow":"1px 1px #e66f00"});
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
			$('#next').css({"color":"white","box-shadow":"4px 4px #e66f00","cursor":"pointer"});
		} else {
			$("#next-disc").animate({opacity:"1"});
			$('#next').css({"color":"#ffa34d","box-shadow":"1px 1px #e66f00"});
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
		event.preventDefault();
		alert('ERROR: No options selected. you pick an option by clicking on either HARDWARE, DESIGN, SOFTWARE and/or GAMING.');
		}
	});
});