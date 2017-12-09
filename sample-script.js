
$(document).ready(function(){
	$(document).width();

	$(".option1").mouseenter(function() {
	if ($(document).width() <= 608) {
	$("#height1").height();
	var infoHeight1 = $("#height1").height();
	$("#option-container2, option-container3, #option-container4").animate({marginBottom:"22px"}, 300);
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
	$("#info2, #info3, #info4").animate({opacity:"0"}, 200);
	$("#info1").delay(150).animate({opacity:"1"}, 200);
	
	});
	
	$(".option2").mouseenter(function() {
	if ($(document).width() <= 608) {
	$("#height2").height();
	var infoHeight2 = $("#height2").height();
	$("#option-container1, option-container3, #option-container4").animate({marginBottom:"22px"}, 300);
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
	$("#info1, #info3, #info4").animate({opacity:"0"}, 200);
	$("#info2").delay(150).animate({opacity:"1"}, 200);
	});
	
	$(".option3").mouseenter(function() {
	if ($(document).width() <= 608) {
	
	$("#height3").height();
	var infoHeight3 = $("#height3").height();
	$("#option-container2, option-container1, #option-container4").animate({marginBottom:"22px"}, 300);
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
	$("#info1, #info2, #info4").animate({opacity:"0"}, 200);
	$("#info3").delay(150).animate({opacity:"1"}, 200);
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
	$("#info1, #info2, #info3").animate({opacity:"0"}, 200);
	$("#info4").delay(150).animate({opacity:"1"}, 200);
	});
});